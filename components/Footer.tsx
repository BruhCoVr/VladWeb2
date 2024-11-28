import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'; // Optional: For styling

export default function Footer() {
    return (       
        <footer className="footer">
            <div className="button-container">
                <a href="https://github.com/BruhCoVr" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.instagram.com/vrgv_2005/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                </a>
                <a href="https://ca.linkedin.com/in/vladimir-ramon-grinfelds-ventura-2171372a7?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={24} />
                </a>
            </div>
            </footer>
    );
}
