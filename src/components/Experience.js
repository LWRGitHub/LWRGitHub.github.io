import React from 'react';

//components
import ProjectContainer from './experience/projects/ProjectContainer';
import MainLangContainer from './experience/mainLang/MainLangContainer';
import Header from './Header';

//data
import { ProProj, PersonalProj } from '../data/projects';
import {mainLanguages} from '../data/experiencePgSkillSort';

const Projects = () => (
    <div>
        <section className="container">
            <h2 className="my-5" id="experience">Engineering Positions</h2>
            <ProjectContainer data={ProProj} />
        </section>
        <section className="container">
            <h2 className="my-5" id="projects">Projects</h2>
            <ProjectContainer data={PersonalProj} />
        </section>
    </div>
);

const Experience = () => (
    <div>
        <Header page={'Experience'} />
        <MainLangContainer  data={mainLanguages} />
        <Projects />
    </div>
);

export default Experience;