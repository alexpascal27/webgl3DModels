# Pre-requisites (what needs to be done for the requirements to work)
## Start a python server on the 8000 port
1. Extracted contents from the `code.zip` into a new folder (the name of the folder is irrelevant)
2. Open terminal in the new folder:
    * **For Windows:** open the folder, then hold down the shift key and right click somewhere in the folder. Select the "Open Powershell window here" or “Open command window here” option.
  You can also retrieve the directory of the folder, then open cmd and type `cd {directory}`
    * **For Linux:** open the folder, then right click somewhere in the folder and select the "Open terminal here" option
    * **For Mac:** follow the tutorial on this website: https://www.howtogeek.com/210147/how-to-open-terminal-in-the-current-os-x-finder-location/ 
3. Ensure you have python installed by typing `python -v` (if a version shows then your computer has python installed, otherwise you need to install python from the following link: https://www.python.org/downloads/)
4. Start the webserver on the 8000 port by typing `python -m http.server 8000`
## Install extension/add-on to allow CORS on your browser
Make sure you have either Firefox, Google Chrome or Microsoft Edge installed on your system.
* **For Firefox**: Add the following add-on: https://addons.mozilla.org/en-GB/firefox/addon/cors-everywhere/ and make sure that the extension icon on top right is green and **not red**![img.png](img.png)
* **For Chrome**: Add the following extension: https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en, and make sure the extension icon is lit up (when you hover over the extension icon, it should say "Access-Control-Allow-Origin is unblocked")![img_1.png](img_1.png)
* **For Microsoft Edge**: Add the following extension: https://add0n.com/access-control.html?version=0.1.7&type=install , and make sure the extension icon is lit up (when you hover over the extension icon, it should say "Access-Control-Allow-Origin is unblocked")
  
  ![img_2.png](img_2.png)
## Notes
* Please allow the website to fully load before you start interacting with it, it will have a lag spike at the beginning after it has loaded but after the website should have a good performance

# Requirements
## 1
When you load 
# Credits
## Models
* `zoro` (3D model of a swordsman in a green costume): https://sketchfab.com/3d-models/3dst40-zoro-from-one-piece-bf6fc34c3d784ff38b5a093b4c423abd
* `chopper` (3D model of a baby reindeer): https://sketchfab.com/3d-models/one-piece-pirate-warriors-tony-tony-chopper-21b01e8b2ea046f0bd2fb1b8b2b91f28
* `luffy` (3D model of an injured man): https://sketchfab.com/3d-models/monkey-d-luffy-damage-one-piece-36a78e0a19d84b3bbf8ffa772385fe97
* `buggy` (3D model of a clown): https://www.cgtrader.com/free-3d-models/character/man/buggy-one-piece
* `ship` (3D model of a pirate ship): https://sketchfab.com/3d-models/pirate-ship-dc46e3e2eea343ff836f4d50804d00de
* `camp` (3D model of a camp on an island): https://sketchfab.com/3d-models/low-poly-camp-6f75ecd05f43418cbddbc6bd1e5fd692
* `tower_hut` (3D model of a tower building): https://sketchfab.com/3d-models/home-at-sea-6fcf3b207283487ea64d778105988c85
* `dolphin` (3D model of a dolphin): https://sketchfab.com/3d-models/dolphin-animated-marine-mammals-series-f4abb460956240f98b7a6f19cc3037a1
* `endurance_ship` (3D model of a ship with many sails): https://sketchfab.com/3d-models/endurance-ship-low-poly-d57f8ec042c44b4dae1fa828c742c858
* `nami` (3D model of a red-haired woman): https://sketchfab.com/3d-models/one-piece-nami-dd96e821cb2f4024afbe3b841819c244
* `sanji` (3D model of a blond man in a suit): https://sketchfab.com/3d-models/one-piece-sanji-kuroashi-81c62147f732493c8ab549fd375e41aa
* `usopp` (3D model of a man with a sling-shot): https://sketchfab.com/3d-models/one-piece-usopp-393627239d2d41f088d3ed92fda97659
## Textures
* `water_texture`: https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91367587-c7d6-4c6c-90b0-fbdb07b99668/dtcbja-c290a42f-0a39-4eaf-bef6-d029f24b6769.jpg/v1/fill/w_1280,h_960,q_75,strp/water_texture_by_simplybackgrounds_dtcbja-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05NjAiLCJwYXRoIjoiXC9mXC85MTM2NzU4Ny1jN2Q2LTRjNmMtOTBiMC1mYmRiMDdiOTk2NjhcL2R0Y2JqYS1jMjkwYTQyZi0wYTM5LTRlYWYtYmVmNi1kMDI5ZjI0YjY3NjkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rtVCIEG47fBJtpyNCFpRwcw1XS0-irXEQkuw0NMo52E
## Scripts
* `three.js`: https://github.com/mrdoob/three.js/blob/dev/build/three.js
  
  *(I loaded a newer version of three js in order to be compatible with the other scripts)*
* `/scripts/three.module.js`: https://github.com/mrdoob/three.js/blob/dev/build/three.module.js
* `/scripts/inflate.module.min.js`: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/libs/inflate.module.min.js
* `/scripts/MTLLoader.js`: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/loaders/MTLLoader.js
* `/scripts/GLTFLoader.js`: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/loaders/GLTFLoader.js
* `/scripts/FBXLoader.js`: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/loaders/FBXLoader.js
* `/scripts/TGALoader.js`: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/loaders/TGALoader.js
* `/scripts/NURBSCurve.js`: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/curves/NURBSCurve.js
* `/scripts/NURBSUtils.js`: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/curves/NURBSUtils.js
* `/scripts/stats.module.js`: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/libs/stats.module.js
* `/scripts/dat.gui.module.js` : https://github.com/mrdoob/three.js/blob/dev/examples/jsm/libs/dat.gui.module.js

