const guestRouter = require('express').Router();

const { Guest } = require('../models');

// * Create User

guestRouter.post('/new', async ({ body }, res) => {
    const { name, accessKey, rsvp, role, icons } = body;

    // * Check for Dup Access Keys
    const checkDupe = await Guest.findOne(
        { accessKey: accessKey }
    ).then(data => {
        if (!data) {
            return false;
        }
        return true;
    }).catch(err => {
        console.log(err);
    })

    // // ** No Match Will Still Return an Empty Array
    if (checkDupe) {
        res.status(500).json({
            success: false,
            message: "Access Key Already in Use",
        });
        return;
    }


    // * Create New Guest
    const newGuest = new Guest({ name, accessKey, rsvp, role, icons });
    newGuest.save(err => {
        if (err) {
            res.status(500).json({
                success: false,
                message: "Error Creating New Guest",
                error: err,
            });
            return;
        }

        res.status(201).json({
            success: true,
            message: "Created Guest!"
        });
    })
});

// * Server User and All Guest info on Login and Page Load
guestRouter.post('/login', ({ body }, res) => {
    const { accessCode } = body;

    try {
        Guest.findOne(
            { accessKey: accessCode }
        ).then( async data => {
            
            if (!data) {
                res.status(500).json({
                    success: false,
                    message: "Error Finding Guest",
                });
                return;
            }
    
            // ** Get All Guests
            const allHumans = await Guest.find({});
    
            const allHumansFiltered = [];
    
            allHumans.forEach(doc => {
                if (doc.public) {
                    allHumansFiltered.push(doc);
                }
            });
            
    
            res.status(200).json({
                success: true,
                message: {
                    human: data,
                    allHuman: allHumans,
                    allHumansFiltered: allHumansFiltered,
                }
            });
        })
    } catch (err) {
        console.log(err);
    }
});


guestRouter.post('/update', async ({ body }, res) => {
    const { finder, name, accessKey, rsvp, public, role, icons } = body;

    // * Check for Dup Access Keys if Access Key Was Changed
    if (finder !== accessKey) {
        const checkDupe = await Guest.findOne(
            { accessKey: accessKey }
        ).then(data => {
            // console.log('Hit Check Dupe');
            // No Dupe
            if (!data) {
                return false;
            }
            // Dupe
            return true;
        }).catch(err => {
            console.log(err);
        })
        //  // ** Fail if Dupe Exists
        if (checkDupe) {
            res.status(500).json({
                success: false,
                message: "Access Key Already in Use",
            });
            return;
        }
    }

    const filter = { accessKey: finder }
    const update = {
        name: name,
        accessKey: accessKey,
        rsvp: rsvp,
        public: public,
        role: role,
        icons: icons
    }

    Guest.findOneAndUpdate(filter, update, { new: true })
        .then(data => {
            res.status(201).json({
                success: true,
                message: "Info Updated!"
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: "Error Updating Info",
                error: err,
            });
        })
});

module.exports = guestRouter;
