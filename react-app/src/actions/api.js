import axios from "axios";
import { dCandidate } from "../reducers/dCandidate";
import { fetchAll } from "./dCandidate";

const baseUrl = "http://localhost:5078/api/"

export default {
    dCandidate(url = baseUrl + 'dCandidate/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}