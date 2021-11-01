# My Portfolio

!["play" screen of app](./client/public/assets/img/readme/app.png)

## Description

My portfolio built with React and vanilla CSS 🙂.

[Live Link 😁](https://diegopie.herokuapp.com/)

&NewLine;
&NewLine;

## Table of Contents

- [Development](#Development)
- [Bugs](#Bugs)
- [Future Development](#Future-Development)
- [Resources](#Resources)
- [Contact](#Contact)
- [License](#License)

# Development

- [Technology Overview](#Technology-Overview)
- [Dependencies/Packages](#Dependencies/Packages)
- [Client](#Client)

## Technology Overview

&NewLine;
&NewLine;

```sh
Frontend – React, CSS3,  
Backend – Node, Express
```

&NewLine;
&NewLine;

## Dependencies/Packages

&NewLine;
&NewLine;

| | | |
| ------ | ------ | ------ |
| [express](https://www.npmjs.com/package/express) | [mongoose](https://www.npmjs.com/package/mongoose) | [react-typed](https://www.npmjs.com/package/react-typed) |
[react-router-dom](https://www.npmjs.com/package/react-router-dom) |

&NewLine;
&NewLine;

### Dev Dependencies

&NewLine;
&NewLine;

| | | |
| ------ | ------ | ------ |
| [eslint](https://www.npmjs.com/package/eslint) | [nodemon](https://www.npmjs.com/package/nodemon) |

&NewLine;
&NewLine;

> [Back To Development](#Development) || [Back To Table of Contents](#Table-of-Contents)

## Client

This app is rendered using React. My key goals for this portfolio was to only use vanilla CSS and to implement dark mode toggling.

### Dark Mode

The app relies on local storage and a GlobalContext utility that relies on React's useContext and useReducer to manage dark mode components.

#### App.jsx

The application uses matchMedia to listen to the user changing their system level color scheme preference and will automatically to swap between the two styles. By dispatching a boolean value to GlobalContext, the app will render dark mode styles when darkMode is set to true.

``` js
const [{ darkMode }, dispatch] = useGlobalContext();

if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            dispatch({ type: 'setDarkMode', payload: e.matches });
        })
}

// Remove Loading and Change Body Background Color On Dark Mode Change
useEffect(() => {
    if (darkMode) {
        document.body.classList.add('darkMode');
        return
    }
    document.body.classList.remove('darkMode');
}, [darkMode])
```

> [Back To Client](#Client) || [Back To Development](#Development)

#### GlobalContext.jsx

The GlobalContext provider is wrapped in index.jsx so we can use it throughout the application. A boolean value is stored within a defaultState object that runs determineDarkMode(). It will first check if the user has manually set there color preference  for the site, then check if the browser has matchMedia support, then grab the boolean value for where ever it ends up. In [Future Development](#Future-Development ), I would like to add a UI element to allow users to choose between using system level preference or manually switching themselves. Currently, the system level preference is inaccessible once a user manually sets there own, making it more of an easter egg than a feature 😅

``` js
const localDarkMode = JSON.parse(localStorage.getItem('darkMode'));

const determineDarkMode = () => {
    // Check No Local Storage
    if (localDarkMode === null) {
        // Check matchMedia Support
        if (window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        // Default to false
        } else {
            return false;
        }
    // Use data From Local
    } else {
        return localDarkMode;
    }
}

const defaultState = {
    darkMode: determineDarkMode(),
};
```

> [Back To Client](#Client) || [Back To Development](#Development)

#### Component Render

Using Intro.jsx as an example, we start by getting the value fo darkMode from our GlobalContext. We then use React's useState to utilize a ternary operator that will return either a dark or light mode background photo. We then use the value of this state to render to the page. With a simple useEffect, we can switch our modes back and forth whenever the value of darkMode changes.
The handleToggle is passed down to the DarkToggler component. It will simply provide a payload to GlobalContext and set a boolean value in local storage so we can persist our state after a reload. In [Future Development](#Future-Development ), I would like to move a lot of this code into a custom hook, as this process is repeated for every single darkMode component on the screen 😪

``` js
const Intro = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode }, dispatch] = useGlobalContext();

    // Set Classes Based On darkMode Value
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ? 'App-backImg-1-dark' : 'App-backImg-1-light')
    })

    // Update State On Toggle and Save Boolean Value to Local Storage For Persisting User Choice on Refresh
    const handleToggle = () => {
        if (darkMode) {
            localStorage.setItem('darkMode', false);
            dispatch({ type: 'setDarkMode', payload: false });
            return;
        } 
        localStorage.setItem('darkMode', true);
        dispatch({ type: 'setDarkMode', payload: true });
    }

    // Use State Change to Update DOM
    useEffect(() => {
        if (darkMode) {
            document.querySelector('#toggler').checked = true;
            setBackImg('App-backImg-1-dark');
        } else {
            setBackImg('App-backImg-1-light');
        }
    }, [darkMode])

    return (
        <section className={`App-backImg ${backImg}`}>
```

> [Back To Client](#Client) || [Back To Development](#Development)

## Bugs

- ProjectCards has it's text and Learn More button set on a 0 opacity setting until the user hovers over the card or clicks on it on mobile. This means that mobile users may click on the card where the Learn More button is hiding, thus popping up modal and creating a confusing experience.
  - I'm a little torn on a solution. I like that desktop users can click the button before the opacity changes to create a power user feeling but the experience does not translate at all to mobile. I may just add additional code to detect for a mobile device so that the text and buttons aren't display: none; then changed to display: block; to resume the normal opacity fade in.
- While the ProjectModal is displayed, other ProjectCards Learn More buttons can still be clicked. This causes a second modal to layer on top of the other and re-enables scrolling the body
- ProjectCards' Learn More button becomes unclickable
  - Not sure what's happening here. zindexes have been adjusted so that the text and button are on top of the background img but if you click around long enough users can no longer highlight text or click Learn More

## Future Development

I would like to continually update my portfolio as I learn and grow as a developer. I would love to get a grip on Three.js to make it look impressive. I would also like to dive into either Sass or Tailwind, I just have to decide which one to learn first. But as I learned as a kid, gotta catch 'em all 😎

- Write a custom hook for changing DOM for Dark Mode toggle
  - This will serve to clean up a lot of the code and more easily add more dark mode styling
- Use existing onMouse event to do grow animation on project cards
  - I think this will help the All Projects page pop a little more, but that page needs a lot of love regardless 😅
- Implement Floating, Responsive NavBar
  - This will be a nice touch to have for mobile users and allow me to add more setting to the site, such as preferred color theme behavior
- Preferred Color Theme Behavior
  - With a NavBar in place, I would like to have users select whether they would like to have the system color preference choose the site's color theme or if they would like to set it manually.
- Filter Projects Page
  - The Page just feels very dry at the moment and I would like to have more interactive elements to make it feel more exciting
- Optimise White Photos in Dark Mode
  - Not entirely sure how I want to approach this. I may play with filtering the color with CSS to make the whites less harsh in dark mode or just have alternate dark mode assets 🤷‍♀️
- Create a carousel to change photos in Into and About Me sections

## Resources

Adobe Icons: [freepik.com](https://www.freepik.com)

LinkedIn, CV Icons: [iconmonstr](https://iconmonstr.com/)

## Contact

If you have any feedback our questions, please reach me by [email](diegopie@outlook.com), [GitHub](https://github.com/Diegopie), or [LinkedIn](https://www.linkedin.com/in/diego-hernandez-7327381b2/)!

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed
