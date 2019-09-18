import React,{Component} from 'react';
import '../../assets/css/style.css'
import '../../assets/fonts/iconfonts/mdi/css/materialdesignicons.min.css'

class Content extends Component {
    state = {  }
    render() { 
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
                                                <h3 class="font-weight-medium text-right mb-0">$65,650</h3>
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
                                                <h3 class="font-weight-medium text-right mb-0">3455</h3>
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
                                                <h3 class="font-weight-medium text-right mb-0">5693</h3>
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
                                                <h3 class="font-weight-medium text-right mb-0">246</h3>
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
                                                <tr>
                                                    <td class="font-weight-medium">
                                                        1
                                                    </td>
                                                    <td>
                                                        Herman Beck
                                                    </td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-success progress-bar-striped"
                                                                role="progressbar" ></div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $ 77.99
                                                    </td>
                                                    <td class="text-danger"> 53.64%
                                                        <i class="mdi mdi-arrow-down"></i>
                                                    </td>
                                                    <td>
                                                        May 15, 2015
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="font-weight-medium">
                                                        2
                                                    </td>
                                                    <td>
                                                        Messsy Adam
                                                    </td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-danger progress-bar-striped"
                                                                role="progressbar"></div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $245.30
                                                    </td>
                                                    <td class="text-success"> 24.56%
                                                        <i class="mdi mdi-arrow-up"></i>
                                                    </td>
                                                    <td>
                                                        July 1, 2015
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="font-weight-medium">
                                                        3
                                                    </td>
                                                    <td>
                                                        John Richards
                                                    </td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-warning progress-bar-striped"
                                                                role="progressbar"></div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $138.00
                                                    </td>
                                                    <td class="text-danger"> 28.76%
                                                        <i class="mdi mdi-arrow-down"></i>
                                                    </td>
                                                    <td>
                                                        Apr 12, 2015
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="font-weight-medium">
                                                        4
                                                    </td>
                                                    <td>
                                                        Peter Meggik
                                                    </td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-primary progress-bar-striped"
                                                                role="progressbar" ></div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $ 77.99
                                                    </td>
                                                    <td class="text-danger"> 53.45%
                                                        <i class="mdi mdi-arrow-down"></i>
                                                    </td>
                                                    <td>
                                                        May 15, 2015
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="font-weight-medium">
                                                        5
                                                    </td>
                                                    <td>
                                                        Edward
                                                    </td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-danger progress-bar-striped"
                                                                role="progressbar"></div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $ 160.25
                                                    </td>
                                                    <td class="text-success"> 18.32%
                                                        <i class="mdi mdi-arrow-up"></i>
                                                    </td>
                                                    <td>
                                                        May 03, 2015
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="font-weight-medium">
                                                        6
                                                    </td>
                                                    <td>
                                                        Henry Tom
                                                    </td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-warning progress-bar-striped"
                                                                role="progressbar"></div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $ 150.00
                                                    </td>
                                                    <td class="text-danger"> 24.67%
                                                        <i class="mdi mdi-arrow-down"></i>
                                                    </td>
                                                    <td>
                                                        June 16, 2015
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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