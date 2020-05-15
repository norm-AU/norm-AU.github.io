//------------------------1. PREPARATION-------------------------//
//-----------------------------SVG-------------------------------//
const width = 960;
const height = 500;
const margin = 5;
const padding = 5;
const adj = 30;
// we are appending SVG first
const svg = d3.select("div#container").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-"
          + adj + " -"
          + adj + " "
          + (width + adj *3) + " "
          + (height + adj*3))
    .style("padding", padding)
    .style("margin", margin)
    .classed("svg-content", true);

//-----------------------------DATA------------------------------//

//----------------------------SCALES-----------------------------//

//-----------------------------AXES------------------------------//

//----------------------------LINES------------------------------//
   
//-------------------------2. DRAWING----------------------------//

//-----------------------------AXES------------------------------//

//----------------------------LINES------------------------------//


});