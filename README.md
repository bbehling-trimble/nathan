# How to Run - TODO

# Github Steps
* Clone Repo
* Create Remote Branch
* Make Changes
* Add how to run instructions to Readme
* Push Changes
* Create Pull Request

# Serve
* Use whatever you feel comfortable with, React CLI, vanilla Node, etc.
* Leave some instructions on how to run
 
 
# Tasks
* 3 Components
  * Map
  * Bootstrap HTML table
  * Bootstrap Button

Must use Create React App CLI to make a new app

Add a Leaflet map using OSM as the basemap.

The table will be populated using JSON data in this repo. 

Must use RxJS to get the data as an HTTP request and must update the table using an observable.

The button will be a component in each row. This button will zoom to a point contained in the data. Can use JS click event or RxJS observable.

Map, Table, and Button must be seperate React components. Give some thought to the relationships between these component, i.e. sibliing, child, inheritance, etc

This solution must be responsive.

Extra Credit - use TypeScript React

NOTE: There will be one item that is purposely designed not to work. Don't spend too much time on it. See if you can gracefully handle any errors caused by this issue.
