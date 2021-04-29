# Documentation

### index.js
This contains only the rendering function to render React component to DOM in the provided container. Also, this is the entry point for webpack to start the bundling. To keep this clean, all the development was happened in React component files.

### App
The top-level fully functional component, which is considered the biggest. Normally, this would have its own states and methods, but in this case, all the events happens in the lower level of the app so this only serves as a top-level container with customized layout.

### DonationForm
The component handles all the events of the form and modal. 
- updates its states on every change of the inputs
- passes the states to the modal to be used for confirmation.
- all the input's values are stored in the same state object => don't need to define different states and state-setting functions in React hooks.

### FormModal
- Just a confirmation popup when user click submit 
- The code could be inside donationForm.js, but for the sake of readability, donationForm.js is a bit too big already, separating this modal to an other component seems like a good idea, maintain the proper sizes for components.
- prop-types is to make sure the modal is getting the correct props **all the time** as they are required, otherwise, the modal would be useless and meaningless.

### webpack config
- The config is set for **development** only, ideally, would have another one for **production**
- set up devServer and port, devTool, plugins for hot reload
- rules inside module are to decide which files can be applied with loaders for new react/javascript support and style support while bundling

### public/index.html
Just a HTML boilerplate which provides the container for React to render the components. The chosen container has the id `"root"` 
