import React, { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
            <div>
                <div class="ui active dimmer">
                    <div class="ui text loader">{this.props.text}</div>
                </div>
                <p></p>
            </div>
        );
    }
}

Spinner.defaultProps={
    text:"Loading ..."
}

export default Spinner;