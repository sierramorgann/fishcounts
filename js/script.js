var data = d3.csv("data.csv", function(data) {

	data.forEach(function(d) {
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


    var output = d3.select("body").selectAll("div")
		.data(d);

	});

   console.log(data[0])
});

