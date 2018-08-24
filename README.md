# NowTV React Interview

![NowTV](./logo.png)

## Commands

- **npm start**: Runs the web application in developer mode
- **npm test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks. Please ask before downloading any external libraries, most will be fine.

1. In `service.js`, utilise the 'APIs' provided by `data.js` to create a promise resolving to an array of chatlog messages in the following format, sorted by time.

```json
[
  {
    "messageId": "12356",
    "userId": "613651251",
    "fullName": "Robin Balmforth",
    "timestamp": "2017-02-23T14:57:20.629Z",
    "email": "robin@example.com",
    "message": "Hello, World!",
    "avatar": null
  },
  ...
]
```
(Do not modify `data.js` to achieve this, but if you think there's an issue ask the developer helping you!)

2. Create a view of this dataset, with the root of your React application starting in `App.js`. Including:
  - Display the `avatar` where applicable
  - Display the `email` on hover
  - Format the timestamp to be human readable

3. Zip test back up and send it back to recruiter.

4. Bonus Questions:
  - How would you achieve this with Redux?

           to implement this in redux with redux saga you could set up

           messageStore - This would contain the array of message plus possibly loading flags and errors


           Actions
              FETCH_DATA -> when dispatched initiates fetching the messages and members
              FETCH_DATA_SUCCESS -> dispatched when a successfull result comes back from the above call

           Sagas
            messageSaga
                @fetchData - Fetches the data from the rest or GraphQL api and once fetched dispatches the FETCH_DATA_SUCCESS action


           messageReducer - This would recieve the data from FETCH_DATA_SUCCESS action and uses the mergeAndFormatMessages utility to convert the data to the correct format.




  - How would you handle an error from the API?

            Use an errorReducer for global errors

            On error from the server dispatch a FETCH_DATA_FAIL error to update and another action ON_ERROR to the global errorsReducer


  - If you were to continue this application, what would you add?

            Full Tests across all the application

            Functionality wise it would probably want some kind of way to add new messages.

  - If you were to deploy this application (or any web application) to production, how would you personally do it?

            I would usually use a kind of Git-flow process and have develop and master (production) on auto deployment through something like jenkins

  - Finally, what did you think of the test? 😀

            the service test covers the basics but could be improved to test things like formatting, ordering and the number of messages is correct


