var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: 1,
      title: { text: "Belly Button Washing Frequency" },
      type: "indicator",
      mode: "gauge",
      gauge: {
        axis: [{ range: [null, 10] }
            {dticks},
        steps: [
          { range: [0, 1], color: "lightgray" },
          { range: [1, 2], color: "gray" },
          { range: [2, 3], color: "lightgray" },
          { range: [3, 4], color: "gray" },
          { range: [5, 6], color: "lightgray" },
          { range: [6, 7], color: "gray" },
          { range: [7, 8], color: "lightgray" },
          { range: [8, 9], color: "gray" },
          { range: [9, 10], color: "lightgray" }
        ],
        
        // threshold: {
        // line: { color: "red", width: 4 },
        // thickness: 0.75,
        // value: 490
        // }
      }
    }
  ];
  
  var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', data, layout);
  