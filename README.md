Background:
---------------

I built an interactive dashboard to explore the Belly Button Biodiversity dataset (samples.json) which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

I used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

Dashboard:
---------------
Pull Down
- Select the Test Subject ID No. to update all the plots of that chosen sample.

![PullDown](https://github.com/margoberry17/14-Belly-Button-Challenge/assets/136475202/a7fd1d87-ca3d-4ce2-9f95-804504569ebc)

Horizontal Bar Graph
- A horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
- The Top 10 OTUs Present in the specific Test Subject ID No.
- When you hover over a bar, the otu_labels are presented as the hovertext

![Top10_OTUsPresent](https://github.com/margoberry17/14-Belly-Button-Challenge/assets/136475202/ef6e7aea-de2f-4d0b-bac7-16db9b314fec)

Bubble Chart
- A bubble chart that displays each sample, where the larger the sample value is the larger the bubble size.
- The colors of the bubbles are based on otu_ids, and the hovertext are the otu_labels.

![BacteriaPerSample](https://github.com/margoberry17/14-Belly-Button-Challenge/assets/136475202/0119b9c3-222e-4e41-8005-84f95b367cfd)

Demographic Info
- A display of the sample metadata, i.e., an individual's demographic information.

![DemographicInfo](https://github.com/margoberry17/14-Belly-Button-Challenge/assets/136475202/c4ee02e9-5e9c-4827-920f-9cf42419a56c)

Gauge Chart
- The weekly washing frequency (wfreq) of the individual displayed with a teal colored bar
  
![BellyButtonWashingFreq](https://github.com/margoberry17/14-Belly-Button-Challenge/assets/136475202/6f2fc0d4-1978-4e1d-a7aa-2d04fbc2343d)


        
