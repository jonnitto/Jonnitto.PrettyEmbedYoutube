import "./Preview";

function NeosEvent(events, callback) {
    events.forEach(Event => {
        document.addEventListener("Neos." + Event, callback, false);
    });
}

NeosEvent(["NodeCreated", "NodeSelected"], event => {
    if (
        event.detail.element.attributes["data-node-_node-type"]["value"] ==
        "Jonnitto.PrettyEmbedYoutube:YouTube"
    ) {
        prettyEmbedYoutubeFixPreview();
    }
});

NeosEvent(["PageLoaded", "ContentModuleLoaded"], prettyEmbedYoutubeFixPreview);
