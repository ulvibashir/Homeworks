## The Task

Create a new react app with two modal windows

#### Technical Requirements: 
- Create your app using `create-react-app`.
- Make two buttons: `Open first modal` and `Open second modal` on the main page.
- The corresponding modal window should open upon clicking each button
- Create a `Button` component, which will have the following properties, inherited from the parent component:
  - Background color (the `backgroundColor` property)
  - Text (the `text` property)
  - A function upon clicking (the `onClick` property)
- Create a `Modal` component, which will have the following properties, inherited from the parent component:
  - Modal window header text (the `header` property)
  - Is there a cross icon in the top right of the modal window (the `closeButton` boolean property, the `true/false` boolean property)
  - The modal window main text, which will be displayed in the middle of it's central section (the `text` property)
  - The buttons that are located in the bottom section of the modal window, passed as an array of react components (the `actions` property)
- The rest of the page should be darkened using a translucent background when the modal window is opened.
- The modal window should close upon clicking the darkened background
- Style the buttons and the modal windows using SCSS
- Properties, which are passed into the components should be checked using `propTypes`
- The buttons should have different background colors
- The modal windows should contain different text
- The modal window design is given in a [PSD](./modal-window.psd) file.
- The first modal window should be exactly as in the psd but the second one should have different icons and texts
- All of the components must be made using ES6 classes.

#### Additional advanced complexity task
- Instead of styling components using SCSS, use JSS or Styled Components
