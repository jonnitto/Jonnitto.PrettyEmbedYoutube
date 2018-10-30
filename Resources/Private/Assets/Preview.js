import Gator from "gator";

function fixPreview(img) {
    let src = img.getAttribute("src");
    if (
        img.naturalHeight <= 90 &&
        img.naturalWidth <= 120 &&
        src.indexOf("/default.jpg") == -1
    ) {
        src = src
            .replace("mqdefault", "default")
            .replace("hqdefault", "mqdefault")
            .replace("sddefault", "hqdefault")
            .replace("maxresdefault", "sddefault");
        img.setAttribute("src", src);
        setTimeout(() => {
            img.onload = () => {
                fixPreview(img);
            };
        }, 10);
        setTimeout(() => {
            fixPreview(img);
        }, 5000);
    }
}

function fixPreviews(images) {
    // We are on not on a mobile device without autoplay
    if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
        if (typeof images === "undefined") {
            images = document.querySelectorAll(
                "img.jonnitto-prettyembedyoutube__youtube-preview"
            );
        }
        for (let i = images.length - 1; i >= 0; i--) {
            fixPreview(images[i]);
        }
    }
}

Gator(window).on("load", () => {
    fixPreviews();
});

export default fixPreviews;
