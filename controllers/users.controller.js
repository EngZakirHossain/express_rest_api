let users = require("../models/users.model");
const {v4:uuidv4} = require("uuid");
//get all user data
const getAllUsers = (req, res)=>{
    res.status(200).json({
        users
    })
};

//save user data
const saveUser = (req, res)=>{
    const newUser = {
        id:uuidv4(),
        userName:req.body.userName,
        email:req.body.email,
    }
    users.push(newUser);
    res.status(201).json({
        message:'Data save Successfully',
        success: true,
        users
    });
};

//update user data
const updateUser = (req, res)=>{
    const userId = req.params.id;
    const {userName,email} = req.body;
    users.filter((user)=>user.id===userId)
        .map((selecteduser)=> {
            selecteduser.userName = userName;
            selecteduser.email = email;
        }
    );
    res.status(200).json({
        message:'Data Update Successfully',
        success: true,
        users
    });
};
//delete User  data
const deleteUser = (req, res)=>{
    const userId = req.params.id;
    let newUsers = users.filter((user) => user.id !== userId);
    res.status(200).json({
        message:'Data Delete Successfully',
        success: true,
        newUsers
    });
};

module.exports = {getAllUsers,saveUser,updateUser,deleteUser}