
# Dino-Game-Clone

## Description

This is a clone of the `Chrome Dino Game` built as a web application on [`React`](https://react.dev/). It is deployed on [`AWS Elastic Beanstalk`](https://aws.amazon.com/elasticbeanstalk/) using [`Docker`](https://www.docker.com/) and Docker Compose, with a complete CI/CD workflow using [`GitHub Actions`](https://github.com/features/actions).


## Architecture

![Dino Game Clone Architecture](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/e032794b-4c2c-4114-a94c-b1d271ea453d)


## Technologies used 🛠 
React \
Nodejs \
Github Actions \
Docker \
Docker Compose \
AWS ElasticBeanstalk 


## Deployment

#### Step 1: Setting up Dinosaur Game clone as React web application

1. Create a new React project using commands:
`npx create-react-app (app-name)` \
`cd (app-name)`

2. Install necessary dependencies:
`npm install styled-components`\
`npm install @react-spring/web`

3. My Project Structure overview on VS Code:
   
![Screenshot (1099)](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/54928e9f-accb-406e-b822-1a420c5194db)

5. Game Components
   
Create [`Game.js`](https://github.com/aakanksha-k/DinoGame-Clone/blob/master/src/components/Game.js) file to manage the game state and render other logical components like, Obstacle Spawning, Collision Detection. 

Create [`Dino.js`](https://github.com/aakanksha-k/DinoGame-Clone/blob/master/src/components/Dino.js) to represent the dinosaur avatar and handle jumping over the said obstacles. 

Create [`Obstacle.js`](https://github.com/aakanksha-k/DinoGame-Clone/blob/master/src/components/Obstacle.js) to represent obstacles and manage their movement.

Integrated the above components in [`App.js`](https://github.com/aakanksha-k/DinoGame-Clone/blob/master/src/App.js)

5. Testing
Run the application to test all game mechanics using: \
`npm start`

Ensure the development server starts correctly and the game functions as expected on the local browser.

![image](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/d4a1d725-b05f-4fc4-b627-6f04d687a589)

![image](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/8be9c3b8-b115-4e41-aec4-927af38e4475)

#### Step 2: Developing React app inside Docker container
1.	Run the command in an empty directory in VS Code to run a container of nodejs
`docker run -it -v$(PWD:/app -p 3000:3003 node16.20.2 sh)`

2. Go inside docker container using `cd app`
3. Initialise a new react application using `npx create-react-app .`
4.	Once initialized, add all the components & files, of Dino Game clone from the earlier directory.
   
![image](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/67ff4a2e-fa1a-46fa-911f-037c14b67b43)

5.	Ensure react application is running correctly on the local browser

\
Hence, a basic react web application is successfully built inside the docker container.
![image](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/facf606a-a58c-4c81-9b3e-3bce1a04ca7b)


#### Step 3: Containerizing the app using Docker + Docker Compose

1. Exit from the docker container using command `exit`
2.	Create a [`Dockerfile`](https://github.com/aakanksha-k/DinoGame-Clone/blob/master/Dockerfile) for production
3.	Create a [`docker-compose.yml`](https://github.com/aakanksha-k/DinoGame-Clone/blob/master/docker-compose.yml) file, such that it can run the images from Dockerfile as a container on the main, Elastic Beanstalk server
4.	Test the build on local machine using `docker-compose up --build`
\
![image](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/678a4ee3-265a-4ccb-b54f-9f3add661a49)

#### Step 4: Configuring AWS Elastic Beanstalk

1. Create a sample web application & it’s environment using the AWS EB console
![image](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/256d2aca-a475-49cb-b1a0-9a337528d179)

#### Step 5: Deploying the custom application on AWS EB with CI/CD workflow using Github actions

1. Create `.github/workflows` folder in your local repository & add [`deploy-aws.yml`](https://github.com/aakanksha-k/DinoGame-Clone/blob/master/.github/workflows/deploy-aws.yml) file, including the triggers, branches & actions
2.	Commit & Push the repo to GitHub as ‘Deploy React to AWS EB’
![image](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/92e14e8c-fe91-42dc-80c1-674534bf6b56)

3.	Once workflow is successfully executed & the custom, DinoGame Clone web application is deployed to AWS EB, check the domain from AWS EB console.
\
![image](https://github.com/aakanksha-k/DinoGame-Clone/assets/136099041/88481539-9530-47ed-b9b1-f23c52dcc553)


\
👩‍💻Icons credits: [`here`](https://chromedino.com/emojis.php)
