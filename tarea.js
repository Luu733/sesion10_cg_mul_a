// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();

function cubo(x, y, z, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material){
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // add the cube to the scene
    scene.add(cube);
    return(cube);
}
function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    //Adding Light

   light = new THREE.PointLight(0xFFFF00); //  Luz proveniente de un punto en el espacio, semejante al sol.
    light.position.set( -10, 5, 10 );             //  Localización de la luz. (x, y, z).
    scene.add( light ); 


    Cubo = [];   // Definir un array unidimensional
    num= Math.round(Math.random() * (2 - 0) + 0); //Variable que da un número entero aleatorio de 0 al 2 para el cubo 1.
    num2 = Math.round(Math.random() * (2 - 0) + 0);//Variable que da un número entero aleatorio de 0 al 2 para el cubo 2.
    num3 = Math.round(Math.random() * (2 - 0) + 0); //Variable que da un número entero aleatorio de 0 al 2 para el cubo 3.
    eje=Math.round(Math.random()*(2 - 0) + 0); //Variable que da un número entero aleatorio de 0 al 2 para decidir el eje a rotar.
    dim = 4; 
    delta = 8;

    var ang = prompt("Ingrese valor del angulo ","Valor"); //La variable ang guarda el valor ingresado por el usuario.
    if(ang != null){
	alert("Has escrito " + ang); //Si el usuario digita un valor, es indicado a modo de otra ventana emergente.
    } else {
	alert("No has escrito nada"); //Si el usuario NO digita valor, aparece este mensaje.
    }

  ang_rad= (ang)*((2*Math.PI)/(360)); //Conversión de grados a radianes.

    Cubo.push(cubo(dim, dim, dim, 0xFFDD00, 'Physical', false));

    Cubo.push(cubo(dim, dim, dim, 0xFF5733, 'Standard', false));

    Cubo.push(cubo(dim, dim, dim, 0xC39BD3, 'Phong', false));

    if( eje = 0){ 
    Cubo[num].rotateX(ang_rad);
    Cubo[num].translateX(delta);
    }

    if(eje = 1){
    Cubo[num2].rotateY(ang_rad);
    Cubo[num2].translateY(delta);
    }

    if(eje = 2){
    Cubo[num3].rotateZ(ang_rad);
    Cubo[num3].translateZ(delta);
    }

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}


//REFERENCIAS

//https://developer.mozilla.org/es/docs/Web/CSS/transform-function/translate()

//https://developer.mozilla.org/es/docs/Web/CSS/transform
