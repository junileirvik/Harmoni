// @flow

import axios, { AxiosPromise } from 'axios';
import { Artist, Event, Organiser, TicketType } from './modelService.js';

const url_base = 'http://localhost:4000/organiser';
// axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
const config = {
  headers: {
    'x-access-token': localStorage.getItem('token'),
  },
};
/** Class for all services that is used by organiser accounts. */
export class OrganiserService {
  /** Sends in an event form to server-side to create a new event. */
  static createEvent(event: Event) {
    let url = url_base + '/event';
    return axios.post<Object>(url, event, config);
  }
  /** Sends in an event form to server-side to update existing event. */
  static updateEvent(event: Event) {
    let url = url_base + '/event/' + event.event_id;
    return axios.put<Object>(url, event, config);
  }
  /** Deletes an event by id. */
  static deleteEvent(id: number): AxiosPromise<Event> {
    let url = url_base + '/event/' + id;
    return axios.delete<Object>(url, config);
  }
  /** Get an event by id. */
  static getEvent(id: number): AxiosPromise<Event> {
    let url = url_base + '/event/' + id;
    return axios.get(url, config);
  }
  /** Get the logged in organiser's information. */
  static getOrganiser(): AxiosPromise<Organiser> {
    let url = url_base + '/myprofile';
    return axios.get<Organiser>(url, config);
  }
  /** Sends in an organiser form to edit the logged in profile. */
  static editOrganiser(organiser: Organiser): AxiosPromise<Organiser> {
    let url = url_base + '/myprofile';
    return axios.put<Object>(url, organiser, config);
  }
  /** Deletes the organiser by id. */
  static deleteOrganiser(id: number): AxiosPromise<Organiser> {
    let url = url_base + '/organiser/' + id;
    return axios.delete<Object>(url, config);
  }
  /** Get all existing locations. */
  static getLocations(): AxiosPromise<Location[]> {
    let url = url_base + '/location';
    return axios.get(url, config);
  }
  /** Sends in an location form to create a new location. */
  static postLocation(location: Location) {
    let url = url_base + '/location';
    return axios.post(url, location, config);
  }
  /** Invite an artist by email to create a user and be connected to an event by id. */
  static inviteArtist(email: string, event_id: number) {
    let url = url_base + '/artist/' + event_id;
    return axios.post(url, { email: email }, config);
  }
  /** Sends an email. */
  static sendmail(email: string, name: string, text: string) {
    let url = url_base + '/sendmail';
    return axios.post(url, { email: email, name: name, text: text }, config);
  }
  /** Invite a volunteer by email to an event by id, into a volunteer type by id. */
  static inviteVolunteer(email: string, event_id: number, volunteer_type_id: number) {
    let url = url_base + '/volunteer/' + volunteer_type_id + '/' + event_id;
    return axios.post(url, { email: email }, config);
  }
  /** Get all events that the logged in account is organising. */
  static getMyEvents(): AxiosPromise<Event[]> {
    let url = url_base + '/myevents';
    return axios.get(url, config);
  }
  /** Get all artists connected to an event by id. */
  static getArtists(event_id: number): AxiosPromise<Artist[]> {
    let url = url_base + '/artist/' + event_id;
    return axios.get(url, config);
  }
  /** Update the artist information on a single event by id. */
  static updateArtistEvent(artist: Artist, event_id: number) {
    let data = {
      event_id: event_id,
      contract: artist.contract,
      notes: artist.notes,
      accepted: artist.accepted,
    };
    let url = url_base + '/artist/' + artist.user_id;
    return axios.put(url, data, config);
  }
  /** Get all riders on an event. */
  static getRiders(event_id: number) {
    let url = url_base + '/event/rider/' + event_id;
    return axios.get(url, config);
  }
  /** Posts a new rider. */
  static postRider(rider_file: string, event_id: number, user_id: number) {
    let url = url_base + '/event/rider/' + event_id + '/' + user_id;
    return axios.post(url, { rider_file }, config);
  }
  /** Deletes a rider. */
  static deleteRider(event_id: number, rider_id: number) {
    let url = url_base + '/event/rider/' + event_id + '/' + rider_id;
    return axios.delete(url, config);
  }
  /** Get all tickettypes on an event. */
  static getTickets(event_id: number) {
    let url = url_base + '/event/' + event_id + '/tickets';
    return axios.get(url, config);
  }
  /** Get all tickettypes an organiser has. */
  static getMyTickets() {
    let url = url_base + '/tickets';
    return axios.get(url, config);
  }
  /** Adds a new tickettype to an organiser. */
  static postTicket(ticket: TicketType) {
    let url = url_base + '/tickets';
    return axios.post(url, ticket, config);
  }
  /** Adds a new tickettype to an event. */
  static postEventTicket(ticket: TicketType, event_id: number) {
    let url = url_base + '/event/' + event_id + '/tickets';
    return axios.post(url, ticket, config);
  }
  /** Delete a tickettype on an event. */
  static deleteEventTicket(ticket_id: number, event_id: number) {
    let url = url_base + '/event/' + event_id + '/tickets/' + ticket_id;
    return axios.delete(url, config);
  }
  /** Removes an existing tickettype. */
  static deleteTicket(ticket_id: number) {
    let url = url_base + '/tickets/' + ticket_id;
    return axios.delete(url, config);
  }
  /**Get all volunteertypes on this organiser. */
  static getVolunteerType() {
    let url = url_base + '/group';
    return axios.get(url, config);
  }
  /**Adds volunteer type to this organiser. */
  static addVolunteerType(name: string) {
    let url = url_base + '/volunteer';
    return axios.post(url, { name }, config);
  }
  /**Get all volunteers in an event by id. */
  static getMyVolunteers(event_id: number) {
    let url = url_base + '/event/' + event_id + '/volunteer';
    return axios.get(url, config);
  }
  /**Remove a volunteer by id from an event by id. */
  static removeVolunteerFromEvent(event_id: number, user_id: number) {
    let url = url_base + '/event/' + event_id + '/user/' + user_id;
    return axios.delete(url, config);
  }
  /**Delete a type of volunteer by id. */
  static deleteVolunteerType(vol_id: number) {
    let url = url_base + '/volunteer/' + vol_id;
    return axios.delete(url, config);
  }
  /**Change whether an event is cancelled by id.*/
  static toggleCancel(event_id: number) {
    let url = url_base + '/event/' + event_id + '/cancel';
    return axios.put(url, {}, config);
  }
}
