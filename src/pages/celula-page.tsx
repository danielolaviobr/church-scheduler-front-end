import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/celula-page.css";
import { Alert } from "@material-ui/lab";

import smallLogo from "../images/logo-small.svg";
import Axios from "axios";

function CelulaPage() {
  interface alertDataType {
    type: "success" | "warning" | "info" | "error" | undefined;
    message: string | undefined;
    visible: boolean;
  }

  const [fullName, setFullName] = useState<string>("");
  const [nextEvent, setNextEvent] = useState<string>();
  const [alertData, setAlertData] = useState<alertDataType>({
    type: undefined,
    message: undefined,
    visible: false,
  });
  const [displayAlert, setDisplayAlert] = useState<JSX.Element | undefined>(
    undefined
  );

  async function submitForm() {
    const response = await Axios.post("http://localhost:3003/celula", {
      name: fullName,
    }).catch(() => {
      return { status: 400 };
    });

    if (response.status === 201) {
      setAlertData({
        type: "success",
        message: "Inscrição realizada com sucesso",
        visible: true,
      });
    } else {
      setAlertData({
        type: "error",
        message: "Ocorreu um erro ao realizar a inscrição",
        visible: true,
      });
    }
    setFullName("");
  }

  async function getDate() {
    const response = await Axios.get("http://localhost:3003/date/celula");
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
    <div id="celula-page">
      <Link to="/" className="logo">
        <img src={smallLogo} alt="Início" />
      </Link>
      <main>
        {displayAlert}
        <div className="header">
          <h2>Célula de Quinta-feira</h2>
          <h3>{nextEvent}</h3>
        </div>
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Nome Completo"
        />

        <Link to="/celula" onClick={submitForm} className="confirm">
          Inscrever-se
        </Link>
        <Link to="/" className="cancel">
          Voltar
        </Link>
      </main>
    </div>
  );
}

export default CelulaPage;
