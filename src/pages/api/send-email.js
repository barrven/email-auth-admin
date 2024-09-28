const sgMail = require('@sendgrid/mail');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Handle email sending logic here
        const { name, email, message } = req.body;

        // Set your SendGrid API key
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: 'barringtonvenables@gmail.com', 
            from: 'info@venabar.com',
            subject: 'Message from your website',
            // text: message,
            html: `
            <table border="1" cellpadding="10" cellspacing="0">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>${name}</td>                        
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <td>Message</td>
                        <td>${message}</td>
                    </tr>
                </tbody>
            </table>
            `,
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            console.log('-----------------',error.response.body)
            res.status(500).json({ message: 'Error sending email' });
        }

        res.status(200).json({ message: 'Email sent!' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}