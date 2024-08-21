# Discord: Remove useless chat buttons
Remove the gift nitro, gif and sticker buttons from the chat bar in discord!

## IMPORTANT INFO - 26/01/2022
Discord seems to have disabled accessing the developer console within the production version.<br>
There are currently 2 work arounds:<br>
1. Install and use Discord Canary. You can download canary here: https://canary.discord.com/<br>
2. Re-Enable it in discord settings (Reccomended). You can do this by going to `%appdata%/discord/settings.json` and adding the following line to the bottom:<br> `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` (Remember to add a comma on the previous line)


## What is this for?
This repository is for those looking to hide the "Gift Nitro", "Boost this server", "Stickers" or "GIF" buttons from the chat bar in discord. If reading this far into the future, please note that this may not work.<br>

There are 2 versions of the scripts here:<br>
1. "All" versions remove the Gift Nitro, Stickers and GIF buttons, (Note that you can still access gifs and stickers via the tabs in the emoji button that remains)
2. "KeepGIF" versions remove the Gift Nitro and Sticker buttons only (Note that you can still access the stickers via the tab in the emoji/ gif buttons that remain)


###  **The script will need to be re-pasted in every time you start discord. If something goes wrong, restarting discord should fix it.**
#### _**I hold no responsibility for you breaking your discord or other things happening**_

<br>
To use these, while discord is open, press <i>Ctrl + Shift + I</i>. You will be presented with a console. First and foremost you'll be greeted with a giant message telling you that pasting anything inside the console has a high chance of being a scam. The reason they tell you this, is due to potential security/ account stealing problems, as well as potentially doing exactly what this script aimed to do: Removing nitro bloat. If unsure, get someone else to check the code before using it.
Copy and paste the script into the console and hit enter.<br>

### Some last minute warnings
- This may potentially hide other objects related to these things in the future if discord changes anything, so as stated above, if you happen to be using this far into the future, it may not work as expected.
- Trying to use both versions of the script at the same time will probably cause problems, don't try it.

## Userscripts
In the event you use the web based version of discord rather than the app, Tampermonkey versions are available too:
- Remove All - https://github.com/Multarix/Discord-Remove-useless-chat-buttons/raw/main/all.user.js
- Keep GIF - https://github.com/Multarix/Discord-Remove-useless-chat-buttons/raw/main/keepGif.user.js

#### Quick Access: All Version

```js
const buttonsToHide = ["Open GIF picker", "Open sticker picker", "Send a gift", "Boost this server"];
let css = "";
buttonsToHide.forEach(button => css = css.concat(`[aria-label="${button}"]{display:none}`));
css = css.concat('[id="channel-attach-THREAD"]{display:none}');
css = css.concat('div[class^="channelAppLauncher"]{display:none}');
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
```

#### Quick Access: Keep GIF Version

```js
const buttonsToHide = ["Open sticker picker", "Send a gift", "Boost this server"];
let css = "";
buttonsToHide.forEach(button => css = css.concat(`[aria-label="${button}"]{display:none}`));
css = css.concat('[id="channel-attach-THREAD"]{display:none}');
css = css.concat('div[class^="channelAppLauncher"]{display:none}');
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
```