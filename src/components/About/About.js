// @flow strict
import React, { useState, useEffect, useRef } from 'react';
import type { ComponentType } from 'react';

import './About.scss';

type StateType = {
  jobs: Array<{
    jobTitle: string,
    company: string,
    location: string,
    from: string,
    to: string,
    description: string,
  }>,
  languages: Array<{
    languageName: string,
    languageLevel: string,
  }>,
  skills: Array<string>,
  ExperienceCard: ?ComponentType<*>,
  Language: ?ComponentType<*>,
  SkillBadge: ?ComponentType<*>,
};

const About = () => {

  const [node, setNode] = useState({});

  const state = {
    jobs: [
      {
        jobTitle: 'Web Designer',
        company: 'NEAT integrated design',
        location: 'Cali, Colombia',
        from: '12/2012',
        to: '10/2014',
        description: ''
      },
      {
        jobTitle: 'Frontend Developer',
        company: 'Softpymes SA',
        location: 'Cali, Colombia',
        from: '10/2014',
        to: '07/2016',
        description: ''
      },
      {
        jobTitle: 'Teacher',
        company: 'UAO',
        location: 'Cali, Colombia',
        from: '02/2016',
        to: '05/2016',
        description: ''
      },
      {
        jobTitle: 'Freelance Developer',
        company: 'Jero.io',
        location: 'Нижний Новгород, Россия',
        from: '07/2016',
        to: '10/2017',
        description: ''
      },
      {
        jobTitle: 'Senior web UI Developer',
        company: 'Globant',
        location: 'Medellín, Colombia',
        from: '10/2017',
        to: '03/2018',
        description: ''
      },
      {
        jobTitle: 'Senior Frontend Developer',
        company: 'Storiqa',
        location: 'Москва, Россия',
        from: '03/2018',
        to: '02/2019',
        description: ''
      },
      {
        jobTitle: 'Senior Frontend Developer',
        company: 'Alabom',
        location: 'Москва, Россия',
        from: '02/2019',
        to: '03/2019',
        description: ''
      }
    ],
    languages: [
      {
        languageName: 'Español',
        languageLevel: 'Native'
      },
      {
        languageName: 'English',
        languageLevel: 'Proeficient'
      },
      {
        languageName: 'Русский',
        languageLevel: 'Intermediate'
      }
    ],
    skills: [
      'Javascript',
      'Functional Programming',
      'Component-driven architecture',
      'Reactjs',
      'Vuejs',
      'Infernojs',
      'Redux',
      'Webpack',
      'Typescript',
      'Flow',
      'Bootstrap',
      'HTML5',
      'CSS',
      'SASS',
      'Stylus',
      'Gulp'
    ],
  };

  const observer = useRef(() => {

  });

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { 
          target: {
            id,
          },
        } = entry;
        if (entry.intersectionRatio > 0 && node[id] == null) {
          // $FlowIgnore
          import(`../${id}/`).then((module) => {
            console.log('id', id);
            console.log('module', module);
            console.log('node', node);
                 
            setNode({
              [id]: module[id],
            });
          });
        }
      });
    });

    const components = document.querySelectorAll('#ExperienceCard, #Language, #SkillBadge');
    if (components != null) {
      components.forEach(component => {
        observer.observe(component);
      });
    }

  }, [node]);

  const {
    jobs,
    skills,
    languages,
  } = state;

  return(
    <section className="about" id="about">
      <div className="container">
        <h2 className="text-center">About</h2>
        <hr />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p className="text-center heading-subtitle">
              I'm frontend developer, passionate about web technologies and minimal UI's
            </p>
          </div>
        </div>
        <h3 className="text-center mt-3 mb-3">Experience</h3>
        <div id="ExperienceCard" className="d-flex flex-wrap align-items-start justify-content-around mb-3">
          { node.ExperienceCard && jobs.reverse().map((job, idx) => (<node.ExperienceCard key={idx} {...job} />)) }
        </div>
        <hr />
        <h3 className="text-center mt-3 mb-3">Languages</h3>
        <div id="Language" className="d-flex flex-wrap align-items-start justify-content-around mb-3">
          { node.Language && languages.map((lang, idx) => (<node.Language key={idx} {...lang} />)) }
        </div>
        <hr />
        <h3 className="text-center mt-3 mb-3">Skills</h3>
        <div id="SkillBadge" className="d-flex flex-wrap align-items-start justify-content-around mb-3">
          { node.SkillBadge && skills.map((skill, idx) => (<node.SkillBadge key={idx} skill={skill} />)) }
        </div>
      </div>
    </section>
  );
};

export default About;
