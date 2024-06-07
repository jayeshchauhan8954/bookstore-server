import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
import response_message from "../utils/helpers/msg.js";

export const signup = async (req, res) => {
    try {
        const { full_name, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).send({ message: response_message.allReadyExist('user') })
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        const createdUser = new User({
            full_name,
            email,
            password: hashedPassword
        })
        await createdUser.save()
        return res.status(201).send({
            message: response_message.created('user'), user: {
                _id: createdUser._id,
                full_name: createdUser.full_name,
                email: createdUser.email
            }
        })

    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            return res.status(403).send({ message: response_message.invalid() })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).send({ message: response_message.notFound() })
        }
        let comparePassword = await bcryptjs.compare(password, user.password)
        if (!comparePassword) {
            return res.status(400).send({ message: response_message.invalid() })
        }
        else {
            return res.status(200).send({
                message: response_message.found('user'), user: {
                    _id: user._id,
                    full_name: user.full_name,
                    email: user.email
                }
            })
        }
    } catch (error) {
        return res.status(500).send({ message: error.message })

    }
}