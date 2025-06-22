const router = require('express').Router();
const User = require('../models/user');
const List = require('../models/list');

//CREATE

router.post('/addTask', async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            const list = new List({title ,body,user: existinguser});
            await list.save().then(() => {
                res.status(200).json({ message: 'List created successfully', list });
            });
            existinguser.list.push(list);
        }
        // res.status(201).json({ message: 'List created successfully', list });
    } catch (error) {
        res.status(500).json({ message: 'Error creating list', error: error.message });
    }
});

//UPDATE

router.put('/updateTask/:id', async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            const list= await List.findByIdAndUpdate(req.params .id, { title, body });
            list.save().then(() => {
                res.status(200).json({ message: 'List updated successfully' });
            });
        }
       
    } catch (error) {
        res.status(500).json({ message: 'Error updating list', error: error.message });
    }
});


//DELETE

router.delete('/deleteTask/:id', async (req, res) => {
    try {
        const {email } = req.body;
        const existinguser = await User.findOneAndUpdate({ email }, { $pull: { list: req.params.id } });
        if (existinguser) {
            const list= await List.findByIdAndDelete(req.params .id).then(() => 
                res.status(200).json({ message: 'Task Deleted' })
            );
        }
       
    } catch (error) {
        res.status(500).json({ message: 'Error updating list', error: error.message });
    }
});

//GET TASKS
router.get('/getTasks/:id', async (req, res) => {
    try {
            const list= await List.find({ user: req.params.id }).sort({createdAt: -1 });
           if(list.length > 0) {
                 res.status(200).json({ message: 'Tasks fetched successfully', tasks: list });
            }
            else{
                res.status(200).json({ message: 'No tasks found for this user' });
            }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
});


module.exports = router;