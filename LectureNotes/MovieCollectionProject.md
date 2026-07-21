// signup process to register user

1- install cookie parser and uui
2- create user model (model imports mongoos for schema)
3- create signup page in views
4- create user controller (controller imports model to modify the data in the schema like create new user in data-base)
5-now define routes for the functions in controller(import controllers in rout file)
6- import routes in index .js

// now lets start login process , we will verify the user
1- create view : login view
2- create controller: we will use the user controller for this as well
3- create routes for login controlleers in  the user routes fie same as signup route file
4- verify the login credentials on browser

// now we will move towards session id generation
1- service folder
2- auth.js file: it will make a session map(it will store in memory the session id coressponding to an object for example:
{
   "abc123": {
      name: "Rafia",
      email: "rafia@gmail.com"
   }
}
)
3- cookie parsre setup
4- modify the loginController for session id storage and generating the session id

// now we will read cookie for that puprpose we need a middleware


