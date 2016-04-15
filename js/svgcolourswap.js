	$(document).ready(function() {
		
		var color
		var circle = document.getElementById("round")

		$(".palette").draggable({
			revert:true
		});

		$( ".palette" ).mousedown(function() {
			color = $( this ).css( "background-color" );
			$( "#result" ).html( "That div is " + color );
		});

		// $( "#round" ).mouseup(function() {
		// 	$(this).css("fill:blue");
		// });

	});

