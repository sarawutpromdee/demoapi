const Users = require('../model/user.model.js');
const Repository = require('../repository/users.repository.js');
const config = require('../config.js');
const bcrypt = require ('bcryptjs')
const Config = new config.Config();
var repository = new Repository.UsersRepository()
require("dotenv").config()

exports.new = async function (req, res) {
//     const hashedPassword = await bcrypt.hashSync(req.body.password, 10)
    var users = new Users.Users()
    users.setName(req.body.name);
    users.setEmail(req.body.email);
    users.setPassword(req.body.password);
    users.setPhoneNumber(req.body.phone);
    const jsonStr = JSON.stringify(users);
    const jsonObj = JSON.parse(jsonStr);
    const docRef = await repository.connect_register(jsonObj);
    res.json({
            message: 'users create success',
            data: jsonObj,
            docRef: docRef.id,
            status: 200
     });
};
exports.view = async function (req, res) {
    const authHeader = req.headers["authorization"]
    const token = authHeader.split(" ")[1]
    console.log(token);
     if (token == null) res.json({ message: 'Token not present!', data: "", status: 201});
        const getArrayToken = Config.getTokenArray();
        console.log(getArrayToken);
     if (!getArrayToken.includes(token))res.json({ message: 'Token not present', data: "", status: 201});

        const profile = await repository.connect_email(Config.getverify(token));
        res.json({
                message: 'users login success',
                data: profile
        });
        
};
exports.login  = async function (req,res) {
    var profile = await repository.connect_email(req.body.email);
    if (profile == null) 
            res.json({
                    message: 'Password Incorrect!',
                    data: "",
                    status : 201
            })
        if (await bcrypt.compare(req.body.password, profile.password)) {
        // if (req.body.password == profile.password) {
        const accessToken =await Config.generateAccessToken ({email: req.body.email})
        const generateRefreshToken =await Config.generateRefreshToken ({email: req.body.email})
            res.json({
                    message: 'users login success',
                    data: profile,
                    accessToken: accessToken,
                    token: generateRefreshToken,
                    status : 200
            });
        } 
        else {
            res.json({
                    message: 'Password Incorrect!',
                    data: "",
                    status : 201
            });
     }
}

