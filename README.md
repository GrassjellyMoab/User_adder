This is a practice project for me to create a React app from scratch using all the skills I have learnt so far. 

What does this app do?
- Takes a user input for username and age
- List out the input
- Invalid ages(not a number) or empty inputs will result in an error window being displayed

How the code works(Basic Description):
- Components:
1) AddUser
2) AddUserForm
3) Error 
5) Userlist
6) UsernameItem

- App Js containers 3 child components: AddUser, UserList, Error
- AddUser collects the data inputed and appends to array contained by a state in App.js
- Error component checks a state boolean in App.js and renders depending on whether boolean is true/false
- UserList maps array from state into UsernameItem components



