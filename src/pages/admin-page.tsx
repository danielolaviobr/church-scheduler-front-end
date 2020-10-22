import Axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/pages/admin-page.css";

import DeleteIcon from "../images/delete.svg";
import smallLogo from "../images/logo-small.svg";

interface Person {
  id: number;
  name: string;
  scheduled_to: string;
}

function AdminPage() {
  const [users, setUsers] = useState<Person[]>([]);
  const [nextEvent, setNextEvent] = useState<string>("");

  const getPersons = useCallback(async () => {
    const re = /\//gi;
    const response = await Axios.get(
      `http://localhost:3003/celula/${nextEvent.replace(re, "-")}`
    );
    setUsers(response.data);
  }, [nextEvent]);

  const deletePerson = useCallback(
    async (id: number) => {
      await Axios.delete(`http://localhost:3003/celula/${id}`);
      getPersons();
    },
    [getPersons]
  );

  const scheduledPersons = useMemo(() => {
    return users.map((person) => (
      <div key={person.id} className="persons">
        <li>{person.name}</li>
        <img
          className="delete-icon"
          src={DeleteIcon}
          alt="Deletar"
          onClick={() => deletePerson(person.id)}
        />
      </div>
    ));
  }, [users, deletePerson]);

  const getDate = useCallback(async () => {
    const response = await Axios.get("http://localhost:3003/date/celula");
    setNextEvent(response.data.date);
  }, []);

  useEffect(() => {
    getDate();
    getPersons();
  }, [getDate, getPersons]);

  return (
    <div id="admin-page">
      <Link to="/" className="logo">
        <img src={smallLogo} alt="Início" />
      </Link>
      <div className="content-wrapper">
        <header>Cadastrados {nextEvent}</header>
        <div className="srollable-list">
          <ul>{scheduledPersons}</ul>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
