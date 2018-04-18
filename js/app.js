function loadPage() {
	
	paintPlaces(data);
	paintModal(data);
	
	$('#publicar').click(pintarPublicacion);
	$('#myModalMap').click(paintModal);
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
	//  ponemos atributos a los elementos creados en el DOM
	$button.attr('data-toggle','modal')
	$button.attr('data-target','#myModalMap')
	$button.attr('data-addres',place.address)
	$button.attr('data-hour',place.hour)
	$button.attr('data-cost',place.cost)
	$imagen.attr('src',place.image);
	$imagen.addClass('img-thumbnail');
// Asignando valores
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
  


 function paintModal(lugares) {
	lugares.forEach(function(place){

	

	$('#hour').text(place.hour);
	$('#address').html(place.address);
	$('#cost').text(place.cost);
	});
}


function clock(){
	var day = new Date();
	hour = day.getHours();
	minutes = day.getMinutes();
	var dateTime = "AM";
	//cambia a PM cuando han pasado 12 hrs
	if(hour === 12){
		dateTime = "PM";
	} else if(hour > 12){
	  dateTime = "PM";
	  hour = hour-12;
	}
	if (hour < 10) {
		hour = '0' + hour;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	var clockSet = hour + ":" + minutes+ " " +dateTime;
	return clockSet;
  };

function pintarPublicacion(){
	var $div= $("<div />", {
		"id": "friend-publication",
		"class":"row",
	  });
	 
	  var $sectionCol = $("<section />");
	  var $div1 = $("<div />");
	  var  $usersComment = $("<h1 />");
	  var  $p1 = $("<p />");
	  var  $p2 = $("<p />")
	  var  $span1 = $("<span />");
	  var  $span2 = $("<span />");
	  var  $span3 = $("<span />");
	  var  $span4 = $("<span />");
	  var $content=$('#message-text').val();

	  $p1.text($content);
	  $p2.html(clock());
	  


	  //atributos
	  $usersComment.addClass('.users-comment');
	  $p1.addClass('img-thumbnail');
	  $span1.addClass('glyphicon glyphicon-heart');
	  $span2.addClass('glyphicon glyphicon-pencil');
	  $span3.addClass('glyphicon glyphicon-tag');
	  $span4.addClass('glyphicon glyphicon-bookmark');
	  $sectionCol.addClass( 'border');
	 
	//agregar con append
	  $sectionCol.append($div1);
	 $div1.append($usersComment);
	 $div1.append($p1);
	 $div1.append($p2);
	 $div1.append($span1);
	 $div1.append($span2);
	 $div1.append($span3);
	 $div1.append($span4);
      $div.append($sectionCol);
	  $("#friend-publication").prepend($div);
	  $('#message-text').val(" ");
}

//
$(document).on('click', paintModal);
$(document).ready(loadPage);

