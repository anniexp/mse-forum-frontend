# mse-forum-2023-frontend
 A simple React application for the forum application with repository https://github.com/anniexp/mse-forum-backend. 
 The appliactions have enabled Cross-Origin Resource Sharing (CORS) for CRUD http requests. Axios HTTP Client is used to handle the http requests. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

 The application has components layer, where each different page is represente by a .jsx file, where both HTML and Js logic is written. 
JSX components / pages :
AddTopicPage.jsx
AddUserPage.jsx
AllTopicsPage.jsx
AppNavigation.jsx
HomePage.jsx 
ModalReply.jsx
Reply.jsx
TopicPage.jsx
useFetch.jsx 
 
 In .env file is writtend thebase path of the application as an enviromental variable REACT_APP_API_URL=http://localhost:8081/api.

 The application is being dockerized by creating an Image with the Dockerfile. This image is being pushed to https://hub.docker.com/.
 

 Instruction to run application:
-  Open cmd. Go to project directory. Run in cmd "npm start".
-   Run backend Spring Boot application first if you want to be able to do requests to use to use and fetch data. 
