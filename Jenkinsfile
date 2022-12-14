import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}


pipeline {
    agent any
    
    environment {
        BUILD_USER = ''
    }

    tools {nodejs "node js"}
    
    //user-provided parameters
     parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Ex: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }
    
    //The options directive allows configuring Pipeline-specific options from within the Pipeline itself
    options {
        ansiColor('xterm')
    }

    //The stages with steps
    stages {
        
        stage('Build'){
            //Define steps
            steps {
                echo "Building the application"
                sh "docker build -t my-cypress-image:1.1.0 ."
                sh "docker images"
            
               
            }
        }
        
        stage('Testing') {
            steps {
                echo "Testing..."
                sh "docker run -v '$PWD':/my-cypress-project -t my-cypress-image:1.1.0 --spec cypress/e2e/pom/homeSauce.spec.js --headless --browser chrome --config-file=/my-cypress-project/cypress.config.ts"

               // sh "docker run -v '$PWD':/my-cypress-project -t my-cypress-image:1.1.0 --spec cypress/e2e/pom/homeSauce.spec.js --headless --browser chrome --config-file=/my-cypress-project/cypress.config.ts"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

    post {
        always {
            //The script step takes a block of Scripted Pipeline and executes that in the Declarative Pipeline
            script {
                BUILD_USER = getBuildUser()
            }
            
            slackSend channel: '#jenkins-example',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n Tests:${SPEC} executed at ${BROWSER} \n More info at: ${env.BUILD_URL}HTML_20Report/"
            
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            deleteDir()
        }
    }
}
