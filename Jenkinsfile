pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18'
        PORT = '3000'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Setup Node.js') {
            steps {
                script {
                    // Use Node.js via nvm or NodeJS plugin
                    sh 'node --version'
                    sh 'npm --version'
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    // Publish test results if using JUnit format
                    // publishTestResults testResultsPattern: 'test-results.xml'
                    echo 'Tests completed'
                }
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building application...'
                // Add any build steps here if needed
                sh 'echo "Build completed"'
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Deploying to staging environment...'
                // Add staging deployment steps
                sh 'echo "Deployed to staging"'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploying to production environment...'
                // Add production deployment steps
                sh 'echo "Deployed to production"'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
            // Add notification steps (email, Slack, etc.)
        }
    }
}