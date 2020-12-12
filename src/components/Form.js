import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";


const Form = ({ crearCita }) => {
  const [citas, setCitas] = useState({
    hora: "",
    fecha: "",
    mascota: "",
    sintomas: "",
    propietario: "",
  });

  const [error, setError] = useState(false);

  const actualizarState = (e) => {
    setCitas({
      ...citas,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = citas;

  const submitCita = (e) => {
    e.preventDefault();

    if (
      hora.trim() === "" ||
      fecha.trim() === "" ||
      fecha.trim() === "" ||
      mascota.trim() === "" ||
      sintomas.trim() === "" ||
      propietario.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    citas.id = uuidv4();
    
    crearCita(citas);

    setCitas({
      hora: "",
      fecha: "",
      mascota: "",
      sintomas: "",
      propietario: "",
    });
  };

  return (
    <Container>
      <h2>Crear Citas</h2>
      {error ? <p>*Todos los campos son obligatorios</p> : null}
      <Foorm onSubmit={submitCita}>
        <Input
          placeholder="Nombre Mascota"
          type="text"
          name="mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <Input
          placeholder="Nombre Propietario"
          type="text"
          name="propietario"
          onChange={actualizarState}
          value={propietario}
        />

        <Input
          type="date"
          name="fecha"
          onChange={actualizarState}
          value={fecha}
        />

        <Input
          type="time"
          name="hora"
          onChange={actualizarState}
          value={hora}
        />

        <TextArea
          placeholder="Describe los sintomas de las mascota"
          type="text"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></TextArea>

        <Button type="submit">Agregar Cita</Button>
      </Foorm>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background-color: #1b262c;
`;

const Foorm = styled.form`
  width: 90%;
  height: 100%;
  display: inherit;
  align-items: center;
  justify-content:center;
  flex-direction: inherit;
`;
const Input = styled.input`
  width: 90%;
  margin: 5px;
  border: none;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  color: -internal-light-dark(black, white);
`;
const TextArea = styled.textarea`
  width: 90%;
  margin: 5px;
  height: 50px;
  border: none;
  padding: 10px;
  font-size: 1em;
  resize: vertical;
  border-radius: 5px;
`;

const Button = styled.button`
  border: none;
  background-color: #393e46;
  color: white;
  font-size: 1em;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  font-weight: bold;
`;

export default Form;
