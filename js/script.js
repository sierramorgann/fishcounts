var data = d3.csv("data.csv", function(data) {

 var each = data.forEach(function(d) {
	     	d.date = d.date;
	     	d.allChinook = +d.allChinook;
	     	d.adultChinook = +d.adultChinook;
	     	d.jackChinook = +d.jackChinook;
	     	d.allSteelhead = +d.allSteelhead;
	     	d.clippedSteelhead = +d.clippedSteelhead;
	     	d.unclippedSteelhead = +d.unclippedSteelhead;
	     	d.allCoho = +d.allCoho;
	     	d.adultCoho = +d.adultCoho;
	     	d.jackCoho = +d.jackCoho;
	     	d.sockeye = +d.sockeye;
	     	d.chum = +d.chum;
	     	d.pink = +d.pink;

     	var thedate = d3.select("body").selectAll("div")
		    .data(data)
		    .enter()
		    .append("div")
		    .text( function (d) { return d.date; }); 


		var fish1 = d3.select("body").selectAll("#fish1")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.allChinook; });


		var fish2 = d3.select("body").selectAll("#fish2")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.adultChinook; });


		var fish3 = d3.select("body").selectAll("#fish3")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.jackChinook; }); 


		var fish4 = d3.select("body").selectAll("#fish4")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.allSteelhead; }); 


		var fish5 = d3.select("body").selectAll("#fish5")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.clippedChinook; }); 


		var fish6 = d3.select("body").selectAll("#fish6")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.unclippedChinook; }); 


		var fish7 = d3.select("body").selectAll("#fish7")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.allCoho; }); 


		var fish8 = d3.select("body").selectAll("#fish8")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.adultCoho; });


		var fish9 = d3.select("body").selectAll("#fish9")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.jackCoho; });


		var fish10 = d3.select("body").selectAll("#fish10")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.sockeye; }); 


		var fish11 = d3.select("body").selectAll("#fish11")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.chum; });
		    

		var fish12 = d3.select("body").selectAll("#fish12")
		    .data(data)
		    .enter()
		    .append("p")
		    .text( function (d) { return d.pink; });    


	});

   console.log(data[0])

});




