const nodemailer = require('nodemailer')

async function main(){
    //Create a test mail account
    let testAccount = await nodemailer.createTestAccount();

    //create the transporter to send the mail
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 465,
        secure: true,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })

    //send mail
    let info = await transporter.sendMail({
        from:"'A big big scam guy' <bilard@example.com>",
        to:"bilardosinulu@gmail.com, nfb04293@zwoho.com",
        subject: "Nigerian Prince from England",
        text: "Hello I'm a nigerian prince and i successfully learnt how to use nodemailer",
        html: "<h3>Nigerian Prince from england</h3>",

    })

    //log that the message was sent
    console.log(`Message sent with id: ${info.messageId}`)

    //preview the mail in a url
    console.log(`Preview URL ${nodemailer.getTestMessageUrl(info)}`)
}

main().catch(console.error)