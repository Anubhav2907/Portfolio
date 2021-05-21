import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Anubhav Singh</h1>
          <PText>
            A freelance web designer and developer from Gwalior, M.P, India. I
            always make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                link: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                link: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                link: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                link: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91-6232151111',
              },
              {
                title: 'as77jadoun@gmail.com',
                link: 'mailto:as77jadoun@gmail.com',
              },
              {
                title: 'Surya Vihar, Gwalior, India',
                link:
                  'https://www.google.com/maps/place/Vaishno+Vatika+Marriage+Hall/@26.2453504,78.217209,17z/data=!3m1!4b1!4m5!3m4!1s0x3976c13eaa61b043:0x2ba601ac4fcadc30!8m2!3d26.2453504!4d78.2193977',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Github',
                link: 'https://github.com/Anubhav2907',
              },
              {
                title: 'LinkedIn',
                link:
                  'https://www.linkedin.com/in/anubhav-singh-jadoun-2689621b3/',
              },
              {
                title: 'Instagram',
                link: 'https://www.instagram.com/anxbhxv/',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}
