import axios from 'axios'

export async function getItemsWithApiCall(url) {
    return await axios.get(url || '/api/itemsData')
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    })
}