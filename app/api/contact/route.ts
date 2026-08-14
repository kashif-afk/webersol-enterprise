import { NextResponse } from 'next/server';
// @ts-ignore
const nodemailer = require('nodemailer');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, phone, service } = body;

    // Validate that environment variables are present
    const user = process.env.SMTP_USER || 'info@webersol.com';
    const pass = process.env.SMTP_PASS || '#9a55w0rD';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.webersol.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // Port 587 uses STARTTLS
      auth: {
        user: user,
        pass: pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Webersol Contact" <${user}>`,
      to: process.env.MY_EMAIL || 'info@webersol.com',
      replyTo: email,
      subject: `New Lead: ${name} - Webersol Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0056b3;">New Inquiry Received</h2>
          <hr style="border: 0; border-top: 1px solid #ccc;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0056b3;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Nodemailer Detailed Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || String(error) },
      { status: 500 }
    );
  }
}