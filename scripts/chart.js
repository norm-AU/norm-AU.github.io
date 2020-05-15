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
const timeConv = d3.timeParse("%d-%b-%Y");
const dataset = d3.csv("data/data.csv");
dataset.then(function(data) {
    const slices = data.columns.slice(1).map(function(id) {
        return {
            id: id,
            values: data.map(function(d){
                return {
                    date: timeConv(d.date),
                    measurement: +d[id]
                };
            })
        };
    });

console.log("Column headers", data.columns);
console.log("Column headers without date", data.columns.slice(1));
// returns the sliced dataset
console.log("Slices",slices);  
// returns the first slice
console.log("First slice",slices[0]);
// returns the array in the first slice
console.log("A array",slices[0].values);   
// returns the date of the first row in the first slice
console.log("Date element",slices[0].values[0].date);  
// returns the array's length
console.log("Array length",(slices[0].values).length);
//----------------------------SCALES-----------------------------//

//-----------------------------AXES------------------------------//

//----------------------------LINES------------------------------//
   
//-------------------------2. DRAWING----------------------------//

//-----------------------------AXES------------------------------//

//----------------------------LINES------------------------------//


});