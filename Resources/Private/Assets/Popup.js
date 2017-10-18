import Gator from "gator";

const HTML = document.documentElement;
const BASE = "jonnitto-prettyembed-popup";
const VISIBLE_CLASS = `${BASE}-visible`;
const MARKUP = `
<div class="${BASE}-holder">
    <iframe class="${BASE}-iframe" src="%src%" frameborder="0"%fs%></iframe>
</div>`;

let $popup = false;
let popup = document.createElement("div");
popup.className = BASE;
popup.innerHTML = `
<div class="${BASE}-inner">
    <button type="button" class="${BASE}-close">&times;</button>
    <div id="popup-youtube" class="${BASE}-content"></div>
</div>`;

function closeModal() {
    document.body.classList.remove(VISIBLE_CLASS);
    setTimeout(function() {
        $popup.innerHTML = "";
    }, 300);
}

function openModal(event) {
    let fullscreen =
        this.getAttribute("data-fs") == "true" ? " allowfullscreen" : "";
    let embed = this.getAttribute("data-embed") || false;

    if (!$popup) {
        document.body.appendChild(popup);
        $popup = document.getElementById("popup-youtube");
    }

    if (embed) {
        event.preventDefault();
        $popup.innerHTML = MARKUP.replace("%src%", embed).replace(
            "%fs%",
            fullscreen
        );
        setTimeout(function() {
            document.body.classList.add(VISIBLE_CLASS);
        }, 100);
    }
}

function closeOnESC(event) {
    if (event.keyCode == 27) {
        if (document.body.classList.contains(VISIBLE_CLASS) != -1) {
            closeModal();
        }
    }
}

// Attach the events to the html tag (because of the Google Tag Manager)
Gator(HTML).on("click", "a.popup-youtube", openModal);
Gator(HTML).on("click", `.${BASE}`, closeModal);

// Close on ESC
Gator(HTML).on("keyup", closeOnESC);
