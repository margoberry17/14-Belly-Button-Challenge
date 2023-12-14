Background:

I will build an interactive dashboard to explore the Belly Button Biodiversity dataset which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Steps:

1. I used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

        ![Top10_OTUsPresent](https://github.com/margoberry17/14-Belly-Button-Challenge/assets/136475202/88c75bdd-38df-48b9-a7fd-d705fcdeb941)

3. I created a bubble chart that displays each sample.

     (INSERT BUBLE CHART)

4. I displayed the sample metadata, i.e., an individual's demographic information.

5. I displayed each key-value pair from the metadata JSON object somewhere on the page.
6. I updated all the plots when a new sample is selected.
   (DASHBOARD)


In Addition:

I adapted the Gauge Chart from "https://plot.ly/javascript/gauge-charts/" to plot the weekly washing frequency of the individual.

I modified the example gauge code to account for values ranging from 0 through 9.

I updated the chart whenever a new sample is selected.


        
