import Metigan from 'metigan';

import { template } from "./template";



const metigan = new Metigan({
  apiKey: 'sp_63ace7496fb7692b6cace8f77d3d1bf8bc0db95cd944d498cbfc7679a1d5987b'
});




export async function sendNewsletterEmail (email: string) {
    
     return  await metigan.sendEmailAndCreateContacts({
            from: "Metigan <onboarding@savanapoint.com>",
            recipients: [email],
            subject: "Welcome to Metigan",
            content: template,
            contactOptions: {
                createContact: true,
                audienceId: '67dbd4a4c40bca46fec5f48d'
            }
        })
    
}




export async function sendDevelopersNewsletterEmail (email: string) {
    
    return  await metigan.sendEmailAndCreateContacts({
           from: "Metigan <dev@savanapoint.com>",
           recipients: [email],
           subject: "Hey Developer",
           content: template,
           contactOptions: {
               createContact: true,
               audienceId: '67dc70136f81520556d2a05c'
           }
       })
   
}


export async function sendResourcerEmail (email: string,subject: string, resourceId: string) {
    console.log(email, subject, resourceId)
    
    return await  metigan.sendEmailWithTemplate({
        templateId: resourceId,
        from: "SavanaPoint <send@savanapoint.com>",
        recipients: [email],
        subject: subject
    })
    
}