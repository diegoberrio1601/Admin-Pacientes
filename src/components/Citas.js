import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Citas = ({ cita, eliminarCita }) => {
  return (
    <Item>
      <p>
        <b>Nombre:</b> {cita.mascota}
      </p>
      <p>
        <b>Propietario:</b> {cita.propietario}
      </p>
      <p>
        <b>Fecha:</b> {cita.fecha}
      </p>
      <p>
        <b>Hora:</b> {cita.hora}
      </p>
      <p>
        <b>Síntomas:</b>
      </p>
      <p>{cita.sintomas}</p>

      <Button onClick={() => eliminarCita(cita.id)}>Eliminar</Button>
    </Item>
  );
};



const Item = styled.div`
  width:auto;
  margin:10px;
  padding:10px;
  border-radius:10px;
  background-color: #393e46;
  text-align:justify;
`;

const Button = styled.button`
  border: none;
  background-color: #1b262c;
  color: white;
  font-size: 1em;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  font-weight: bold;
`;

Citas.prototype = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}
export default Citas
