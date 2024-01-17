import axios from "axios";
const baseUrl = " http://localhost:8000/persons";

const getall = () => {
    return axios.get(baseUrl);
}

const addContact=(newContact)=>{
    return axios.post(baseUrl,newContact);
}

const deleteContact = (id) => {
    return axios.delete(baseUrl+`/${id}`);
}

const updateContact=(id, contactDetails)=>{
    return axios.put(baseUrl+`/${id}`,contactDetails);
}

export default { getall, addContact, deleteContact, updateContact };
