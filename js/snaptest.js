		var s = Snap(300,300);
			// Let's create a big circle in the middle:

		Snap.load("images/mascot.svg", dragsnap)


		dragsnap(f) {
		    // Note that we traversre and change attr before SVG
		    // is even added to the page
		    f.selectAll("polygon[fill='#09B39C']").attr({fill: "#bada55"});
		    g = f.select("g");
		    s.append(g);
		    // Making croc draggable. Go ahead drag it around!
		    g.drag();
		    // Obviously drag could take event handlers too
		    // Looks like our croc is made from more than one polygon...
		};