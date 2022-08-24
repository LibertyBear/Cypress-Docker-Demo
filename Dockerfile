#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node14.17.0-chrome91-ff89
#Create the folder where our project will be stored
RUN mkdir /my-cypress-project
#We make it our workdirectory
WORKDIR /my-cypress-project
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress/tsconfig.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress
RUN google-chrome --disable-gpu --no-sandbox --headless
RUN pwd
RUN ls
#Install the cypress dependencies in the work directory
RUN npm install
RUN npm audit fix
RUN npx cypress verify
RUN apt-get install -y xvfb
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD ["npx cypress run --spec cypress/e2e/pom/homeSauce.spec.js --headless --browser chrome --config-file=/my-cypress-project/cypress.config.ts"]    