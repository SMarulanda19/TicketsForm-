import React, { useEffect, useState } from 'react';
import './FornStyles.css';


const MyForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); 
  const [resolved, setResolved] = useState(false);
  const [priority, setPriority] = useState(''); 
  const [tickets, setTickets] = useState([]); 

  // mandar los datos a Json Server 
  useEffect(()=> {
    fetch('http://localhost:9000/tickets')
    .then(res => {
      return res.json()
    })
    .then (data => {
      setTitle(data)
    })
  },[])

  // ahora para enviar todo el form al Server

  const enviarTicket = (e) => {
    e.preventDefault();
    fetch('http://localhost:9000/tickets',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title, description: description, resolved: resolved, priority: priority})
      })
        .then(res => {
          return res.json()
        })

        .then(data => {
          const nuevoArregloTickets = [...tickets, data];
          setTickets(nuevoArregloTickets);
        })
    }
  return (
    <>
    <div className='principal' >
    <form className="MyForm" onSubmit={enviarTicket}>
      <h2 className="MyForm-h2">Add Ticket</h2>
      <input
        className="MyForm-input"
        type="text"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <h2 className="MyForm-h2">Description</h2>
      <textarea
        className="MyForm-textarea"
        id="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <br />
      <h2 className="MyForm-h2">Priority</h2>
      <select
        className="MyForm-select"
        id="priority"
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        <option value="">  Select a priority  </option>
        <option value="alto">Hight</option>
        <option value="medio">Medium</option>
        <option value="bajo">Low</option>
      </select>
      <br />
      <p>Mark as Resolved</p>
      <input
        className="MyForm-checkbox"
        type="checkbox"
        id="resolved"
        
        checked={resolved}
        onChange={e => setResolved(e.target.value)}
      />
      <br />
      <button className="MyForm-button" type="submit">Send</button>
    </form>
    
      <section className='TablaTickets'>
        {tickets.map(ticket => <p>{JSON.stringify(ticket)}</p>)}
      </section>
      </div>
      </>
  );
};

export default MyForm;
