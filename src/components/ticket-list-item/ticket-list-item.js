import React from 'react';

const TicketListItem = ({ticket}) =>{
    const {id,type,priority,shortDesc,status} = ticket;
    return(
        <tr>
                <td>{id}</td>
                <td>{type}</td>
                <td>{priority}</td>
                <td>{shortDesc}</td>
                <td>{status}</td>
        </tr>
    );
}

export default TicketListItem;