This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
I also use [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap) framework in this project.

## Run project locally
```
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features
1. Homepage to navigate to User List and Album List.
2. User List page.
3. Album List page.
4. User Detail page including 3 tabs: User Info, User Posts, User Albums
5. Album page contains all images of the album. The ability to click on the image to enlarge it.

## Design process
I choose a combination of React, Redux and Typescript to do this project.
Redux makes the code longer, but I like the idea of having a central store for data.
Typescript makes the code clearer and easier to navigate than plain Javascript.
Also I choose bootstrap because it helps to build fast and reduce time handling CSS.

For a quick project like this, I want to keep things simple.
So the layout is very basic contains 3 parts: navigation bar, header and content body.

The Redux states are correspondent with the page.

The project structure are self-explanatory written.

## Future Improvement
1. Error handling. For the sake of simplicity, right now, errors are only logged in console.
We can improve the error handling by inform the error to users using Toast or something.
2. UI/UX enhancement. Can add more motion or effect into the UI (loading, transition,...)
3. Testing. Of course, for the sake of maintainable code.