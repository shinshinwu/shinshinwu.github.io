// with more data could arrange the node size accordingly and make the connections make sense. All nodes can also categorized in different groups and different group can carry different values


var dataset = {
  nodes: [
          { name: "Alfred" },
          { name: "Anna" },
          { name: "Anthony" },
          { name: "Brittney" },
          { name: "CM" },
          { name: "CJ" },
          { name: "David" },
          { name: "Devin" },
          { name: "Devon" },
          { name: "Forrest" },
          { name: "Gaille" },
          { name: "KevinJH" },
          { name: "Jesse" },
          { name: "Joe" },
          { name: "Juan" },
          { name: "Kevin" },
          { name: "KevinX" },
          { name: "Lance" },
          { name: "Leonard" },
          { name: "Liorr" },
          { name: "MarkP" },
          { name: "MarkR" },
          { name: "Michelle" },
          { name: "Paul" },
          { name: "Philip" },
          { name: "Quynh" },
          { name: "Rich" },
          { name: "Sean" },
          { name: "Stephen" },
          { name: "Steven" },
          { name: "TinaT" },
          { name: "TinaW" },
          { name: "Valerie" },
          { name: "Vincent" }
  ],
  edges: [
          {source: 1, target: 0},
          {source: 2, target: 0},
          {source: 3, target: 0},
          {source: 3, target: 2},
          {source: 4, target: 0},
          {source: 5, target: 0},
          {source: 6, target: 0},
          {source: 7, target: 0},
          {source: 8, target: 0},
          {source: 9, target: 0},
          {source: 11, target: 10},
          {source: 11, target: 3},
          {source: 11, target: 2},
          {source: 11, target: 0},
          {source: 12, target: 11},
          {source: 13, target: 11},
          {source: 14, target: 11},
          {source: 15, target: 11},
          {source: 17, target: 16},
          {source: 18, target: 16},
          {source: 18, target: 17},
          {source: 19, target: 16},
          {source: 19, target: 17},
          {source: 19, target: 18},
          {source: 20, target: 16},
          {source: 20, target: 17},
          {source: 20, target: 18},
          {source: 20, target: 19},
          {source: 21, target: 16},
          {source: 21, target: 17},
          {source: 21, target: 18},
          {source: 21, target: 19},
          {source: 21, target: 20},
          {source: 22, target: 16},
          {source: 22, target: 17},
          {source: 22, target: 18},
          {source: 22, target: 19},
          {source: 22, target: 20},
          {source: 22, target: 21},
          {source: 23, target: 16},
          {source: 23, target: 17},
          {source: 23, target: 18},
          {source: 23, target: 19},
          {source: 23, target: 20},
          {source: 23, target: 21},
          {source: 23, target: 22},
          {source: 23, target: 12},
          {source: 23, target: 11},
          {source: 24, target: 23},
          {source: 24, target: 11},
          {source: 25, target: 24},
          {source: 25, target: 23},
          {source: 25, target: 11},
          {source: 26, target: 24},
          {source: 26, target: 11},
          {source: 26, target: 16},
          {source: 26, target: 25},
          {source: 27, target: 11},
          {source: 27, target: 23},
          {source: 27, target: 25},
          {source: 27, target: 24},
          {source: 27, target: 26},
          {source: 28, target: 11},
          {source: 28, target: 27},
          {source: 29, target: 23},
          {source: 29, target: 27},
          {source: 29, target: 11},
          {source: 30, target: 23},
          {source: 31, target: 30},
          {source: 31, target: 11},
          {source: 31, target: 23},
          {source: 31, target: 27},
          {source: 32, target: 11},
          {source: 33, target: 11},
          {source: 33, target: 27}
  ]
};

var w = 1000;
var h = 600;

var force = d3.layout.force()
                     .nodes(dataset.nodes)
                     .links(dataset.edges)
                     .size([w, h])
                     .linkDistance([125])
                     .charge([-100])
                     .start();

var colors = d3.scale.category20();

// adding some tooltip labels

var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d){
                  return d.name + "";
            });

var svg = d3.select("#container")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

svg.call(tip);

var edges = svg.selectAll("line")
               .data(dataset.edges)
               .enter()
               .append("line")
               .style("stroke", "#ccc")
               .style("stroke-width", 1);

var nodes = svg.selectAll("circle")
               .data(dataset.nodes)
               .enter()
               .append("circle")
               .attr("r", function(d, i){
                      return Math.ceil(Math.random() * i + 5)
               })
               .style("stroke", "#fff")
               .style("stroke-width", 3)
               .style("fill", function(d, i){
                        return colors(i);
               })
               .on("mouseover", function(){
                      d3.select(this)
                                .attr("fill", "orange");
               })
               .on("mouseout", function(d){
                      d3.select(this)
                                  .transition()
                                  .duration(250)
                                  .attr("fill", "rgb(0, 0, " + (d * 10) + ")");
               })
               .call(force.drag)
               .on('mouseover', tip.show)
               .on('mouseout', tip.hide)
               .on('dblclick', connectedNodes);

force.on("tick", function(){

edges.attr("x1", function(d) { return d.source.x; })
     .attr("y1", function(d) { return d.source.y; })
     .attr("x2", function(d) { return d.target.x; })
     .attr("y2", function(d) { return d.target.y; });

nodes.attr("cx", function(d) { return d.x; })
     .attr("cy", function(d) { return d.y; });
});

// Adding some scripts for double click to show direct neighbor
//Toggle stores whether the highlighting is on
var toggle = 0;
//Create an array logging what is connected to what
var linkedByIndex = {};
for (i = 0; i < dataset.nodes.length; i++) {
    linkedByIndex[i + "," + i] = 1;
};
dataset.edges.forEach(function (d) {
    linkedByIndex[d.source.index + "," + d.target.index] = 1;
});
//This function looks up whether a pair are neighbours
function neighboring(a, b) {
    return linkedByIndex[a.index + "," + b.index];
}
function connectedNodes() {
    if (toggle == 0) {
        //Reduce the opacity of all but the neighbouring nodes
        d = d3.select(this).node().__data__;
        nodes.style("opacity", function (o) {
            return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
        });
        edges.style("opacity", function (o) {
            return d.index==o.source.index | d.index==o.target.index ? 1 : 0.1;
        });
        //Reduce the op
        toggle = 1;
    } else {
        //Put them back to opacity=1
        nodes.style("opacity", 1);
        edges.style("opacity", 1);
        toggle = 0;
    }
}