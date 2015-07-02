formatDate = d3.time.format("%m/%d/%Y");

 var data = d3.csv("data.csv", function(d) {
   
        // d.date = formatDate.parse;
        d.allChinook = +d.allChinook;
        // d.adultChinook = +d.adultChinook;
        // d.jackChinook = +d.jackChinook;
        // d.allSteelhead = +d.allSteelhead;
        // d.clippedSteelhead = +d.clippedSteelhead;
        // d.unclippedSteelhead = +d.unclippedSteelhead;
        // d.allCoho = +d.allCoho;
        // d.adultCoho = +d.adultCoho;
        // d.jackCoho = +d.jackCoho;
        // d.sockeye = +d.sockeye;
        // d.chum = +d.chum;
        // d.pink = +d.pink;       

    // var fish1 = d3.select("div", "fish1").selectAll()
    //     .data(data)
    //     .enter()
    //     .append("div").attr("class", "allCoho")
    //     .style("float", "left")
    //     .style("padding", "1px")
    //     .style("margin-left", "2px")
    //     .style("background-color", "green")
    //     .style("height", function(d) {
    //         var barHeight = d.allCoho * 10;
    //         return barHeight + "px";
    //     });

    // var fish2 = d3.select("div", "fish2").selectAll()
    //     .data(data)
    //     .enter()
    //     .append("div").attr("class", "adultCoho")
    //     .style("float", "left")
    //     .style("padding", "1px")
    //     .style("margin-left", "1px")
    //     .style("background-color", "rgb(14,255,233)")
    //     .style("height", function(d) {
    //         var barHeight = d.adultCoho / 2;
    //         return barHeight + "px";
    //     });

    // var fish3 = d3.select("div", "fish3").selectAll()
    //     .data(data)
    //     .enter()
    //     .append("div").attr("class", "jackCoho")
    //     .style("float", "left")
    //     .style("padding", "1px")
    //     .style("margin-left", "1px")
    //     .style("background-color", "rgb(3,64,58")
    //     .style("height", function(d) {
    //         var barHeight = d.jackCoho / 2;
    //         return barHeight + "px";
    //     });

    //     var fish4 = d3.select("div", "fish4").selectAll()
    //     .data(data)
    //     .enter()
    //     .append("div").attr("class", "allSteelhead")
    //     .style("float", "left")
    //     .style("padding", "1px")
    //     .style("margin-left", "1px")
    //     .style("background-color", "rgb(0,191,156)")
    //     .style("height", function(d) {
    //         var barHeight = d.allSteelhead / 2;
    //         return barHeight + "px";
    //     });

    // var fish5 = d3.select("div", "fish5").selectAll()
    //     .data(data)
    //     .enter()
    //     .append("div").attr("class", "clippedSteelhead ")
    //     .style("float", "left")
    //     .style("padding", "1px")
    //     .style("margin-left", "1px")
    //     .style("background-color", "teal")
    //     .style("height", function(d) {
    //         var barHeight = d.clippedSteelhead / 2;
    //         return barHeight + "px";
    //     });


    // var fish6 = d3.select("div", "fish6").selectAll()
    //     .data(data)
    //     .enter()
    //     .append("div").attr("class", "unclippedSteelhead")
    //     .style("float", "left")
    //     .style("padding", "1px")
    //     .style("margin-left", "1px")
    //     .style("background-color", "rgb(0,64,52")
    //     .style("height", function(d) {
    //         var barHeight = d.unclippedSteelhead / 2;
    //         return barHeight + "px";
    //     });

    var fish7 = d3.select("div", "fish7").selectAll()
        .data(data)
        .enter()
        .append("div").attr("class", "allChinook")
        .attr("data-tooltip", data.allChinook)
        .style("float", "left")
        .style("padding-left", "5px")
        .style("margin-left", "1px")
        .style("background-color", "rgb(0,127,107)")
        .style("height", function(d) {
            var barHeight = d.allChinook / 100;
            return barHeight + "px";
        })
        .on('mouseover', function(d){
        var nodeSelection = d3.select(this).style({opacity:'0.8'});
        nodeSelection.select("text").style({opacity:'1.0'});
        })
        .on('mouseout', function(d){
        d3.select(this).style({opacity:'0.7',})
        d3.select("text").style({opacity:'0.7'})
    }); 
    // var fish8 = d3.select("div", "fish8").selectAll()
    //     .data(data)
    //     .enter()
    //     .append("div").attr("class", "adultChinook")
    //     .style("float", "left")
    //     .style("padding", "1px")
    //     .style("margin-left", "1px")
    //     .style("background-color", "rgb(0,255,208)")
    //     .style("height", function(d) {
    //         var barHeight = d.adultChinook / 2;
    //         return barHeight + "px";
    //     });


    // var fish9 = d3.select("div", "fish9").selectAll()
    //     .data(data)
    //     .enter()
    //     .append("div").attr("class", "jackChinook")
    //     .style("float", "left")
    //     .style("padding", "1px")
    //     .style("margin-left", "1px")
    //     .style("background-color", "rgb(130,255,232)")
    //     .style("height", function(d) {
    //         var barHeight = d.jackChinook / 2;
    //         return barHeight + "px";
    //     });

    // var fish10 = d3.select("div", "fish10").selectAll()
    //     .data(data)
    //     .enter()
    //     .append("div").attr("class", "sockeye")
    //     .style("float", "left")
    //     .style("padding", "1px")
    //     .style("margin-left", "1px")
    //     .style("background-color", "rgb(10,191,175)")
    //     .style("z-index", "100")
    //     .style("height", function(d) {
    //         var barHeight = d.sockeye / 2;
    //         return barHeight + "px";
    //     });

    // .text( function (d) { return d.pink; }); 
    console.log(d.allChinook)     
});


// });

