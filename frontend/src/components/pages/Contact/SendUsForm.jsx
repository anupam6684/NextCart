import { width } from "@mui/system";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SendUsForm() {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    subject: Yup.string().required("Subject is required"),

    message: Yup.string()
      .min(10, "Minimum 10 characters")
      .required("Message is required"),
  });

  return (
    <div
      style={{ height: "750px", backgroundColor: "#F3F3F6" }}
      className="rounded-2 border m-5 p-4"
    >
      <div className="my-5 text-center  border-bottom">
        <h1 className="my-3">Send Us</h1>
        <p>
          Have a question or want to work together? Feel free to reach out using
          the form below.
        </p>
      </div>

      <Formik
        initialValues={{
          username: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          let formData = values;
          console.log(formData);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="row">
              <div className="col mx-3 p-3 ">
                <label>Your Name *</label>
                <Field name="username" className="form-control " />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="col mx-3 p-3">
                <label>Your Email *</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            <div className="mx-3 pt-2 mb-3">
              <label>Subject</label>
              <Field name="subject" className="form-control" />
              <ErrorMessage
                name="subject"
                component="div"
                className="text-danger"
              />

              <label className="pt-2">Your Message</label>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className="form-control"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-danger"
              />

              <button type="submit" className="btn btn-dark w-25 mx-auto mt-5">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
