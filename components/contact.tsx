import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function contact() {
  const form = React.useRef(null);
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const sendEmail = (e: any) => {
    e.preventDefault();
    setState({ name: "", email: "", message: "" });

    emailjs
      .sendForm(
        "portfolio_service",
        "contact_form",
        form.current!,
        "H3avTzE7EDZDHAA3w"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Message was sent!");
        },
        (error) => {
          // console.log(error.text);
          toast.error(
            "Failed to send message. Try emailing me at davianlounds@gmail.com"
          );
        }
      );
  };

  return (
    // <!-- contact form -->
    <section className="bg-prime py-10 snap-x">
      <div
        id="contact"
        className="container relative z-10 mx-auto md:scroll-mt-0 scroll-mt-32"
      >
        <form ref={form} onSubmit={sendEmail} className="p-5">
          <h1 className="text-center text-4xl text-gray-100 dark:text-gray-300 md:text-6xl">
            Get In Touch
          </h1>
          <div className="flex flex-row flex-nowrap justify-center gap-4 px-0 py-10 md:px-16">
            <input
              type="text"
              value={state.name}
              onChange={(e) => {
                setState({ ...state, name: e.target.value });
              }}
              required
              id="name"
              name="user_name"
              placeholder="Name"
              className="w-full rounded-lg bg-gray-100/50 p-3 text-gray-100 outline-2 outline-blue-400 ring placeholder:text-gray-100 hover:ring-blue-400 dark:bg-gray-800/50 dark:text-gray-300 dark:outline-gray-800/30 dark:placeholder:text-gray-300 md:w-1/3"
            />
            <input
              id="email"
              required
              value={state.email}
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
              }}
              name="user_email"
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-gray-100/50 p-3 text-gray-100 outline-2 outline-blue-400 ring placeholder:text-gray-100 hover:ring-blue-400 dark:bg-gray-800/50 dark:text-gray-300 dark:outline-gray-800/30 dark:placeholder:text-gray-300 md:w-1/3"
            />
          </div>
          <div className="flex flex-row flex-nowrap justify-center">
            <textarea
              id="message"
              name="message"
              required
              value={state.message}
              onChange={(e) => {
                setState({ ...state, message: e.target.value });
              }}
              rows={10}
              className="w-full rounded-lg bg-gray-100/50 p-6 text-gray-100 outline-2 outline-blue-400 ring placeholder:text-gray-100 hover:ring-blue-400 dark:bg-gray-800/50 dark:text-gray-300 dark:outline-gray-800/30 dark:placeholder:text-gray-300 md:w-4/6"
              placeholder="Type a message..."
            />
          </div>
          <div className="mt-10 flex flex-row flex-nowrap justify-center">
            <input
              className="baseline z-10 cursor-pointer rounded-xl bg-gray-100/50 p-3 px-8 pt-3 text-center font-medium text-white ring hover:opacity-90 hover:ring-blue-400 dark:bg-gray-800/50 dark:text-gray-300 dark:outline-gray-800/30"
              value="Send"
              type="submit"
            />
            <ToastContainer className="z-50 mt-16" />
          </div>
        </form>
      </div>
    </section>
  );
}
