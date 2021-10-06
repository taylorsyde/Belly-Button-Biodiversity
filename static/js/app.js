function init(){
    // pull data from the samples.json file
    d3.json("samples.json").then(data => {
        // create variables and names from samples.json
        var idNums = data.names;
        var dropdownMenu = d3.select("#selDataset");
        idNums.forEach(number => {
            // loop and populate the names into the dropdown box
            dropdownMenu.append("option") // add option to dropdown
            .property("value", number) // variable name
            .text(number); // populate text 
        })
        
        //create inital visulizations
        var initId = dropdownMenu.property("value");
        popBar(initId);
        popDemo(initId);
        popBubble(initId);
        popGauage(initId)
    })
};

// initialize the visulaizations
init();

// formatting fuction
function capitalize(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

// populate Demographics Panel
function popDemo(selected){
    d3.json('samples.json').then(data => {
        let demoData = data.metadata;
        var currentDemo = demoData.filter(foo => foo.id == selected)[0];
        console.log(currentDemo);
        var demoPanel = d3.select(".panel-body")
        d3.select('#sample-metadata').html(''); // clears out old demo
        Object.entries(currentDemo).forEach((item) => {   
            demoPanel.append("h5").text(capitalize(item[0]) + ": " + item[1] + "\n");    
        });
    });
};

// populates Bar graph
function popBar(selected){
    d3.json('samples.json').then(data => {
        var currentId = data.samples.filter(foo => foo.id == selected)[0];
        d3.select('#bar').html(''); // clears out old graph
        console.log('Idvalue:', currentId)
        let updateBar = [{
            x: currentId.sample_values.slice(0,10),
            y: currentId.otu_labels.slice(0,10),
            type: 'bar',
            orientation: 'h'}];
        let barLayout = {
            title: "Cultures in Belly Button",
            height: 300,
            width: 600};
        Plotly.newPlot('bar', updateBar, barLayout);
    });
};

// populate Bubble Chart
function popBubble(selected){
    d3.json('samples.json').then(data => {
        var currentId = data.samples.filter(foo => foo.id == selected)[0];
        d3.select('#bubble').html(''); // clears out old bubble
        console.log(currentId.otu_ids)
        let updateBubble = [{
            x: currentId.otu_ids,
            y: currentId.sample_values,
            mode: 'markers',
            marker: {
                color: 'YlOrRd',
                size: currentId.sample_values}
        }];
        let layout = {
            title: `Cultures Present in Subject ${currentId.id}'s Bellybutton`,
            height: 500,
            width: 1000,
            xaxis: {title: "Operational Taxonomic Unit (OTU)"}
        };
        Plotly.newPlot('bubble', updateBubble, layout);
    });
};

// updates visualizations when id is changed
function optionChanged(){
    console.log('option function triggered')
    var currentId = d3.select("#selDataset").property("value");
    console.log(currentId)
    popBar(currentId);
    popDemo(currentId);
    popBubble(currentId);
    popGauage(currentId);
};
  