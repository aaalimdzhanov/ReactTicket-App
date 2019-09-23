import React,{Component} from 'react';

const Table =(props)=>{
console.log(props)
    return(
        <table class="table table-bordered">
        <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Инициатор
                </th>
                <th>
                    Описание
                </th>
                <th>
                    Progress
                </th>
                <th>
                    Страна
                </th>
                <th>
                    Приоритет
                </th>
                <th>
                    Дата создания
                </th>
            </tr>
        </thead>
        <tbody>
            {props.allTickets.map(ticket =>{
                return(
                    <tr>
                        <td>{ticket.id}</td>
                        <td>{ticket.priority}</td>
                        <td>{ticket.shortDesc}</td>
                        <td>{ticket.status}</td>
                        <td>{ticket.site.name}</td>
                        <td>{ticket.priority}</td>
                        <td>{ticket.addDt}</td>
                        
 
                    </tr>
                );
            })}
        </tbody>
    </table>

    );

}

 
export default Table;