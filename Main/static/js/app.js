function init(){
    // pull data from the samples.json file
    d3.json("samples.json").then(data => {
        // create variables and names from samples.json
        var idNums = data.names;
        var dropdownMenu = d3.select("#selDataset");
        idNums.forEach(number => {
            // loop and populate the names into the dropdown box
            dropdownMenu.append("option") // add option to dropdown
            .property("value", number) // populate
            .text(number); // populate text 
        })
        
        //create inital bar graph
        var currentId = dropdownMenu.property("value");
        var idData = data.samples.filter(foo => foo.id == currentId)[0];
        d3.select('#bar').html('');
        let barData = [{
            type: 'bar',
            x: idData.sample_values.slice(0,10),
            // y: idData.otu_ids.slice(0,10),
            y: idData.otu_labels.slice(0,10),
            orientation: 'h'}];
        let barLayout = {
            title: "Cultures in Belly Button",
            height: 600,
            width: 800};
        Plotly.newPlot('bar', barData, barLayout);
    })
};

init();

// function popDemo(selectedId){};

function popBar(selected){
    d3.json('samples.json').then(data2 => {
        var idValue = data2.samples.filter(foo => foo.id == selected)[0];
        d3.select('#bar').html('');
        console.log('Idvalue:', idValue)
        let updateBar = [{
            x: idValue.sample_values.slice(0,10),
            // y: idValue.otu_ids.slice(0,10),
            y: idValue.otu_labels.slice(0,10),
            type: 'bar',
            orientation: 'h'}];
        let barLayout = {
            title: "Cultures in Belly Button",
            height: 600,
            width: 800};
        Plotly.newPlot('bar', updateBar, barLayout);
    });
};

function optionChanged(){
    console.log('option function triggered')
    var currentId = d3.select("#selDataset").property("value");
    console.log(currentId)
    popBar(currentId);
};


// // Call optionChaged when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", optionChanged);


// function popBubble(selectedId){};

// // Initializes the page with a default plot
// function updateDemos() {
//     d3.json("samples.json").then(dataGrab2 => {
//         var 
    

//     var dataID = mData.filter(data => data.id == demographics);
//     console.log(dataID)        
// }

// updateDemos();


// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", optionChanged);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");

//   // Initialize x and y arrays
//   var x = [];
//   var y = [];

//   if (dataset === 'dataset1') {
//     x = [1, 2, 3, 4, 5];
//     y = [1, 2, 4, 8, 16];
//   }

//   else if (dataset === 'dataset2') {
//     x = [10, 20, 30, 40, 50];
//     y = [1, 10, 100, 1000, 10000];
//   }

//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
// }

