window.onload = function()
{
    var camera, scene, renderer;
    var effect, controls;
    var element, container, mercurio;
    var clock = new THREE.Clock();
    var mundo, mundos = false;
    //var cube, veCubo = false; //VARIABLES DE EJEMPLO, NO DEBERÁ ESTAR AL FINAL...
    //Array de planetas y sus posiciones en el escenario..
    //Posciones elementos...
    /*
    Atrás: x : -300, y : 350, z : 30,
    Adelante : x : 250, y : 350, z : 0
    Izquierda : x : 0, y : 200, z : -350
    Derecha : x : 0, y : 180, z : 300
    */
    //Base array planetas...
    var planetas = [
					 {
						 imagen 	 : "luna.jpg",
                         nombre      : "La Luna",
                         vista       : false,
                         position    : {x : -300, y : 150, z : 30},
						 objeto		 : 0
					 },
                     {  
                         imagen   : "jupiter.jpg",
                         nombre      : "Jupiter",
                         vista       : false,
                         position    : {x : 270, y : 230, z : 0},
                         objeto      : 1
                     },
                     {
                         imagen   : "marte.jpg",
                         nombre      : "Marte",
                         vista       : false,
                         position    : {x : 0, y : 200, z : -350},
                         objeto      : 2   
                     },
                     {
                         imagen   : "mercurio.jpg",
                         nombre      : "Mercurio",
                         vista       : false,
                         position    : {x : 0, y : 350, z : 300},
                         objeto      : 3   
                     },
                     {
                         imagen   : "venus.jpg",
                         nombre      : "Venus",
                         vista       : false,
                         position    : {x : 10, y : 220, z : 0},
                         objeto      : 4     
                     }];

    var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(30,30,30);
		var textura = THREE.ImageUtils.loadTexture(data);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};

    var resize = function()
    {
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        effect.setSize(width, height);
    };

    var init = (function()
    {
        renderer = new THREE.WebGLRenderer();
        element = renderer.domElement;
        container = document.getElementById('example');
        container.appendChild(element);
        effect = new THREE.StereoEffect(renderer);
        effect.separation = 0.2;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
        camera.position.set(0, 5, 0);
        scene.add(camera);
        controls = new THREE.OrbitControls(camera, element);
        controls.rotateUp(Math.PI / 4);
        controls.target.set
        (
            camera.position.x + 0.1,
            camera.position.y + 0.1,
            camera.position.z
        );
        controls.noZoom = false;
        controls.noPan = false;
        //controls.autoRotate = true;
        function setOrientationControls(e)
        {
            if (!e.alpha)
            {
                return;
            }
            controls = new THREE.DeviceOrientationControls(camera, true);
            controls.connect();
            controls.update();
            element.addEventListener('click', fullscreen, false);
            window.removeEventListener('deviceorientation', setOrientationControls, true);
        }
        //Adicona luz..
        window.addEventListener('deviceorientation', setOrientationControls, true);
        var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
        scene.add(light);

        //Crear los panetas...
        //Con la porpiedad position.x se establecerá la posición en x, los mismo con y, z
        //ES ESTE ESPACIO SE ESPERA QUE SE CREEN LOS "PLANTEAS/LUNA"
        // SE PUEDE HACER USO DE LA FUNCIÓN crearPlaneta()
        //EL TAMAÑO DE LOS PLANETAS PUEDE SER IGUAL A 50
        //LAS IMÁGENES SE ENCUENTRA DENTRO DE LA CARPETA img/planetas
        for(i = 0 ; i < planetas.length; i++)
        {
            planetas[i].objeto = crearPlaneta("img/planetas/" + planetas[i].imagen);
            scene.add(planetas[i].objeto);
            planetas[i].objeto.position.x = planetas[i].position.x;
            planetas[i].objeto.position.y = planetas[i].position.y;
            planetas[i].objeto.position.z = planetas[i].position.z;
            
        }

        /*
        EJEMPLO CON UN CUBO...
        ESTA PORICIÓN DE CÓDIGO SÓLO TIENE FINES DE EJEMPLO, NO DEBEÁ ESTAR AL FINAL DEL EJERCICIO...
        
        var geometry = new THREE.SphereGeometry(20,20,20);
        var material = new THREE.MeshBasicMaterial({color: "blue"});
        var texture = THREE.ImageUtils.loadTexture('img/planetas/luna.jpg');
        var material = new THREE.MeshBasicMaterial({map: texture});
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cube.position.x = -100;
        cube.position.y = 100;
        cube.position.z = 30;
        //FIN DEL EJEMPLO, NO DEBERÁ ESTAR AL FINAL...    


        //http://stemkoski.github.io/Three.js/Skybox.html
        //Para adicionar escenario en 3D...       */

        var imagePrefix = "img/place/place-";
        var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
        var imageSuffix = ".jpg";
        var skyGeometry = new THREE.BoxGeometry( 800, 800, 800 );

        var materialArray = [];
        for (var i = 0; i < 6; i++)
        {
            materialArray.push( new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
                side: THREE.BackSide
            }));
        }
        var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
        scene.add( skyBox );
        window.addEventListener('resize', resize, false);
        setTimeout(resize, 1);
    })();

    var update = function(dt)
    {
        resize();
        camera.updateProjectionMatrix();
        controls.update(dt);
    };
    //Saber si el elemento está dentro del punto de vista que se está viendo...
    var puntoDeVista = function()
	{
        var frustum = new THREE.Frustum();
        var cameraViewProjectionMatrix = new THREE.Matrix4();
        camera.updateMatrixWorld(); // make sure the camera matrix is updated
        camera.matrixWorldInverse.getInverse( camera.matrixWorld );
        cameraViewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
        frustum.setFromMatrix( cameraViewProjectionMatrix );
        //frustum.intersectsObject(objeto) indica si está el punto de vísta...
        //ESTO LO HARÁ POR CADA FRAME, POR LO QUE ES IMPORTANTE VALIDAR SI YA ESTÁ VIENDO EL OBJETO...
        //EN EL EJEMPLO DEL ARRAY DE PLANETAS, EXISTE LA PROPIEDAD "vista", la cual indica si se está viendo el planeta...
        //EJEMPLO VIENDO UN CUBO...
        for(var i = 0 ; i < planetas.length; i++)
        {
            if(frustum.intersectsObject(planetas[i].objeto))
        {
            if(!planetas[i].vista)
            {
                planetas[i].vista = true;
                //responsiveVoice.speak("Estas viendo un cubo, es tenporal, por favor borrarlo al final", "Spanish Female");
                console.log("Este es el planeta " + planetas[i].nombre);
            }
        }
        else
        {
            planetas[i].vista = false;
        }
        }
        /*
        if(frustum.intersectsObject(cube))
        {
            if(!veCubo)
            {
                veCubo = true;
                responsiveVoice.speak("Estas viendo un cubo, es tenporal, por favor borrarlo al final", "Spanish Female");
            }
        }
        else
        {
            veCubo = false;
        }*/
  	};

    var animate = function()
    {
        requestAnimationFrame(animate);
        //ESPACIO DONDE SE ESPERA QUE LOS PLANETAS/LUNA GIREN EN Y
        //SE PUEDE HACER USO DE LA PROPIEDAD rotation
        //cube.rotation.y += 0.1; //EJEMPLO, NO DEBERÁ ESTAR AL FINAL DEL EJERCICIO...
        for(var i = 0 ; i < planetas.length; i++)
        {
            planetas[i].objeto.rotation.y += 0.02;
        }
        puntoDeVista();
        update(clock.getDelta());
        effect.render(scene, camera);
    };
    animate();

    var fullscreen = function()
    {
        if (container.requestFullscreen)
        {
            container.requestFullscreen();
        }
        else if (container.msRequestFullscreen)
        {
            container.msRequestFullscreen();
        }
        else if (container.mozRequestFullScreen)
        {
            container.mozRequestFullScreen();
        }
        else if (container.webkitRequestFullscreen)
        {
            container.webkitRequestFullscreen();
        }
    }
};
