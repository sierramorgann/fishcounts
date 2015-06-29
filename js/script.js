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


          data.splice(3, 1)
          data.splice(5, 1)
          data.splice(7, 1)
          data.splice(9, 1)
          data.splice(11, 1)
          data.splice(13, 1)
          data.splice(15, 1)
          data.splice(17, 1)
          data.splice(19, 1)
          data.splice(21, 1)
          data.splice(23, 1)
          data.splice(25, 1)
    });

    console.log(data)

    var fish1 = d3.select("div", "fish1").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "allchinook")
        .style("float", "left")
        .style("padding-left", "1px")
        .style("background-color", "blue")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        });

    var fish2 = d3.select("div", "fish2").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "adultchinook")
        .style("float", "left")
        .style("padding", "1px")
        .style("background-color", "red")
        .style("height", function(d) {
            var barHeight = d.adultChinook * 0.1;
            return barHeight + "px";
        });


    var fish3 = d3.select("div", "fish3").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "jackchinook")
        .style("float", "left")
        .style("padding", "1px")
        .style("background-color", "green")
        .style("height", function(d) {
            var barHeight = d.jackChinook * 0.1;
            return barHeight + "px";
        });

    var fish4 = d3.select("div", "fish4").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "allsteelhead")
        .style("float", "left")
        .style("padding", "1px")
        .style("background-color", "orange")
        .style("height", function(d) {
            var barHeight = d.allSteelhead * 0.1;
            return barHeight + "px";
        });

    var fish5 = d3.select("div", "fish5").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "clippedsteelhead ")
        .style("float", "left")
        .style("padding", "1px")
        .style("background-color", "teal")
        .style("height", function(d) {
            var barHeight = d.clippedSteelhead * 0.1;
            return barHeight + "px";
        });


    var fish6 = d3.select("div", "fish6").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "unclippedsteelhead")
        .style("float", "left")
        .style("padding", "1px")
        .style("background-color", "grey")
        .style("height", function(d) {
            var barHeight = d.unclippedSteelhead * 0.1;
            return barHeight + "px";
        });


    var fish7 = d3.select("div", "fish7").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "allcoho")
        .style("float", "left")
        .style("padding", "1px")
        .style("background-color", "dark green")
        .style("height", function(d) {
            var barHeight = d.allCoho * 0.1;
            return barHeight + "px";
        });

    var fish8 = d3.select("div", "fish8").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "adultcoho")
        .style("float", "left")
        .style("padding", "1px")
        .style("background-color", "black")
        .style("height", function(d) {
            var barHeight = d.adultCoho * 0.1;
            return barHeight + "px";
        });

    var fish9 = d3.select("div", "fish9").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "jackcoho")
        .style("float", "left")
        .style("padding", "1px")
        .style("background-color", "yellow")
        .style("z-index", "10")
        .style("height", function(d) {
            var barHeight = d.jackCoho * 0.1;
            return barHeight + "px";
        });

    var fish10 = d3.select("div", "fish10").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "sockeye")
        .style("float", "left")
        .style("padding", "1px")
        .style("background-color", "purple")
        .style("z-index", "100")
        .style("height", function(d) {
            var barHeight = d.sockeye * 0.1;
            return barHeight + "px";
        });

        // .text( function (d) { return d.pink; });  	
});




