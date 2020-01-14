const db = require('./connection');
const bcrypt = require('bcryptjs');

function createHash(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

// Create
function create(username, password) {
    const hash = createHash(password);
    const newUser = {
        username,
        hash
    };
    console.log(newUser);   
}

// Retrieve
function login(username, password) {
    const theUser = getByUsername(username);
    return bcrypt.compareSync(password, theUser.hash);
}

function getByUsername(username) {

}

function getById(id) {

}
// Update

// Delete

module.exports = {
    create,
    login,
    getByUsername,
    getById
};

