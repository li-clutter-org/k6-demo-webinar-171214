pipeline {
    agent any

    environment {
        K6_CLOUD_TOKEN = credentials('LOADIMPACT_V3_API_TOKEN')
    }

    stages {
        stage('Load test') {
            steps {
                sh 'k6 run -o cloud script.js'
            }
        }
    }
}