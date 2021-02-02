# `2Do` - Simplified ToDo Lists

## Description

2Do is a mobile friendly, web-based To-Do List which has been streamlined down to a minimally effective way to manage tasks for individually created lists.


## Table of Contents
1. [*Installation*](#Installation)
2. [*Usage*](#Usage)
3. [*Contributing*](#Contributing)
4. [*Credits*](#Credits)
5. [*License*](#License)

<a name="Installation"></a>
## Installation

<a name="initialInstallation"></a>
#### Running MongoClient Constructor
Run `nodemon app.js` in api folder (VSCode terminal) to start Server on port 3000 and connect to MongoDB

#### Running 2Do on LocalHost (Port 4200)
Run `ng serve` in frontend folder (VScode terminal) to start Angular.js

* If ExecutionPolicy Permissions are denied, use terminal command `Set-ExecutionPolicy -Scope CurrentUser` followed by `Set-ExecutionPolicy RemoteSigned`, or simply `RemoteSigned`.

* Optionally, run `npm start` if `"start": "ng serve"` is defined in `"scripts"` within \package.json\

##### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

##### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

##### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


<a name="Usage"></a>
## Usage

To use the 2Do web-applicaton run [installation steps](#initialInstallation) for MongoDb & Angular.js, then:
1. Visit `localhost:4200/login` to create a secure account & login
2. View your personal dashboard of Lists and respective Tasks for each List (`localhost:4200/lists`)
3. Create, Edit, and Delete Lists (`localhost:4200/new-list`)
4. Create, Edit, Complete, and Delete Tasks for each individual List (`localhost:4200/new-task`)
5. Sign-out (data persistence)


<a name="Contributing"></a>
## Contributing
* [Angular CLI Front-End](https://github.com/angular/angular-cli) version 11.0.0.
* [Express](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* [Bulma.io](https://bulma.io/) - Open Source CSS Framework
* [Lodash](https://www.npmjs.com/package/lodash)
* [JSONWebToken (JWT)](https://www.npmjs.com/package/jsonwebtoken) - Stateless cryptographic verification system
* [Crypto](https://www.npmjs.com/package/crypto)
* [BCryptJS](https://www.npmjs.com/package/bcrypt)

<a name="Credits"></a>
## Credits
Me - and these guides:
* [MEAN Stack](https://en.wikipedia.org/wiki/MEAN_(solution_stack))
* [Amit Kumar Sing's 'MEAN.js To-do List'](https://workshops.hackclub.com/todo_app_using_meanjs/)
* [Hien Nguyen's Mean Stack Tutorial](https://medium.com/@hiennguyen_1188/create-a-todo-app-using-mean-stack-12bf25a75f6e)
* [Angular JS documentation](https://www.w3schools.com/angular/angular_intro.asp)

<a name="License"></a>
## License
to Code.
