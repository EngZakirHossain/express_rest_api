const {v4:uuidv4} = require("uuid");

const usersModel = [
    {
        id: uuidv4(),
        userName :"Zakir Hossain",
        email: "jakir@gmail.com"
    },
    {
        id: uuidv4(),
        userName :"Zakir",
        email: "admin@gmail.com"
    }
];

module.exports = usersModel;