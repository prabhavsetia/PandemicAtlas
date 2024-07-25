# PandemicAtlas 🌎
PandemicAtlas: Tracking COVID-19 Worldwide

## 📖Overview

PandemicAtlas is a web-based application that visualizes COVID-19 case data on a Mapbox map. It provides an interactive way to view the global distribution of COVID-19 cases using color-coded markers to represent different levels of case counts.

## 💡Features

- **Interactive Map**: Displays a Mapbox map with global coverage.
- **COVID-19 Data**: Fetches real-time data from the Disease.sh API.
- **Color-Coded Markers**: Shows markers on the map with colors representing different case thresholds:
  - Yellow for cases < 50,000
  - Orange for cases between 50,000 and 3,000,000
  - Red for cases > 3,000,000
- **Pandemic Scale Legend**: Provides a legend to interpret the color-coded markers.

## 🖥️Technologies Used

- **Mapbox GL JS**: For rendering interactive maps.
- **Bootstrap**: For styling and layout.
- **JavaScript Fetch API**: For retrieving COVID-19 data from the Disease.sh API.

## Getting Started

To run the PandemicAtlas project locally, follow these steps:

## Getting Started

### 1. Set Up the Project

Ensure you have all the necessary files in your project directory:

- `index.html` – The main HTML file.
- `index.js` – JavaScript file for fetching data and updating the map.

### 2. Install Live Server Extension

If you're using Visual Studio Code, install the Live Server extension:

1. Open VS Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for "Live Server" and install it.

### 3. Run the Project

1. Open `index.html` in VS Code.
2. Right-click on the `index.html` file and select "Open with Live Server" from the context menu.

Live Server will start a local development server and open the project in your default web browser. You should see the map with color-coded markers representing COVID-19 data.

### 4. View the Project

The project should now be accessible at `http://localhost:5500` or another port number provided by Live Server.

### 5. Update Map Data

The map data is updated dynamically using the `updateMap` function in `index.js`. This function fetches COVID-19 case data from the Disease.sh API and updates the markers on the map accordingly.

## Video🎥

https://github.com/user-attachments/assets/f397b591-b3b2-40c7-904f-05c98882c79b


## 📫 Contact

For any inquiries or feedback, feel free to reach out on [LinkedIn](https://www.linkedin.com/in/prabhavsetia/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Mapbox GL JS**: For providing a powerful and flexible map rendering library.
- **Bootstrap**: For simplifying responsive design and styling.
- **Disease.sh API**: For providing up-to-date COVID-19 data.



