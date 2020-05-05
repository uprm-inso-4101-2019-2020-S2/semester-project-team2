# Semester Project Team2: Beach Quality Report
As part of the INSO4101 class of UPRM, it is assigned to develop an application that applies the knowledge discussed in class.  The Beach Quality Report application has the purpose of exposing the beach's quality information to users.  Puerto Rico is an island, therefore, we have beaches surrounding us everywhere.  It is important to notify the citizens of Puerto Rico which beaches are safe to go.

## Before Starting
It is extremely important that the student has watch the [Introduction to React Native video](https://www.youtube.com/watch?v=Hf4MJH0jDb4) in order to understand how everything works.  If you haven't watched the video, stop and go watch it and come back.

After watching the video you must have enough basic knowledge to complete the task that has been assigned to your group.  Any question regarding the application's structure or code, can be asked to Christian Rosado or Luis Caro.

## Installation
Before installing the project, check for your `yarn` version.  If you don't have any of them, install [Node.js](https://nodejs.org/en/) and download the **LTS** version.  To verify that node has been successfully installed in your computer write the following command: `$ node --version`.

For yarn enter the following code snippet to your terminal or shell.
```
$ yarn --version
```

Now that you have verified your `yarn` version, you can start the installation process.
1. Clone git repository: `https://github.com/uprm-inso-4101-2019-2020-S2/semester-project-team2.git`
2. Open project in your text editor (VSCode or Atom).
3. Open a terminal inside your text editor.
4. Get out of the **master** branch and enter the designated branch using: `$ git checkout -b branchname`
5. Change to the **/BeachQuality** directory using `$ cd BeachQuality`.
6. Copy and paste the following code to download the server-side dependencies.  This step may take a few minutes, don't freak out.
```
$ yarn install
```
7. Copy and paste the following code to download the client-side dependencies.  This step may take a few minutes, don't freak out.
```
$ yarn client-install
```


## Running the Project
Let's start by explaining the running scripts that the application contains.

To run the whole application, write in the terminal the following script:
```
$ yarn start
```

To only run the server and database, write in the terminal the following script:
```
$ yarn app
```

To only run the mobile application, write in the terminal the following script:
```
$ yarn client
```

## Axios
Axios is promise-based and thus we can take advantage of async and await for more readable asynchronous code.

When calling a **GET REQUEST** in your Component it needs to have the following structure to work.  
```javascript
const IP_ADDRESS = require('../constants');

useEffect(() => {
  axios.get('http://${IP_ADDRESS}:4000/API_ROUTE')
    .then(response => setData(response.data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);
```

In addition to structure, it is crucial to change the IP Address to your IP Address in order to be able to make the fetch successfully.  You can find your IP Address when you run the client folder and look for the following log in your terminal after the big QR Code.
```
Your native app is running at exp://127.0.0.10:19000
```
The IP Address in this case is **127.0.0.10** and the port is **19000**.

You can change your IP_ADDRESS on the `client/constants/index.js`.


## API
The Beach Quality Report API contains various basic routes to provide a template structure to create future API calls.  Some API calls will provide you with basic information from the database.

#### Beach API Calls
`/api/beach` - **Gets** all the Beaches in the Database.

`/api/beach/:beachID` - **Gets** the specific Beach using the beachID.

`/api/beach/addBeach` - **Creates** and **Adds** a new Beach to the Database.

#### User API Calls
