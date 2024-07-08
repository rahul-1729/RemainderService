const express = require('express');
const bodyParser = require('body-parser');
const {PORT}=require('./config/serverConfig');

// const{sendBasicEmail}=require('./services/email-service');
const cron = require('node-cron');


const setupAndStartServer=()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`)

        // sendBasicEmail(
        //     'support@admin.com',
        //     'rk9763981@gmail.com',
        //     "this is a testing email",
        //     "You have are doing great Rahul , just keep on increasing your focus"
        // )

        cron.schedule('*/2 * * * * *',()=>{
        console.log('running a task every two seconds');
        })
    })
}

setupAndStartServer();