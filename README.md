(Para la versión en español, desplazarse hacia el fin de la versión en inglés.)

# Semester Project Team2: Beach Quality Report
As part of the INSO4101 class of UPRM, the class was assigned the task of creating and developing an application that applies the software development topics discussed throughout the semester. The Beach Quality Report application was created with the purpose of informing a user about the quality of any given beach in Puerto Rico. Moreover, our application was created with the safety and health of the locals, tourists, and whoever may desire to visit our beaches, in mind; by providing them an accessible and versatile mobile application.

## Before Starting
It is highly recommended that the user watches [“React Native Crash Course 2020”](https://www.youtube.com/watch?v=Hf4MJH0jDb4) to have a better understanding of how the project functions and to make the necessary installations, required to run the application.

After acquiring enough basic knowledge of React Native, the user can complete the task that has been assigned. Any questions regarding the application's structure or code, can be asked to Christian Rosado or Luis Caro.

## Prerequisites for Installation
We recommend using the latest build of [Ubuntu LTS](https://ubuntu.com/#download-content)  LTS as the operating system. Before installing the project, verify your `yarn` version and `node` version, to ensure those softwares are installed onto your device. If nothing appears on your terminal then install [Node.js](https://nodejs.org/en/) and download the **LTS** version. 

To verify that node has been successfully installed in your computer write one of the the following commands: 
```
`$ node --version` or ‘$node -v’.
```
For yarn enter the following code snippet to your terminal or shell, if you don’t have it installed ([install yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)) or if you downloaded the additional tools that Node.js provides (i.e. chocolatey) you can run the following command on the terminal ‘$choco install yarn’. To verify that you have yarn installed use one of the following commands:
```
‘$ yarn --version’ or ‘$yarn -v’
```
Make sure you also download and install the latest version of Expo. When you download node.js it comes with npm and with the npm you can install expo from the terminal with the following command: ‘$npm install -g expo-cli’. (In windows) the previous command might give you an error in the terminal, if that were to happen you can go to the Windows Powershell and run the following command: ‘npm install expo-cli --global’ this should also be able to download expo to your computer. Enter the following code snippet to your terminal or shell to verify your installation.
```
‘$ expo --version’
```

## Installation
Once you have verified all of the dependencies (Node.js, yarn, Expo) , you can now start the installation process. For windows it is recommended to use the Git Bash terminal for this part of the process. 
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
Here in this menu, you will see a search engine which allows you to input a specific beach that you’re looking for. The menu also shows the relevant beach cards with the corresponding beach name and quality rating below the search bar. The quality rating is displayed with the same color spectrum as the one used for the measurement of water quality. For example, the color green is for acceptable water quality, meaning that it has satisfied [the standards established by the BEACH act under the authority of EPA](https://www.epa.gov/beach-tech/final-water-quality-standards-bacteria-rule-coastal-and-great-lakes-recreation-waters) and the color red is for water quality that should be avoided.

### Beach Cards
Every beach has a corresponding beach card, you can press it to see more information. In its menu, you can observe the beach name, quality, location and a brief description of the beach. Below, there will be three buttons: a button for directions (shows you a path from your current location to the specified beach), a button for more information, and a favorites button (allows you to add the beach card to your favorites tab for quick access).

### The Favorites Menu
Here in this menu, all of the beaches that you have marked as favorite will be displayed with their corresponding beach cards. You can remove a beach from your favorites as well as re-add it later if you want. It is meant to give you quick access to the beaches you want. 

### The Settings Menu
In this menu,  you can change the language of the application to whichever one is best for you. You have options to toggle notifications on or off, toggle GPS (Location Service) on or off, as well as enabling darkmode, if you prefer the dark side. The changes in the settings will be automatically stored for the next time you use the app.

### The About Menu
This page will display an overall description of the application’s features and uses.It will also show the objectives of why the app was created and it will have acknowledgements of the developers/ contributors. As stated above, this app is part of the INSO4101 class of the University of Puerto Rico, better to be specified as Introduction to Software Engineering. The BQR app provides users with current information about the chosen beach’s water quality. With this information, users can stay safe and avoid getting sick by water contamination.The app allows them to look for alternative beaches if their chosen beach currently has a bad quality rating. It helps to learn Lastly, the app provides the user with more information about more about the beaches nearest to them and  by informing them, it  by doing so contributes to improve their over all satisfactionenjoyment at  theof a given beach. 

## API 
The Beach Quality Report API contains several basic routes to provide a template structure to create future API calls.  Some API calls will provide you with fundamental information from the database.

#### Beach API Calls
`/api/beach` - **Gets** all the Beaches registered in the Database.

`/api/beach/:beachID` - **Gets** the specific Beach using its corresponding beachID.

`/api/beach/addBeach` - **Creates** and **Adds** a new Beach to the Database.

`/api/beach/:beachID` - **Updates** an existing Beach.

`/api/beach/deleteBeach/:beachID` - **Deletes** a Beach from the Database. Returns an error if the Beach does not exist in the Database.

`/api/beach/fetchWeeklyUpdate` - **Gets** the most recent web scraped data and compares it with the current data of all the Beaches registered in the Database, if the current data is different from the most recent data then it **Updates** the current to the most recent.

#### User API Calls
`/api/user` - **Gets** all the users currently registered to the Database.

`/api/user/:userID` - **Gets** a specific user within the Database using the userID.

`/api/user/register` - **Posts**  the information of a new user and verifies that the input password matches the user’s password(the isValid method does this process).

`/api/user/:userID` - **Post** new information for the specific user using the userID. Return error if the user does not exist in the Database.

`/api/user/login` - **Post** what the user go wrong when trying to login(email/password), if thing is incorrect then it generates a token.

`/api/user/:userID/:beachID` - **Updates** a user’s list of favorite beaches by verifying if the current input beach is in the list, if so then it is removed. 

`/api/user/:userID/:beachID` - **Updates** a user’s list of favorite beaches by verifying if the current input beach is in the list, if not then it is added. 


# Proyecto Semestral Equipo 2: “Beach Quality Report” 
Como parte de la clase de Introducción a Ingeniería de Software (INSO 4101) en la UPRM, desarrollamos una aplicación que aplicará los conceptos discutidos en clase. La aplicación tiene como propósito proveer a los usuarios el estatus de calidad de la playas de Puerto Rico. Por la salud y seguridad de los que deseen disfrutar de nuestras playas, tanto de los puertorriqueños como los turistas que nos visitan, es importante para nosotros que se les provean medios accesibles por los cuales informarse.

## Antes de Comenzar
Se recomienda que el usuario vea el video “React Native Crash Course 2020” cuyo enlace esta adjunto aqui: https://www.youtube.com/watch?v=Hf4MJH0jDb4 para tener entendimiento de cómo el proyecto funciona y hacer las instalaciones pertinentes listadas en la sección de Instalaciones. El video le proporcionará la información suficiente para obtener un entendimiento básico de lo que es “React Native”

## Pre-requisitos
Recomendamos que instale la version mas actualizada de Ubuntu LTS usando el siguiente enlace: https://ubuntu.com/#download-content. Antes de instalar el proyecto, necesita verificar si tiene instalado ‘yarn’ y ‘node’ y cual versión. Si de antemano sabe que no los tienen, instale Node.js utilizando https://nodejs.org/en/ y descargue la version **LTS**.  Para verificar que ‘node’ haya sido instalado escriba uno de los comandos continuación en el terminal de su computadora:
```
`$ node --version` or ‘$node -v’.
```

Para ‘yarn’ entre el comando a continuación o si no lo tiene instálelo usando el enlace https://classic.yarnpkg.com/en/docs/install/#windows-stable; si ha instalado herramientas adicionales que ‘Node.js’ provee, como chocolatey, corra el comando ‘$choco install yarn’ en el terminal de su computadora. O si ya tiene instalado herramientas adicionales que provee “Node.js” comoor if you downloaded the additional tools that Node.js provide  (“chocolatey)” puede correr el siguiente comando en el terminal:
you can run the following command on the terminal 
```
‘$choco install yarn’. 
```

Para verificar la versión de ‘yarn’ instalado use uno de los siguientes comandos:
```
‘$ yarn --version’ or ‘$yarn -v’

```

Asegúrese de también descargar la versión más actualizada de ‘Expo’. Al descargar ‘node.js’ este viene con ‘npm’ y con esto puedes descargar ‘expo’ desde el terminal usando los siguientes comandos: 
```
‘$npm install -g expo-cli’
```

Si su sistema operativo es windows, el terminal puede que enseñe error al utilizar el comando, si esto ocurre, diríjase a ‘Windows Powershell’ (puede buscarlo en la barra de búsqueda en la esquina inferior izquierda de su pantalla) y corra el siguiente comando:
```
‘npm install expo-cli --global’
```

Esto debería instalar ‘expo’ en su computadora. Entre el siguiente comando para verificar su instalación:
```
‘$ expo --version’
```

## Instalacion
Ya habiendo verificado todas las dependencias, puede proceder a comenzar el proceso de instalación. Para aquellos que estén usando el sistema operativo Windows, se les recomienda que usen ‘Git Bash terminal’ para esta parte del proceso. 
1. Clonen el repositorio de git: 
```
`https://github.com/uprm-inso-4101-2019-2020-S2/semester-project-team2.git`
```
2. Abran el proyecto con el editor de texto (VSCode o Atom).
3. Abra el terminal dentro del editor de texto.
4. Salga del **master** “branch” y entre al “branch” designado usando: 
```
`$ git checkout -b branchname`
```

5. Cambie al directorio de **/BeachQuality** usando `$ cd BeachQuality`.
6. Copie and pegue el siguiente código para descargar las dependencias del “server-side”. Este paso puede tomar unos minutos, no se alarme.
```
$ yarn install
```

7. Copie and pegue el siguiente código para descargar las dependencias del “client-side”. Este paso puede tomar unos minutos, no se alarme.
```
$ yarn client-install
```

## Corriendo el Proyecto
Empecemos por explicar los “running scripts” que la aplicación contiene. Para correr toda la aplicación, escriba en el terminal lo siguiente:
```
$ yarn start
```

Para solo correr el servidor y la base de datos, escriba en el terminal lo siguiente:
```
$ yarn app
```

Para solo correr la aplicación mobile, escriba en el terminal lo siguiente:
```
$ yarn client
```

## Axios
Axios es basado en “promise” lo cual es un objeto de javascript que representa la terminación o el fracaso eventual de una operación asincrónica. Esto nos permite tomar como ventaja “async” y “await” para tener un código asincrónico más legible.

Cuando llamamos a **GET REQUEST** en su “Component”necesita tener la siguiente estructura sintáctica para funcionar.  
```javascript
const IP_ADDRESS = require('../constants');

useEffect(() => {
  axios.get('http://${IP_ADDRESS}:4000/API_ROUTE')
    .then(response => setData(response.data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);
```

En adición, es crucial que cambien el “IP Address” a tu “IP Address” para poder hacer “fetch” exitosamente.  Puedes encontrar tu “IP Address” cuando correr el “client folder” y miras el siguiente “log” dentro de tu terminal después del “QR Code”.
```
Your native app is running at exp://127.0.0.10:19000
```
The IP Address in this case is **127.0.0.10** and the port is **19000**.

You can change your IP_ADDRESS on the `client/constants/index.js`.

Posteriormente, asegúrese de que tiene ‘expo’ instalado en su teléfono móvil y de escanear el ‘QR code’ que se genera. Esto le tomará unos minutos a su teléfono, no se alarme, deje que corre y eventualmente el “Beach Quality” app abrira.

## La Aplicación
Después de completar los pasos previos, subira el “sign up page” o pagina de registro. ![alttext](https://github.com/uprm-inso-4101-2019-2020-S2/semester-project-team2/tree/master/BeachQuality/client/assets/BQR_SIGNUP.jpg "Sign Up Page")

Si es tu primera vez utilizando la aplicación, llene el formulario de la página “sign up” para crear una cuenta. Si ya posee una cuenta, entonces presione la opción de “_Sign In option_” y llene sus credenciales. Después de completar el sign in o el sign up, será transferido al Menú de “Home”. Puede deslizar su dedo de izquierda a derecha para abrir el “side panel”.

### Menú de Inicio
En este menú verá un motor de búsqueda donde se puede buscar y acceder a una playa específica de su interés. Mostrará las cartas de playa relevantes con el nombre de playa correspondiente y la calificación de calidad debajo de la barra de búsqueda. La calificación de calidad se mostrará con el mismo espectro de color que utilizan para medir la calidad del agua. Por ejemplo, el color verde es para una calidad de agua aceptable, lo que significa que ha satisfecho el estándar para el área en la que se encuentra la playa y el color rojo es para la calidad del agua que debe evitarse.

####Tarjeta de Playa
Cada playa tiene una tarjeta correspondiente, y la misma se puede presionar para obtener más información. En este menú se puede observar el nombre de la playa, la calidad, la ubicación y una breve descripción de la misma. A continuación, habrá tres botones: un botón para indicaciones, que le mostrará una ruta desde su ubicación actual a la playa especificada, un botón para obtener más información, que te proporcionará precisamente eso, y un botón que te permite agregar la tarjeta a tu lista de favoritos.

### Menú de Favoritos
En este menú se mostrarán todas las playas que el usuario haya marcado como favoritas con sus correspondientes tarjetas de playa. Puede eliminar una playa de sus favoritos si ya no la considera de su interés o si no ha cumplido con sus expectativas. No te preocupes, puedes volver a agregarlas más tarde si así lo deseas.

### Menú de Ajustes
En este menú podrá cambiar el lenguaje a su preferencia. Tendrá incluso la opción de activar o desactivar las notificaciones de la aplicación al igual que el GPS y el modo oscuro. Cualquier cambio hecho en el menú de ajustes será guardado para la próxima vez que acceda la aplicación. 

### Menú de Información
Esta página mostrará una descripción general de las funciones y usos de la aplicación. También mostrará los objetivos de por qué se creó la aplicación y tendrá un reconocimiento de los desarrolladores / colaboradores de la misma. Como se indicó anteriormente, esta aplicación es parte de la clase INSO4101 de la Universidad de Puerto Rico, específicamente, el curso de Introducción a la Ingeniería del Software. La aplicación BQR proporciona a los usuarios información actualizada sobre la calidad del agua de la playa elegida. Con esta información, los usuarios pueden mantenerse seguros y evitar enfermarse por la contaminación del agua. La aplicación les permite buscar playas alternativas si su playa elegida tiene actualmente una calificación de mala calidad. Ayuda a aprender más sobre las playas más cercanas a ellos e informarles contribuye a su disfrute en la playa.

## API 
El API de Beach Quality Report contiene rutas básicas que proveen una estructura para futuros “llamados” o “calls” del API. Estos proveen información fundamental de la base de datos.

#### Beach API Calls
`/api/beach` - **Devuelve** todas las Playas registradas en la base de datos.

`/api/beach/:beachID` - **Devuelve** la Playa a la cual el beachID le corresponde. Si no existe, retorna un mensaje de error.

`/api/beach/addBeach` - **Crea** y **Añade** una Playa nueva a la base de datos.

`/api/beach/:beachID` - **Actualiza** una Playa que ya esta registrada, de lo contrario devuelve un error.

`/api/beach/deleteBeach/:beachID` - **Elimina** una existente Playa en la base de datos. Si no está registrada devuelve un error.

`/api/beach/fetchWeeklyUpdate` - **Devuelve** la data recopilada más reciente y la compara con la data de las playas en la base de datos, si la data de alguna de las Playas no es igual, las mismas son actualizadas.

#### User API Calls
`/api/user` - **Devuelve** todos los usuarios actualmente registrados en la base de datos.

`/api/user/:userID` - **Devuelve** el usuario al cual le pertenece el userID registrado en la base de datos.

`/api/user/register` - **Actualiza y Devuelve**  la información de un usuario nuevo y verifica que el “password” que sea el que está registrado bajo el usuario (Esto se hace por medio del método “isValid”).

`/api/user/:userID` - **Actualiza** información nueva de un usuario usando el userID. **Devuelve** error si el usuario no existe en la base de datos.

`/api/user/login` - **Devuelve** que el usuario sometió credenciales erróneos al momento de empezar la sesión (correo electrónico/contraseña), si es incorrecto genera un “token”.

`/api/user/:userID/:beachID` - **Actualiza** la lista de favoritos del usuario verificando si la Playa existe en la lista y, de ser así, la remueve.

`/api/user/:userID/:beachID` - **Actualiza** la lista de favoritos del usuario verificando si la Playa existe en la lista y, de no ser así, la remueve la añade. 

