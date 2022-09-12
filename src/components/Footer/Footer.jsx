import React from "react";

const Footer = (props) => {
    return (
        <div className="footer">
            <hr />
            <p>{props.copyright} {props.derechos}</p>
        </div>
        
    )
}


export default Footer;