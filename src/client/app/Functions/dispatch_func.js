
const url = require('../../../../.env').API_HOST;
import axios from 'axios'

export const getPersons = (success, error) => {
    axios.get(`${url}/person?detail`).then((result)=>success(result.data)).catch(error);
}