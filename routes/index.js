const router = require('express').Router()
const Event=require('../models/Events') // Using Events Schema

// localhost:1111/
router.get('/', function(req,res){
    // res.send("we are at the index Router")
    res.render('pages/pdfSubmit', {
        // event:new Event()
    })
        // do we have pass an event object here? or not needed?

})

router.get('/success', function(req, res){
    res.render('pages/index')
})

// localhost:1111/
router.post('/', async(req,res)=>{
    
    const event = new Event({
        eventName:   req.body.eventName,
        category:    req.body.category,
        date:        req.body.date,
        pointsValue: req.body.pointsValue,
        description: req.body.description,
        speakers:    req.body.speakers
    })

    try{
        // const savedEvent = await event.save()
        console.log("event " +event)
        // console.log( "savedEvent: "+savedEvent)
        console.log(JSON.stringify(req.body) )
        // res.send( JSON.stringify(req.body.eventName) )
        // console.log("req.body " +req.body) // does not work
        // res.send(req.body.eventName)
        res.redirect('/success')
    } 
    catch (err){
        console.log('There was an error')
        console.log(err)
        res.json({message:err})
    }
})

module.exports= router