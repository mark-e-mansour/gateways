[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Node.js CI][nodejs-shield]][nodejs-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/mark-e-mansour/gateways">
    Repo Link
  </a>

  <h3 align="center">Gateways App</h3>

  <p align="center">
    <a href="https://github.com/mark-e-mansour/gateways"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mark-e-mansour/gateways/issues">Report Bug</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Gateways is a simple React/Redux - NodeJs/MongoDb project that handles saving gateways and their corresponding peripheral devices.

### Built With

* [React](https://reactjs.org)
* [Redux](https://redux.js.org/)
* [Javascript](https://www.javascript.com)
* [Webpack](https://webpack.js.org)
* [NodeJs](https://nodejs.org/en)
* [MongoDB](https://www.mongodb.com)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mark-e-mansour/gateways
   ```
2. Install NPM packages on root folder for (server) dependencies
   ```sh
   npm install
   ```
3. Navigate to (client) folder
  ```sh
   cd client
  ```
4. Install NPM packages for (client) dependencies
  ```sh
  npm install
  ```
5. Install and start MongoDB service then add new connection by pasting this connection string in MongoDB compass
  ```sh
  mongodb://localhost:27017/gateways_db
  ```
6. Make sure you are on the root folder again, then start server and client concurrently by running 
  ```sh
  cd..
  npm start
  ```
7. Run Jest tests from root folder by running
  ```sh
  npm run test
  ```

<!-- USAGE EXAMPLES -->
## Usage

This App demonstrates basic React/Redux UI implementation with nodeJs(express) & mongodb as backend for saving gateways/devices.


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/mark-e-mansour/gateways/issues) for a list of proposed features (and known issues).



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Mark E. Mansour - [https://www.facebook.com/mark.e.elia/](https://www.facebook.com/mark.e.elia/) - memarkemil@gmail.com

Project Link: [https://github.com/mark-e-mansour/gateways](https://github.com/mark-e-mansour/gateways/)



<!-- MARKDOWN LINKS & IMAGES -->
[forks-shield]: https://img.shields.io/github/forks/mark-e-mansour/gateways.svg?style=for-the-badge
[forks-url]: https://github.com/mark-e-mansour/gateways/network/members
[stars-shield]: https://img.shields.io/github/stars/mark-e-mansour/gateways.svg?style=for-the-badge
[stars-url]: https://github.com/mark-e-mansour/gateways/stargazers
[issues-shield]: https://img.shields.io/github/issues/mark-e-mansour/gateways.svg?style=for-the-badge
[issues-url]: https://github.com/mark-e-mansour/gateways/issues
[license-shield]: https://img.shields.io/github/license/mark-e-mansour/gateways.svg?style=for-the-badge
[license-url]: https://github.com/mark-e-mansour/gateways/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mark-emil-soccar-049906115/
[nodejs-shield]: https://github.com/mark-e-mansour/gateways/actions/workflows/node.js.yml/badge.svg?branch=main
[nodejs-url]: https://github.com/mark-e-mansour/gateways/actions/workflows/node.js.yml