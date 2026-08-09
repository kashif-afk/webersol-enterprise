import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, phone, service } = body;

 const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.webersol.com',
  port: 587,
  secure: false, // MUST be false for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

    await transporter.sendMail({
      from: `"Webersol Contact" <${process.env.SMTP_USER}>`,
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
    // Returns the explicit error message to the client
    return NextResponse.json(
      { success: false, error: error.message || String(error) },
      { status: 500 }
    );
  }
}