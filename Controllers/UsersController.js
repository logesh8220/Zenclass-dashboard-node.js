// const Users = require("../Model/Users")
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const Signin = async (req, res) => {
//     try {
//         let salt = await bcrypt.genSalt(10);
//         let hash = await bcrypt.hash(req.body.Password, salt);
//         req.body.Password = hash;
//         let data = await Users.create(req.body);
//         res.status(200).json({ message: "Sighin Successfully" })
//         res.json(data)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Somthing went wrong" });
//     }
// };

// const Login = async (req, res) => {
//     try {
//         let user = await Users.findOne({ Email: req.body.Email });
//         if (user) {
//             let compare = await bcrypt.compare(req.body.Password, user.Password);
//             if (compare) {
//                 let token = jwt.sign({ _id: user._id }, process.env.SECRET, {
//                     expiresIn: "60m",
//                 });
//                 user.updateOne({ token: token }, function (err, sucsses) {
//                     if (err) {
//                         console.log(err)
//                     } else {

//                         res.status(200).json(user);;
//                     }
//                 })

//             } else {
//                 res.status(401).json({ message: "Username / Password is Wrong" });
//             }
//         } else {
//             res.status(401).json({ message: "User not found" });
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ message: error });
//     }
// };

// module.exports = { Signin, Login, }
const Users = require("../Model/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Signin = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.Password, salt);
        req.body.Password = hash;

        const user = await Users.create(req.body);
        res.status(200).json({ message: "Signin Successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const Login = async (req, res) => {
    try {
        const user = await Users.findOne({ Email: req.body.Email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const compare = await bcrypt.compare(req.body.Password, user.Password);
        if (!compare) {
            return res.status(401).json({ message: "Username / Password is Wrong" });
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
            expiresIn: "60m",
        });

        await Users.findByIdAndUpdate(user._id, { token });

        res.status(200).json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { Signin, Login };
