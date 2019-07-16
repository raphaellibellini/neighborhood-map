# Neighborhood Map

A single page application that shows the map of the San Marco region in Vezena (Italy), where popular places are shown with relevant information about them, to guide the user through an incredible tour of this enchanting place.
The application has features such as: locations filter and PWA.

The following resources were used:
[react-google-maps](https://github.com/tomchentw/react-google-maps) to get the map

[Foursquare API](https://developer.foursquare.com/) to get location information

![screenshot of the app](imgs/screen.png)

## How to start the app

The project uses Node.js and the Create-React-App starter. If you do not have Node >= 6.x installed, you can download it here: [Node.js](https://nodejs.org/en/)

Once Node is installed, navigate to the directory where you want to store the app
```
git clone https://github.com/raphaellibellini/neighborhood-map.git
npm install
```
Once all of the dependencies have been installed you can launch the app with
```
npm start
```
A new browser window should automatically open displaying the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

**_NOTE:_** _The service workers for this app will only cache the site when it is in production mode._

## How to Load the App in Production Mode

To run the app in production mode locally run:
```
npm run build
```
npm i serve -g
```
serve -s build
```

In this case the site will be hosted at [http://localhost:5000](http://localhost:5000)
