# Weather App

This project is a Weather App built using React, Tailwind CSS, and the OpenWeatherMap API. It allows users to search for the current weather of any city and pin cities to quickly access their weather information later.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Key](#api-key)
- [Contributing](#contributing)
- [License](#license)

## Features
- Search for the current weather of any city.
- Display weather details including temperature, description, wind speed, and humidity.
- Pin cities to quickly access their weather information.
- Responsive design using Tailwind CSS.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Axios: A promise-based HTTP client for the browser and Node.js.
- OpenWeatherMap API: An API for accessing current weather data.
- React Icons: Include popular icons in your React projects easily.

## Setup and Installation
To set up and run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/superuser-vishal/my-weather-app.git
    cd weather-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up the API key:**
    - Get your API key from [OpenWeatherMap](https://home.openweathermap.org/api_keys).
    - Create a `.env` file in the root of the project and add your API key:
      ```
      REACT_APP_API_KEY=your_api_key_here
      ```

4. **Start the development server:**
    ```bash
    npm start
    ```

5. **Build the project for production:**
    ```bash
    npm run build
    ```

## Usage
1. **Search for a city:** Use the search bar to enter the name of a city and hit the search button to display the current weather.
2. **Pin a city:** Click the pin button to add the city to your list of pinned cities.
3. **View pinned cities:** Pinned cities will be displayed, allowing you to quickly access their weather information.
4. **Remove a pinned city:** Click the close button on a pinned city to remove it from the list.

## Project Structure

- **public/index.html**: The main HTML file.
- **src/components/**: Contains the `Cards` and `Widgets` components.
- **src/utils/Context.js**: Contains the context for managing global state.
- **src/App.js**: The main App component.
- **src/index.js**: The entry point of the React application.
- **src/index.css**: Global CSS file.
- **.env**: File for storing environment variables.
- **tailwind.config.js**: Tailwind CSS configuration file.

## API Key
To use this app, you need an API key from OpenWeatherMap. Follow these steps:
1. Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) if you don't have an account.
2. Go to the API keys section in your profile.
3. Copy your API key.
4. Create a `.env` file in the root of your project.
5. Add the following line to the `.env` file:
    ```
    REACT_APP_API_KEY=your_api_key_here
    ```

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is made by Vishal Kumar and any body can reffer to it and use it to learn the concepts. 

---
