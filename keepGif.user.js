// ==UserScript==
// @name        Discord Hide Useless Chat Buttons
// @namespace   https://github.com/Multarix/Discord-Remove-useless-chat-buttons
// @match       https://discord.com/*
// @updateURL   https://raw.githubusercontent.com/Multarix/Discord-Remove-useless-chat-buttons/master/keepGif.user.js
// @homepageURL https://github.com/Multarix/Discord-Remove-useless-chat-buttons
// @supportURL  https://github.com/Multarix/Discord-Remove-useless-chat-buttons/issues
// @grant       none
// @version     1.5
// @author      Multarix
// @description Working as of: 21/08/2024
// ==/UserScript==

const buttonsToHide = ["Open sticker picker", "Send a gift", "Boost this server"];
let css = "";
buttonsToHide.forEach(button => css = css.concat(`[aria-label="${button}"]{display:none}`));
css = css.concat('[id="channel-attach-THREAD"]{display:none}');
css = css.concat('div[class^="channelAppLauncher"]{display:none}');
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
