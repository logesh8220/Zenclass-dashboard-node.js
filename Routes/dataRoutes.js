const router = require('express').Router();
const { getClasses, postClasses, putClasses, putStatus } = require('../Controllers/ClassesController');
const { getcodekata, postcodekata, putcodekata, getotal, postotal } = require('../Controllers/CodekataController');
const { getCompletion, postCompletion, putCompletion } = require('../Controllers/CourseCompletionController');
const { gettask, posttask, puttask } = require('../Controllers/TasksController');
const { Signin, Login } = require('../Controllers/UsersController');
const { getWebkata, postWebkata, putwebkata } = require('../Controllers/WebkataController');

router.post('/signin', Signin)
router.post('/login', Login)
router.get('/codekata', getcodekata)
router.get('/todayandtotal', getotal)
router.post('/todayandtotal', postotal)
router.post('/codekata', postcodekata)
router.get('/tasks', gettask)
router.post('/tasks', posttask)
router.get('/webkata', getWebkata)
router.get('/webkatatotal', getotal)
router.post('/webkata', postWebkata)
router.get('/completion', getCompletion)
router.post('/completion', postCompletion)
router.put('/completion', putCompletion)
router.get('/classes', getClasses)
router.post('/classes', postClasses)
router.put('/classes', putClasses)
router.put('/classes/Status', putStatus)
module.exports = router