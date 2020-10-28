import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/pages/admin-page.css";
import api from "../services/api";

registerLocale("pt-BR", ptBR);
setDefaultLocale("pt-BR");

function AdminPage() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  function sendDateHandler() {
    const date = {
      date: `${startDate.getDate()}/${
        startDate.getMonth() + 1
      }/${startDate.getFullYear()}`,
    };

    console.log(date);

    api
      .post("galeria_date", date)
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div id="admin-page">
      <div className="content-wrapper">
        <header>Selecionar data do Galeria</header>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          isClearable
          placeholderText="dd/mm/aaaa"
          locale="pt-BR"
        />
        <button className="action-button" onClick={() => sendDateHandler()}>
          Agendar Galeria
        </button>
        <header>Selecionar lotação Célula</header>
        <input></input>
        <button className="action-button">Configurar</button>
        <header>Selecionar lotação Galeria</header>
        <input></input>
        <button className="action-button">Configurar</button>
      </div>
    </div>
  );
}

export default AdminPage;
