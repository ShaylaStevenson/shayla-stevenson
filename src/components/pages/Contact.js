import React, { useState } from "react";
//import ContactForm from "../components/ContactForm/index"
//import Container from "../../components/Container";
////import Col from "../../components/Col";
//import Row from "../../components/Row";

function Contact() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("email is " + email);
    console.log("phone is " + phone);
    console.log("message is" + message);
    // to clear the input or select field. Thanks TA Robert!
    //console.log(e.target)
    e.target.reset();
  };

  return(
      <div>
        <div className="mt-4">
            <h2>Reach Out</h2>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="container mt-3 px-5">
                <div className=" row form-group">
                    <div className="col-12">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-12">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-12">
                        <input
                            className="form-control"
                            type="phone"
                            placeholder="Phone Number"
                            name="phone"
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-12">
                        <input
                            className="form-control"
                            type="message"
                            placeholder="Leave a message"
                            name="message"
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <button className="btn btn-success" type="submit">
                    Submit
                </button>
            </div>
            <div className="container mt-4">
                <h3>Hello {username}!</h3>
                <p> your email is {email}!</p>
                <p> your phone number is {phone}!</p>
                <p> your message is {message}!</p>
            </div>
        </form>

      </div>
  )

};


export default Contact; 