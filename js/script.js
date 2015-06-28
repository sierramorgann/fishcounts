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
    });

    var fish1 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish1")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "blue")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        });

    var fish2 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish2")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "red")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        });


    var fish3 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish3")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "orange")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        });

    var fish4 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish4")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "green")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        });

    var fish5 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish5")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "pink")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        });

    var fish6 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish6")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "teal")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        });



    var fish7 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish7")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "grey")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        });


    var fish8 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish8")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "dark green")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";

        });
    var fish9 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish9")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "black")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";

        });
    var fish10 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish10")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "yellow")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";

        });
    var fish11 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish11")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "purple")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        });

    var fish12 = d3.select("body").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", ".fish12")
        .style("float", "left")
        .style("padding", "1px")
        .style("font-size", "10px")
        .style("background-color", "dark blue")
        .style("height", function(d) {
            var barHeight = d.allChinook * 0.1;
            return barHeight + "px";
        }); // .text( function (d) { return d.pink; });  	

});