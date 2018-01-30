function loadPage() {
	
	paintPlaces(data);
	
	
}

function paintPlaces (lugares) {
	
	lugares.forEach(function(place) {
	// crear elementos con DOM
	
	
	
	var $div = $("<div />", {
	  "id": "dom-container",
	  "class":"border"
	});
	var $sectionCol = $("<section />");
	var $div1 = $("<div />");
	var  $nombre = $("<h2 />");
	var  $tipo = $("<h3 />");
	var  $cuando = $("<p />");
	var $divImagen=$("<div />");
	var $button=$("<button />");
	var $imagen=$("<img />");
	

  
  
	//  atributos y eventos a los elementos creados en el DOM
	$button.attr('data-toggle','modal')
	$button.attr('data-target','#myModalMap')
	$button.attr('data-addres',place.address)
	$button.attr('data-hour',place.hour)
	$button.attr('data-cost',place.cost)
	$imagen.attr('src',place.image);
	$imagen.addClass('img-thumbnail');


	// Asignando valores
	
	//$divImagen.val($imagen);
	$tipo.text(place.type);
	$nombre.text(place.name);
	$cuando.text(place.date);
	$divImagen.html($imagen);
	$button.text("ver más");
	$div.append($nombre);
	$div.append($tipo);
	$div.append($cuando);
	$div.append($divImagen);
	$div.append($button);

   
	// agregamos lo que creamos con el Dom a un elemento existente del html
  
  
	$("#dom-container").prepend($div);
	
  })
};
  


var paintModal = function() {
	
	var hour = $(this).data('hour');
	var address = $(this).data('address');
	var cost = $(this).data('cost');

	
	$('#hour').val(hour);
	$('#address').html(address);
	$('#cost').html(cost);
}



$(document).on('click', paintModal);
$(document).ready(loadPage);

