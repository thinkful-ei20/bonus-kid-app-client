# Bonus Kid Client
We are [live here](https://bonus-kid-client.herokuapp.com/)!

Between studying, extra-curricular activities, and handling their responsibilities kids deserve a bonus! 

This app is designed to increase positive interaction between parents and children and encourage children to have better behavior habits.


## Developers' Note
There are two user types in Bonus Kid, Parent and Child. Some obstacles to overcome were planning out how to share information between parent and child accounts, while giving parent accounts the ability to manage children accounts if necessary. Making astute relationships within our database and populating schemas on different occasions resolved the issue. 

View our [server code here](https://github.com/thinkful-ei20/bonus-kid-app-server).

The technical highlight of Bonus Kid utilization MongoDB’s loose schemas. To ensure a smooth user experience on the client, only one fetch call is made to render a page.  The authtoken is loaded with all of the user’s data needed to render a page, and store the data in our Redux ‘User’ state. Each time a call to the database is made, a PUT, POST, or DELETE, a new authtoken is return to the client with updated information rather than just the change in the database. 

As an additional feature, parents should be notified when their child completed a task. Moment.js is used both on the server side and client side. On the client, it ensures that the time sent in is consistent with the server. On the server side there is business logic to compare the expiry date (or due date of a task) to the date a specific PUT request is sent in by a child user. The server is also able to then send a corresponding text message (provided by a parent user upon logging in) through the Twilio package.


## Features
![Screen shots of login and dashboard]("https://i.imgur.com/FBv3pyy.png" "Login and dashboard")



##Manageing State
At first glance, handling the data from the server may seem a bit trickey. We loaded all of our data within the user auth token. We recommned installing Redux dev tools for your browser while developing. 

To retreive the database from state look into ```auth.authToken``` in the redux state. Data decoded from the authToken will look something like this: 

```
{
  "user": {
    "child": [
      {
        "totalPoints": 110,
        "currentPoints": 20,
        "tasks": [
          {
            "complete": true,
            "childComplete": true,
            "expiryDate": "",
            "currentTime": "",
            "updatedTime": "1532968886552",
            "name": "A on a test",
            "pointValue": 10,
            "childId": "5b5d014829d7fa1ec115570d",
            "parentId": "5b5d014829d7fa1ec1155709",
            "createdAt": "2018-07-28T23:50:33.609Z",
            "updatedAt": "2018-07-30T16:42:01.347Z",
            "id": "5b5d014929d7fa1ec1155715"
          }
        ],
        "rewards": [
          {
            "purchased": false,
            "expiryDate": "1532822891670",
            "currentTime": "1532822891670",
            "parentId": "5b5d014829d7fa1ec1155709",
            "childId": "5b5d014829d7fa1ec115570d",
            "name": "Movies",
            "pointValue": 20,
            "id": "5b5d056b8298372e414f9edb"
          },
          {
            "purchased": false,
            "expiryDate": "1532823513951",
            "currentTime": "1532823513950",
            "parentId": "5b5d014829d7fa1ec1155709",
            "childId": "5b5d014829d7fa1ec115570d",
            "name": " m3423",
            "pointValue": 66,
            "id": "5b5d07d98298372e414f9edf"
          },
          {
            "purchased": false,
            "expiryDate": "1532954372107",
            "currentTime": "1532954372107",
            "parentId": "5b5d014829d7fa1ec1155709",
            "childId": "5b5d014829d7fa1ec115570d",
            "name": "Six Flags",
            "pointValue": 100,
            "id": "5b5f0704d0ed96afcbbf4c7d"
          }
        ],
        "username": "some other kid",
        "name": "some other kid",
        "parentId": "5b5d014829d7fa1ec1155709",
        "id": "5b5d014829d7fa1ec115570d"
      },
      {
        "totalPoints": 0,
        "currentPoints": 0,
        "tasks": [],
        "rewards": [],
        "username": "newkid123",
        "name": "New Kid",
        "parentId": "5b5d014829d7fa1ec1155709",
        "id": "5b5f3f5ffbbeec0020abd332"
      }
    ],
    "rewards": [
      "5b5d056b8298372e414f9edb",
      "5b5d07d98298372e414f9edf",
      "5b5f0704d0ed96afcbbf4c7d"
    ],
    "username": "Tammy",
    "isParent": true,
    "name": "Tammy",
    "email": "Tammy@gmail.com",
    "id": "5b5d014829d7fa1ec1155709"
  },
  "iat": 1533002045,
  "exp": 1533606845,
  "sub": "Tammy"
}
```


You can see the entireity of the user object by decoded the authtoken at [JWT decode](https://jwt.io/).


![Our data stored in Authtoken]("https://i.imgur.com/StJNNJP.png" "jwt-decode")



## Features

- Give your children rewards for being productive!
- Add tasks for them to complete.
- Verify if your child has completed their tasks and reward them with points.
- Children will be able to buy from the parents store!

## Code style
Standard/Thinkful-style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)



### Front-end Tech:
- jwt-decode
- react
- react-dom
- react-redux
- react-router-dom
- redux
- redux-form
- redux-thunk
- nodemon
- passport
- passport-jwt
- passport-local

## Screenshots





