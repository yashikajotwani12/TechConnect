const express = require('express')
const router = express.Router();
const UserModel = require('../models/User')
const bcrypt = require('bcryptjs')

// Registeration
router.post('/register', async (req, res) => {
    try {
        let { name, email,  password, cpassword } = req.body;
        if (!name || !email || !password || !cpassword) {
            return res.status(400).json({ message: 'Empty Input Fields' });
        }
        if (password !== cpassword) {
            return res.status(400).json({ message: 'Password not match' })
        }
        try {
            const userexist = await UserModel.findOne({ email: email })
            if (userexist) {
                return res.status(500).json({ message: 'User Already Exist!!' })
            }
            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);
            cpassword = await bcrypt.hash(cpassword, salt);
            const user = await new UserModel({ name, email ,password, cpassword })
            const userRegister = await user.save();
            if (userRegister) {
                res.status(200).json({ message: 'User Registered Succesfully!!!' })
            } else {
                res.status(400).json({ message: 'Something Went Wrong' })
            }
        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
    }
})


//Login Routing
router.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        const userexist = await UserModel.findOne({ email: email });
        if (!userexist) {
            return res.status(500).json({ message: "User not Registered!!!" });
        }
        const userpassword = await bcrypt.compare(password, userexist.password);
        if (!userpassword) {
            return res.status(500).json({ message: "Invalid Credentials!!!" });
        }
        res.status(200).json({ user: userexist });
    } catch (err) {
        console.log(err);
    }
})

router.get('/all_profiles', async(req,res)=>{
    try{
        const users = await UserModel.find({});
        return res.status(200).json({user: users});
    }catch(err){
        console.log(err);
    }
})

router.patch('/updateMyProfile/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        // const {profileURL,name,position,description,education,skills,Birthday,Socials,tags}= req.body;
        const updateUser = await UserModel.findByIdAndUpdate(id,req.body,{new: true});
        if(!updateUser)res.status(400).json({message: 'Not Response'})
        return res.status(200).json({user: updateUser});
    }catch(err){

    }
})

module.exports  = router;