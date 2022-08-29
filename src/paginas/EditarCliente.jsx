import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../components/Formulario';

const EditarCliente = () => {

    const {id} = useParams();
    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const getClienteAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`;
                const resp = await fetch(url);
                const data = await resp.json();
                setCliente(data);
            } catch (error) {
                console.log(error);
            }
            setCargando(!cargando);
        }
        getClienteAPI();
    }, []);

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
            <p className='mt-3'>Utiliza este formulario para editar al cliente.</p>

            { cliente?.nombre ? (
                <Formulario
                    cliente={cliente}
                    cargando={cargando}
                />
            ) : (
                <p>{`Cliente ID: #${id} no valido.`}</p>
            )}
        </>
    )
}

export default EditarCliente