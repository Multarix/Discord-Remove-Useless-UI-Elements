# Discord: Remove Uselsss UI Elements
Remove the gift nitro, activity buttons and more!

## IMPORTANT INFO - 26/01/2022
Discord seems to have disabled accessing the developer console within the production version.<br>
There are currently 2 work arounds:<br>
1. Install and use Discord Canary. You can download canary here: https://canary.discord.com/<br>
2. Re-Enable it in discord settings (Reccomended). You can do this by going to `%appdata%/discord/settings.json` and adding the following line to the bottom:<br> `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` (Remember to add a comma on the previous line)


## What is this for?
This repository is for those looking to hide annoying elements from discord, such as the gift nitro button or the new intrusive game playing bar. If reading this far into the future, please note that this may not work - though I try to update it when it breaks.<br>

There are 2 versions of the scripts here:<br>
1. "All" versions removes all of the annoying elements from the UI, all the chat bar buttons minus the emoji button as well as the + button for uploading images and what not.
2. "KeepGIF" version removes all of the above minus the gif button on the chat bar (I recommend this one personally)


###  **The script will need to be re-pasted in every time you start discord. If something goes wrong, restarting discord or pressing ctrl+r should fix it.**
###  **You can use something like [AdGaurd](https://adguard.com/en/welcome.html) to auto apply these scripts on your device, which means you do not need to paste it in each time.**
#### _**I hold no responsibility for you breaking your discord or other things happening**_

<br>
To use these, while discord is open, press <i>Ctrl + Shift + I</i>. You will be presented with a console. First and foremost you'll be greeted with a giant message telling you that pasting anything inside the console has a high chance of being a scam. The reason they tell you this, is due to potential security/ account stealing problems, as well as potentially doing exactly what this script aimed to do: Removing nitro/ p2w bloat. If unsure, get someone else to check the code before using it.

Copy and paste the script into the console and hit enter.<br>

### Some last minute warnings
- This may potentially hide other objects related to these things in the future if discord changes anything, so as stated above, if you happen to be using this far into the future, it may not work as expected.
- Trying to use both versions of the script at the same time will probably cause problems, don't try it.

## Scripts
- Remove All - https://github.com/Multarix/Discord-Remove-Useless-UI-Elements/raw/main/all.user.js
- Keep GIF - https://github.com/Multarix/Discord-Remove-Useless-UI-Elements/raw/main/keepGif.user.js