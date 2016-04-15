	$(document).ready(function() {
		
		var myPanels = document.querySelectorAll("#round");

		$(".palette").draggable({
			revert:true
		});

		$("svg").droppable({
		  drop: function(e, ui) {
		    console.log(ui.draggable)

		    for (var i = 0; i < myPanels.length; i++) {
		        myPanels[i].style.fill = ui.draggable.attr("background");
		    }
		  }
		});

		// $(".panels").droppable({
		//   drop: function(e, ui) {
		//     console.log(ui.draggable)
		//     $(this).css("background", ui.draggable.attr("background"));
		//   }
		// });

		// $("circle #round").droppable({
		//   drop: function(e, ui) {
		//     console.log(ui.draggable)
		//     $(this).css("fill", blue);
		//   }
		// });

		// $( ".palette" ).mousedown(function() {
		// 	color = $( this ).css( "background-color" );
		// 	$( "#result" ).html( "That div is " + color );
		// });



	});


