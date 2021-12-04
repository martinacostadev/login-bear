import { useRef, useState } from "react";
import { images, bearPasswordImage } from "./images.js";

import "./styles.css";

export default function App() {
  const email = useRef(null);
  const [image, setImage] = useState(images[0]);

  const handleEmail = () => {
    setImage(
      email.current.value.length >= 20
        ? images[images.length - 1]
        : images[email.current.value.length]
    );
  };

  const handlePasswordFocus = () => {
    setTimeout(() => {
      setImage(bearPasswordImage[0]);
    }, 150);
    setTimeout(() => {
      setImage(bearPasswordImage[1]);
    }, 300);
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <img className="logo" alt="logo" src={image} />
      <input
        type="text"
        placeholder="E-mail"
        onChange={handleEmail}
        onFocus={handleEmail}
        ref={email}
      />
      <input
        type="password"
        placeholder="Password"
        onFocus={handlePasswordFocus}
      />
    </div>
  );
}
