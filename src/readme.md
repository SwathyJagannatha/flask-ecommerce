E-Commerce Frontend Project

Project Requirements
The main objective is to build out the front-end of an e-commerce application. To do this you will be making API calls to your e-commerce Flask API. Make sure your Flask API is running and then you will be able to make calls to http://localhost:5000. To successfully build our front-end e-commerce application and achieve the learning objectives, we need to establish clear project requirements. These requirements outline the key features and functionalities that our application must encompass. Below, you'll find a comprehensive list of project requirements based on our learning objectives:

Customer and CustomerAccount Management: Create React components and functionality for managing Customers and their associated CustomerAccounts:
Create Customer Form: Develop a form component to capture and submit essential customer information, including name, email, and phone number.
Read Customer Details: Create a component to display customer details retrieved from the backend based on their unique identifier (ID).
Update Customer Form: Build a form component that allows users to update customer details, including the name, email, and phone number.
Delete Customer Information: Build a function in your Customer Detail Component that when triggered will delete a customer from the backend based on their unique identifier (ID).
Customer Confirmation Modules: Design a confirmation modal or component for securely creating, updating, or deleting a customer from the system based on their ID.
Product Catalog: Create React components and functionality for managing Products:
List Products: Create a component to display a list of all available products in the e-commerce platform, providing essential product information.
Create Product Form: Develop a form component for adding a new product to the e-commerce database. Capture essential product details, such as the product name and price.
Read Product Details: Create a component to display product details retrieved from the backend based on the product's unique identifier (ID).
Update Product Form: Build a form component that allows users to update product details, including the product name and price.
Delete Product Information: Build a function in your Product Detail Component that when triggered will delete a product from the backend based on their unique identifier (ID).
Product Confirmation Module: Design a confirmation modal or component for securely creating, updating or deleting a product from the system based on its unique ID
View and Manage Product Stock Levels (Bonus): Develop a component for viewing and managing the stock levels of each product in the catalog. Administrators should be able to see the current stock level and make adjustments as needed.
Restock Products When Low (Bonus): Implement a component that monitors product stock levels and triggers restocking when they fall below a specified threshold. Ensure that stock replenishment is efficient and timely.
Order Processing: Develop React components and functionality for efficient handling of customer orders:
Place Order Form: Create a form component for customers to place new orders, specifying the products they wish to purchase and providing essential order details. Each order should capture the order date and the associated customer.
Retrieve Order Details: Implement a component that allows customers to retrieve details of a specific order based on its unique identifier (ID). Provide a clear overview of the order, including the order date and associated products.
Track Order Status: Develop a component that enables customers to track the status and progress of their orders. Customers should be able to access information such as order dates and expected delivery dates.
Manage Order History (Bonus): Create a component that allows customers to access their order history, listing all previous orders placed. Each order entry should provide comprehensive information, including the order date and associated products.
Cancel Order (Bonus): Implement an order cancellation feature, allowing customers to cancel an order if it hasn't been shipped or completed. Ensure that canceled orders are appropriately reflected in the system.
Calculate Order Total Price (Bonus): Include a component that calculates the total price of items in a specific order, considering the prices of the products included in the order. This calculation should be specific to each customer and each order, providing accurate pricing information.
Component Creation and Organization:
Create either functional or class components to build the user interface of the e-commerce application.
Organize components into a logical folder structure for better code organization and maintainability.
Use React hooks such as useState, useEffect, and useContext as appropriate to manage component state and side effects.
Routing and Navigation:
Implement routing using React Router to create routes for different sections and pages of the application.
Define route paths and components to be rendered when specific URLs are accessed.
Use navigation links or buttons to allow users to navigate between different parts of the application.
Forms and Form Handling:
Develop forms using React components to capture user inputs for creating, updating, or interacting with customer data, product data, and orders.
Implement form validation to ensure that user inputs meet specified criteria, such as required fields, proper formatting, and validation messages.
Utilize React state and hooks to manage form data and user input changes.
Implement form submission handlers to send data to the backend API for processing.
Event Handling:
Set up event handlers to respond to user interactions and events within the application.
Implement event listeners for actions like button clicks, form submissions, and user interactions with UI elements.
Use event handling to trigger actions like submitting forms, deleting records, and updating data.
Integration with React-Bootstrap:
Incorporate React-Bootstrap components and utilities to enhance the user interface of the application.
Use React-Bootstrap components such as buttons, forms, modals, alerts, and navigation elements to improve the visual design and functionality.
Apply Bootstrap styles and CSS classes to achieve a visually appealing and responsive layout
Error Handling:
Implement error handling mechanisms to gracefully handle errors that may occur during data retrieval, form submission, or API interactions.
Display informative error messages to users when errors occur, helping them understand the nature of the issue and how to resolve it.
Use try-catch blocks or error-handling functions to capture and manage exceptions and errors.
GitHub Repository:
Create a GitHub repository for the project and commit code regularly.
Maintain a clean and interactive README.md file in the GitHub repository, providing clear instructions on how to run the application and explanations of its features.
Include a link to the GitHub repository in the project documentation.


Overview
This project is a frontend application for an e-commerce platform, built with React, Vite, and Bootstrap. The application provides features for managing products, customer accounts, customers, and orders. It interacts with a backend API that was developed separately, which handles the data storage and business logic for these entities.

Features

Product Management:

View all products
Add new products
Edit existing products
Delete products

Customer Management:

View all customers
Add new customers
Edit existing customers
Delete customers

Customer Account Management:

View all customer accounts
Add new customer accounts
Edit existing customer accounts
Delete customer accounts

Order Management:

View all orders
Add new orders
Edit existing orders
Delete orders

User Interaction:

Modal pop-ups for success and error messages on CRUD operations
Navigation between different sections using React Router

Backend API
This frontend application is linked to a backend API that manages the data for products, customers, customer accounts, and orders. The API was developed separately as a part of backend e-commerce api.However, the frontend interacts with the API via HTTP requests to perform all CRUD operations.

API Endpoints
The application interacts with the following endpoints:

Products: /products
Customers: /customers
Customer Accounts: /customeraccount
Orders: /orders
Each of these endpoints supports standard CRUD operations (GET, POST, PUT, DELETE) to manage the respective entities.

Installation
To get started with this project:

Clone this repository.

git clone https://github.com/yourusername/your-repo.git
Navigate to the project directory.

cd your-repo
Install the dependencies.

npm install
Run the development server.

npm run dev
Open your browser and navigate to http://localhost:5173 (or the port specified by Vite) to see the application in action.

Usage
Adding Products, Customers, Accounts, and Orders
Navigate to the relevant section using the navbar.
Use the provided forms to add new products, customers, accounts, or orders.
The application provides a simple UI to interact with the backend API and manage these entities.
Editing and Deleting
Use the "Edit" buttons to update existing records.
Use the "Delete" buttons to remove records from the database.
Confirm deletion via a pop-up window before proceeding.
Viewing Details
Click on "Details" to view more information about any product, customer, account, or order.
Technologies Used
React: For building the user interface.
Vite: For fast project setup and development.
Bootstrap: For styling and responsive design.
Axios: For making HTTP requests to the backend API.
React Router: For managing navigation within the application.
Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.