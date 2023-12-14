//Set url as a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Use the D3 library to read in samples.json from the URL
d3.json(url).then(function(data) {
    console.log(data);
});

//Initialize the dropdown and dashboard
function init() {
    let dropdownMenu = d3.select("#selDataset");
    
    //Use the list of names to populate the dropdown options
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);
        
        //An array of id names and iterating through the array
        let names = data.names;
        names.forEach((name) => {
            dropdownMenu.append("option").text(name).property("value", name);
        });

        //Use the first name from the list to build the initial plots
        let name = names[0];
        console.log(name);
        buildMetadata(name);
        buildBarChart(name);
        buildBubbleChart(name);
        buildGaugeChart(name);
    });
};

//Make the Demographics Panel
function buildMetadata(selection) {
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        //An array of metadata objects & filter the data where id = sample
        let metadata = data.metadata;
        let filteredData =metadata.filter((meta) => meta.id == selection);

        let obj = filteredData[0]
        d3.select("#sample-metadata").html("");
        let entries = Object.entries(obj);
        entries.forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
        console.log(entries);
    });
}

//Make the Bar Chart
function buildBarChart(selection) {
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        let samples = data.samples;
        let filteredData = samples.filter((sample) => sample.id == selection);
        let obj = filteredData[0];

        let trace = [{
            x: obj.sample_values.slice(0,10).reverse(),
            y: obj.otu_ids.slice(0,10).map((id) => `OTU ${id}`).reverse(),
            text: obj.otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
            marker: {color: "rbg(200,100,100)"}
        }];
        let layout = {
            title: {text: "<b>Top 10 OTUs Present</b>", font: {size: 20}}
        };

        Plotly.newPlot("bar", trace, layout);
    });
}

//Make the Bubble Chart
function buildBubbleChart(selection) {
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        let samples = data.samples;
        let filteredData = samples.filter((sample) => sample.id == selection);
        let obj = filteredData[0];

        let trace = [{
            x: obj.otu_ids,
            y: obj.sample_values,
            text: obj.otu_labels,
            mode: "markers",
            marker: {
                size: obj.sample_values,
                color: obj.otu_ids,
                colorscale: "YlGnBu"
            }
        }];
        let layout = {
            xaxis: {title: "OTU ID"},
            title: {text: "<b>Bacteria Per Sample</b>", font: {size: 20}
        }};

        Plotly.newPlot("bubble", trace, layout);
    });
}


//Make the Gauge Chart
function buildGaugeChart(selection) {
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        //An array of metadata objects & filter the data where id = sample
        let metadata = data.metadata;
        let filteredData =metadata.filter((meta) => meta.id == selection);
        
        let obj = filteredData[0];

        let trace = [{
            domain: {x: [0,1], y: [0,1]},
            value: obj.wfreq,
            title: {text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: {size: 20}},
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [null,10]},
                bar: {color: "rgb(100,100,100)"},
                steps: [
                    {range: [0,1], color: "rgb(90,245,250)"},
                    {range: [1,2], color: "rgb(80,235,240)"},
                    {range: [2,3], color: "rgb(70,225,230)"},
                    {range: [3,4], color: "rgb(60,215,220)"},
                    {range: [4,5], color: "rgb(50,205,210)"},
                    {range: [5,6], color: "rgb(40,195,200)"},
                    {range: [6,7], color: "rgb(30,185,190)"},
                    {range: [7,8], color: "rgb(20,175,180)"},
                    {range: [8,9], color: "rgb(10,165,170)"},
                    {range: [9,10], color: "rgb(0,155,160)"},
                ]
            }
        }];

        Plotly.newPlot("gauge", trace);
    });
}

//Toggle to new plots when the option changes
function optionChanged(selection) {
    buildMetadata(selection);
    buildBarChart(selection);
    buildBubbleChart(selection);
    buildGaugeChart(selection)
}

init();