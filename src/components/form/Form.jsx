import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Form.css';

export const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [acceptedPolicy, setAcceptedPolicy] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!acceptedPolicy) {
            alert("You must accept the privacy policy to proceed.")
            return;
        }
        setSubmitted(true);
    };

    if (submitted) {
        navigate('/thank-you');
    }

    return (
        <div className="form-container">
            <h2 className="form-title">Order form</h2>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={"Enter your name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-input"
                />
                <br />
                <br />
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder={"Enter your phone number"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="form-input"
                />
                <br />
                <br />
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={"Enter your email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                />
                <br />
                <br />
                <label htmlFor="comment" className="form-label">Comment:</label>
                <textarea
                    id="comment"
                    name="comment"
                    placeholder={"Write your message"}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    className="form-input form-textarea"
                />
                <br />
                <br />
                <label htmlFor="acceptPolicy" className="form-label">
                    <input
                        type="checkbox"
                        id="acceptPolicy"
                        name="acceptPolicy"
                        checked={acceptedPolicy}
                        onChange={(e) => setAcceptedPolicy(e.target.checked)}
                        className="form-checkbox"
                    />
                    I accept
                    <Link to="/privacy-policy" className="form-policy-link">Privacy policy</Link>
                </label>
                <br />
                <br />
                <button type={'submit'} className="form-button">Order</button>
            </form>
        </div>
    );
};