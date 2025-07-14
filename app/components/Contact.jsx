import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {

   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8396033f-07b3-4c97-b397-2a9b5c988c6a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center mx-auto mt-5 mb-12 max-w-2xl font-ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto md:grid-cols-2 gap-6 my-10 mb-8">
          <input type="text" name="name" placeholder="Enter your name" className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white" required />
          <input type="email" name="email" placeholder="Enter your email" className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white" required />
        </div>
        <textarea
          name="message"
          id=""
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4  outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button type="submit" className="py-3 px-8 flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
          Submit now <Image src={assets.right_arrow_white} alt="submit-now" className="w-4"/>
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
