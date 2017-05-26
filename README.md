# A-Frame Boilerplate
This repository contains a boilerplate A-Frame project. It contains example implementations of [A-Frame](https://aframe.io/), [React](https://facebook.github.io/react/), and an [A-Frame-React](https://github.com/ngokevin/aframe-react) library, which exposes A-Frame components as a React component.

## Development
### Requirements
* Node.js (version `v7.7.2` or above).
* NPM (version `v4.0.5` or above) or Yarn (version `v0.21.3` or above).
* Google Pixel with Chrome installed.
* Google Daydream or Google Cardboard.

### Installation
* Clone this repository.
* In this repository's root, run `npm i` or `yarn`.

### Coding standards
This project uses Eslint, configured to use AirBnb's standard set. To lint code in this project, run `npm run lint`. As enforced by Husky, you cannot commit code that does not fit the defined standard.

### Development server
This project uses Webpack to generate builds, and set up development instances. To run a development server, run `npm run start`, and then in your browser navigate to `https://{your_ip_address}:8080`. This server has hot-reloading enabled, so you shouldn't ever need to manually re-fresh your browser. You'll need to tell Chrome or whatever browser you're using that using https with no cert is OK. We need to pretend like we have https set up so that Chrome, while in VR mode, doesn't hiccup (See the Developing in Google Daydream section).

#### Configuring the development server
The development server in this repository shouldn't need configuration to run correctly, but if you want to run the server on a specific IP or port, you can set these two environment variables:
```bash
export DEVELOPMENT_SERVER_IP="localhost"
export DEVELOPMENT_SERVER_PORT="3000"
```

#### Developing in Google Daydream
The development server in this project is set up so that it can be accessed by any device on your local network. That's why you access your development instance from your local IP instead of just `localhost`.

Before you get started, navigate to `chrome://flags` in Chrome on your phone. Then, enable the WebVR and Gamepad API flags, and restart Chrome.

To access your dev server from your Google Pixel, simply navigate to `https://{your_ip_address}:8080` in Chrome, and then tap the "VR" icon in the lower right hand corner of the page. This will start the VR initialization screen, which will open this app once the initialization is complete. Please note that the hot reloading functionality of WebPack Dev Server currently crashes WebGL in Chrome. Hopefully the Chrome team will fix this soon.

### Building and Deploying.
As aforementioned, this project uses Webpack to generate builds, and production builds are placed into the root folder. To generate a build, run `npm run build:prod`. This project contains CircleCI configuration, so if you connect your repository to CircleCI, deployments to GitHub Pages will work automatically.

### Testing
... is still in the works :)
