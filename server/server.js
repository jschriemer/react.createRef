import express from 'express';
import bodyParser from 'body-parser';
import { body, validationResult } from 'express-validator';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import cors from 'cors';
import { env } from 'node:process';

dotenv.config();


const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Set up SendGrid with your API key
const apiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(apiKey);

// Define validation and sanitization rules for the contact form fields
const contactFormValidationRules = [
  body('firstName').trim().notEmpty().escape(),
  body('lastName').trim().notEmpty().escape(),
  body('email').trim().isEmail().normalizeEmail(),
  body('subject').trim().notEmpty().escape(),
  body('message').trim().notEmpty().escape(),
];

// Contact route with validation and sanitization middleware
app.post('/contact', contactFormValidationRules, async (req, res) => {
  console.log("%%%")
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  try {
    /* const msg = {
      to: 'markus@konacare.ca',
      from: email, // Use the sender's email address
      subject: `${subject} [website contact]`,
      html: `
        <h4>${firstName} ${lastName}</h4>
        <p><b>Email:</b> ${email}</p>
        <h5>${subject}</h5>
        <p><b>Message:</b> ${message}</p>
      `,
    }; */

    const msg = {
      to: 'hello@jschtudio.com',
      from: 'hello@jschtudio.com',
      subject: `${subject}`,
      html: `
        <b>Reply to: </b>${firstName} ${lastName} <b>|| email: </b>${email}
        <br />
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});