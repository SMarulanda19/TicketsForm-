const Listickets = () =>{
     <div>
        <section className='TablaTickets'>
        {tickets.map(ticket => <p>{JSON.stringify(ticket)}</p>)}
      </section>
     </div>
}