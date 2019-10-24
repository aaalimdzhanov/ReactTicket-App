import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app/app';
import TicketService from './service/ticket-service';
import {TicketServiceProvider} from './components/ticket-service-context/ticket-service-context';
import store from './store'; 

const ticketService = new TicketService();

ReactDom.render(
    <Provider store = {store}>
        <TicketServiceProvider value={ticketService}>
            <Router>
                <App />
            </Router>
        </TicketServiceProvider>

    </Provider> , 
    document.getElementById("root")
);