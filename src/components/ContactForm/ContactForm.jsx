import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import css from "../ContactForm/ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const phoneRegExp =
  /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}?\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Incorrect phone number")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const namberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), name: values.name, number: values.number });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
        <label htmlFor={namberFieldId}>Number</label>
        <Field type="text" name="number" />
        <ErrorMessage name="number" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
