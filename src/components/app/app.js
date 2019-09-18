import React,{Component} from 'react';
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Content from '../contetnt/content'


export default class App extends Component {
    state = {  }
    render() { 
        return (
            <div className="conatiner-scroller">
                <Header />
                <div class="container-fluid page-body-wrapper">
                <Sidebar />
                <Content />
                </div>
            </div>
          );
    }
}
 