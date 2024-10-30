# Cypress Test Automation with TypeScript

This project automates a set of tests for the public [GitHub homepage](https://github.com/) using **Cypress** with **TypeScript**.

## Problem Statement
The goal is to automate a series of tests that verify key elements and functionalities of the GitHub homepage.

## Requirements
### 1. Repository Setup
- Create a GitHub repository for this project.
- Include a clear README.md file with setup and run instructions.
- Use Cypress and TypeScript for the testing framework.

### 2. Basic Test Automation
Automated tests should verify:
- **GitHub Logo Visibility**: The GitHub logo is visible on the homepage.
- **Sign Up Button Functionality**: The "Sign up" button is functional.
- **Navigation Links**: Links like "Explore" and "Pricing" redirect to the correct pages.

### 3. Test Execution
- Provide a script in `package.json` to run all tests with a single command.
- Tests should run in headless mode and output results suitable for CI/CD pipelines.

## Setup
### Prerequisites
- **Node.js** (version >= 14.x)
- **npm** or **yarn** package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/neha-kum-deg/cypress-automation-challenge.git   
   cd cypress-automation-challenge
