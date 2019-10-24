import React from 'react';
import {TicketServiceConsumer} from '../ticket-service-context'

const withTicketService = ()=> (Wrapped)=>{
    return(props) =>{
        return (
            <TicketServiceConsumer>
                {
                    (ticketService)=>{
                       return ( 
                          <Wrapped {...props} ticketService={ticketService}/>
                       );
                    }
                }
            </TicketServiceConsumer>
        );
    }
};
export default withTicketService;