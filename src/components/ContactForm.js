import React from "react";

const ContactForm = () => {
  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <form onSubmit={formHandler} style={{ color: "#fff" }}>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control mb-3"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            border: "none",
          }}
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputPassword1">Name</label>
        <input
          type="text"
          class="form-control mb-3"
          id="exampleInputPassword1"
          placeholder="Enter your name"
          required
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            border: "none",
          }}
        />
      </div>
      <label for="type">Query</label>
      <select
        id="type"
        class="custom-select form-control mb-3"
        style={{
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
        }}
      >
        <option selected value="collaboration">
          Collaboration
        </option>
        <option value="question">Question</option>
        <option value="internship/job">Internship / Job</option>
        <option value="freelancing">Freelancing</option>
      </select>
      <label for="description">Description</label>
      <textarea
        className="form form-control mb-3"
        cols={5}
        rows={5}
        id="description"
        placeholder="Your query..."
        required
        style={{
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
        }}
      ></textarea>
      <button
        type="submit"
        style={{ margin: "auto" }}
        class="btn btn-warning w-100 mt-3"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
