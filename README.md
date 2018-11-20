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
* [View 'How To Run' Section](#How-To-Run---Instructions)
 
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

# How to Run - Instructions

* Clone repo to local machine
* Run `yarn install` or `npm install` to install dependencies
* App can be served in development mode or as production build

**Run in Development Mode**
1. Run `yarn start` to start development server
1. Visit `http://localhost:3000` to view application

**Run Production Build**
1. Run `yarn build` to build production files
1. Run `yarn global add serve` to install serve package dependencies
1. Run `serve -s build` to deploy production server
1. Visit `http://localhost:5000` to view application

## Troubleshooting

**If data table does not automatically populate, wait a few seconds and refresh page to 'wake up' heroku api**
