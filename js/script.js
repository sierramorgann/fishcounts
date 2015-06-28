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

	});

   console.log(data[0])

});




