import React,{Component} from 'react';
import '../../assets/css/style.css'
import '../../assets/fonts/iconfonts/mdi/css/materialdesignicons.min.css'
import TicketService from '../../service/ticket-service'
import Table from '../contetnt/table'

class Content extends Component {
    ticketService = new TicketService();
    // constructor(){
    //     super();
    //     this.tackeNumberOfTickets();
    //     //this.getAllTickets();
    // }
    componentDidMount(){
        this.getAllTickets();
        this.tackeNumberOfTickets();
    }
    state = {  
        numberOfInc:0,
        numberOfTask:0,
        numberOfDef:0,
        numberOfConsult:0,
        allTickets:[]
    }
    getAllTickets =()=>{
        this.ticketService.getAllTicket().
        then(
            (t)=>{
             this.setState({
                    allTickets:t
                })   
            }
        );
    };

    tackeNumberOfTickets =()=> {
        const id = 188;
        const typeInc = 'inc';
        const typeTask = 'task';
        const typeDef = 'def';
        this.ticketService.getNumberOfTicketsByUserIdAndType(id,typeInc)
        .then((n)=>{
            this.setState({
                numberOfInc:n.result
            })
        })
        this.ticketService.getNumberOfTicketsByUserIdAndType(id,typeTask)
        .then((n)=>{
            this.setState({
                numberOfTask:n.result
            })
        });
        this.ticketService.getNumberOfTicketsByUserIdAndType(id,typeDef)
        .then((n)=>{
            this.setState({
                numberOfDef:n.result
            })
        });
    };
    render() { 
        const {numberOfInc, numberOfDef, numberOfConsult, numberOfTask} = this.state;
        return ( 
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div className="card card-statistics">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <div className="float-left">
                                                
                                                <i className="mdi mdi-cube text-danger icon-lg"></i>
                                            </div>
                                            <div className="float-right">
                                                <p className="mb-0 text-right">Открытые Инциденты</p>
                                                <div className="fluid-container">
                                                    <h3 className="font-weight-medium text-right mb-0">{numberOfInc}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mt-3 mb-0">
                                            <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div className="card card-statistics">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <i className="mdi mdi-bug text-warning icon-lg"></i>
                                            </div>
                                            <div className="float-right">
                                                <p className="mb-0 text-right">Открытые Дефекты</p>
                                                <div className="fluid-container">
                                                    <h3 className="font-weight-medium text-right mb-0">{numberOfDef}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mt-3 mb-0">
                                            <i className="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise
                                            sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div className="card card-statistics">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <i className="mdi mdi-calendar-clock text-success icon-lg"></i>
                                            </div>
                                            <div className="float-right">
                                                <p className="mb-0 text-right">Открытые Задачи</p>
                                                <div className="fluid-container">
                                                    <h3 className="font-weight-medium text-right mb-0">{numberOfTask}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mt-3 mb-0">
                                            <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div className="card card-statistics">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <div className="float-left">
                                                <i className="text-info icon-lg mdi mdi-account-multiple"></i>
                                            </div>
                                            <div className="float-right">
                                                <p className="mb-0 text-right">Открытые Консультации</p>
                                                <div className="fluid-container">
                                                    <h3 className="font-weight-medium text-right mb-0">{numberOfConsult}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mt-3 mb-0">
                                            <i className="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-lg-12 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Активности</h4>
                                    <div className="table-responsive">
                                       <Table allTickets = {this.state.allTickets} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
   
}
 
export default Content;