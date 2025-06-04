import * as d3 from "d3";

/*
From: https://www.d3indepth.com/force-layout/

forceCenter (for setting the center of gravity of the system)
forceManyBody (for making elements attract or repel one another)
forceCollide (for preventing elements overlapping)
forceX and forceY (for attracting elements to a given point)
forceLink (for creating a fixed distance between connected elements)


Strength is by default 0.1

*/

const data = {
    
  "nodes" : [
      {id: "Programming", group: "technical", fx: 0, fy: 0, radius: 120  },

      // Adding musical-related nodes
      {id: "Routine", group: "musical", radius: 75 },
      {id: "Dance", group: "musical-routine",radius: 75 },
      {id: "Juggling", group: "musical-routine", radius: 75 },
      {id: "Music", group: "musical-routine", radius: 75 },
      {id: "Ableton", group: "presentation",radius: 75  },
      {id: "Resolve", group: "presentation", radius: 75  },
      {id: "Walking", group: "dance-children", radius: 75 },
      {id: "Stretching", group: "dance-children",radius: 75  },
      {id: "Piano", group: "Music-children",radius: 75  },
      {id: "Guitar", group: "Music-children", radius: 75 },
      {id: "Harmonica", group: "Music-children",radius: 75  },

      // Adding cartoon-related nodes
      {id: "Cartoon", group: "cartoon", radius: 75 },
      {id: "Drawing", group: "cartoon-children",radius: 75  },
      {id: "Animation", group: "cartoon-children", radius: 75 },
      {id: "Languages", group: "cartoon-children", radius: 75 },
      // Adding other nodes
      {id: "Feedback", group: "feedback",radius: 75  },


  ],

  "links" : [

      // Adding musical-related links
      {source: "Programming", target: "Routine", value: 50},
      {source: "Dance", target: "Routine", value: 1},
      {source: "Juggling", target: "Routine", value: 1},
      {source: "Music", target: "Routine", value: 1},
      {source: "Walking", target: "Dance", value: 1},
      {source: "Stretching", target: "Dance", value: 1},
      {source: "Piano", target: "Music", value: 1},
      {source: "Guitar", target: "Music", value: 1},
      {source: "Harmonica", target: "Music", value: 1},
      {source: "Ableton", target: "Routine", value: 1},
      {source: "Resolve", target: "Routine", value: 1},
      // Adding cartoon-related links
      {source: "Programming", target: "Cartoon", value: 50},
      {source: "Cartoon", target: "Drawing", value: 1},
      {source: "Cartoon", target: "Animation", value: 1},
      {source: "Cartoon", target: "Languages", value: 1},
      // Adding other links
      {source: "Programming", target: "Feedback", value: 50},
  ]


}

const forcegraph = (data) => {
    // Specify the dimensions of the chart.
    const width = 700;
    const height = 700;
  
    // Specify the color scale.
    const color = d3.scaleOrdinal(d3.schemeTableau10);
  
    // The force simulation mutates links and nodes, so create a copy
    // so that re-evaluating this cell produces the same result.
    const links = data.links.map(d => ({...d}));
    const nodes = data.nodes.map(d => ({...d}));
  
    // Create a simulation with several forces.
    // forceLink's id accessor allows you to use named sources and targets i.e you don't have to use indices.
    const simulation = d3.forceSimulation(nodes)
        .force("center", d3.forceCenter(0, 0))
        .force("link", d3.forceLink(links).id(d => d.id).distance(50))
        .force("charge", d3.forceManyBody().strength(-50))
        .force("x", d3.forceX(d => {
       
          if (d.group === "musical") return width/2 ; 
          if (d.group === "musical-routine") return width/2 ; 
      
       
          return 0; 
        }))
        .force("y", d3.forceY((d => {
       
          if (d.group === "musical") return height ; 
          if (d.group === "musical-routine") return height/ 4 ; 
   
        
       
          return 0; 
        })))
        .force("collide", d3.forceCollide()
              .radius(d => d.radius * 0.85)
              .strength(0.8) 
        );
  
    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 1.9, -height / 1.9, width, height])
        .attr("style", "max-width: 95%; height: 80%; padding: 1.5em; margin: 1rem;");
       
    // Add a line for each link, and a circle for each node.
    const link = svg.append("g")
        .attr("stroke", "#888")
        .attr("stroke-opacity", 0.8)
      .selectAll("line")
      .data(links)
      .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value));
  
    const node = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
        .attr("r", d=> d.radius/1.5 )
        .attr("fill", d => color(d.group));

      const labels = svg.append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
          .attr("x", d => d.x) // Initial x position
          .attr("y", d => d.y) // Initial y position
          .attr("dy", 5) // Offset to center the text vertically
          .attr("text-anchor", "middle") // Center the text horizontally
          .attr("font-size", "1.2rem") // Font size for the labels
          .attr("fill", "#000") // Text color
          .attr("padding", "1rem") // Font family for the labels
          .text(d => d.id); // Use the `id` property as the label
  
      const text= svg.append("text")
        .attr("x", -width/ 2.5 )
        .attr("y", -height / 2.5 - 40)
        .attr("text-anchor", "middle")
        .attr("font-size", "20x")
        .attr("font-weight", "bold")
        .attr("font-family", "Gabarito, sans-serif")
      
        .text("いつでもどこでも");
    node.append("title")
        .text(d => d.id);
  
    // Add a drag behavior.
    node.call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));
    
    // Set the position attributes of links and nodes each time the simulation ticks.
    simulation.on("tick", () => {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);
  
      node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);

      labels
          .attr("x", d => d.x)
          .attr("y", d => d.y);
    });
  
    // Reheat the simulation when drag starts, and fix the subject position.
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
  
    // Update the subject (dragged node) position during drag.
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
  
    // Restore the target alpha so the simulation cools after dragging ends.
    // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
  
  
    return svg.node();
  }




export default forcegraph(data);

