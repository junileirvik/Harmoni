// @flow
import axios, { AxiosPromise } from 'axios';
const url_base = 'http://localhost:4000';

export class User {
  constructor() {
    this.password = null;
    this.email = null;
    this.name = null;
    this.tlf = null;
    this.description = null;
  }
  password: string;
  email: string;
  name: string;
  tlf: string;
  description: string;
}
export class Location {
  constructor() {
    this.name = null;
    this.address = null;
    this.postcode = null;
    this.venue = null;
  }
  name: null;
  address: string;
  postcode: number;
  venue: string;
}
export class Organiser {
  constructor(organiser_email: string, name: number) {
    this.organiser_email = organiser_email;
    this.name = name;
  }
  organiser_email: string;
  name: string;
  image: string;
  description: string;
  tlf: string;
  website: string;
  address: string;
  password: string;
  eventsFinished: number;
  eventsComing: number;
}

export class UserService {
  static getUser(): AxiosPromise<User> {
    let url = url_base + '/user';
    let token = localStorage.getItem('token');
    return axios.get(url, {}, { headers: { 'x-access-token': token } }).then(response => {
      return response;
    });
  }
  static logIn(email: string, password: string) {
    let url = url_base + '/public/login';
    return axios
      .post<Object>(url, { username: email, password: password })
      .then(response => {
        localStorage.setItem('token', response.data.jwt);
      });
  }

  static newUser(email: string, name: string, password: string) {
    let url = url_base + '/public/register/user';
    return axios
      .post<Object>(url, {
        email: email,
        name: name,
        password: password,
        image: '',
        tlf: '',
        description: '',
      })
      .then(response => {
        localStorage.setItem('token', response.data.jwt);
      });
  }

  static newOrganiser(email: string, name: string, password: string) {
    let url = url_base + '/public/register/organiser';
    return axios
      .post<Object>(url, {
        email: email,
        name: name,
        password: password,
        image: '',
        tlf: '',
        description: '',
      })
      .then(response => {
        localStorage.setItem('token', response.data.jwt);
      });
  }
}
