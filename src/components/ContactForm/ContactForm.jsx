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
    .min(3, "Too Short!")
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
        <label htmlFor={nameFieldId} className={css.inputLable}>
          Name
        </label>
        <Field type="text" name="name" className={css.input} />
        <ErrorMessage
          name="name"
          component="div"
          className={css.messageError}
        />
        <label htmlFor={namberFieldId} className={css.inputLable}>
          Number
        </label>
        <Field type="text" name="number" className={css.input} />
        <ErrorMessage
          name="number"
          component="div"
          className={css.messageError}
        />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
