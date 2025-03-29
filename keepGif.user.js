// ==UserScript==
// @name        Discord Hide Useless Chat Buttons (Keep Gif)
// @namespace   https://github.com/Multarix/Discord-Remove-Useless-UI-Elements
// @match       https://discord.com/*
// @updateURL   https://raw.githubusercontent.com/Multarix/Discord-Remove-Useless-UI-Elements/master/keepGif.user.js
// @homepageURL https://github.com/Multarix/Discord-Remove-Useless-UI-Elements
// @supportURL  https://github.com/Multarix/Discord-Remove-Useless-UI-Elements/issues
// @grant       none
// @version     1.6
// @author      Multarix
// @description Working as of: 29/03/2025
// ==/UserScript==

const buttonsToHide = ["Open sticker picker", "Send a gift", "Boost this server", "Apps"];
let css = "";
buttonsToHide.forEach(button => css = css.concat(`[aria-label="${button}"]{display:none}`));		// Remove chat bar buttons
css = css.concat('div[class^="channelAppLauncher"]{display:none}');									// Remove "Start activity button"
css = css.concat('div[class*="activityPanel"]{display:none}');										// Remove intrusive "game being played" bar
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);