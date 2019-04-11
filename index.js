// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 20;

var controls = new THREE.OrbitControls( camera );

controls.keys = {
	LEFT: 37, //left arrow
	UP: 38, // up arrow
	RIGHT: 39, // right arrow
	BOTTOM: 40 // down arrow
}

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

 var loader = new THREE.TextureLoader();
loader.load('background.jpg' , function(texture)
            {
             scene.background = texture;  
            });
// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

var geometry = new THREE.SphereGeometry( 5, 32, 32 );
var material = new THREE.MeshPhongMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );

scene.add( sphere );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  controls.update();

  // Render the scene
  renderer.render(scene, camera);
};

render();