import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';

const Formulario = () => {

    const nuevoClienteSchema = Yup.object().shape({
        nombre:  Yup.string()
                    .min(3, 'El nombre es muy corto.')
                    .max(20, 'El nombre es muy largo.')
                    .required('El nombre del cliente es obligatorio.'),
        empresa: Yup.string()
                    .required('El nombre de la empresa es obligatorio.'),
        email:   Yup.string()
                    .email('Email no valido.')
                    .required('El email es obligatorio'),
        telefono: Yup.number()
                    .positive()
                    .integer()
                    .typeError('El numero no es valido'),
    });

    const handleSubmit = (valores) => {
        console.log(valores);
    }

    return (
        <div className='bg-white mt-10 py-10 px-5 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: '',
                }}

                onSubmit = {(values) => {
                    handleSubmit(values);
                }}

                validationSchema={nuevoClienteSchema}
            >
                {( {errors, touched} ) => (
                <Form
                    className='mt-10'
                >
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='nombre'
                        >Nombre:</label>
                        <Field
                            id="nombre"
                            type="text"
                            placeholder="Nombre del cliente."
                            className="mt-2 block w-full p-3 bg-gray-50"
                            name="nombre"
                        />
                        {errors.nombre && touched.nombre ? (
                            <Alerta>{errors.nombre}</Alerta>
                        ): null }

                    </div>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='empresa'
                        >Empresa:</label>
                        <Field
                            id="empresa"
                            type="text"
                            placeholder="Empresa del cliente."
                            className="mt-2 block w-full p-3 bg-gray-50"
                            name="empresa"
                        />
                        {errors.empresa && touched.empresa ? (
                            <Alerta>{errors.empresa}</Alerta>
                        ): null }
                    </div>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='email'
                        >E-mail:</label>
                        <Field
                            id="email"
                            type="email"
                            placeholder="Email del cliente."
                            className="mt-2 block w-full p-3 bg-gray-50"
                            name="email"
                        />
                        {errors.email && touched.email ? (
                            <Alerta>{errors.email}</Alerta>
                        ): null }
                    </div>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='telefono'
                        >Telefono:</label>
                        <Field
                            id="telefono"
                            type="tel"
                            placeholder="Telefono del cliente."
                            className="mt-2 block w-full p-3 bg-gray-50"
                            name="telefono"
                        />
                        {errors.telefono && touched.telefono ? (
                            <Alerta>{errors.telefono}</Alerta>
                        ): null }
                    </div>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='notas'
                        >Notas:</label>
                        <Field
                            as="textarea"
                            id="noteas"
                            type="text"
                            placeholder="Notas del cliente."
                            className="mt-2 block w-full p-3 bg-gray-50"
                            name="notas"
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Agregar Cliente"
                        className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold"
                    />
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulario