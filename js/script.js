var main = function () {
    "use strict";

    var pirates = [];

	// Assuming you have referenced jQuery
	$(function() {
	    $.get("http://www.fpc.org/WebForm3.5/GetAdultCounts.aspx?id=1", function(crewResponse) {
	        pirates = crewResponse.pirates;
	        alert("Load was performed.");
	    });
	});

};

$(document).ready(main);
