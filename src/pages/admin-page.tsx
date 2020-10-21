import Axios from "axios";
import React, { useEffect, useState } from "react";
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

  async function getPersons() {
    const re = /\//gi;
    const response = await Axios.get(
      `http://localhost:3003/celula/${nextEvent.replace(re, "-")}`
    );
    setUsers(response.data);
  }

  async function deletePerson(id: number) {
    await Axios.delete(`http://localhost:3003/celula/${id}`);
    getPersons();
  }

  const scheduledPersons = users.map((person) => (
    <div className="persons">
      <li key={person.id}>{person.name}</li>
      <img
        className="delete-icon"
        src={DeleteIcon}
        alt="Deletar"
        onClick={() => deletePerson(person.id)}
      />
    </div>
  ));

  async function getDate() {
    const response = await Axios.get("http://localhost:3003/date/celula");
    setNextEvent(response.data.date);
  }

  useEffect(() => {
    getDate();
    getPersons();
  }, []);

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
