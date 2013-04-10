// ==UserScript==
// @name          Oracle Beehive Team Collaboration layout fix for Chorme
// @namespace     scross.userscripts.oracle.beehive.teamcollab
// @description	  Fixes the toolbar menu layout on Chrome
// @include       https://stbeehive.oracle.com/teamcollab/*
// @version       1.0
// ==/UserScript==

target = document.getElementById('globaltoolmenu');
target.parentNode.setAttribute("width", "100%")