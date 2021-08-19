require('../config/db')();

const { Guest } = require('../models');

const makeAsync = async () => {
    try {
        await Guest.insertMany([
            {
                "name": "Diego",
                "accessKey": "iamdiego",
                "role": "admin",
                "rsvp": "Pending",
            },
            {
                "name": "Atheon",
                "accessKey": "iamatheon",
                "role": "admin",
                "icons": "https://imgur.com/oHjCx9T.png",
                "rsvp": "Maybe",
            },
            {
                "name": "Crota",
                "accessKey": "iamcrota",
                "role": "guest",
                "icons": "https://imgur.com/8ooCIiP.png",
                "rsvp": "Maybe",
            },
            {
                "name": "Oryx",
                "accessKey": "iamoryx",
                "role": "guest",
                "icons": "https://imgur.com/gTUq2D7.png",
                "rsvp": "Yes",
            },
            {
                "name": "Axsis",
                "accessKey": "iamaxsis",
                "role": "guest",
                "icons": "https://imgur.com/Zix2esr.png",
                "rsvp": "Yes",
            },
            {
                "name": "Callus",
                "accessKey": "iamcallus",
                "role": "guest",
                "icons": "https://imgur.com/oHjCx9T.png",
                "rsvp": "No",
            },
            {
                "name": "Riven",
                "accessKey": "iamriven",
                "role": "guest",
                "icons": "https://imgur.com/VJLsBIG.png",
                "rsvp": "Yes",
            },
        ])
    } catch (err) {
        console.log(err);
    }
}


makeAsync();