import React , {Component} from 'react';
import TicketListItem from '../ticket-list-item';
import {connect} from 'react-redux';
import {withTicketService} from '../hoc'
import {ticketsLoaded} from '../../actions'
import Spinner from '../spinner'
 class TicketList extends Component {

    componentDidMount(){
        const {ticketService, ticketsLoaded} = this.props;
      ticketService.getAllTicket()
      .then((data)=>ticketsLoaded(data));
    }
 
    render() { 
        const {tickets,loading}=this.props;
        if(loading){
            return <Spinner />;
        }
        
        return ( 
            <div className="row">
            <div className="col-lg-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Orders</h4> 
            <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Инициатор</th>
                        <th>Progress</th>
                        <th>Страна</th>
                        <th>Приоритет</th>
                        <th>Дата создания</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            tickets.map((ticket)=>{
                                return(
                                    <TicketListItem ticket={ticket} />
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
        </div>
</div>
</div>
</div>
         );
    }
}
const mapStateToProps = ({tickets,loading})=>{
    return {
       tickets
    }

}

const mapDispatchToProps={
    ticketsLoaded
}
 
export default withTicketService()(
    connect(mapStateToProps,mapDispatchToProps)(TicketList)
    );