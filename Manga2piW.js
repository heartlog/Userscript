// ==UserScript==
// @name         manga to pixwy.com api !!♥️
// @namespace    https://heartlog.github.com
// @version      0.1
// @description  This will redirect to pixwy api saving time and data..
// @author       You
// @run-at       document-start
// @match        https://chapmanganato.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    // URL
    var aurl = location.href;
    var Murl = aurl.split("/")[4];
    var ULen = Murl.length;
    if (ULen >= 3) {
        // token
        var tkn = "125";
        // delay duration 0-6000
        var Dly = "3000";
        // url
        var url = location.href;
        // Full screen 0 no 1 yes
        var Fs = "1";
        // Width (incr improve quality)
        var WT = "700";
        // height (not req if full screen is on)
        var HT = "812";
        // Scale (if ↓ then quality dec also)
        // Zoom (if ↓ then content will become smaller)
        // f format png, jpg, html
        // response_type/rt => raw, json
        var areq = "https://api.pikwy.com/?tkn=" + tkn + "&d=" + Dly + "&u=" + url + "&fs=" + Fs + "&w=" + WT + "&h=" + HT + "&s=100&z=100&f=jpg&rt=raw";
        var Qreq = areq.toString();
        location.href = Qreq;
        }




})();
