import React, { Component } from 'react';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

export class Halo extends Component {
  click(e) {
    let opp = e.target.checked ? 'on' : 'off';
    let color = e.target.checked ? 'light-blue' : 'black';
    Materialize.toast('Turned light ' + opp, 4000, color);

    fetch('http://rramo012:4000/turn-led?type=' + opp).then(function(response) {
      console.log(response);
    });
  }

  render(props) {
    return (
      <div className="HeadlightHalo">
        <h5>HeadLight LED Halo</h5>
        <div className="switch">
          <label>
            Off <input type="checkbox" onChange={this.click} />
            <span className="lever" /> On
          </label>
        </div>
      </div>
    );
  }
}
