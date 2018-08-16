**Project Requirement**

* Create a single page app using reactjs or angular to view the list of github repos and view the details of a repo
* Show a page to list all the repos from github using the api https://api.github.com/repositories
* This page should contain a list or table with name and url link.
* Clicking on the link should take the user to another page to show the repo name, repo description, owner name and owner avatar.

**Folder Structure**

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    component/
      RepoDetail.js
      RepoDetail.scss
      RepoList.js
      RepoList.scss
    App.css
    App.js
    App.test.js
    index.css
    index.js
```

**To get started on this project, do the following steps**:

1. `npm install` the first time you clone this repo
2. `npm start` anytime you want to start developing. This will watch your JS files and re-run webpack when there are changes

**Techs the project uses**:

1. Uses React, React-Route
2. Uses SASS/SCSS instead of css
3. Uses flexbox to design flexible responsive layout structure without using float or positioning.
4. Uses media query to modify the app depending on a device's general type or specific characteristics and parameters (such as screen resolution or browser viewport width).
