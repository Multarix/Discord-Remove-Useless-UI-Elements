// ==UserScript==
// @name        Discord Hide Useless UI Elements (Keep Gif)
// @namespace   https://github.com/Multarix/Discord-Remove-Useless-UI-Elements
// @match       https://discord.com/*
// @updateURL   https://raw.githubusercontent.com/Multarix/Discord-Remove-Useless-UI-Elements/master/keepGif.user.js
// @homepageURL https://github.com/Multarix/Discord-Remove-Useless-UI-Elements
// @supportURL  https://github.com/Multarix/Discord-Remove-Useless-UI-Elements/issues
// @grant       none
// @version     1.7.2
// @author      Multarix
// @description Working as of: 22/04/2025
// ==/UserScript==


let baseCss = `
/* Remove "Start activity button */
[class^="channelAppLauncher"]{
	display: none;
}


/* Unfuckifiy the user panel */
.visual-refresh section[aria-label="User area"] {
	width: calc(var(--custom-guild-sidebar-width) - var(--custom-guild-list-width));
	left: calc(var(--custom-guild-list-width) + 1px);
	bottom: 0px;
	border-radius: 0px;
	border: none;
}
.visual-refresh section[aria-label="User area"] [class*="activityPanel"] {
	border-radius: 0px;
}
.visual-refresh nav:has([data-list-id="guildsnav"]) {
	margin-bottom: unset;
}


/* Remove the stupid notification button */
[class^="tutorialContainer"] + [class^="listItem"]{
	display:none;
}


/* Remove Nameplates */
[style^="background: linear-gradient("]{
	display:none;
}
[src*="nameplates"]{
	display:none;
}


/* Remove Activity Status on servers that don't turn it off */
[class*="membersGroup"]:has([role=button]),
[class*="member"] [class*="container"]:has([class*="badges"]) {
	display: none;
}
`;


const buttonsToHide = ["Open sticker picker", "Send a gift", "Boost this server", "Apps"];
let css = "";
buttonsToHide.forEach(button => css = css.concat(`[aria-label="${button}"]{display:none}`));		// Remove chat bar buttons
css += baseCss;

const style = document.createElement('style'); style.innerHTML = css;

document.body.appendChild(style);

