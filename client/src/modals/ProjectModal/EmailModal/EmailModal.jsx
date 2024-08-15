import React, { useRef, useState } from 'react';
import './EmailModal.css'

export function EmailModal(props) {
  const form = useRef(null);

  const [result, setResult] = useState('');

  if (!props.showModal) {
    return null;
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "97c5f5ad-19a6-4ac0-bfaa-87ce0efbb17a");

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

  const handleClose = () => {
    props.setShowModal(false);
    document.body.classList.remove('App-scrollLock');
  }

  return (
    <section className='ProjModal-container ProjModal-ParseText App-zIndex-2'>
      <article className='ProjModal-close'>
        <button
          className='App-Button-Main'
          onClick={handleClose}
        >X</button>
      </article>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">What's Your Name?</label>
        <input type="text" name="name" id="name" placeholder="Henry Cavil" required />
        <label htmlFor="email">What's Your Email?</label>
        <input type="email" name="email" id="email" placeholder="bob-grey@float.com" required />
        <p>How Can I Help?</p>
        <textarea name="message" required></textarea>

        <div className="h-captcha"
          data-captcha="true"
        ></div>

        <button className="App-Button-Main" type="submit">Get in Touch!</button>

      </form>
      <span>{result}</span>
    </section>
  )
} 