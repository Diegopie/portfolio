const gameRouter = require('express').Router();

const { Guest, Games } = require('../models');

// * Mark Players Present as true or false
gameRouter.post('/players', async ({ body }, res) => {
    const { id, whatDo } = body;

    const filter = { _id: id }
    const updateFalse = { present: false }
    const updateTrue = { present: true }

    // ** If Client Sent 'present' Change User to present: true
    switch (whatDo) {
        case 'present':
            // console.log('hit present');
            Guest.findOneAndUpdate(filter, updateTrue, { new: true })
                .then(data => {
                    res.status(201).json({
                        success: true,
                        message: "Marked As Playing!"
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: "Error Updating Info",
                        error: err,
                    });
                })
            break;
        case 'absent':
            // console.log('hit absent');
            Guest.findOneAndUpdate(filter, updateFalse, { new: true })
                .then(data => {
                    res.status(201).json({
                        success: true,
                        message: "Marked As Not Playing!"
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: "Error Updating Info",
                        error: err,
                    });
                })
            break;
        default:
            console.log("ERROR: Invalid Case");
            break;
    }

});

gameRouter.post('/create', ({ body }, res) => {
    // console.log("hit Create");
    console.log(body);
    const { title, img, link } = body;

    const newGame = new Games({title, img, link});
    newGame.save(err => {
        if (err) {
            res.status(500).json({
                success: false,
                message: "Error Creating New Game",
                error: err,
            });
            return;
        }

        res.status(201).json({
            success: true,
            message: "Created Game!"
        });
    })
});

gameRouter.post('/update', ({ body }, res) => {
    // console.log("hit Create");
    console.log(body);
    const { gameInfo, link } = body;
console.log(body);
    const filter = { finder: 'findme' }
    const update = { title: gameInfo.title, img: gameInfo.img, link: link }

    Games.findOneAndUpdate(filter, update, { new: true })
        .then(data => {
            res.status(201).json({
                success: true,
                message: "Game Updated!"
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: "Error Updating Game",
                error: err,
            });
        })
});

gameRouter.post('/get', ({body}, res) => {
    
    try {
        Games.findOne(
            { finder: 'findme' }
        ).then( data => {
            if (!data) {
                res.status(500).json({
                    success: false,
                    message: "Error Finding Game",
                });
                return;
            }
    
            res.status(200).json({
                success: true,
                message: {
                    game: data,
                }
            });
        })
    } catch (err) {
        console.log(err);
    }
});

module.exports = gameRouter;
