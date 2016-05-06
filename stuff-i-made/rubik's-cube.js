STUFF.Examples.RubiksCube = function( size, helpers ) {

//There is no point in putting anything in helpers, as it will be overwritten

helpers = {}
helpers.spinner = new THREE.Object3D

if (size <= 1 || size >= 8) throw new Error('Stuff.js: You cannot make a Rubik\'s Cube with size less than 2 or greater than 7.')

}
