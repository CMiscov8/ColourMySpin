
$(document).ready(function() {
    $(".palette").draggable({
    	revert:true
    });

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    var bck = "#FFFFFF"

    img.crossOrigin = "anonymous";
    img.onload = start; // don't need this as well as droppable
    img.src = "images/assy6-2.gif";

    function start() {
        ctx.drawImage(img, 0, 0);
    }

    $(".palette").mousedown(function(){
    	bck = $( this ).attr( "background" );
	        console.log(bck);
    });

    $(".panels").droppable({
    	drop: function(e, ui) {
    		$(this).css("background", ui.draggable.attr("background"));
	        recolorPanel(-.3);  
        }

    });

	function recolorPanel(colorshift) {

	    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	    var data = imgData.data;
	      // need these variables, but not the next bit?
	   
	    for (var i = 0; i < data.length; i += 4) {
	        red = data[i + 0];
	        green = data[i + 1];
	        blue = data[i + 2];
	        alpha = data[i + 3];
	     
	        //need this bit about transparency
	        // skip transparent/semiTransparent pixels
	        if (alpha < 200) {
	            continue;
	        }

	        //var hsl = rgbToHsl(red, green, blue);
	        //var hue = hsl.h * 360;
	        var navy1 = 0;
	        var navy2 = 0;
	        var navy3 = 51;

	        // change blueish pixels to the new color
	        //if (hue > 200 && hue < 300) {
	        //    var newRgb = hslToRgb(hsl.h + colorshift, hsl.s, hsl.l);
	        data[i + 0] = navy1;
	        data[i + 1] = navy2;
	        data[i + 2] = navy3;
	        data[i + 3] = 255;
	        //}
	    }

	    ctx.putImageData(imgData, 100, 0); // need this, its the new data for the panel
	}
});





// function bckgrnd(){
//   var b = null;
//   $(".palette").mousedown(function(){
//     var bck = $( this ).css( "background-color" );
//     console.log(bck);
//     return bck;
//   });
//   return(b);
// };

// var bgclr = bckgrnd();

// console.log(bgclr);



// $( "div" ).click(function() {
//   var color = $( this ).css( "background-color" );
//   $( "#result" ).html( "That div is <span style='color:" +
//     color + ";'>" + color + "</span>." );
//   console.log(color);
// });

//    var bckgrnd = $(".panels").css("background")
//    console.log(bckgrnd)