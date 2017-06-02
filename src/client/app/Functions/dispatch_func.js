
const url = require('../../../../.env').API_HOST;
import axios from 'axios'

export const getPersons = (success, error) => {
    axios.get(`${url}/person?detail`).then((result)=>success(result.data)).catch(error);
}

export const getContacts = (success, error) => {
    axios.get(`${url}/contact`).then((result)=>success(result.data)).catch(error);
}

export const createContact = (success, error, contact) => {
    axios.post(`${url}/contact`, contact).then((result)=>success(result.data)).catch(error);
}

export const createAddress = (success, error, address) => {
    axios.post(`${url}/address`, address).then((result)=>success(result.data.addressId)).catch(error);
}
