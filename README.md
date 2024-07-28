# Gaming App

This is a React Native application developed using Expo. The app is designed to display various gaming-related content, including trending sports events, IPL teams, and more. The main features include a home page with a header, footer, and different content cards, as well as a modal for user confirmation.

## Features

- **Home Page**: Displays a header with account and notification icons, a footer with navigation tabs, and various content cards.
- **Trending Now Section**: Shows trending sports events in a horizontal scroll view, organized in two rows.
- **IPL Teams Section**: Displays IPL teams playing with Yes/No buttons for user interaction.
- **Modal**: A confirmation modal that appears when a user interacts with the Yes/No buttons.

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For developing, building, and publishing the app.
- **React Navigation**: For managing navigation within the app.
- **Ionicons**: For using icons in the footer navigation.

## Installation

1. Clone the repository:

>>   git clone https://github.com/yourusername/your-repo-name.git
>>   cd your-repo-name

Install dependencies:

>>   npm install

Start the Expo development server:

>>   npx expo start

Project Structure

    components/: Contains all the React Native components used in the app.
        Home.js: The main component for the home page.
        ConfirmationModal.js: A modal component for user confirmation.
    navigation/: Contains the navigation configuration.
        Navigation.js: The main navigation container with bottom tab navigation.
    dataUtils.js: Contains sample data used in the app.

Usage

    Home Page: The main entry point of the app, displaying various sections and navigation.
    Trending Now: Scroll horizontally to view trending sports events.
    IPL Teams: View the list of IPL teams and interact with the Yes/No buttons to trigger the confirmation modal.
