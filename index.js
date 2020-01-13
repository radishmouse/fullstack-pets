const pets = require('./models/pets');

// pets.all()
//     .then(allThePets => {
//         // do stuff
//         console.log()
//     })

async function main() {
    // const thePets = await pets.all();
    // console.log(thePets);
    // const aPet = await pets.one(1);
    // console.log(aPet);

    const result = await pets.del(1);
    console.log(result);
}

main();