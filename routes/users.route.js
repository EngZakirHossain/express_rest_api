const {getAllUsers,saveUser,updateUser,deleteUser} = require("../controllers/users.controller");
const router = require("express").Router();

router.get('/',getAllUsers);
router.post('/',saveUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router;