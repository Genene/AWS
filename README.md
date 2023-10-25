# AWS Project - Frontend and Backend Deployment

This project demonstrates the deployment of a frontend application developed using React, HTML, CSS, and JavaScript, along with a backend API created using Node.js. The application's data is stored in AWS DynamoDB, and it is exposed to the frontend through an AWS API Gateway.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Deployment Steps](#deployment-steps)
- [Accessing the Application](#accessing-the-application)

## Technologies Used

- **Frontend:**
  - React - A JavaScript library for building user interfaces.
  - HTML - Used for structuring web pages.
  - CSS - Used for styling the user interface.
  - JavaScript - Used for client-side scripting.

- **Backend:**
  - Node.js - A runtime environment for running JavaScript on the server.

- **AWS Services:**
  - AWS DynamoDB - A managed NoSQL database service.
  - AWS API Gateway - A fully managed service for creating, publishing, and managing APIs.

## Project Structure

The project is structured as follows:

project-root/

├── frontend/

├── src/ # React application source code

├── public/ # Public assets


├── backend/

├── server.js # Node.js server code

├── routes/ # Backend API routes


├── README.md # Project documentation

Date: 10/23/2023

Title: Project Update: Enhanced Global Website Availability with Amazon CloudFront and CI/CD Integration

Abstract:
In this project update, I successfully integrated Amazon CloudFront to improve the global accessibility of our website. 
Additionally, I established a Continuous Integration/Continuous Deployment (CI/CD) pipeline using the AWS CLI, streamlining website updates from local development environments. 
The website is now available in all AWS regions, enhancing its global reach.

Conclusion:
Through CloudFront integration and CI/CD pipeline implementation, our website is now accessible in all AWS regions, 
offering improved performance and reduced latency for global users.

Website Availability:
Our website is accessible at http://genene.info.


Date: 10/24/2023
Project Update

Today in this project, the following key milestones have been achieved:

Lambda Function Creation:

A Lambda function has been successfully created, along with the necessary policies and user roles to ensure secure and controlled access.

DynamoDB Tables Setup:
DynamoDB tables have been set up within the AWS environment. 
These tables serve as a structured and efficient data storage solution for the project.

Established Communication:
The communication between DynamoDB and the Lambda function has been established and verified to be fully operational. 
This ensures that the Lambda function can interact with DynamoDB to perform data retrieval and other relevant tasks.