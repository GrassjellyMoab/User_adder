- Components:
1) AddUser
2) AddUserForm
3) Error 
5) Userlist
6) UsernameItem


How this app works:
- App Js containers 3 child components: AddUser, UserList, Error
- AddUser collects the data inputed and appends to array contained by a state in App.js
- Error component checks a state boolean in App.js and renders depending on whether boolean is true/false
- UserList maps array from state into UsernameItem components



