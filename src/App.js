import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Citas from "./components/Citas";
import Form from "./components/Form";
import PropTypes from "prop-types";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [listaDeCitas, setListaDeCitas] = useState(citasIniciales);

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(listaDeCitas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [listaDeCitas, citasIniciales]);

  const crearCita = (cita) => {
    setListaDeCitas([...listaDeCitas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = listaDeCitas.filter(
      (listaDeCitas) => listaDeCitas.id !== id
    );
    setListaDeCitas(nuevasCitas);
  };
  return (
    <Card>
      <h1>Administrador de Pacientes</h1>
      <Sections>
        <Form crearCita={crearCita} />
        <Container>
          <h2>Listado de citas</h2>
          <Items>
            {listaDeCitas.map((cita) => (
              <Citas key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </Items>
        </Container>
      </Sections>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  width: 90vw;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #393e46;
`;
const Sections = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`
  width: 45%;
  display: flex;
  border-radius: 10px;
  background-color: #1b262c;
  flex-direction: column;
  align-items: center;
`;

const Items = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
`;

Form.propTypes = {
  crearCita: PropTypes.func.isRequired,
};
export default App;
