# Semester Project Team2: Beach Quality Report
As part of the INSO4101 class of UPRM, it is assigned to develop an application that applies the knowledge discussed in class. The Beach Quality Report application has the purpose of exposing the beach's quality information to users. Puerto Rico is an island located in the Caribbean,therefore, we have beaches surrounding us everywhere. It is important to notify the citizens of Puerto Rico or the tourists visiting from other parts of the world which beaches are safe to go.

## Before Starting
It is extremely important that the student watches the [Introduction to React Native video](https://www.youtube.com/watch?v=Hf4MJH0jDb4) to understand how the project works and to make the necessary installations. If you haven't watched the video, stop and go watch it, then come back.

After watching the video you must have acquired enough basic knowledge to complete the task that has been assigned to your group.  Any questions regarding the application's structure or code, can be asked to Christian Rosado or Luis Caro.

## Installation
We recommend using the latest build of [Ubuntu](https://ubuntu.com/#download-content)  LTS as the operating system. Before installing the project, check for your `yarn` version and `node` version. If you don't have any of them, install [Node.js](https://nodejs.org/en/) and download the **LTS** version.  To verify that node has been successfully installed in your computer write one of the the following commands: 
```
`$ node --version` or ‘$node -v’.
```
For yarn enter the following code snippet to your terminal or shell, if you don’t have it install (https://classic.yarnpkg.com/en/docs/install/#windows-stable) or if you downloaded the additional tools that Node.js provide (chocolatey) you can run the following command on the terminal ‘$choco install yarn’. To verify that you have yarn installed use one of the following commands:
```
‘$ yarn --version’ or ‘$yarn -v’
```
Make sure you also download and install the latest version of Expo. When you download node.js it comes with npm and with the npm you can install expo from the terminal with the following command: ‘$npm install -g expo-cli’. (In windows) the previous command might give you an error in the terminal, if that were to happen you can go to the Windows Powershell and run the following command: ‘npm install expo-cli --global’ this should also be able to download expo to your computer. Enter the following code snippet to your terminal or shell to verify your installation.
```
‘$ expo --version’
```
Now that you have verified all of the dependencies, you can now start the installation process. For windows it is recommended to use the Git Bash terminal for this part of the process. 
1. Clone git repository: `https://github.com/uprm-inso-4101-2019-2020-S2/semester-project-team2.git`
2. Open the project in your text editor (VSCode or Atom).
3. Open a terminal inside your text editor.
4. Get out of the **master** branch and enter the designated branch using: 
`$ git checkout -b branchname`
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

In addition to structure, it is crucial to change the IP Address to your IP Address to be able to make the fetch successfully.  You can find your IP Address when you run the client folder and look for the following log in your terminal after the big QR Code.
```
Your native app is running at exp://127.0.0.10:19000
```
The IP Address in this case is **127.0.0.10** and the port is **19000**.

You can change your IP_ADDRESS on the `client/constants/index.js`.

Afterward, make sure you have expo installed on your mobile device and scan the QR code that is generated. Your phone will take a few minutes, that is okay, let it run and eventually the Beach Quality app will launch.

## The Application
After you have completed the previous steps you will boot up on the sign up page.
![alttext](https://github.com/uprm-inso-4101-2019-2020-S2/semester-project-team2/tree/master/BeachQuality/client/assets/BQR_SIGNUP.jpg "Sign Up Page")

If this is your first time with the app, fill out the sign up page to create an account. If you have an account already then press the_Sign In option_ and fill in your credentials. After the completion of the sign up or sign it process, you will be transferred to the home menu. You can also swipe from left to right to open up the side panel.

### The Home Menu
Here in this menu, you will see a search engine where you can input a specific beach you are interested in or looking for. It will show the relevant beach cards with the corresponding beach name and quality rating below the search bar. The quality rating will be displayed with the same color spectrum they use to measure water quality. For example, the color green is for acceptable water quality, meaning that it has satisfy the standard for the area that the beach is located in and the color red is for water quality that should be avoided.

####Beach Cards
Every beach has a corresponding beach card, you can press it to see more information. In this menu, you can observe the beach name, quality, location and a brief description of the beach. Below, there will be three buttons: a button for directions, that will show you a path from your current location to the specified beach, a button for more information, that gives you exactly that, and a button that allows you to add the beach card to your favorites.

### The Favorites Menu
Here in this menu, all of the beaches that you have marked as favorite will be displayed with their corresponding beach cards. You can remove a beach from your favorites if you no longer consider it to your interest or if it has failed to meet your expectations. Don’t worry you can re-add them later if you want. 

### The Settings Menu
In this menu,  you can change the language of the application to whichever one is best for you. You have options to toggle notifications on or off, toggle GPS (Location Service) on or off, as well as enabling darkmode, if you prefer the dark side. The changes in the settings will be automatically stored for the next time you use the app.

### The About Menu
This page will display an overall description of the application’s features and uses.It will also show the objectives of why the app was created and it will have acknowledgements of the developers/ contributors. As stated above, this app is part of the INSO4101 class of the University of Puerto Rico, better to be specified as Introduction to Software Engineering. The BQR app provides users with current information about the chosen beach’s water quality. With this information, users can stay safe and avoid getting sick by water contamination.The app allows them to look for alternative beaches, if their chosen beach has currently a bad quality rating. It helps to learn more about the beaches nearest to them and  by informing them, it contributes to their enjoyment at the beach. 


## API
The Beach Quality Report API contains various basic routes to provide a template structure to create future API calls.  Some API calls will provide you with basic information from the database.

#### Beach API Calls
`/api/beach` - **Gets** all the Beaches in the Database.

`/api/beach/:beachID` - **Gets** the specific Beach using the beachID.

`/api/beach/addBeach` - **Creates** and **Adds** a new Beach to the Database.

#### User API Calls
