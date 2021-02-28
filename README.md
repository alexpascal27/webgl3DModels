# One Piece Scene using WebGL (ThreeJS)
## Demo
![WebGL Demo](https://i.ibb.co/74jpktt/webgl-demo.gif)
## Notes
* Please allow the website to fully load before you start interacting with it, it will have a lag spike at the beginning after it has loaded but after the website should have a good performance

# Camera
Use the arrow keys to move the camera up, down, left and right. Press `I` to move the camera forward and `K` to move the camera backward. 

Alternatively, you use the GUI menu options under the "Camera" header to change the camera position. 

Click and drag the mouse to move the camera. 

# Scene
The scene is loaded, when the website loads. Zoom out and orbit around to explore the details and models. 

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

