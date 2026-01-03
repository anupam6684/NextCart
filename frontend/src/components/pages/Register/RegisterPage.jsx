import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .min(8, "At least 8 characters")
      .matches(/[A-Z]/, "One uppercase letter required")
      .matches(/[a-z]/, "One lowercase letter required")
      .matches(/[0-9]/, "One number required")
      .matches(/[@$!%*?&]/, "One special character required")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center ">
        <div className="col-md-6 border" style={{ backgroundColor: "#F3F3F6" }}>
          <h5 className="text-center my-4">Register</h5>

          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("User Data:", values);
              resetForm();
            }}
          >
            <Form>
              {/* Username */}
              <div className="mb-3 mx-5">
                <label>User Name *</label>
                <Field name="username" className="form-control" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Email */}
              <div className="mb-3 mx-5">
                <label>Email *</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Password */}
              <div className="mb-3 mx-5 position-relative">
                <label>Password *</label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control pe-5"
                />
                <i
                  className={`bi ${
                    showPassword ? "bi-eye-slash" : "bi-eye"
                  } position-absolute top-50 end-0 translate-middle-y me-3`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-3 mx-5 position-relative">
                <label>Confirm Password *</label>
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="form-control pe-5"
                />
                <i
                  className={`bi ${
                    showConfirmPassword ? "bi-eye-slash" : "bi-eye"
                  } position-absolute top-50 end-0 translate-middle-y me-3`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger"
                />
              </div>

              <p style={{ fontSize: "11px" }} className="mb-3 mx-5 px-5">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy
              </p>

              {/* Submit */}
              <button type="submit" className="btn btn-primary w-100 my-2 ">
                REGISTER
              </button>

              {/* Divider */}
              <div className="text-center my-3">
                <span className="text-muted">
                  ——————————Or login with———————————
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="d-flex justify-content-center gap-3 my-5">
                <button type="button" className="btn btn-outline-danger">
                  <i className="bi bi-google me-2"></i>Google
                </button>

                <button type="button" className="btn btn-outline-primary">
                  <i className="bi bi-facebook me-2"></i>Facebook
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
