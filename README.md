# 4Kiddos E-Shopping Website
![image](https://github.com/nsyifa/4kiddos/assets/89928533/1ef35dbb-0716-4f0c-b29d-3937bdbbcd24)

4Kiddos is a full-stack e-shopping website demo for a children's toy company, inspired by Toys R Us. Made with a React.js frontend, Node.js backend, and a local MySQL database.

## Features
  1) Landing page
  2) User log-in and registration
  3) Product catalogue with filtering and sorting
  4) Shopping cart
  5) Checkout page (demo only)

## Screenshots
![image](https://github.com/nsyifa/4kiddos/assets/89928533/86348f0a-ba13-4f8f-ad1c-5adf4d712218)
![image](https://github.com/nsyifa/4kiddos/assets/89928533/43d51629-82ec-4bf7-afe6-82b796488298)
![image](https://github.com/nsyifa/4kiddos/assets/89928533/17ddf8ff-7716-4998-b611-9282e59a890e)
![image](https://github.com/nsyifa/4kiddos/assets/89928533/8065806d-7bbc-4e78-a056-25c6c6f97d10)

## Drive Link (Documentation and database)
https://drive.google.com/drive/folders/1htCgO5FRlL0djQy3NOuWSHoEGXxx9I_R?usp=share_link

## Requirements:
  1) Node.js

## How to Run:
  1) Clone the repository
  2) Backend:
     1. In the backend-node folder, execute the command 'npm install'
     2. In the db.config.js file in the config folder, change the data to match the local database in your system (database can be downloaded through the drive link)

        ![image](https://user-images.githubusercontent.com/89928533/227908009-749c9978-4dfb-4fda-a5ca-49becef85008.png)
     4. In the backend-node folder, execute the command 'node server.js' to run the backend
     5. If successfully connected, terminal will output:

        ![image](https://user-images.githubusercontent.com/89928533/227908593-ed5863df-bc1b-4665-a15e-8c027873b47c.png)
  3) Frontend:
     1. In the frontend/package.json file, delete brainhubeu-react carousel from the dependencies
        ![image](https://user-images.githubusercontent.com/89928533/227909896-69307eaa-10ba-47ed-8c76-b3cec7302c94.png)
     2. Also delete the dependency from the package-lock.json file
     3. In the frontend folder, execute the command 'npm install'
     4. Execute the command 'npm i @brainhubeu/react-carousel --legacy-peer-deps'
     5.  Execute the command 'npm run start' to run the frontend








