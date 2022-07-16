<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://github.com/FabioFSS/Movie-Shelf/blob/main/screenshots/logo.png?raw=true" alt="Project logo"></a>
</p>

<h3 align="center">Movie Shelf</h3>

---

<p align="center"> A website designed for you to organize you movies and tv shows.
    <br> 
</p>

## 📝 Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Usage](#usage)
-   [Built Using](#built_using)
-   [TODO](../TODO.md)
-   [Contributing](../CONTRIBUTING.md)
-   [Authors](#authors)
-   [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Movie Shelf is a content management website, projected do make it easier for the user to follow their favorite movies, tv shows and more. It is possible to find information about the content you want to watch, such as description, images, casts, duration and number of episodes for tv shows, user reviews and much more. It is also possible to create personalized lists with content you want to watch or the ones you like the most.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
python - https://www.python.org/downloads/
django - https://www.djangoproject.com/download/
node.js - https://nodejs.org/pt-br/download/?msclkid=923a22f3cc6b11ec8427a774fba05166
postgresql - https://www.postgresql.org/download/
```

### Installing

A step by step series of examples that tell you how to get a development env running.

#### React

After cloning the repository, open a terminal on the "/movie_shelf_front" directory and follow the next steps

Install the dependecies using the following command

```
npm install --force
```

#### Django

After cloning the repository, open a terminal in the project's root directory, where the requirements.txt file is located and follow the next steps

Install the dependecies using the following command

```
pip install -r requirements.txt
```

#### Database
Have a postgresql database installed and configured as follows

```
NAME: movie_shelf
USER: django
PASSWORD: 852963741
HOST: localhost
PORT: 5432
```

## 🔧 Running the tests <a name = "tests"></a>

#### React

Run the application front-end by going to the "/movie_shelf_front" folder and running the following command

```
npm start
```

#### Django

Run the following command in the movie_shelf folder to generate the migrations
```
python manage.py makemigrations
```

Now run the following command in the movie_shelf folder to do the migrations in the database

```
python manage.py migrate
```

Run the application front-end by opening the terminal on the root folder and running the following command

```
py manage.py runserver
```

After opening the browser, use the following url to access the application's home page

```
http://localhost:3000/
```

If the screen turns blue without any information, press F5

### Screenshots

#### Login
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/login.png)
#### SignUp
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/signup.png)
#### Home
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/home.png)
#### Profile
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/profile.png)
#### Lists
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/lists.png)
#### Lists Detail
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/lists_detail.png)
#### Progress
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/progress.png)
#### Reviews
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/reviews.png)
#### Results Movies Search
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/search_movies.png)
#### Results Tv Shows Search
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/search_tv_shows.png)
#### User Settings
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/settings.png)
#### Movie Detail
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/movie_detail.png)
#### Tv Show Detail
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/detail_tv_shows.png)
#### Season Detail
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/detail_season.png)
#### Episode Detail
![front page](https://raw.githubusercontent.com/FabioFSS/Movie-Shelf/main/screenshots/detail_episode.png)

## ⛏️ Built Using <a name = "built_using"></a>

-   [NodeJs](https://nodejs.org/en/) - Server Environment
-   [React.Js](https://reactjs.org/) - Front End Framework
-   [Django](https://www.djangoproject.com/) - Back End Framework

## ✍️ Authors <a name = "authors"></a>

-   [@FabioFSS](https://github.com/FabioFSS) - Idea & Initial work
-   [@WelvisSS](https://github.com/WelvisSS) - Idea & Initial work
-   [@KiritoKi](https://github.com/KiritoKi) - Idea & Initial work

See also the list of [contributors](https://github.com/FabioFSS/Movie-Shelf/contributors) who participated in this project.
