import { React, useState, useContext } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { CartContext } from "../../context/CartContext";
import { db } from '../../firebaseConfig';

const Form = ({inId}) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const {precioFinal} = useContext(CartContext);

    const inSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: { name, phone, email },
            carrito: [],
            date: serverTimestamp(),
            total: precioFinal(),
        };
        const orderNumber = collection(db, 'ordenes de compra')
        addDoc(orderNumber, order).then((resolve) => {
            inId(resolve.id)
        })
    };

    const inName = (e) => setName(e.target.value);

    const inSurname = (e) => setSurname(e.target.value);

    const inPhone = (e) => setPhone(e.target.value);

    const inEmail = (e) => setEmail(e.target.value);

    return (
        <form className="form text-center m-2" action='' onSubmit={inSubmit}>
            <p className="m-2">Completá con tus datos para continuar con la compra.</p>
            <input className="m-2"
                type='text'
                name='nombre'
                placeholder='Nombre'
                value={name}
                onChange={inName}
                required
            />
            <input className="m-2"
                type='text'
                name='apellido'
                placeholder='Apellido'
                value={surname}
                onChange={inSurname}
                required
            />
            <input className="m-2"
                type='number'
                name='teléfono'
                placeholder='Teléfono'
                value={phone}
                onChange={inPhone}
            />
            <input className="m-2"
                type='text'
                name='correo electrónico'
                placeholder='E-mail'
                value={email}
                onChange={inEmail}
                required
            />
            <button className="m-2">Continuar</button>
        </form>
    )
};

export default Form;