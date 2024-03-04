import React, { useState } from 'react';
import './FornStyles.css';

const MyForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); 
  const [resolved, setResolved] = useState(false);
  const [priority, setPriority] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', { title, description,  resolved, priority });
  };

  return (
    <form className="MyForm" onSubmit={handleSubmit}>
      <h2 className="MyForm-h2">Add Ticket</h2>
      <input
        className="MyForm-input"
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <h2 className="MyForm-h2">Descripción</h2>
      <textarea
        className="MyForm-textarea"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <h2 className="MyForm-h2">Prioridad</h2>
      <select
        className="MyForm-select"
        id="priority"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="">-- Seleccione una prioridad --</option>
        <option value="alto">Alto</option>
        <option value="medio">Medio</option>
        <option value="bajo">Bajo</option>
      </select>
      <br />
      <p>Mark as Resolved</p>
      <input
        className="MyForm-checkbox"
        type="checkbox"
        id="resolved"
        
        checked={resolved}
        onChange={(event) => setResolved(event.target.checked)}
      />
      <br />
      <button className="MyForm-button" type="submit">Enviar</button>
    </form>
  );
};

export default MyForm;
