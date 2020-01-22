// @flow
import axios, { AxiosPromise } from 'axios';
import { User } from './modelService';
const url_base = 'http://localhost:4000/user';

const config = {
  headers: {
    'x-access-token': localStorage.getItem('token'),
  },
};

export class UserService {
  static getMyProfile(): AxiosPromise<User> {
    let url = url_base + '/myprofile';
    let token = localStorage.getItem('token');
    return axios.get(url, config);
  }

  static deleteUser(id: number): AxiosPromise<User> {
    let url = url_base + '/' + id;
    let token = localStorage.getItem('token');
    return axios.delete<Object>(url, config);
  }

  static getMyEvents(): AxiosPromise<Event[]> {
    let url = url_base + '/myevents';
    let token = localStorage.getItem('token');
    return axios.get(url, config);
  }

  static getEvent(): AxiosPromise<Event> {
    let url = url_base + '/myevent';
    let token = localStorage.getItem('token');
    return axios.get(url, config);
  }

  static editUser(user: User): AxiosPromise<User> {
    let url = url_base + '/myprofile';
    let token = localStorage.getItem('token');
    return axios.put<Object>(url, user, config);
  }

  static editArtistname(artist_name: string): AxiosPromise<User> {
    let url = url_base + '/artistname';
    let token = localStorage.getItem('token');
    return axios.put<Object>(url, { artist_name }, config);
  }
}
