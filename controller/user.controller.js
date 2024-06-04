import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"


export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).send({ message: "user already exist" })
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        const createdUser = new User({
            fullname,
            email,
            password: hashedPassword
        })
        await createdUser.save()
        return res.status(201).send({ message: "user created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        } })

    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)){
            return res.status(403).send({message:"please enter valid email and password"})
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).send({message:"user doesn't exist"})
        }
        let comparePassword=await bcryptjs.compare(password,user.password)
        if(!comparePassword){
            return res.status(400).send({message:"Invalid credentials"})
        }
        else{
            return res.status(200).send({message:"login successfully",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})        
        }
    } catch (error) {
        return res.status(500).send({message:error.message})
    
    }
}