import React,{Component} from 'react';
import '../../assets/css/style.css'
import '../../assets/fonts/iconfonts/mdi/css/materialdesignicons.min.css'
import TicketService from '../../service/ticket-service'
import Table from '../contetnt/table'

class Content extends Component {
    ticketService = new TicketService();
    constructor(){
        super();
        this.tackeNumberOfTickets();
        //this.getAllTickets();
    }
    state = {  
        numberOfInc:0,
        numberOfTask:0,
        numberOfDef:0,
        numberOfConsult:0,
        allTickets:[]
    }
    getAllTickets(){
        this.ticketService.getAllTicket().
        then(
            (t)=>{
                console.log("Hello")
                console.log(t)
             this.setState({
                    allTickets:t
                })   
            }
        );
    }

    tackeNumberOfTickets(){
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
    }
    render() { 
        const {numberOfInc, numberOfDef, numberOfConsult, numberOfTask} = this.state;

        

        return ( 
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div class="card card-statistics">
                                    <div class="card-body">
                                        <div class="clearfix">
                                            <div class="float-left">
                                                
                                                <i class="mdi mdi-cube text-danger icon-lg"></i>
                                            </div>
                                            <div class="float-right">
                                                <p class="mb-0 text-right">Открытые Инциденты</p>
                                                <div class="fluid-container">
                                                    <h3 class="font-weight-medium text-right mb-0">{numberOfInc}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-muted mt-3 mb-0">
                                            <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div class="card card-statistics">
                                    <div class="card-body">
                                        <div class="clearfix">
                                            <div class="float-left">
                                                <i class="mdi mdi-bug text-warning icon-lg"></i>
                                            </div>
                                            <div class="float-right">
                                                <p class="mb-0 text-right">Открытые Дефекты</p>
                                                <div class="fluid-container">
                                                    <h3 class="font-weight-medium text-right mb-0">{numberOfDef}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-muted mt-3 mb-0">
                                            <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise
                                            sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div class="card card-statistics">
                                    <div class="card-body">
                                        <div class="clearfix">
                                            <div class="float-left">
                                                <i class="mdi mdi-calendar-clock text-success icon-lg"></i>
                                            </div>
                                            <div class="float-right">
                                                <p class="mb-0 text-right">Открытые Задачи</p>
                                                <div class="fluid-container">
                                                    <h3 class="font-weight-medium text-right mb-0">{numberOfTask}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-muted mt-3 mb-0">
                                            <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div class="card card-statistics">
                                    <div class="card-body">
                                        <div class="clearfix">
                                            <div class="float-left">
                                                <i class="text-info icon-lg mdi mdi-account-multiple"></i>
                                            </div>
                                            <div class="float-right">
                                                <p class="mb-0 text-right">Открытые Консультации</p>
                                                <div class="fluid-container">
                                                    <h3 class="font-weight-medium text-right mb-0">{numberOfConsult}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-muted mt-3 mb-0">
                                            <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="row">
                        <div class="col-lg-12 grid-margin">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Orders</h4>
                                    <div class="table-responsive">
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
    componentDidMount(){
        this.getAllTickets()
    }
}
 
export default Content;