// // ///// BONUS ATTEMPT HERE
// function popGauage(selected){
//   d3.json('samples.json').then(data => {
//     let demoData = data.metadata;
//     let currentDemo = demoData.filter(foo => foo.id == selected)[0];
//     let washCount = currentDemo.wfreq;
// //     // formatting for gauage
// //     let data = [{
// //       domain: { x: [0, 1], y: [0, 1] },
// //       value: washCount,
// //       title: { text: "Belly Button Washing Frequency" },
// //       type: "indicator",
// //       mode: "gauge",
// //       gauge: {
// //         axis: { range: [null, 10] },
// //         steps: [
// //           { range: [0, 1], color: "lightgray" },
// //           { range: [1, 2], color: "gray" },
// //           { range: [2, 3], color: "lightgray" },
// //           { range: [3, 4], color: "gray" },
// //           { range: [5, 6], color: "lightgray" },
// //           { range: [6, 7], color: "gray" },
// //           { range: [7, 8], color: "lightgray" },
// //           { range: [8, 9], color: "gray" },
// //           { range: [9, 10], color: "lightgray" }] // close steps
// //         }//close gauge
// //     }];//close data
// //     let layout = { width: 300, height: 200, margin: { t: 0, b: 0 }};
// //     Plotly.newPlot('gauge', data, layout);
// //   });
// // };


function popGauage(selected){
  d3.json('samples.json').then(data => {
  let demoData = data.metadata;
  let currentDemo = demoData.filter(foo => foo.id == selected)[0];
  let washCount = currentDemo.wfreq;
  var data = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: washCount,
      title: { text: "Belly Button Washing Frequency" },
      type: "indicator",
      mode: "gauge",
      gauge: {
        axis: { range: [null, 10] },
        steps: [
          { range: [0, 1], color: "lightgray" },
          { range: [1, 2], color: "gray" },
          { range: [2, 3], color: "lightgray" },
          { range: [3, 4], color: "gray" },
          { range: [5, 6], color: "lightgray" },
          { range: [6, 7], color: "gray" },
          { range: [7, 8], color: "lightgray" },
          { range: [8, 9], color: "gray" },
          { range: [9, 10], color: "lightgray" }]}
    }
  ];
  var layout = { width: 300, height: 200, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', data, layout);

  });
};