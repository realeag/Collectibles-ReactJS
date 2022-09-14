import React from "react";

const Newsletter = () => <p>Suscribite a nuestro Newsletter</p>

const Footer = (props) => {
    return (
        <div className="footer">
            <Newsletter />
            <hr />
            <p>{props.copyright} {props.derechos}</p>
        </div>
        
    )
}


export default Footer;