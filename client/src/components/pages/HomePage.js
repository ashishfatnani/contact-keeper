import React from 'react';
import Contact from '../contacts/Contact';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const HomePage = () => {
    return (
        <div className = "grid-2">
            <div>
                <ContactForm></ContactForm>
            </div>
            <div>
                <ContactFilter>
                </ContactFilter>
                <Contact></Contact>
            </div>
        </div>
    )
}
 
export default HomePage;
