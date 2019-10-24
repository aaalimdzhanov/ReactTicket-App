import React,{Component} from 'react';
import {withTicketService} from '../hoc';
import {Route, Switch} from 'react-router-dom';
import {HomePage, AdministratorsPage} from '../pages'

// const App = () =>{
   
//     return (
//         <div className="conatiner-scroller">
//             <Header />
//             <div className="container-fluid page-body-wrapper">
//             <Sidebar />
//             <Content />
//             </div>
//         </div>
//       );
// }
const App = () =>{
   
    return (
        <div className="conatiner-scroller">
           <Switch>
               <Route path="/" 
               component={HomePage}
               exact
               />
                <Route path="/administrators" 
               component={AdministratorsPage}
               />
           </Switch>
        </div>
      );
}

export default App;
 