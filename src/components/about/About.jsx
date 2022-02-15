import React from 'react';
import './about-style.css';

const About = () => {

  return (
    <section id="about" data-scroll-index="2">
       
        <div className="about-header">
            <div className="section-title">
                <h2>About <span>Me</span></h2>
            </div>
        </div>

        <div className="about-body">
                <p className='about-text'>
                    Hey! I'm <span>Emmanuel Ajibode</span>.
                    A Fullstack developer from Nigeria🌍. <br/><br/>
                    I’m an Endless seeker of Knowledge🧠. I speak, read and write in English.
                    <br />
                    I’m constantly learning Web technologies and currently playing around with ReactJS.<br/><br />
                    When I'm not tapping the keys on my laptop,
                    <br/>
                    you'll find me playing indoor games such as 
                    table tennis and chess, or listening to music🎧.
                    <br />
                    I love to hang out with friends when the opportunity presents itself.
                </p>
                <p className='about-text'>
                    I'm totally dedicated to <span>building</span> and <span>creating</span> software applications
                    <br />
                    in the most <span>innovative</span> and <span>efficient</span> manner possible.
                    <br/> <br/>
                    I’m skilled in both backend and frontend development and I’ll love to work
                    <br /> with both Small and Large businesses. 
                </p>
            
        </div>
    </section>
  );
};

export default About;