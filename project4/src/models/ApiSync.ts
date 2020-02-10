import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { HasId } from '../interfaces/IProperties';

export class ApiSync<T extends HasId> {

    constructor(public rootUrl: string) { }

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const { id } = data;

        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post(this.rootUrl, data);
        }
    }
}