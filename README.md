# Tasklist

### A Simple To-Do MEAN(2) App
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.25.5.

## Prerequisites

* [Node and npm](https://nodejs.org/en/download/) (duhhh! You don't say!)  
* [MongoDB](https://www.mongodb.com/download-center)  
* [angular-cli](https://github.com/angular/angular-cli)  

## How to get the app Up and Running

1. Clone this repo / Download and extract the zip.
2. On Terminal
    * cd(Change Directory) to the folder containing package.json.
    * Run `npm install` (Assuming you have installed node and npm).
    * Run `ng build --prod` (Creates `dist` folder).
    * Start [mongodb](https://docs.mongodb.com/manual/administration/install-community/) on another terminal.
    * Run `node server` to kickstart the app!


#### Note : runapp.sh can be used to build and run the app , but the above method is preferred.

* Script is tested only on Windows.
* The Script `runapp.sh` assumes mongodb Windows service is created upfront.
* Refer [this](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#configure-a-windows-service-for-mongodb-community-edition) to create MongoDB Service on Windows.
