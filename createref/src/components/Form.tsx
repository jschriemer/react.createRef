import { useRef } from "react";
import React from "react";

export default function Form() {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const data = {
      fullName: nameInput.current?.value,
      email: emailInput.current?.value,
      message: messageInput.current?.value,
    };

    console.log(data);
  };

  return (
    <div>
      <div>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="full_name">Full name</label>
            <input
              ref={nameInput}
              id="full_name"
              placeholder="Full name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              ref={emailInput}
              id="email"
              placeholder="Email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input
              ref={messageInput}
              id="message"
              placeholder="Message"
              type="message"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
