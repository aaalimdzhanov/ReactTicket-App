import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';


const HomePage =()=>{
        return (
        <div className="conatiner-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
            
            </div>
        </div>
      );
};

export  default HomePage;