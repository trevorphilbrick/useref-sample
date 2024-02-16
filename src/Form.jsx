import { useState, useRef, useEffect } from "react";

function Form() {
  const nameRef = useRef();
  const textRef = useRef();

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const previousFormValues = useRef({ name, text });

  // Using refs to directly manipulate the DOM

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  // Using refs to store previous values

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setText("");

    previousFormValues.current = { name, text };
  };
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "14px" }}
          ref={nameRef}
        />
        <label htmlFor="text">Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ marginBottom: "14px" }}
          ref={textRef}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>

      <p>
        Previous form values: {previousFormValues.current.name},{" "}
        {previousFormValues.current.text}
      </p>
      <p>
        Current form values: {name}, {text}
      </p>
    </>
  );
}

export default Form;
