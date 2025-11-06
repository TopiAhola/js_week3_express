async function postCatTest(newCat) {
    try {
        let response;
        await fetch('http://localhost:3000/api/v1/cats',
            {
            method: "POST",
            headers: {

            },
            body: JSON.stringify(newCat)
        }).then(
            res => {
                response = res;
                console.log("postCatTest success")
                console.log(response);
            },

            err => {
                console.log("postCatTest error: " +err)
            }
        );


    } catch (error) {
        console.error(error);
    }
}


async function getCatByIdTest(id) {
    //http://localhost:3000/api/v1/cats/:id
    try {
        let response = await fetch(`http://localhost:3000/api/v1/cats/${id}`,
            {
                method: "GET",
                headers: {

                },

            });
        console.log(response);
        let responseJson = await response.json();
        console.log(responseJson);
    } catch (error) {
        console.error(error);
    }

}



async function getCatTest(){
    //http://localhost:3000/api/v1/cats
    try {
        let response = await fetch('http://localhost:3000/api/v1/cats',
            {
                method: "GET",
                headers: {

                },

            });
        console.log(response);
        let responseJson = await response.json();
        console.log(responseJson);
    } catch (error) {
        console.error(error);
    }
}


///////////////////////////
//main

const catx = {
    cat_id: 66,
    name: 'Nemi',
    birthdate: '2021-11-18',
    weight: 7,
    owner: 'T',
    image: 'https://loremflickr.com/320/240/cat3',
}


getCatTest();
getCatByIdTest(99);
//postCatTest(catx);

