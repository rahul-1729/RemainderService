const TicketService = require('../services/email-service');

const create = async(req,res)=>{
    try {
        const response = await TicketService.createNotification(req.body);
        
        return res.status(201).json({
            sucess:true,
            data:response,
            err:{},
            message:'Successfully registered an email remainder'
        });
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            data:response,
            err:error,
            message:'Unable to register an email remainder'
        });
    }
}

module.exports={
    create
}