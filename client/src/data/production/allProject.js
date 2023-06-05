const allProjects = [
    {
        name: 'Destiny 2 Seasonal Challenges',
        projDesc: `I used to spend hours organizing and tracking the huge amount of challenges available in Destiny 2 in OneNote so I knew how to most efficiently complete all of them. But all that time organizing could have been spent just playing the game!
        So now I let code do the work for me. By just getting data available from the game developer this site will do the hours of organizing I used to do for me!`,
        role: 'Role: Full-Stack Dev, sole author.',
        techStack: 'React, CSS, Bootstrap Navbar, PWA, Node/Express Server, Mongoose',
        githubLink: 'https://github.com/Diegopie/d2_seasonal_challenges',
        liveLink: 'https://d2-seasonal-challenges.herokuapp.com/',
        stillImage: '/assets/img/projects/d2Challenge-still.png',
        animateImage: '/assets/img/projects/d2Challenge-animate.gif'
    },
    {
        name: 'Cliff Essentials',
        projDesc: `Built for front desk staff at a resort. They have been using a paper system to take customer orders and manually adding their totals by hand 😲. I rebuilt this app from scratch to make the process much easier as well as adding quality if life features like Copy to Clipboard buttons for data that still needs to be manually added to their computer system`,
        role: 'Role: Full-Stack Dev, rewritten from scratch from work of unknown developer',
        techStack: 'React, CSS, Tailwind, TypeScript, PWA',
        githubLink: 'https://github.com/Diegopie/cliff-essentials',
        liveLink: 'https://cliff-essentials.herokuapp.com/',
        stillImage: '/assets/img/projects/cliffSun-still.png',
        animateImage: '/assets/img/projects/cliffSun-animate.gif'
    },
    {
        name: 'React Portfolio',
        projDesc: `I rebuilt my portfolio with responsive design in mind, with UI tailored for up to 21x9 screens.  I challenged myself to not use any CSS frameworks and avoid using React packages. 
        User customization is always my priority, so I implemented a dark mode toggler that updates colors and backgrounds across the site.`,
        role: 'Role: Full-Stack dev, sole author. Prototyped in XD and created in React. Created custom icons for the site as well as photographed most of the photos seen. Other photos and assets were licensed and listed on Github',
        techStack: 'React, CSS, Node/Express Server, Photoshop, Illustrator, Adobe XD',
        githubLink: 'https://github.com/Diegopie/portfolio',
        liveLink: 'https://diegopie.herokuapp.com/',
        stillImage: '/assets/img/projects/reactPort-still.png',
        animateImage: '/assets/img/projects/reactPort-animate.gif'
    },
    {
        name: 'Water Cooler',
        projDesc: 'This video conferencing application uses a unique GUI interface for interacting with large social groups. Users can use sprites to create new social spaces with unique video and text chats',
        role: 'Role: Full-Stack dev. Wrote friend request, room invitations, social space request systems, and connected front end UI with live database info. Managed database architecture, managing seed data, and UX/UI design',
        techStack: 'React, CSS, Bootstrap, React-Toastify, Service Workers, PWA, Node/Express Server, Mongoose, Jest, socket.io, Passport, Bcrypt, JWT, Eslint, Illustrator, Photoshop, XD',
        githubLink: 'https://github.com/Diegopie/water-cooler-refactor',
        liveLink: 'https://water-cooler-app.herokuapp.com/',
        stillImage: '/assets/img/projects/waterCooler-still.png',
        animateImage: '/assets/img/projects/waterCooler-animate.gif'
    },
    {
        name: 'PWA Budget Tracker',
        projDesc: 'This demo application was made to practice PWA implementation. It is an installable app with full offline support',
        role: 'Role: Implement Mongo and IndexDB database so they may sync together',
        techStack: 'HTML, CSS, Bootstrap, Service Worker, PWA, IndexedDB, Node/Express Server, Mongoose',
        githubLink: 'https://github.com/Diegopie/PWA-Budget-App',
        liveLink: 'https://budget-pwaa.herokuapp.com/',
        animateImage: '/assets/img/projects/budgetPWA-animate.gif',
        stillImage: '/assets/img/projects/budgetPWA-still.png',
    },
    {
        name: 'The Smartest Among Us',
        projDesc: 'Entertainment site for playing randomly generated quizzes. Users can save and edit randomly generated quizzes or create their own. Any saved quiz is shareable with friends to compete in leaderboards',
        role: 'Role: Team Lead - Assign tasks, set deadlines. Architect database, UX/UI Lead, front-end dev',
        techStack: 'HTML, CSS, Bootstrap, jQuery, Open Trivia API, Node/Express Server, Sequelize, Passport, Bcrypt, Photoshop, InDesign',
        githubLink: 'https://github.com/Diegopie/The-Smartest-Among-Us-Refactor',
        liveLink: 'https://the-smartest-among-us.herokuapp.com/',
        stillImage: '/assets/img/projects/among-still.png',
        animateImage: '/assets/img/projects/among-animate.gif',
    },
    {
        name: 'QR-aid Codes',
        projDesc: `An application for organizing game sessions with your friends. Users can easily select a time and date for what they want to play and receive a QR code to share with their friends!
        Scanning this code creates a calendar event to save to user’s preferred calendar application.`,
        role: 'Role: Team Lead - Assign tasks, set deadlines; UX/UI Lead. Implemented API integration and dynamically rendered content with jQuery',
        techStack: 'HTML, CSS, Bulma, jQuery, Rawg.io API, Qrickit API, InDesign',
        githubLink: 'https://github.com/Diegopie/qraid-codes',
        liveLink: 'https://diegopie.github.io/qraid-codes/',
        stillImage: '/assets/img/projects/qrcodes-still.png',
        animateImage: '/assets/img/projects/qrcodes-animate.gif',
    },
    {
        name: 'Weather Forecast',
        projDesc: `This is a weather forecast application that allows users to search any city in the US to find the current temperature, humidity, wind speed, UV index, and 5 day forecast. The application will automatically save a user's 10 recent searches.`,
        role: 'Role: Implement API integration and dynamically render API data in jQuery',
        techStack: 'HTML, CSS, Bootstrap, jQuery, Open Weather API',
        githubLink: 'https://github.com/Diegopie/local-weather-forecast',
        liveLink: 'https://diegopie.github.io/local-weather-forecast/',
        stillImage: '/assets/img/projects/calendar-still.png',
        animateImage: '/assets/img/projects/calendar-animate.gif',
    },
]

export default allProjects
