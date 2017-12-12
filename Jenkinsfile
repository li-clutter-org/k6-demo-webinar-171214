pipeline {
  agent any
  stages {
    stage('Load test') {
      steps {
        sh 'k6 run -o cloud k6-demo-webinar-171214/script.js'
      }
    }
  }
  environment {
    K6_CLOUD_TOKEN = 'credentials(\'LOADIMPACT_V3_API_TOKEN\')'
  }
}