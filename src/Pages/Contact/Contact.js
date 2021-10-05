import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container input-container pb-5 my-5">
            <h2 className="text-center pt-4">Contact Us</h2>
            <div className="container-input-container container">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                {/* country input value */}
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="usa">BanglaDesh</option>
                </select>

                {/* Subject */}

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                {/* submit button */}
                <input type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default Contact;