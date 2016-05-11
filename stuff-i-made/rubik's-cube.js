STUFF.Examples.RubiksCube = function( size, ctrls, helpers ) {

var stickers = [], loop, color, cubelets = [];
  while (loop<stickers) {
    color = 
    loop % 6 === 0 ? 0xf00 :
    loop % 6 == 1 ? 0xff8000 :
    loop % 6 == 2 ? 0xff0 :
    loop % 6 == 3 ? 0x0f0 :
    loop % 6 == 4 ? 0x0080ff : 0x000;
    stickers.push(
      THREE.Mesh(
        THREE.PlaneGeometry(90,90),
        THREE.MeshBasicMaterial({
          color: color  
        })
      )
    );
    loop++;
  }
  
  loop = 0;
  
  while (loop<26) {
    cubelets.push(new THREE.Object3D())
    
  }
    
    var stack = [];
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    stack[e.keyCode] = e.type == 'keydown';
};

function rotateFace(face, dir) {
  if (face === 'F' || face === 'L' || face === 'U') spinner.add(cubelets[0]);
  if (face === 'F' || face === 'R' || face === 'U') spinner.add(cubelets[1]);
  if (face === 'F' || face === 'L' || face === 'D') spinner.add(cubelets[2]);
  if (face === 'F' || face === 'R' || face === 'D') spinner.add(cubelets[3]);
  if (face === 'B' || face === 'L' || face === 'U') spinner.add(cubelets[4]);
  if (face === 'B' || face === 'R' || face === 'U') spinner.add(cubelets[5]);
  if (face === 'B' || face === 'L' || face === 'D') spinner.add(cubelets[6]);
  if (face === 'B' || face === 'R' || face === 'D') spinner.add(cubelets[7]);
  if (face === 'F' || face === 'U') spinner.add(cubelets[8]);
  if (face === 'F' || face === 'L') spinner.add(cubelets[9]);
  if (face === 'F' || face === 'R') spinner.add(cubelets[10]);
  if (face === 'F' || face === 'D') spinner.add(cubelets[11]);
  if (face === 'U' || face === 'L') spinner.add(cubelets[12]);
  if (face === 'U' || face === 'R') spinner.add(cubelets[13]);
  if (face === 'D' || face === 'L') spinner.add(cubelets[14]);
  if (face === 'D' || face === 'R') spinner.add(cubelets[15]);
  if (face === 'B' || face === 'U') spinner.add(cubelets[16]);
  if (face === 'B' || face === 'L') spinner.add(cubelets[17]);
  if (face === 'B' || face === 'R') spinner.add(cubelets[18]);
  if (face === 'B' || face === 'D') spinner.add(cubelets[19]);
  if (face === 'F') spinner.add(cubelets[20]);
  if (face === 'B') spinner.add(cubelets[21]);
  if (face === 'U') spinner.add(cubelets[22]);
  if (face === 'D') spinner.add(cubelets[23]);
  if (face === 'L') spinner.add(cubelets[24]);
  if (face === 'R') spinner.add(cubelets[25]);
  if (face === 'F' || face === 'B') spinner.rotation.z += 1.575 * dir
  if (face === 'U' || face === 'D') spinner.rotation.y += 1.575 * dir
  if (face === 'L' || face === 'R') spinner.rotation.x += 1.575 * dir
  
}
    
    

}
