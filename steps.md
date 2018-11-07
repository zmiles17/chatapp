1. Create a Message model (in models folder)
 * sender: string
 * message: string

2. Create an API POST route
 * this route creates a new message (use req.body) )(in the routes folder)

Should be able to create new messages with POSTMAN

3. Add post request to front end that sends sender and message

Should be able to create new messages by clicking the Send button

4. Create a GET route that gets all messages (in the routes folder)

5. Make a GET request to get all messages to the front end and console log them.

6. Make a render function. Render all messages from the db on load. Add all messages that come in over the socket.

7. Style it