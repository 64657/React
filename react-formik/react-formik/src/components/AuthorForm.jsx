import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AuthorForm.css"

function AuthorForm({ onAddAuthor, onEditAuthor, authorToEdit }) {
  const validationSchema = Yup.object({
    name: Yup.string().required("Author Name is required"),
    birthDate: Yup.date().required("Birth Date is required"),
    biography: Yup.string().required("Biography is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: authorToEdit ? authorToEdit.name : "",
      birthDate: authorToEdit ? authorToEdit.birthDate : "",
      biography: authorToEdit ? authorToEdit.biography : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (authorToEdit) {
        // If editing an author, call the onEditAuthor function
        onEditAuthor(values);
      } else {
        // If adding a new author, call the onAddAuthor function
        onAddAuthor(values);
      }
      // Clear the form after submission
      formik.resetForm();
    },
  });

  return (
    <div className="form">
      <h2>{authorToEdit ? "Edit Author" : "Add Author"}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Author Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate}
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <div className="error">{formik.errors.birthDate}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="biography">Biography</label>
          <textarea
            id="biography"
            name="biography"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.biography}
          />
          {formik.touched.biography && formik.errors.biography ? (
            <div className="error">{formik.errors.biography}</div>
          ) : null}
        </div>

        <button type="submit">{authorToEdit ? "Save Author" : "Add Author"}</button>
      </form>
    </div>
  );
}

export default AuthorForm;
