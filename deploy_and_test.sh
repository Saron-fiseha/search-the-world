#!/bin/bash

# Function to run tests
run_tests() {
    echo "Running tests..."
    npm test  # or yarn test
    if [ $? -ne 0 ]; then
        echo "Tests failed. Exiting."
        exit 1
    fi
    echo "Tests passed."
}

# Function to build the application
build_app() {
    echo "Building the application..."
    npm run build  # or yarn build
    if [ $? -ne 0 ]; then
        echo "Build failed. Exiting."
        exit 1
    fi
    echo "Build successful."
}

# Function to deploy the application
deploy_app() {
    echo "Deploying the application..."
    # Add your deployment command here, e.g., copying files to a server or using a cloud service
    # Example: rsync -avz ./dist/ user@server:/path/to/deploy/
    echo "Deployment complete."
}

# Function to generate reports
generate_reports() {
    echo "Generating reports..."
    npm run coverage  # or any other command for generating reports
    echo "Reports generated."
}

# Main script execution
run_tests
build_app
deploy_app
generate_reports

echo "All tasks completed successfully!"
