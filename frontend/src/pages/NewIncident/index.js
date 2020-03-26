import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./style.css";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = { title, description, value };

    try {
      await api.post("incidents", data, { headers: { Authorization: ongId } });

      history.push("/profile");
    } catch (e) {
      alert("Não foi possível criar o caso.");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
           <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em R$"
            onChange={e => setValue(parseInt(e.target.value))}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
