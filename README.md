# Baseball Stats Sample Web Application

This web application displays baseball player salaray information for the Milwaukee Brewers and Houston Astros from 1985 to 2016.  The data is retrieved via an API call to an Azure Function app.

This simple application consists of 2 files:
* index.html - contains html to display the data and loads the required javascript
* app.js - loads the data that is bound to the html

This application uses the following javascript libraries/frameworks:
* [Vue.js](https://vuejs.org/) - used to create data models and bind data
* [Axios](https://github.com/axios/axios) - used to make the api call to get the data
