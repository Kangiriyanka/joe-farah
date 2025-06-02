import * as d3 from "d3";

const data = {
    
  "nodes" : [
      {id: "Project Programming", group: "technical",fx: 0, fy: 10  },

      // Adding musical-related nodes
      {id: "Musical Routine", group: "musical", },
      {id: "Dance", group: "musical-routine", },
      {id: "Juggling", group: "musical-routine"},
      {id: "Instrument", group: "musical-routine", },
      {id: "Ableton", group: "presentation", },
      {id: "Resolve", group: "presentation" },
      {id: "Walking", group: "dance-children", },
      {id: "Stretching", group: "dance-children", },
      {id: "Piano", group: "instrument-children", },
      {id: "Guitar", group: "instrument-children", },
      {id: "Harmonica", group: "instrument-children", },

      // Adding cartoon-related nodes
      {id: "Cartoon", group: "cartoon", },
      {id: "Drawing", group: "cartoon-children", },
      {id: "Animation", group: "cartoon-children", },
      {id: "Languages", group: "cartoon-children", },
      // Adding other nodes
      {id: "Feedback", group: "feedback", },


  ],

  "links" : [

      // Adding musical-related links
      {source: "Project Programming", target: "Musical Routine", value: 10},
      {source: "Dance", target: "Musical Routine", value: 1},
      {source: "Juggling", target: "Musical Routine", value: 1},
      {source: "Instrument", target: "Musical Routine", value: 1},
      {source: "Walking", target: "Dance", value: 1},
      {source: "Stretching", target: "Dance", value: 1},
      {source: "Piano", target: "Instrument", value: 1},
      {source: "Guitar", target: "Instrument", value: 1},
      {source: "Harmonica", target: "Instrument", value: 1},
      {source: "Ableton", target: "Musical Routine", value: 1},
      {source: "Resolve", target: "Musical Routine", value: 1},
      // Adding cartoon-related links
      {source: "Project Programming", target: "Cartoon", value: 10},
      {source: "Cartoon", target: "Drawing", value: 1},
      {source: "Cartoon", target: "Animation", value: 1},
      {source: "Cartoon", target: "Languages", value: 1},
      // Adding other links
      {source: "Project Programming", target: "Feedback", value: 10},
  ]


}

const forcegraph = (data) => {
    // Specify the dimensions of the chart.
    const width = 800;
    const height = 600;
  
    // Specify the color scale.
    const color = d3.scaleOrdinal(d3.schemeTableau10);
  
    // The force simulation mutates links and nodes, so create a copy
    // so that re-evaluating this cell produces the same result.
    const links = data.links.map(d => ({...d}));
    const nodes = data.nodes.map(d => ({...d}));
  
    // Create a simulation with several forces.
    // forceLink's id accessor allows you to use named sources and targets i.e you don't have to use indices.
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-100))
        .force("x", d3.forceX())
        .force("y", d3.forceY())
        .force("collide", d3.forceCollide().radius(60));
  
    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("style", "max-width: 100%; height: auto; padding: 1rem; margin: 1rem;");
       
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
        .attr("r", d=> d.id === "Project Programming" ? 80 :35)
        .attr("fill", d => color(d.group));

      const labels = svg.append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
          .attr("x", d => d.x) // Initial x position
          .attr("y", d => d.y) // Initial y position
          .attr("dy", 5) // Offset to center the text vertically
          .attr("text-anchor", "middle") // Center the text horizontally
          .attr("font-size", "16px") // Font size for the labels
          .attr("fill", "#000") // Text color
          .text(d => d.id); // Use the `id` property as the label
  
      const text= svg.append("text")
        .attr("x", -width/ 2.5 )
        .attr("y", -height / 2.5 - 40)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "#333")
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

