import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_EMAIL_PASS as string);

export async function POST(req: Request) {
    const body = await req.json();
    const { userName, email, message, service, phone } = body.data;
    const msg = {
        to: email,
        from: process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string,
        subject: "Message from contact page",
        text: `message from ${userName}`,
        html: `
            <h2>message from <strong>${userName}</strong></h2>
            <h4>phone: <strong>${phone}</strong></h4>
            <br />
            <h3>Requested service: <strong>${service}</strong></h3>
            <br />
            <h4>message:</h4>
            <strong>${message}</strong>
            <br />
            <hr />
        `,
    };
    try {
        await sgMail.send(msg);
        return new Response("ok");
    } catch (error) {
        console.error(error);
        return new Error("Can't send email");
    }
}
