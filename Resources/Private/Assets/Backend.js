import fixPreviews from "./Preview";

function NeosEvent(events, callback) {
    events.forEach(event => {
        document.addEventListener("Neos." + event, callback, false);
    });
}

function backendFixPreview(
    event,
    nodeType = "Jonnitto.PrettyEmbedYoutube:YouTube"
) {
    try {
        // Old UI
        if (
            event.detail.element.attributes["data-node-_node-type"]["value"] ==
            nodeType
        ) {
            fixPreviews();
        }
    } catch (error) {}

    try {
        // New UI
        const node = event.detail.node;
        if (node.get("nodeType") === nodeType) {
            fixPreviews();
        }
    } catch (error) {}
}

NeosEvent(["NodeCreated", "NodeSelected"], backendFixPreview);
NeosEvent(["PageLoaded", "ContentModuleLoaded"], () => {
    fixPreviews();
});

export default backendFixPreview;
