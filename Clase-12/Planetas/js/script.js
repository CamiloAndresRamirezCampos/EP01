window.onload = function()
{
	var planetas = []
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300;

	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};

	var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter,
									imagen	: 'img/jupiter.jpg'
							  }),
		escalaJupiter = true;
	escena.add(jupiter);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(jupiter.position);
	jupiter.position.x = 500;
	escena.add(camara);


	var marte = crearPlaneta({
									tamano 	: 14.25,
									imagen	: 'img/marte.jpg'
							  }),
		escalaMarte = true;
	escena.add(marte);
	marte.position.x = 80;
	/*var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(marte.position);
	marte.position.x = 80;
	escena.add(camara);*/

	var tierra = crearPlaneta({
									tamano 	: 26.76,
									imagen	: 'img/tierra.jpg'
							  }),
		escalaTierra = true;
	escena.add(tierra);
	tierra.position.x = -25;
	/*var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(tierra.position);
	tierra.position.x = -25;
	escena.add(camara);*/

	var venus = crearPlaneta({
									tamano 	: 25.39,
									imagen	: 'img/venus.jpg'
							  }),
		escalaVenus = true;
	escena.add(venus);
	venus.position.x = -160;
	/*var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(venus.position);
	venus.position.x = -160;
	escena.add(camara);*/

	var mercurio = crearPlaneta({
									tamano 	: 10.238,
									imagen	: 'img/mercurio.jpg'
							  }),
		escalaMercurio = true;
	escena.add(mercurio);
	mercurio.position.x = -300;
	/*var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(mercurio.position);
	mercurio.position.x = -300;
	escena.add(camara);*/


	function renderizar()
	{
		jupiter.rotation.y += 0.001;
		marte.rotation.y += 0.030;
		tierra.rotation.y += 0.015;
		venus.rotation.y += 0.015;
		mercurio.rotation.y += 0.030;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
};