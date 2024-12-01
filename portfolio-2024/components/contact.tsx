"use client"

import { useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { Form } from "./form";

const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_APP_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_APP_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_APP_PUBLIC_KEY &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_APP_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_APP_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Contact us to get in touch with us" />
      </Head>
      <main>
        <Form ref={form} onSubmit={sendEmail} />
      </main>
    </>
  );
};

export default ContactUs;