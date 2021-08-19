require('../config/db')();
const { Guest } = require('../models');

const userIcons = [
    'https://imgur.com/oHjCx9T.png',
    'https://imgur.com/gTUq2D7.png',
    'https://imgur.com/Zix2esr.png',
    'https://imgur.com/8ooCIiP.png',
    'https://imgur.com/wSMX3Jj.png',
    'https://imgur.com/VJLsBIG.png',
];

const randomImg = () => {
    const index = Math.floor(Math.random() * 6);
    return userIcons[index];
}


const rsvpOptions = [
    'Yes',
    'No',
    'Maybe',
    'Pending'
];

const randomRsvp = () => {
    const index = Math.floor(Math.random() * 4);
    return rsvpOptions[index];
}

// console.log(randomImg());

const makeAsync = async () => {
    try {
        await Guest.insertMany([
            {
                "name": "Diego",
                "accessKey": "iamDiego",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "admin"
            },
            {
                "name": "Chris",
                "accessKey": "iamChris",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Anne",
                "accessKey": "iamAnne",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Haylee",
                "accessKey": "iamHaylee",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Tony",
                "accessKey": "iamTony",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Diana",
                "accessKey": "iamDiana",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Josh",
                "accessKey": "iamJosh",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Cody",
                "accessKey": "iamCody",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Sean",
                "accessKey": "iamSean",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Hunter",
                "accessKey": "iamHunter",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Cheyenne",
                "accessKey": "iamCheyenne",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Reid",
                "accessKey": "iamReid",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Jorge",
                "accessKey": "iamJorge",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Brett",
                "accessKey": "iamBrett",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Kori",
                "accessKey": "iamKori",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Sandra",
                "accessKey": "iamSandra",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Parker",
                "accessKey": "iamParker",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Audrey",
                "accessKey": "iamAudrey",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Jane",
                "accessKey": "iamJane",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Maddie",
                "accessKey": "iamMaddie",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Tyler",
                "accessKey": "iamTyler",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Sydney",
                "accessKey": "iamSydney",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Trevor",
                "accessKey": "iamTrevor",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Clarisa",
                "accessKey": "iamClarisa",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Abby Jo",
                "accessKey": "iamAbby Jo",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Alex",
                "accessKey": "iamAlex",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Christian",
                "accessKey": "iamChristian",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Katie",
                "accessKey": "iamKatie",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Paul",
                "accessKey": "iamPaul",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Jarius",
                "accessKey": "iamJarius",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Uday",
                "accessKey": "iamUday",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Idris",
                "accessKey": "iamIdris",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Matt",
                "accessKey": "iamMatt",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Anthony",
                "accessKey": "iamAnthony",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Rett",
                "accessKey": "iamRett",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Daniel",
                "accessKey": "iamDaniel",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Crystian",
                "accessKey": "iamCrystian",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Geesus",
                "accessKey": "iamGeesus",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Marsha",
                "accessKey": "iamMarsha",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Fofe",
                "accessKey": "iamFofe",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Tyler",
                "accessKey": "iamTyler",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Arlee",
                "accessKey": "iamArlee",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
            {
                "name": "Dumplin",
                "accessKey": "iamDumplin",
                "icons": randomImg(),
                "rsvp": randomRsvp(),
                "role": "guest"
            },
        ])
    } catch (err) {
        console.log(err);
    }
}


makeAsync();