# Project Title : BPL-DREAM 11

## A brief description of the project

This React project is designed as a sports fantasy app focused on assembling a "Dream 11 Cricket Team." Users can view player information, interact with UI elements like banners, headers, footers, and track their in-app currency (coins). Here’s a breakdown of each component and its functionality:

Project Structure and Component Details

## App.js (Root Component):

Acts as the main container for the application.
Manages a global state coins, representing the user’s available balance.
Implements an addCoins function, allowing users to add a specified amount of coins (6 million) to their balance when triggered.
Renders Header, Banner, Available, Players, and Footer components in a structured layout.
Components:

# Header:

Displays a navigation bar with links such as Home, Fixture, Team, and Schedule.
Shows the current coins balance in a button, with a dollar icon next to the amount.
Logo and menu items are positioned flexibly within the header for easy navigation.

# Banner:

Features an engaging image and message encouraging users to "Assemble Your Ultimate Dream 11 Cricket Team."
Includes a button labeled "Claim Free Credit," which, when clicked, triggers the addCoins function from App.js to add coins to the user’s balance.

# Available:

Offers tabs labeled "Available" and "Selected" to filter players by their availability status.
Displays all available players by default and switches to a selected players view when toggled.

# Players:

Contains individual player cards with information like the player’s name, role, and price.
Each player card includes a button that allows users to add the player to their team or access additional features, integrating with the available/selected functionality.

# Footer:

# Divided into three main sections:

About Us: Provides a brief description of the organization and its commitment to customers.
Quick Links: Includes links for navigation like Home, Service, About, and Contact.
Subscribe: Features a newsletter subscription input where users can enter their name and subscribe to updates.
Includes a branded footer image for a visually appealing touch.

# Additional Elements:

Newsletter Image: Adds a decorative image, making the footer section more engaging and user-friendly.
Key Functionalities and Features

# Coin Management:

The app's central feature is managing the user’s coins balance, allowing for in-app currency tracking that can be increased via interactions.

# Interactive UI Components:

Components are interactive, with buttons that allow users to perform actions such as adding coins and filtering player views.

# Flexible and Reusable Components:

Components are designed modularly, making the app easy to extend, modify, and maintain.

## Purpose and User Experience

This app provides users with an intuitive and interactive experience for managing a fantasy sports team, complete with a dynamic header, a visually appealing banner, organized player cards, and a footer with informative links and subscription options. The well-structured layout and user interactions are designed to enhance engagement, creating a straightforward and enjoyable experience for sports enthusiasts looking to create their ideal team.

# Technologies used

This project uses the following technologies:

## React:

Core library for building the user interface.
Components like App, Header, Banner, Available, Players, and Footer are created using React’s functional component architecture.
useState and useEffect hooks manage state and side effects, such as coin balance and player availability.

## CSS Modules / External CSS:

Styling is managed through separate CSS files (e.g., App.css, Header.css, Banner.css), providing custom styles for each component.
CSS Flexbox and Grid are used for responsive layouts, centering elements, and maintaining consistency across the app.

## React Icons / FontAwesome (Assumed based on usage):

Icons like the user and flag icons are added to the UI using icon libraries, likely FontAwesome or React Icons, providing a visual enhancement to buttons and labels.

## JavaScript ES6:

Modern JavaScript features, including destructuring, template literals, and arrow functions, are used for cleaner and more efficient code.
Optional: JSON or Local State for Data:

The players’ data is most likely stored in a JSON array or managed through React state, allowing for flexibility in displaying available and selected players.
These technologies combine to create a responsive, dynamic, and visually engaging single-page application for assembling a sports fantasy team.

# 3 key features of your project

Here are three key features of the project:

# Dynamic Coin Management:

Users can add coins to their account by clicking a “Claim Free Credit” button, which increases their coin balance in real time. This feature uses React’s useState to update the coin count and reflects it in the header, providing a dynamic user experience.

# Player Selection and Availability Toggle:

Users can view available players, and by clicking “Choose Player,” they can add players to a selected list. Each player can be selected only once, which prevents duplicates. The Available component lets users toggle between viewing available and selected players, enhancing usability and team-building flexibility.

# Responsive UI with Custom Banner and Footer:

The project features a responsive design, including a custom banner section and footer with links, subscriptions, and social elements. This ensures that the app maintains a cohesive and professional look across devices, enhancing the user experience for a wide range of screen sizes.

# Live link to the deployed project:https://whimsical-kulfi-6eb656.netlify.app/
