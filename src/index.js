const express = require('express');
const bodyParser = require('body-parser');
const {PORT}=require('./config/serverConfig');
 
// const{sendBasicEmail}=require('./services/email-service');
const jobs = require('./utils/job');
const TicketController = require('./controller/ticket-controller');

const setupAndStartServer=()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    app.post('/api/v1/tickets',TicketController.create)// this has done on routes floder but since the project is very small we don't do that here

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`)

          
             
        
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'rk9763981@gmail.com',
        //     "this is a testing email",
        //     "You have are doing great Rahul , just keep on increasing your focus"
        // )

      
    })
}

setupAndStartServer();