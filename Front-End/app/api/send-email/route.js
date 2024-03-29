import { Resend } from "resend";
import { EmailTemplate } from "../../_components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["islamoomostafa@gmail.com"],
      subject: "تأكيد أوردر فيروز خان",
      react: EmailTemplate({ firstName: "إسلام" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
