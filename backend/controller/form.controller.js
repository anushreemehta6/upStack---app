import Form from "../model/form.model.js";

const formdata = async (req, res) => {
    try {
        const { email, subject, message } = req.body;

        const form = new Form({
            email: email,
            message: message,
            subject: subject
        });

        await form.save();
        res.status(200).json({ message: "Form submitted successfully." });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

export default formdata;
