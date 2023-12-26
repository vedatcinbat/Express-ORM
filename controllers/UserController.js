const {User} = require('../Models/index');


exports.getAllUsers = async (req, res) => {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
}

exports.createUser = async (req, res) => {
    const {username, password, email, location, Firstname, Lastname, Age, BirthDay} = req.body;
    const newUser = await User.create({username, password, email, location, Firstname, Lastname, Age, BirthDay});
    res.status(204).json(newUser);
}

exports.getUserById = async (req, res) => {
    const id = req.params.id * 1;
    const user = await User.findByPk(id);

    if(!user) {
        return res.status(404).json({message: `User coudnt found at index : ${id}`});
    }
    
    return res.status(200).json(user);
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id * 1;
    const user = await User.FindByPk(id);

    if(!user) {
        return res.status(404).json({message: `User coudnt found at index : ${id}`});
    }

    await user.destroy();
    console.log(`User successfully deleted with id : ${id}`);
}


