import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import smallLogo from "../images/logo-small.svg";
import api from "../services/api";

import "../styles/pages/galeria-page.css";

function GaleriaPage() {
  interface alertDataType {
    type: "success" | "warning" | "info" | "error" | undefined;
    message: string | undefined;
    visible: boolean;
  }

  const [fullName, setFullName] = useState<string>();
  const [nextEvent, setNextEvent] = useState<string>();
  const [alertData, setAlertData] = useState<alertDataType>({
    type: undefined,
    message: undefined,
    visible: false,
  });
  const [displayAlert, setDisplayAlert] = useState<JSX.Element | undefined>(
    undefined
  );

  function handleSubmitForm() {
    api
      .post("galeria", {
        name: fullName,
        date: nextEvent,
      })
      .catch((error) => {
        console.log(error);
        setAlertData({
          type: "error",
          message: "Ocorreu um erro ao realizar a inscrição",
          visible: true,
        });
      })
      .then((response) => {
        response &&
          setAlertData({
            type: "success",
            message: "Inscrição realizada com sucesso",
            visible: true,
          });
      });

    setFullName("");
  }

  async function getDate() {
    const response = await api.get("galeria_date");
    console.log(response);
    setNextEvent(response.data.date);
  }

  useEffect(() => {
    getDate();
    setDisplayAlert(
      alertData.visible ? (
        <Alert severity={alertData.type}>{alertData.message}</Alert>
      ) : undefined
    );
  }, [alertData]);

  return (
    <div id="galeria-page">
      <Link to="/" className="logo">
        <img src={smallLogo} alt="Início" />
      </Link>
      <main>
        {displayAlert}
        <div className="header">
          <h2>Próximo Galeria</h2>
          <h3>{nextEvent}</h3>
        </div>
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Nome Completo"
        />

        <Link to="/galeria" onClick={handleSubmitForm} className="confirm">
          Inscrever-se
        </Link>
        <Link to="/" className="cancel">
          Voltar
        </Link>
      </main>
    </div>
  );
}

export default GaleriaPage;
