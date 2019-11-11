import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import TicketList from '../ticket-list';



const HomePage =()=>{
        return (
        <div className="conatiner-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <TicketList  tickets={[]}/>
            </div>
        </div>
      );
};

export  default HomePage;