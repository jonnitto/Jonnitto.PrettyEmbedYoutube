import fixPreviews from './Preview';

function NeosEvent(events, callback) {
    events.forEach(event => {
        document.addEventListener('Neos.' + event, callback, false);
    });
}

function backendFixPreview(event) {
    const NODE_TYPE = 'Jonnitto.PrettyEmbedYoutube:YouTube';
    try {
        // Old UI
        if (
            event.detail.element.attributes['data-node-_node-type']['value'] ==
            NODE_TYPE
        ) {
            fixPreviews();
        }
    } catch (error) {}

    try {
        // New UI
        const node = event.detail.node;
        if (
            (typeof node.get == 'function' &&
                node.get('nodeType') === NODE_TYPE) ||
            (typeof node.nodeType == 'string' && node.nodeType === NODE_TYPE)
        ) {
            fixPreviews();
        }
    } catch (error) {}
}

NeosEvent(['NodeCreated', 'NodeSelected'], backendFixPreview);
NeosEvent(['PageLoaded', 'ContentModuleLoaded'], () => {
    fixPreviews();
});

export default backendFixPreview;
