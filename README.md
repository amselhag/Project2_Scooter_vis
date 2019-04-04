# project-2-dockless-vs-weather
<h1 align=center> Austin, Texas Dockless Vehicle Study </h1> <br>

![Dockless Scooter](images.jpg) <br>

### Project Members:
#### Petros Paterakis, Michael Alrafati, Mounica Pokala, Amro Elhag, Becky Bobba

## What is the correlation between dockless vehicle usage & weather in Austin?             
## Scooters trips vs Austin city areas
## Scooter trips per day vs weather description


### Overview: 

* **Extraction** (from 2 data sources): <br>
	The [City of Austin](https://data.austintexas.gov/Transportation-and-Mobility/Dockless-Vehicle-Trips/7d8e-dm7r "City of Austin Dataset") maintains a dataset for dockless vehicle usage in the city, and this was imported in csv format into a python jupyter notebook file for further analysis.  
	Weather data was collected from Austin Historical weather data (https://www.worldweatheronline.com/austin-weather-history/texas/us.aspx) and extracted as CSV format and converted it into Pandas Dataframe in Jupyter Notebook.  
	*In this report, the two sets will be referred to as the 'Dockless Dataset', and the 'Weather Dataset'*. 
* **Transformation**: <br>
	All steps in the transformation process were performed within python jupyter notebook files.  
	The 'Dockless Dataset' is relatively recent, and only included data starting on April 2018, through the present day.  This data was downloaded as a csv, and was converted into a pandas dataframe.  
	API queries on the 'Weather Dataset' were restricted to match the dates in the 'Dockless Dataset'.  Futhermore, we elected to use the CSV to query the following fields, to allow for the most effective analysis: temperature, dew point, relative humidity, percipitation (hourly), wind speed , pressure at sea level.   
	Both datasets included data which was rather clean, so minimal transformation was required.  Each dataset was first converted into a python pandas dataframe.  The raw date & time fields were different among the two datasets, so they were rounded to the hour and converted from a time string into a datetime format. Finally, the dataframes were transposed to convert the list of dictionaries to a dictionary of lists, to prepare them for the final loading step.   
  <br>
* **Loading**: <br>
	The datasets were loaded into two distinct collections wihtin a Mongo database (NoSQL) via pymongo.  This data will be maintained locally, so that further analysis can be conducted on it in the future.  

* **Visualization**: <br>
To access the visualization go to Scooter_visualization/templates/index.html

	
<hr><br>

### Other Information: <br>

* **Further Potential Analysis**:
	- Determine regular usage patterns as a foundation, to be able to compare/contrast abnormal behaviour,
	- Compare current trends in data with traffic information (new dataset required), to determine correlation,
		- Google maps or a similar API can be used,
	- Analyze scooter usage during different weather conditions,
	- Compare usage to income data to determine correlation (new dataset required).
* **Challenges**:
	- The SRCC API did not have good documentation, and some trial and error was required to understand how to perform the desired queries, 
	- The time fields were retrieved as date strings, but needed to be converted into datetime so that they could be read properly by pandas,  
	- Converting the data from a pandas dataframe into dictionary format was challening.
