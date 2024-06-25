import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email_id: '',
        to_name: 'Omkar',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);

        // return;

        emailjs.send(
            'service_9nonxwr', // Replace with your EmailJS service ID
            'template_d2yd4gg', // Replace with your EmailJS template ID
            formData,
            '23NoFkAAHJfzDfwSM' // Replace with your EmailJS user ID
        )
        .then((response) => {
            toast.success("Message Sent!");
        })
        .catch((err) => {
            toast.error("Failed to send message. Please try again.");
        });

        setFormData({
            from_name: '',
            from_email_id: '',
            message: ''
        });
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Name:</label>
                    <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder='Enter your name...'
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address:</label>
                    <input
                        type="email"
                        name="from_email_id"
                        value={formData.from_email_id}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder='Enter your email address...'
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={styles.textarea}
                        placeholder='Enter your message...'
                    />
                </div>
                <button type="submit" className={styles.button}>Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
