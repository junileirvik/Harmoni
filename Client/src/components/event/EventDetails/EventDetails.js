//@flow

import * as React from 'react';
import { Component } from 'react';
import { Event } from '../../../services/modelService';
import { OrganiserService } from '../../../services/organiserService';
import { PublicService } from '../../../services/publicService';
import './stylesheet.css';

type Props = {
  match: { params: { id: number } },
};

type State = {
  event: Event,
};

export default class EventDetails extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      event: new Event(),
    };
  }
  render() {
    return (
      <div class="card" id="carddetailsevent">
        <div class="imgdiv">
          <img
            src={'http://localhost:4000/public/file/' + this.state.event.image}
            class="img-fluid"
            alt="Eventbilde"
          ></img>
        </div>
        <p id="EventDetailsText">{this.state.event.name}</p>
        <div id="EventDetailsTable">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th class="text-right" id="textright" scope="row">
                  Dato:
                </th>
                <td class="text-left" id="textleft">
                  {this.state.event.start}
                </td>
              </tr>
              <tr>
                <th class="text-right" id="textright" scope="row">
                  Sted:
                </th>
                <td class="text-left" id="textleft">
                  {this.state.event.location_name}, {this.state.event.venue}
                </td>
              </tr>
              <tr>
                <th class="text-right" id="textright" scope="row">
                  Lineup:
                </th>
                <td class="text-left" id="textleft">
                  JB
                </td>
              </tr>
              <tr>
                <th class="text-right" id="textright" scope="row">
                  Pris:
                </th>
                <td class="text-left" id="textleft">
                  KOMMER SENERE
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btndivevent">
          <button class="btn btn-success bg-green"> KJØP BILLETT </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    PublicService.getPublicEvent(this.props.match.params.id)
      .then(res => {
        let event: any = res.data[0];
        console.log(res);
        this.setState({ event: event });
      })
      .catch(error => console.error(error));
    console.log(this.state.event);
  }
}
