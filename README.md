# Semester Project Team2: Beach Quality Report
As part of the INSO4101 class of UPRM, it is assigned to develop an application that applies the knowledge discussed in class.  The Beach Quality Report application has the purpose of exposing the beach's quality information to users.  Puerto Rico is an island, therefore, we have beaches surrounding us everywhere.  It is important to notify the citizens of Puerto Rico which beaches are safe to go.

## Before Starting
It is extremely important that the student has watch the [Introduction to React Native video](https://www.youtube.com/watch?v=Hf4MJH0jDb4) in order to understand how everything works.  If you haven't watched the video, stop and go watch it and come back.

After watching the video you must have enough basic knowledge to complete the task that has been assigned to your group.  Any question regarding the application's structure or code, can be asked to Christian Rosado or Luis Caro.

## Installation
Before installing the project, check for your `yarn` or `npm` version.  If you don't have any of them, install [Node.js](https://nodejs.org/en/) and download the **LTS** version.  To verify that node has been successfully installed in your computer write the following command: `$ node --version`.

For npm enter the following code snippet to your terminal or shell.
```
$ npm --version
```

For yarn enter the following code snippet to your terminal or shell.
```
$ yarn --version
```

Now that you have verified your `npm` or `yarn` version, you can start the installation process.
1. Clone git repository: `https://github.com/uprm-inso-4101-2019-2020-S2/semester-project-team2.git`
2. Open project in your text editor (VSCode or Atom).
3. Open a terminal inside your text editor.
4. Get out of the **master** branch and enter the designated branch using: `$ git checkout -b branchname`
5. Change to the **/BeachQuality** directory using `$ cd BeachQuality`.
6. Copy and paste the following code to download the server-side dependencies.  This step may take a few minutes, don't freak out.
```
$ npm install
```
7. Copy and paste the following code to download the client-side dependencies.  This step may take a few minutes, don't freak out.
```
$ npm client-install
```


## Running the Project
Let's start by explaining the running scripts that the application contains.

To run the whole application, write in the terminal the following script:
```
$ npm run dev
```

To only run the server and database, write in the terminal the following script:
```
$ nodemon app
```

To only run the mobile application, write in the terminal the following script:
```
$ npm run client
```
