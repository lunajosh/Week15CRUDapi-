const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async () => {
        //using a try/catch in case something goes wrong
        try {
        //call for data
        const resp = await fetch(HOUSES_ENDPOINT);
        //call data to return into json
        const data = await resp.json();
            if (data.length > 3) {
                data.length = 3;
            }
        return data;
        //(3) is the exception, what went wrong
        } catch(e) {
            console.log('Ooops, fetch is acting up', e);
        } 
    }
    //method for PUT (Update), takes a parameter, House, to update it
    put = async (house) => {
        try {
            //id from the house to identify it from other houses in the array, with 2nd object from the request data
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }
    }
    post = async (housename) => {
        try {
            //id from the house to identify the other houses in the array, with 2nd object from the request data
            const resp = await fetch(`${HOUSES_ENDPOINT}`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: housename})
            });
            return await resp.json();
         } catch(e) {
            console.log('Ooops, looks like updating the houses has an issue', e);
         }
    }
}
//gives this js file the ability to export to other components
export const housesApi = new HousesApi();