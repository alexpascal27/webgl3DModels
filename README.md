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
## 1 and 2
When you load the website the cube and axis should be loaded already, and should be in camera view.
## 3 and Rotation Functionality of 9
Press `X` to rotate the cube and bunny in the positive x-axis direction, `Y` to rotate the cube and bunny in the positive y-axis direction, `Z` to rotate the cube and bunny in the positive z-axis direction.
Pressing and holding any of the buttons animates the rotation in that respective axis. Press `R` to reset the rotation in all axis. 

It must be noted that the cube and bunny rotate at the same speed and in the same direction
## 4
Press `F` to render faces, `E` to only render edges, `V` to only render the vertices of the cube. 

Alternatively, using the GUI on the top right, you can  select render options under the "Cube" header to change the render mode.
##5
Use the arrow keys to move the camera up, down, left and right. Press `I` to move the camera forward and `K` to move the camera backward. 

Alternatively, you use the GUI menu options under the "Camera" header to change the camera position. 
##6
Click and drag the mouse to move the camera. 
##7
Press `T` to render the textures. 

Alternatively, selecting an option with "Textures On" under the "Cube" header in the GUI menu.
##8
The bunny mesh is loaded and rendered when the website loads. To view the bunny, render the cube in the vertex or edge mode (either by pressing the `V` or `E` key, or by selecting the render option under the "Cube" header in the GUI menu).
##9 (Non-rotation)
Press `J` to render faces, `U` to only render edges, `M` to only render the vertices of the bunny.

Alternatively, using the GUI on the top right, you can select render options under the "Bunny" header to change the render mode.

Use the GUI option "Faces Affected by lighting" under the "Bunny" header to change the materials, lighting and shading. It uses non-flat shading and Phong lighting.
##10
The scene is loaded, when the website loads, next to the cube. Zoom out and orbit around to explore the details and models. 

To showcase lighting and shadows I implemented a point light. I thought the most natural way for the point light to be in the scene is for it to be the light for the 'campfire'. All models showcase lighting but trees and the moving ship are especially interesting. The trees show how light behaves on uneven surfaces. The moving ship displays the dynamic shadows and ligthing. You can toggle the campfire light by selecting the "Click to the toggle campfire light!" option from the GUI menu. 

You can spawn a dolphin object in a random location (a few unit away from the camp and cube) by selecting the "Click to randomly spawn a dolphin!" option from the GUI menu. 

In the background of the scene there is a ship that is moving on its own. You can use options under the "Moving Ship" header in the GUI menu to change the speed of the moving ship and change how far it goes till it rotates back. 

The ship next to island is controllable. Use the keys `W` to move the ship forward, `S` to move the ship backward, and the `A` and `D` keys to rotate the ship to turn left and right respectively.

On the top left, you can see your frames per second statistics. You can close the GUI by choosing the "Close Controls" option in the GUI menu. The GUI can be reopened by selecting the "Open Controls" option in the GUI menu (top right).

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

