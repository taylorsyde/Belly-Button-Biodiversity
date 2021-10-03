// Populate dropdown menu with id numbers

// pull data from the samples.json file
d3.json("samples.json").then(sampleData => {
    // create the names array
    var idNums = sampleData.names;
    var dropdownMenu = d3.select("#selDataset");
    idNums.forEach(number => {
        // loop and populate the names into the dropdown box
        dropdownMenu.append("option") // add option to dropdown
        .property("value", number) // populate
        .text(number); // populate text 
    })
})


// Initializes the page with a default plot
function updateDemos() {
    d3.json("samples.json").then(sampleData => {

    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }];

  Plotly.newPlot("bar", data);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  var x = [];
  var y = [];

  if (dataset === 'dataset1') {
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 4, 8, 16];
  }

  else if (dataset === 'dataset2') {
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();
