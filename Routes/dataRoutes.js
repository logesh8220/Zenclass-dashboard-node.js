const router = require('express').Router();
const {getcodekata,postcodekata, putcodekata, getotal, postotal} = require('../Controllers/CodekataController');
const { getCompletion, postCompletion, putCompletion } = require('../Controllers/CourseCompletionController');
const { gettask, posttask, puttask } = require('../Controllers/TasksController');
const { getWebkata, postWebkata, putwebkata } = require('../Controllers/WebkataController');




router.get('/',(req,res)=>{
    res.json("hi there")
});

router.get('/codekata',getcodekata)
router.get('/todayandtotal',getotal)
router.post('/todayandtotal',postotal)
router.post('/codekata',postcodekata)
router.get('/tasks',gettask)
router.post('/tasks',posttask)
router.get('/webkata',getWebkata)
router.get('/webkatatotal',getotal)
router.post('/webkata',postWebkata)
router.get('/completion',getCompletion)
router.post('/completion',postCompletion)
router.put('/completion',putCompletion)
module.exports = router