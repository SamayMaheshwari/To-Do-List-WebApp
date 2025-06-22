const router = require('express').Router();
const User= require('../models/user');

//SIGN UP

router.post('/register', async (req, res) => {
   
    try {
        const { email,username, password } = req.body;
        const hashpassword= bcrypt.hashSync(password);
        const user = new User({email,username, password: hashpassword});
            await user.save().then(() => 
                res.status(201).json({ message: 'User created successfully' })  
            );
    }
     catch(error){
        res.status(500).json({ message: 'User Already Exists', error: error.message });
    }
})

// SIGN IN

router.post('/signin', async (req, res) => {
   
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }   
        const ispassword= bcrypt.compareSync(req.body.password, user.password);
        if(!ispassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const { password, ...userData } = user._doc;
        res.status(200).json({ message: 'User signed in successfully', user: userData });
    }
     catch(error){
        res.status(500).json({ message: 'User Already Exists', error: error.message });
    }
})

module.exports = router;
