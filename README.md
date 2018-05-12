# To Do List

A simple Node.js application that allows the user to create new tasks
and view them in a web browser

### Prerequisites

```
Node.js
MongoDB
Web Browser
```

### Installation and Usage

Clone or download the repository.
```
git clone https://github.com/sean-capper/todo-node.git
```

Navigate to the folder location using terminal/cmd, for example:

```
$ cd projects/todo-node 
```

Start the Mongo Daemon in terminal/cmd

```
$ mongod
```

Open a mongo session in a seperate terminal window

```
$ mongo
```

Create the MongoDB for the application to use, default is 'to-do'

```
$ use to-do
```

Create the collection the applicaiton will use, default is 'tasks'

```
$ db.createCollection('tasks') 
```

Install the npm dependencies in the project folder

```
$ npm install
```

Start the node app

```
$ node app
    or
$ nodemon
```

Open the application in a web browser by navigating to:

```
localhost:8000
```

## Built With

* [Node.js](https://nodejs.org/en/docs) - The web framework used
* [Express.js](https://expressjs.com/en/starter/installing.html) - Web application framework used
* [MongoDB](https://www.mongodb.com/) - Database used

## Version

* v1.0.0 - Has basic functionality implemented.

## Authors

* **Sean Capper** - *Initial work* - [sean-capper](https://github.com/sean-capper)

See also the list of [contributors](https://github.com/sean-capper/todo-node/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
