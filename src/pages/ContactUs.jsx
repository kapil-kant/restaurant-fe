import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-page" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 className="contact-us-title">Contact Us</h1>
      <p>We'd love to hear from you! Please use the form below or contact us directly.</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Send Us a Message</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="6" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} required></textarea>
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Send Message</button>
        </form>
      </div>

      <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <h2>Other Ways to Contact Us</h2>
        <p><strong>Address:</strong> 123 Food St, Culinary City</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> info@restaurantfe.com</p>
      </div>
    </div>
  );
};

export default ContactUs;