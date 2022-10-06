import React from "react";
import Visa from '../../assets/imgs/visa.png';
import Mercadopago from '../../assets/imgs/mercadopago.png';
import Mastercard from '../../assets/imgs/mastercard.png';

const Footer = (props) => {
    return (
        <div className="footer">
            <hr />
            <div className="d-flex footerPagos">
                <p className="m-2">MEDIOS DE PAGO</p>
                <img className="m-1" src={Mercadopago} alt="Mercadopago"></img>
                <img className="m-1" src={Visa} alt="Visa"></img>
                <img className="m-1" src={Mastercard} alt="Mastercard"></img>
            </div>
            <div className="footerCopyright">
                <p>{props.copyright} {props.derechos}</p>
            </div>
        </div>

    )
}


export default Footer;