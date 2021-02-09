var id_obj_scale="lienzo";

$(function(){
	var anchoVentana=window.innerWidth;
	if(anchoVentana<=731){
		escalarAplicacion();
	}
})

function escalarAplicacion(){
	var anchoVentana=window.innerWidth;
	if(anchoVentana<=731){
		if(id_obj_scale!==""){
			var anchoVentana=window.innerWidth;
			var altoVentana=window.innerHeight;
			var aplicacion=document.querySelector("#"+id_obj_scale);
			var anchoApli=aplicacion.offsetWidth;
			var altoApli=aplicacion.offsetHeight;
			var scale=Math.min(anchoVentana/anchoApli,altoVentana/altoApli);
			aplicacion.style.transform="scale("+scale+")";
			console.log("escalado");	
		}else{
			console.log("No se ha definido objeto para escalar");
		}	
	}	
}

function isMobile(){
	return (
	    (navigator.userAgent.match(/Android/i)) ||
	    (navigator.userAgent.match(/webOS/i)) ||
	    (navigator.userAgent.match(/iPhone/i)) ||
	    (navigator.userAgent.match(/iPod/i)) ||
	    (navigator.userAgent.match(/iPad/i)) ||
	    (navigator.userAgent.match(/BlackBerry/i))
	);
	/*
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// estamos desde un movil o tablet
	}
	*/
}

$(window).on('resize', function(){
	var anchoVentana=window.innerWidth;
	if(anchoVentana<=731){
		$("#"+id_obj_scale).css("transform","scale(1)");
		escalarAplicacion();
	}
});
