import Metigan from 'metigan';

import { template } from "./template";



const metigan = new Metigan({
  apiKey: 'sp_63ace7496fb7692b6cace8f77d3d1bf8bc0db95cd944d498cbfc7679a1d5987b'
});




export async function sendNewsletterEmail (email: string) {
    // Enviar email
    const emailResult = await metigan.email.sendEmail({
        from: "Metigan <onboarding@savanapoint.com>",
        recipients: [email],
        subject: "Welcome to Metigan",
        content: template,
    });
    
    // Criar contato na audiência
    try {
        await metigan.contacts.create({
            email: email,
            audienceId: '67dbd4a4c40bca46fec5f48d',
            status: 'subscribed'
        });
    } catch (error) {
        // Ignorar erro se o contato já existir
        console.log('Contact creation skipped:', error);
    }
    
    return emailResult;
}




export async function sendDevelopersNewsletterEmail (email: string) {
    // Enviar email
    const emailResult = await metigan.email.sendEmail({
        from: "Metigan <dev@savanapoint.com>",
        recipients: [email],
        subject: "Hey Developer",
        content: template,
    });
    
    // Criar contato na audiência
    try {
        await metigan.contacts.create({
            email: email,
            audienceId: '67dc70136f81520556d2a05c',
            status: 'subscribed'
        });
    } catch (error) {
        // Ignorar erro se o contato já existir
        console.log('Contact creation skipped:', error);
    }
    
    return emailResult;
}


export async function sendResourcerEmail (email: string,subject: string, resourceId: string) {
    console.log(email, subject, resourceId)
    
    return await metigan.email.sendEmail({
        templateId: resourceId,
        from: "SavanaPoint <send@savanapoint.com>",
        recipients: [email],
        subject: subject
    })
}