const db = require('./connection');

// Create
function create() {

}

// Retrieve
async function one(id) {
    try {
        // Use .one() if there should exactly one result.
        // const onePet = await db.one(`select * from pets where id=${id}`);

        // $1 is syntax specfic to pg-promise
        // it means interpolate the 1st value from the array
        // (in this case, that's the `id` that we received as an argument)
        const onePet = await db.one(`select * from pets where id=$1`, [id]);
        return onePet;
    } catch (err) {
        return null;
    }
}

// Promise version
// function one(id) {
//     return db.one(`select * from pets where id=${id}`)
//                 .catch(err => {
//                     console.log(err);
//                     return null;
//                 })
// }

async function all() {
    try {
        // .query and .any are the same function
        // const thePets = await db.query(`select * from pets;`);
        const thePets = await db.any(`select * from pets;`);
        console.log(thePets);
        return thePets;
    } catch (err) {
        console.log(err)
        return [];
    }
}

// Promise version
// function all() {
//     return db.query(`select * from pets;`)
//             .catch(err => {
//                 return []
//             });
// }


// async function all() {
//     const allPets = await db.query(`select * from pets`)
//         .then(data => {
//             console.log(data);
//             return data;
//         })
//         .catch(err => {
//             console.log(err);
//             return [];
//         });
    
//     console.log(allPets);
//     return allPets;
// }

// Update
async function updateName(id, name) {
    const result = await db.result(`
        update pets set
            name=$1
        where id=$2;
    `, [name, id]);
    if (result.rowCount === 1) {
        return id;
    } else {
        return null;
    }    
}

async function updateBirthdate(id, birthdate) {

}


// Delete
async function del(id) {
    const result = await db.result(`delete from pets where id=$1`, [id]);
    console.log(result);
    if (result.rowCount === 1) {
        return id;
    } else {
        return null;
    }
}


module.exports = {
    create,
    one,
    all,
    update,
    del
}



