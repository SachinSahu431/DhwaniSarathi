# Dhwani Sarathi

### SIH 1403: App-Based Audiometer
### Problem Statement:

Traditionally, assessing a person's hearing loss involves using a "Pure Tone Audiometer," a cumbersome instrument that requires significant time and effort to operate. This lengthy process is particularly problematic in large-scale hearing tests. To address this, we propose a mobile phone-operated app-based audiometer, which will greatly benefit the detection and diagnosis of hearing loss in school children.

### Motivation:
Implementing an app-based audiometer for school screenings revolutionizes the detection and management of hearing loss in children. This mobile solution offers unmatched accessibility, convenience, and cost-effectiveness, significantly reducing testing time while ensuring early detection. By harnessing modern technology, the app enables healthcare providers, educators, and parents to quickly identify potential hearing issues, allowing for timely intervention and improving academic and social outcomes for children.

### Features of App
- Pure Tone Audiometry Test
- Test Results, Analysis, and Interpretation
- Classroom-based management system with Analytics
- Connectivity to the Nearest Doctor
- Digitization of physical audiometry documents
- and many more...

### Tech Stack
- React Native
- Django

## Demo Video on YouTube
[![App-Based Audiometer Demo](https://img.youtube.com/vi/Ta_q6q90akU/maxresdefault.jpg)](https://www.youtube.com/watch?v=Ta_q6q90akU)


## Screenshots
<h3>Authentication</h3>
<p>
 <img src="Screenshots/Login.jpeg" width="245">&emsp;
 <img src="Screenshots/Signup.jpeg" width="245">&emsp;
  <img src="Screenshots/StartTest.jpeg" width="245">&emsp;
</p>

<p>
<h3>User View</h3>
 <img src="Screenshots/userScreens.png" >&emsp;
</p>

<h3>Preliminary Checks</h3>
<p>
 <img src="Screenshots/preliminaryCheck1.png" width="230">&emsp;
 <img src="Screenshots/NoiseDetection.jpeg" width="230">&emsp;
 <img src="Screenshots/Headphone Orientation.jpeg" width="230">&emsp;
 <img src="Screenshots/obstacle_detection.png" width="230">&emsp;
</p>

<h3>Test</h3>
<p>
 <img src="Screenshots/Test_audiometer.png">&emsp;
</p>

<h3>Results</h3>
<p>
 <img src="Screenshots/Results.png">&emsp;
 <br>
 <img src="Screenshots/Results_audiometer.png">&emsp;
</p>

<h3>Teacher View</h3>
<p>
 <img src="Screenshots/Teacher Profile Page.jpeg" width="245">&emsp;
 <img src="Screenshots/Assignments2.jpeg" width="245">&emsp;
</p>

<p>
<h3>Analytics</h3>
 <img src="Screenshots/analytics_audiometer.png">&emsp;
</p>

## Getting Started
### Firebase
- Create a Firebase account
- Add the firebase config in FirebaseConfig.js in audiometer/
  
### Frontend
- Clone the repository
- Run the below commands:

```shell
cd audiometer
npm install
npm run web
```
- Change `ip` value to address in the command line in the file audiometer/app/Constants/ip.js

### Backend
- Run the below commands:
```shell
cd server 
```
- Create Virtual Environment
  
You can use multiple methods to create a virtual environment, whatever suits your need

##### Conda
```shell
conda create -n venv python=3.6.3 anaconda
conda activate venv
```
#### Virtualenv

##### Windows
```shell
python -m venv venv   
.\venv\Scripts\Activate
```

##### Linux
```shell
python3 -m venv venv 
source venv/bin/activate
```

- Install the requirements and run server
```shell
pip install -r requirements.txt
#Intialize DB data/Create Models in DB
python manage.py makemigrations
python manage.py migrate

cd backend
python manage.py runserver <ip_address>:80/<ip_address>:8081 

#Here <ip_address> is the IP address on which the expo is running
```
## Team
- Sachin Kumar Sahu
- Palivela Ganesh Priyatham
- Preethi Varsha Marivina
- Siddhartha G
- Swami Ramchandra Kedari
- Sirish Sekhar

### References
- Charih, François, and James R. Green. "Audiogram Digitization Tool for Audiological Reports." IEEE Access 10 (2022): 110761-110769.
- [Machine Learning in Audiology: Applications and Implications](https://repository.library.carleton.ca/concern/etds/gt54kp02t).


