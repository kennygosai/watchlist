<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="http://watchlist-env.eba-3euhr9p4.us-east-2.elasticbeanstalk.com/">
    <img src="public/images/logo.png" alt="Logo" width="167" height="80">
  </a>

  <h3 align="center">Watch List</h3>

  <p align="center">
    An website to store TV Shows and Movies you want to watch.
    <br />
    <a href="https://github.com/kennygosai/watchlist"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://watchlist-env.eba-3euhr9p4.us-east-2.elasticbeanstalk.com/">View Demo</a>
    ·
    <a href="https://github.com/kennygosai/watchlist/issues">Report Bug</a>
    ·
    <a href="https://github.com/kennygosai/watchlist/issues">Request Feature</a>
  </p>
</p>

MySQL Tables

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [MySQL Tables](#mysql-tables)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](http://watchlist-env.eba-3euhr9p4.us-east-2.elasticbeanstalk.com/)


### Built With
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [MySQL](https://www.mysql.com/)
* [ExpressJS](http://expressjs.com/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [themoviedb.org](https://developers.themoviedb.org/3/getting-started/introduction)
2. Clone the repo
```sh
git clone https://github.com/kennygosai/watchlist.git
```
3. Install NPM packages
```sh
npm install
```
4. Enter your keys in a `.env` file in the root directory
```
HOST=MySQL Host name
DBPORT=MySQL Database port
USER=MySQL username
PASSWORD=MySQL password
DATABASE=MySQL database
BCRYPT_SECRET=Secret word used for the users current session
SALT_ROUNDS=Number of Salt round Bcryptjs uses
MOVIEDB_KEY=MovieDB API key
```
5. To start
```sh
npm start
```
<!-- MySQL -->
## MySQL Tables

### users
| username (varchar) | password (varchar)       |
|--------------------|--------------------------|
| The users email.   | Encrypted user password. |

### movieList

| username (varchar) | title (varchar) | movieID (int)            | image (varchar)          |
|--------------------|-----------------|--------------------------|--------------------------|
| The users email.   | Title of media. | MovieDB ID of the media. | URL of the media poster. |

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/kennygosai/watchlist/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Kenny Gosai - [https://kennygosai.com/](https://kennygosai.com/#contact)

Project Link: [https://github.com/kennygosai/watchlist](https://github.com/kennygosai/watchlist)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [TheMovieDB](https://www.themoviedb.org/)
* [Font Awesome](https://fontawesome.com)


<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: public/images/screenshot.png