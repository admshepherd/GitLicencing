This project was created from the Angular Seed project which can be found here:
https://github.com/angular/angular-seed

I also used an available angularjs module for setting the basic auth header which can be found here:
https://github.com/cornflourblue/angular-authentication-example

The angularjs seed project came configured to use the node package manager to download dependencies and start up a web server.
You can use these commands to do so:
```
npm install
...
npm start
```

Once the web server is running you can open a browser and view the app at [`localhost:8000/index.html`]

I was able to authenticate with github with credentials entered into the application and display a list of repositories for a
given organization. I saw how to fork a repository through the api but I wasn't able to able to figure out how to make changes
to it through code and then tie that in to creating a commit which I then would be able to reference while creating a pull
request through the api. Unfortunately I am out of time so please enjoy this application which can be used to view the repositories
of an organization.

