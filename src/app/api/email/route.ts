import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { subject, name, email, message, phone } = await req.json();
    const to = process.env.EMAIL_TO_RECEIVE

    if (!subject || !name || !email || !message || !phone) {
      return NextResponse.json({ success: false, message: "Campos faltando" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      html: html({ name, message, subject, email, phone }),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message || "Erro ao enviar email" }, { status: 500 });
  }
}

type HtmlProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}
const html = ({ name, message, subject, email, phone }: HtmlProps) => {
  return (
    `
     <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Cabeçalho -->
          <div style="background: #2563eb; padding: 20px; color: white; text-align: center;">
            <h2 style="margin: 0; font-size: 22px;">📨 Nova Mensagem de Contato</h2>
          </div>
          
          <!-- Corpo -->
          <div style="padding: 20px; color: #333;">
            <p>Você recebeu uma nova mensagem através do formulário de contato:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #555;">👤 Nome:</td>
                <td style="padding: 8px; color: #111;">${name}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; color: #555;">📧 Email:</td>
                <td style="padding: 8px; color: #111;">${email}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; color: #555;">📧 telefone:</td>
                <td style="padding: 8px; color: #111;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #555;">📝 Assunto:</td>
                <td style="padding: 8px; color: #111;">${subject}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; color: #555;">💬 Mensagem:</td>
                <td style="padding: 8px; color: #111;">${message}</td>
              </tr>
            </table>
            
            <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
              Este email foi gerado automaticamente a partir do formulário de contato do site.
            </p>
          </div>
        </div>
      </div>
    `
  )
}