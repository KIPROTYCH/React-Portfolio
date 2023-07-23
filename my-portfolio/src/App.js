import React from "react";
import "./styles/styles.css";  

import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

const App = () => {
  const navigationLinks = [
    { id: 1, section: "about", title: "About Me" },
    { id: 2, section: "projects", title: "Projects" },
    { id: 3, section: "contact", title: "Contact Me" },
  ];

  return (
    <div className="App">
      <Navbar links={navigationLinks} />
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default App;
