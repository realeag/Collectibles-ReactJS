import React, { Component } from "react";

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <hr />
                <p>{this.props.copyright} {this.props.ubicacion}</p>
            </div>
            
        )
    }
}


export default Footer;