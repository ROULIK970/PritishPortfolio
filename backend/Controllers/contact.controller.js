import { Contact } from "../Models/contact.model.js";

export const contact = async (req, res) => {
  try {
    // Extract form data from the request body
    const { name, email, subject, message } = req.body;

    // Validate the data
    if ([name, email, subject, message].some((field) => field?.trim() === "")) {
      return res
        .status(401)
        .json({ message: "All fields are required", success: false });
    }

    const newContact = await Contact.create({ name, email, subject, message });
    // Simulate saving the data to a database or sending an email
    console.log("Form Data Received:", { name, email, subject, message });

    // Respond to the frontend
    res.status(200).json({
      success: true,
      contact: newContact,
      message: `Thank you for contacting me, ${name}. We will get back to you shortly!`,
    });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};
