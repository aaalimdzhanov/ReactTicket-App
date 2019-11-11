import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

const AdministratorsPage = () =>{
   return( <div className="conatiner-scroller">
   <Header />
   <div className="container-fluid page-body-wrapper">
       <Sidebar />
        <div>Hello admin</div>
   </div>
</div>);
};

export default AdministratorsPage;