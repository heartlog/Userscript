// ==UserScript==
// @name         YT to invidious ♥️
// @namespace    https://heartlog.github.io/
// @version      0.3
// @description  try to take over the world!
// @author       https://github.com/heartlog/
// @run-at       document-start
// @match        https://*/*
// @match        *://*youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (validateYouTubeUrl(location.href) === "T") {
        const Searchq = location.pathname + location.search;
        var RL = "https://invidious.kavin.rocks" + Searchq;
        location.href = RL;
        }

})();


function validateYouTubeUrl(urlT){
                if (urlT) {
                    var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
                    if (urlT.match(regExp)) {
                        return "T";
                    }
                }
                return "F";
}
