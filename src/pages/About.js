import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/as.jfif';
import AboutInfoItems from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import './Btn.css';
// const ButtonStyle = styled.Link`
//   margin-top: 2rem;
//   .button {
//     font-size: 2.2rem;
//     background-color: ${(props) =>
//       props.outline ? 'transperant' : 'var(--gray-1)'};
//     padding: 0.7em 2em;
//     border: 2px solid var(--gray-1);
//     border-radius: 8px;
//     display: inline-block;
//     color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
//   }
//   @media only screen and (max-width: 768px) {
//     .button {
//       font-size: 1.8rem;
//     }
//   }
// `;
const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Anubhav Singh</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Gwalior, M.P, India. A place of beauty and nature.
                  Since my childhood, I've loved art and design and brought a
                  wide range of skills from visual design, interaction design,
                  UX, to prototyping. I focus on creating rich seamless
                  experiences between the product and the user. I'm always
                  looking for creative people to vibe with.
                  <br /> <br />
                  At first I intended to be an animator and went to design
                  school fully motivated to become just that. One thing led to
                  another and 2 years went by and I am a (almost) fully fledged
                  freelance web designer without ever planning to become one in
                  the first place.
                  <br />
                  <br />I have coded websites with great respect to standards,
                  because it makes life easier for everybody. My site even used
                  to validate, honestly! My vision is to make this web beautiful
                  than yesterday. Now almost everything is becoming better than
                  ever. It is time for us to create more good stuff that helps
                  the world to become a better place.
                </PText>
              </div>

              <a
                className="button"
                href="/Anubhav_Singh Jadoun_Resume_21-05-2021-05-28-33.pdf"
                target="_blank"
                download
              >
                Download CV
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItems
                title="School"
                items={['Oxford Public School, Gwalior']}
              />
              <AboutInfoItems title="College" items={['SVNIT, Surat']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItems
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'REDUX']}
              />
              <AboutInfoItems
                title="BackEnd"
                items={['Node', 'Express', 'MongoDB']}
              />
              <AboutInfoItems
                title="Design"
                items={['After Effects', 'Figma', 'Premier Pro']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItems
                title="April-2021"
                items={['Internship at Orions IT Solutions']}
              />
              <AboutInfoItems
                title="May-2021"
                items={['Internship at Ecoventure']}
              />
              <AboutInfoItems
                title="2021-"
                items={['Freelance Web Developer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
