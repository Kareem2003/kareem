import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors"; // Import cors

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kareemabdallah0109099@gmail.com",
      pass: "xigi htiv nzaz tais ",
    },
  });

  const mailOptions = {
    from: email,
    to: "kareemabdallah789@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
