#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node8.9.3-npm6.10.1-chrome75
#Create the folder where our project will be stored
RUN mkdir /my-cypress-project
#We make it our workdirectory
WORKDIR /my-cypress-project
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress/tsconfig.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress
RUN pwd
RUN ls
#Install the cypress dependencies in the work directory
RUN npm install
RUN touch cypress.config.ts
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD [""]    