import React,{Component} from 'react';

const Table =(props)=>{
console.log(props)
    return(
        <table className="table table-hover">
        <thead>
            <tr>
                <th>
                    Номер
                </th>
                <th>
                    Описание
                </th>
                <th>
                    Срок Исполнения
                </th>
                <th>
                    Приоритет
                </th>
                <th>
                    Страна
                </th>
                <th>
                    Статус
                </th>
                <th>
                    Редактировать
                </th>
            </tr>
        </thead>
        <tbody>
            {props.allTickets.map(ticket =>{
                return(
                    <tr>    
                        <td>{ticket.id}</td>
                        <td>{ticket.shortDesc}</td>
                        <td>{ticket.addDt}</td>
                        <td>{ticket.priority}</td>
                        <td>{ticket.site.name}</td>
                        <td>{ticket.status}</td>
                        <td>
                        <button type="button" className="btn btn-secondary btn-sm"><i className="mdi mdi-pencil"></i></button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>

    );

}

 
export default Table;