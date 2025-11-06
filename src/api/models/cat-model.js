
// mock-data

const cats = [
    {
        cat_id: 2,
        name: 'Kisu',
        birthdate: '2023-10-08',
        weight: 6,
        owner: 'Hessu',
        image: 'https://loremflickr.com/320/240/cat'
    },
    {
        cat_id: 3,
        name: 'Misu',
        birthdate: '2021-11-18',
        weight: 7,
        owner: 'Hessu',
        image: 'https://loremflickr.com/320/240/cat3'
    },
    {
        cat_id: 99,
        name: 'aa',
        birthdate: '2021-11-18',
        weight: 7,
        owner: 'Hessu',
        image: 'https://loremflickr.com/320/240/cat3'
    },
];

const findCatById = (id) => {
    let returnValue = null;
    for (let cat of cats) {
        if ( cat.cat_id == id ){
           returnValue = cat;
        }
    }
    return returnValue;
}

const addCat = (cat) => {}

const listAllCats = () => {
    return cats;
}

export {findCatById, addCat, listAllCats } ;
