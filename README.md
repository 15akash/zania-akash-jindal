## about the code and logic implementation

I have developed this application based on the assumption that there are 3 columns and a certain set of data will be there. The data will be populated equally in these 3 columns starting from the left in row 1. With this logic, the scenario of having 5 cards and showing 3 cards in the first row and 2 cards in 2nd row fulfills our one of the conditions.

I made this application only for the purpose of desktop/laptop considering there will be a mouse which would help in drag and drop. I didn't made this app similar to what we see in Jira board where the user can drag and drop across different columns otherwise that would violate our condition of having 3 cards in the first row and 2 cards in the 2nd row. Even if I try to create similar to Jira, in that case, it will make the entire row look fluctuate on the change or else I need help on the expectations.

`How the application is developed and works?`
The app is made from scratch, there is no external library used in this. I am only using typescript and scss. There is draggable feature in the html using which I am handling all the logic right from the drag start till the drag is completed.
onDragStart helps me to identify which card is being dragged and onDragOVer helps me to identify which over which card the draggedCard is being hovered on. With the help of this logic I am moving the cards from one place to other. For animation to work correctly, I am using preventDefault method from onDragOver.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
