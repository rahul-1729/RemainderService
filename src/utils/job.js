const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig')
 
const setupJobs = ()=>{
    cron.schedule('*/7 * * * * *',async()=>{
           const response = await emailService.fetchPendingEmails();
           response.forEach((email)=>{
               sender.sendMail({ 
              
                to: email.recepientEmail,
                subject:email.subject,
                text:email.content
               },async(err,data)=>{
                 if(err)
                 {
                     console.log(err);
                 }
                 else
                 {
                     console.log(data);
                     await emailService.updateTicket(email.id,{status:"SUCCESS"})
                 }
               })
           })
           console.log(response);
        })
}

module.exports = setupJobs;


// Optimized code by CHAT GPT 
// const setupJobs = () => {
//     cron.schedule('*/7 * * * * *', async () => { // Run every 7 seconds for testing purposes
//         try {
//             const response = await emailService.fetchPendingEmails(); // Fetch pending emails

//             // Iterate through each email to send
//             response.forEach(async (email) => {
//                 try {
//                     // Send email
//                     const data = await sender.sendMail({
                       
//                         to: email.recepientEmail,
//                         subject: email.subject,
//                         text: email.content
//                     });

//                     console.log('Email sent successfully:', data);

//                     // Update ticket status to SUCCESS
//                     await emailService.updateTicket(email.id, { status: "SUCCESS" });
//                 } catch (err) {
//                     console.error('Error sending email:', err);
//                     // Optionally handle error or implement retry mechanism
//                 }
//             });

//             console.log('Pending emails fetched:', response);
//         } catch (error) {
//             console.error('Error fetching pending emails:', error);
//         }
//     });
// }

// module.exports = setupJobs;