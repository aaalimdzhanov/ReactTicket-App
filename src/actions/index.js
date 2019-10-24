const ticketsLoaded = (ticketsList) =>{
    return  {
        type:'TICKETS_LOADED',
        payload: ticketsList
    };
};

export {
    ticketsLoaded
};