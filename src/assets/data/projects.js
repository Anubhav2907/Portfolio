import { v4 as uuidv4 } from 'uuid';
import Sponsify from '../images/sponsify.JPG';
import Chat from '../images/chat.JPG';
import Covid from '../images/Covid-tracker.JPG';
import memories from '../images/memories.jpg';
import Yelpcamp from '../images/yelpcamp.JPG';
import Ecoventure from '../images/ecoventure.JPG';

const projects = [
  {
    id: uuidv4(),
    name: 'Sponsify',
    desc:
      'A website that connects the event organizers/colleges looking for sponsors and companies/organizations interested in giving sponsorship.',
    img: Sponsify,
    link: 'https://sponsify-07.herokuapp.com/',
    git: 'https://github.com/Anubhav2907/Sponsify',
  },
  {
    id: uuidv4(),
    name: 'Covid Tracker',
    desc:
      'A web application that gives live info of covid cases, recovery, and deaths worldwide along with charts and maps.',
    img: Covid,
    link: 'https://covid-tracker-07.web.app/',
    git: 'https://github.com/Anubhav2907/Covid-tracker',
  },
  {
    id: uuidv4(),
    name: 'Memories',
    desc:
      'A dashboard to list all your cheerful memories in a single place and manage them the way you want.',
    img: memories,
    git: 'https://github.com/Anubhav2907/Memories-MERN',
    link: 'https://memories-anx.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Yelpcamp',
    desc:
      "Yelpcamp is a campground rating app, where users can create their own campgrounds, view, and comment on other's campgrounds.",
    img: Yelpcamp,
    git: 'https://github.com/Anubhav2907/Yelp-Camp',
    link: 'https://yelp-camp-07.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Chatroom',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: Chat,
    git: 'https://github.com/Anubhav2907/ChatRoom',
    link: 'https://anx-chat-room.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Ecoventure',
    desc:
      'A startup provides clients with design consultation services to understand their expectations and  to  fulfill their design vision. #Currently working here',
    img: Ecoventure,
    link: 'http://ecoventure.in/',
    git: 'https://github.com/Anubhav2907',
  },
];

export default projects;
