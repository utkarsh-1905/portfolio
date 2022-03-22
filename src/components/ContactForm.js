import React, { useState } from "react";
import { ThumbsUp } from "phosphor-react";

const ContactForm = () => {
  const [done, setDone] = useState(false);
  const [msg, setMsg] = useState("");
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: e.target[0].value,
        name: e.target[1].value,
        type: e.target[2].value,
        description: e.target[3].value,
      };
      const data = await fetch(
        "https://nameless-citadel-63635.herokuapp.com/api/contact",
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await data.json();
      setMsg(json.message);
      if (json.status === "ok") {
        setDone(true);
      } else {
        setDone(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {done && (
        <div
          style={{
            color: "#6666ff",
            fontWeight: 500,
            margin: "1rem",
            textAlign: "center",
          }}
        >
          I will reach out to you soon!!{" "}
          <ThumbsUp size={32} className="text-success" weight="fill" />
        </div>
      )}
      <div
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "Nunito",
          fontSize: "0.75rem",
        }}
      >
        {msg}
      </div>
      <form onSubmit={formHandler} style={{ color: "#fff", marginTop: "1rem" }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control mb-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            style={{
              backgroundColor: "transparent",
              color: "#6666ff",
              placeholder: "#6666ff",
              border: "none",
            }}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control mb-3"
            id="exampleInputPassword1"
            placeholder="Enter your name"
            required
            style={{
              backgroundColor: "transparent",
              color: "#6666ff",
              border: "none",
            }}
          />
        </div>
        <label htmlFor="type">Query</label>
        <select
          id="type"
          className="custom-select form-control mb-3"
          style={{
            backgroundColor: "transparent",
            color: "#6666ff",
            border: "none",
          }}
          defaultValue="Collaboration"
        >
          <option value="collaboration">Collaboration</option>
          <option value="question">Question</option>
          <option value="internship/job">Internship / Job</option>
          <option value="freelancing">Freelancing</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea
          className="form form-control mb-3"
          cols={5}
          rows={5}
          id="description"
          placeholder="Your query..."
          required
          style={{
            backgroundColor: "transparent",
            color: "#6666ff",
            border: "none",
          }}
        ></textarea>
        <button
          type="submit"
          style={{ margin: "auto" }}
          className="btn btn-warning w-100 mt-3"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
