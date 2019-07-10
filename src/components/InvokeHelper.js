import Invoke from './Invoke';
import { BASE_URL } from '../env';

export default class InvokeHelper {
  constructor(token) {
    this.api = new Invoke();
    this.token = token;
  }

  getContacts = () => this.api.get(`${BASE_URL}contact`);

  getContactById = id => this.api.get(`${BASE_URL}contact/${id}`);

  deleteContact = id => this.api.delete(`${BASE_URL}contact/${id}`);

  editContact = (id, data) => this.api.put(`${BASE_URL}contact/${id}`, data);

  addContact = data => this.api.post(`${BASE_URL}contact`, data);
}
