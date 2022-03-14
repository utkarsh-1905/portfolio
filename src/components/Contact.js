import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import {
  BagSimple,
  Download,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from "phosphor-react";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contact</div>
      <div className={styles.content}>
        <div className={styles.social}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit
          amet consectetur adipisicing elit.
          <div className={styles.socialButtons}>
            <a className="btn btn-outline-light ">
              <Download size={16} className="text-light" /> Download Resume
            </a>
            <a
              className="btn btn-outline-success "
              href="https://utkarshtripathi.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <BagSimple size={16} className="text-success" /> Hashnode Blog
            </a>
            <a className="btn btn-outline-primary">
              <TwitterLogo size={16} className="text-primary" weight="fill" />{" "}
              Twitter
            </a>
            <a className="btn btn-outline-info">
              <LinkedinLogo size={16} className="text-info" weight="thin" />{" "}
              Linkedin
            </a>
            <a className="btn btn-outline-danger">
              <InstagramLogo size={16} className="text-danger" weight="thin" />{" "}
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.contactForm}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
