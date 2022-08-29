import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const VerCliente = () => {

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
        <div>
            { cargando ? <Spinner /> : (
                Object.keys(cliente).length === 0 ? <>No hay datos...</> : (
                    <>
                        <h1 className='font-black text-4xl text-blue-900'>Ver Cliente: {cliente.nombre}</h1>
                        <p className='mt-3'>Informacion del cliente.</p>

                        <p className='text-3xl text-gray-600 mt-4'>
                            <span className='text-gray-800uppercase font-bold'>Cliente: </span>
                            {cliente.nombre}
                        </p>
                        <p className='text-2xl text-gray-600 mt-4'>
                            <span className='text-gray-800uppercase font-bold'>Email: </span>
                            {cliente.email}
                        </p>
                        <p className='text-2xl text-gray-600 mt-4'>
                            <span className='text-gray-800uppercase font-bold'>Empresa: </span>
                            {cliente.empresa}
                        </p>
                        <p className='text-2xl text-gray-600 mt-4'>
                            <span className='text-gray-800uppercase font-bold'>Telefono: </span>
                            {cliente.telefono}
                        </p>
                        {cliente.notas && (
                            <p className='text-2xl text-gray-600 mt-4'>
                                <span className='text-gray-800uppercase font-bold'>Notas: </span>
                                {cliente.notas}
                            </p>
                        )}
                    </>
                )
            )}
        </div>
    )
}

export default VerCliente;