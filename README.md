# cypress-demo-framework

 THINGS TO DO TOMORROW:

 -Local test GUI: Reherse it again.
 -Local test terminal (this one), do both success and fail cases

 






- ## 💻 Running locally

Before you use this project you only need to have Node Js installed in your computer.

https://nodejs.org/es/download/

cd into the project folder (the one that contains the folder "cypress", the Dockerfile, Jenkinsfile, and so on).

Run the following commands:
    - npm install
    - npm audit fix
    - npx cypress verify
    - npx cypress run --spec cypress/e2e/pom/homeSauce.spec.js --browser chrome

## 🚀 Running on Docker + Jenkins

To build the Docker image run:
    docker build -t my-cypress-image:1.1.0 .

Check that the image has been created successfully:
    docker images

Run Cypress, configure this script to run specific test scripts and run in the desired browser:
    docker run -v '$PWD':/my-cypress-project -t my-cypress-image:1.1.0 --spec cypress/e2e/pom/homeSauce.spec.js --headless --browser chrome --config-file=/my-cypress-project/cypress.config.ts

A Jenkinsfile with a pipeline is included, the parameters allow you to configure test scripts and browsers.

