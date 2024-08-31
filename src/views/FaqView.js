import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Faq from '../components/Faq';
import Card from '../components/Card';
import '../stylesheets/Faq.css';
import '../stylesheets/View.css';

gsap.registerPlugin(ScrollTrigger);

const View = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    gsap.to(".background-text", {
      x: "20%",  // Move to the right
      scrollTrigger: {
        trigger: ".view-container",
        start: "top top",  // Animation starts when the top of the container hits the top of the viewport
        end: "bottom top",  // Animation ends when the bottom of the container hits the top of the viewport
        scrub: true,  // Smooth scrubbing
      },
    });

    gsap.to(".background-text-second", {
      x: "-20%",  // Move to the left
      scrollTrigger: {
        trigger: ".view-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const members = [
    {
      image: 'https://zenko.syd1.cdn.digitaloceanspaces.com/balerina/senel.png',
      name: 'Senel Ephraims',
      position: 'Chairman',
      club: 'IEEE Student Branch Of University Of Moratuwa',
      email: 'senel.ephraims@ieee.org',
      contact: '+94 77 041 0762'
    },
    {
      image: 'https://zenko.syd1.cdn.digitaloceanspaces.com/balerina/chamaru.png',
      name: 'Chamaru Amasara',
      position: 'Chairman',
      club: 'IEEE Computer Society Of University Of Moratuwa',
      email: 'chamaru.20@cse.mrt.ac.lk',
      contact: '+94 71 882 6916'
    },
    {
      image: 'https://zenko.syd1.cdn.digitaloceanspaces.com/balerina/ameera.png',
      name: 'Ameera Thiwanka',
      position: 'Event Co-Chairman',
      club: 'Innovate with Ballerina',
      email: 'ameera.21@cse.mrt.ac.lk',
      contact: '+94 71 135 6855'
    },
    {
      image: 'https://zenko.syd1.cdn.digitaloceanspaces.com/balerina/salama.png',
      name: 'Salama Fazlul',
      position: 'Event Chairman',
      club: 'Innovate with Ballerina',
      email: 'fazlulsalama@gmail.com',
      contact: '+94 77 460 7907'
    },
    {
      image: 'https://zenko.syd1.cdn.digitaloceanspaces.com/balerina/harindu.png',
      name: 'Harindu Hadithya',
      position: 'Event Co-Chairman',
      club: 'Innovate with Ballerina',
      email: 'hhadithya34@gmail.com',
      contact: '+94 71 090 1630'
    }
  ];

  const handleToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index); // Close if already open, otherwise open new
  };

  return (
    <>
      <div className="view-container">
        <div className="background-text">
          <h1>Contact Us</h1>
        </div>
        <div className="background-text-second">
          <h1>Contact Us</h1>
        </div>
        <h1 className="faq-title">FAQ</h1>
        <div className="faq-container">
          <div className="faq-column">
            <Faq
              title="How many people can be there in a team?"
              isOpen={openFaqIndex === 0}
              onToggle={() => handleToggle(0)}
            >
              <p>A team can consist of 3-5 participants.</p>
            </Faq>
            <Faq
              title="Can a team consist of participants from different universities?"
              isOpen={openFaqIndex === 1}
              onToggle={() => handleToggle(1)}
            >
              <p>Yes, All participants must be currently enrolled undergraduates from the same university or institution.</p>
            </Faq>
            <Faq
              title="Can we change our team members after registration close?"
              isOpen={openFaqIndex === 2}
              onToggle={() => handleToggle(2)}
            >
              <p>No,After the registration period, teams won’t be able to change their members. But can make changes of the team content within registration period.</p>
            </Faq>
          </div>
          <div className="faq-column">
            <Faq
              title='Does "Innovate With Ballerina" require any prior coding skills to participate in? '
              isOpen={openFaqIndex === 4}
              onToggle={() => handleToggle(4)}
            >
              <p>While prior coding experience can be advantageous, it's not a requirement. Because we'll conduct 3 workshops which'll help you to get a fundamental knowledge about coding and about Ballerina language.</p>
            </Faq>
            <Faq
              title="Will I get a certificate of participation?"
              isOpen={openFaqIndex === 5}
              onToggle={() => handleToggle(5)}
            >
              <p>Yes, all participants who have submitted their GitHub repositories  will receive certificates as recognition of their participation and contribution to the event.</p>
            </Faq>
            <Faq
              title="Do the participants need to attend physically?"
              isOpen={openFaqIndex === 6}
              onToggle={() => handleToggle(6)}
            >
              <p>No, All workshops and submission procedure will be in online mode.</p>
            </Faq>
          </div>
        </div>

        <div className="card-gallery">
          <div className="card-row card-one">
            <Card
              image={members[0].image}
              name={members[0].name}
              position={members[0].position}
              club={members[0].club}
              email={members[0].email}
              contact={members[0].contact}
            />
            <Card
              image={members[1].image}
              name={members[1].name}
              position={members[1].position}
              club={members[1].club}
              email={members[1].email}
              contact={members[1].contact}
            />
          </div>
          <div className="card-row">
            <Card
              image={members[2].image}
              name={members[2].name}
              position={members[2].position}
              club={members[2].club}
              email={members[2].email}
              contact={members[2].contact}
            />
            <Card
              image={members[3].image}
              name={members[3].name}
              position={members[3].position}
              club={members[3].club}
              email={members[3].email}
              contact={members[3].contact}
            />
            <Card
              image={members[4].image}
              name={members[4].name}
              position={members[4].position}
              club={members[4].club}
              email={members[4].email}
              contact={members[4].contact}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
