# Welcome to Axon 2022 Coding Challenge

## **Testing Environments**

## Running

```bash
cd event-api
 fastapi -c config.js
```

![Blank diagram](https://user-images.githubusercontent.com/1214659/187010647-0b9f0fea-72dd-40d6-ae9c-30b91c41af9c.png)


We will provide a dockerized testing environment for each team to run on their own local machines. We make sure that the testing environment can be run on almost every machine, with little to no setup. 

### **Prerequisite**

In order to run the testing environment on your local machine, you will need to install:

* Git: prefer ```2.32.1``` or above
* Docker: prefer ```20.10.x``` or above
* Docker-Compose: prefer ```1.29.x``` or above

### **Installation**

* Fork this repo into your namespace
* Git clone this repo from your personal link
* Have docker run on your machine
* Execute ```docker-compose up```
* After this, you can access the application with `http://localhost:8000`

### **The Environment already installed**

* A Running Event Publisher service, which will generate and push event to the Dispatching Queue randomly.
* A Running Dispatching Queue, which is based on the RabbitMQ.
* A Nginx which has been configured to serve all the static assets of the Location Tracking Application.
* Static assets to render the Location Tracking Application

### **The Environment does not provide or guarantee**

* Any implementation of the Event Consumer service.
* The Location Tracking Application is working as expected.


## **Requirements**

Within the scope of this coding challenge event, we would like your team to work together with us, to deliver the correct end to end solution to satisfy the commander’s needs on our Testing Environment. In order to accomplish this goal, your team will need to identify and resolve all the missing pieces of the testing system, which can be broken down into these 3 milestones:


### 1. Implement the *Event Consumer* service with the specific requirements. 

***Acceptance criteria:***

1. The service can be written in any programming language that your team is familiar with.
2. The service should be implemented with clear, maintainable design to ease up the maintenance cost.
3. The service must filter out and process all the relevant events relating to the incidents and officers correctly, according to our Technical design document.
4. The service must implement a correct Incident - Officer Mapping Algorithm to select a nearest available officer for each incident, according to our Technical design document.

### 2. Integrate your Event Consumer to the Testing Environment

***Acceptance criteria:***

1. The service must subscribes to the *Dispatching Queue* configured on the Testing Environment ** successfully.
2. The service must provide an external REST API to publish the incident-police mapping to other external services/client
3. The service must expose the correct host and port according to the Nginx configuration, so that the Nginx can route the incoming traffic to the service successfully.

### 3. Discover and resolve any remaining issues in the system

***Acceptance criteria:***

1. Discover and correct all the integration issues that might crash the system.
2. Complete the Location Tracking Application to render the final matching result on the map.



## **Coordinate your teamwork**

You can apply any coordinating method that works with your team. However, we encourage you apply the suitable git branching model on this public repo review and merge all your codes together. At the end of the day, we would like to avoid the term ```It works on my machine, but...```


## **Submit your solution**

Once your team is ready to submit your solution, please follow this process:


* Merge all your code into your development branch, make sure your Git workspace is clean.
* Create a new release branch for you team.
* Your release branch should follow this format: /release/team_<<TEAM_NUMBER>>
* Push your solution to the remote release branch.
* Notify your supervisor that you’re ready.
* Follow the supervisor’s guidance, switch to the Grading docker version.
* Run your solution against the Grading docker version.
* Screenshot the final result on your location tracking application. The screenshot should cover all your browser.
* Rename your screenshot as: release_team_<<TEAM_NUMBER>>.jpg.
* Add and push the screenshot to your release branch.
* Close everything and relax.

## **Available References**

    * RabbitMQ client reference: https://www.rabbitmq.com/getstarted.html
    * Nginx: https://nginx.org/en/docs/beginners_guide.html
    * PixiJS: https://pixijs.io/guides/

