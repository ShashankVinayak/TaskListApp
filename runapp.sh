#################################################################    README   ###################################################################
##                                                                                                                                             ##
## This script is used to install, build and run Tasklist app.                                                                                 ##
##                                                                                                                                             ##
## Usage: sh runapp.sh                                                                                                                         ##
##          To run the app in development mode.                                                                                                ##
##                                                                                                                                             ##
## Usage: sh runapp.sh prod                                                                                                                    ##
##          To run the app in production mode.                                                                                                 ##
##                                                                                                                                             ##
## This app assumes that a mongodb service is created to start at bootup                                                                       ##
## Refer to https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#configure-a-windows-service-for-mongodb-community-edition to  ##
## create mongodb service on Windows                                                                                                           ##
##                                                                                                                                             ##
#################################################################################################################################################

#! /bin/sh

env=$1
if [ "$env" = "prod" ]; then
    env="0"
elif [ -z "$env" ]; then
    env="1"
else
    echo -e "Invalid argument!!!\nProvide 'prod'(without quotes) as argument if you wish to run app in production mode."
    exit
fi

pwd=`pwd`

## Kills any running node (server)
node_pid=`ps -ef | grep node | awk '{ print $2 }'`
while [ ! -z "$node_pid" ]
do
    kill -11 $node_pid > $pwd/kill.log 2> $pwd/kill.err
    node_pid=`ps -ef | grep node | awk '{ print $2 }'`
done

rm -rf $pwd/kill.log $pwd/kill.err

## Installs required node modules according to dependencies and dev-dependencies in package.json
ls -al $pwd/node_modules > $pwd/lslog.log 2> $pwd/lslog.err 
node_modules_status=$?
if [ "$node_modules_status" -ne "0" ]; then
    npm install
    npm_status=$?

    if [ "$npm_status" -ne "0" ]; then
        echo -e "------------------------------------------------"
        echo -e "Something went wrong while installing node modules.\nStopping Execution!!!\nPlease follow the manual installation instructions on github page.\nThank You!"
        echo -e "------------------------------------------------"
        exit
    else
        echo -e "------------------------------------------------"
        echo -e "node modules installed"
        echo -e "------------------------------------------------"
    fi
else
    echo -e "------------------------------------------------"
    echo -e "node modules already exists.\nSkipping 'npm intsall'!!!"
    echo -e "------------------------------------------------"
fi

rm -f $pwd/lslog.log $pwd/lslog.err

## Starts node server in the background
node server &
node_status=$?
sleep 5
if [ "$node_status" -ne "0" ]; then
    echo -e "------------------------------------------------"
    echo -e "Something went wrong while starting server.\nPlease start the server manually.\nThank You!"
    echo -e "------------------------------------------------"
    exit
else
    echo -e "------------------------------------------------"
    echo -e "Server started"
    echo -e "------------------------------------------------"
fi

## Builds the app (in production mode if argument is passed)
if [ "$env" -eq "0" ]; then
    ng build --prod
    ng_status=$?

    if [ "$ng_status" -ne "0" ]; then
        echo -e "------------------------------------------------"
        echo -e "Something went wrong while building the app.\nPlease follow the manual build instructions on github page.\nThank You!"
        echo -e "------------------------------------------------"
        exit
    fi
else
    ng build -w &
    ng_status=$?

    if [ "$ng_status" -ne "0" ]; then
        echo -e "------------------------------------------------"
        echo -e "Something went wrong while building the app.\nPlease follow the manual build instructions on github page.\nThank You!"
        echo -e "------------------------------------------------"
        exit
    fi
fi
