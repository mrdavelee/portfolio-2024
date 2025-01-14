"use client"

import { useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { Form } from "./form";
import {
    GoogleReCaptchaProvider
} from 'react-google-recaptcha-v3';


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
        <meta name="description" content="Contact us to get in touch with us" />
      </Head>
      <main>
      <GoogleReCaptchaProvider
            reCaptchaKey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''
            }>
        <Form ref={form} onSubmit={sendEmail} />
        </GoogleReCaptchaProvider>
      </main>
    </>
  );
};

export default ContactUs;