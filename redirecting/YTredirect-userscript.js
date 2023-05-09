// ==UserScript==
// @name         YT to invidious ♥️
// @namespace    https://heartlog.github.io/
// @version      0.1
// @description  try to take over the world!
// @author       https://github.com/heartlog/
// @run-at       document-start
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (location.hostname === "m.youtube.com") {
        const RL = "https://invidious.kavin.rocks" + location.pathname;
        location.href = RL;
        }
})();
