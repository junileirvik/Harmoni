/** Data object for events */
export class Event {
  constructor() {
    this.name = null;
    this.description = null;
    this.image = null;
    this.start = null;
    this.status = null;
    this.is_public = 0;
    this.location_id = null;
    this.venue = null;
    this.end = null;
  }
  event_id: number;
  name: string;
  description: string;
  image: string;
  start: string;
  status: string;
  is_public: boolean;
  location_id: number;
  venue: string;
  end: string;
  address: string;
  location_name: string;
  postcode: number;
  max_price: number;
  min_price: number;
  contract: string;
  notes: string;
}
/** Data object for users */
export class User {
  constructor() {
    this.user_id = null;
    this.password = null;
    this.email = null;
    this.name = null;
    this.artist_name = null;
    this.tlf = null;
    this.image = null;
    this.description = null;
  }
  user_id: number;
  password: string;
  email: string;
  name: string;
  artist_name: string;
  tlf: string;
  image: string;
  description: string;
}
/** Data object for locations */
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

/** Data object for organisers */
export class Organiser {
  constructor(organiser_email: string, name: string) {
    this.organiser_email = organiser_email;
    this.name = name;
  }
  organiser_id_: number;
  organiser_email: string;
  name: string;
  image: string;
  description: string;
  tlf: string;
  website: string;
  address: string;
  password: string;
  postcode: string;
  passwordConfirmation: string;
  eventsFinished: number;
  eventsComing: number;
}

/** Data object for ticket types */
export class TicketType {
  constructor(name: string) {
    this.name = name;
  }
  //Ticket type Information
  name: string;
  description: string;
  ticket_type_id: number;
  organiser_id: number;
  price: number;
  amount: number;
}
