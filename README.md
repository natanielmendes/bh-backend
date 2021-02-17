# Brainhub Backend Technical Challenge

## Stack
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* [MongoDB Memory Database](https://github.com/nodkz/mongodb-memory-server)
* [Jest](https://jestjs.io/)

## Installation
Change directory to your project folder and install with NPM.

```bash
cd your/project/folder
npm install
```

## Testing

Run all the tests using the following command:

```bash
cd your/project/folder
npm test
```

## Running

Run the API on 3001 port using the following command:
```bash
cd your/project/folder
npm start
```

## Documentation

* {server} = http://localhost:3001 (by default)

### POST {server}/event

Creates an event (be sure you are sending the headers via your library).

**Headers**

Content-Type : application/json

**Request body (raw)**

```
    {
        "firstName": "Nataniel",
        "lastName": "Mendes",
        "email": "nataniel@brainhub.pl",
        "eventDate": "2021-02-17T00:00:00.000Z"
    }
```

**Sample request response(raw)**
```
    {
        "_id": "602d7b9d7509c40b5c03af2e",
        "firstName": "Nataniel",
        "lastName": "Mendes",
        "email": "nataniel@brainhub.pl",
        "eventDate": "2021-02-17T00:00:00.000Z",
        "__v": 0
    }
```

### GET {server}/event

Creates an event (be sure you are sending the headers via your library).

**Headers**

Content-Type : application/json

**Sample request response(raw)**
```
[
    {
        "_id": "602d7b337509c40b5c03af2d",
        "firstName": "Nataniel",
        "lastName": "Carvalho",
        "email": "nataniel.carvalho@brainhub.pl",
        "eventDate": "2021-02-15T00:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "602d7b9d7509c40b5c03af2e",
        "firstName": "Nataniel",
        "lastName": "Mendes",
        "email": "nataniel@brainhub.pl",
        "eventDate": "2021-02-15T00:00:00.000Z",
        "__v": 0
    }
]
```

## What could be set as requirements for an upcoming release (0.0.2 version)
* Testing status codes coming from API calls. As other than 200 status code responses, only 400 is returned when badly creating an event, so it's not required yet, at least not for free :)
* findById() is published as API GET /event/:id (0.0.1 version is not loading specific events)
* update() is published as API PUT /event/:id (0.0.1 version is not updating events)
* Implement pagination in GET /event/ API call
