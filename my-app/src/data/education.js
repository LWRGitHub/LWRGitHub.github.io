import { focus, otherFocus, tech, skill } from './skills';

export const education = [
    {
        title: 'Make School "Dominican University" | CS Bachelors Degree',
        img: {
            src: 'images/education/makeschool-building.jpeg',
            alt: 'Make School logo overlaying front of the Make School building located at 555 Post Street San Francisco, California 94102. This School gives you a Bachelors degree in Computer science their Program takes two years.'
        },
        schools: [
            {
                school: 'MakeSchool.com',
                location: ': SF, CA',
                href: 'https://www.makeschool.com/',
                focus: [focus.sofEngr, `${focus.dev.type.wma} ${focus.dev.area.fs}`, focus.design.xi, focus.game.desDev, focus.data, focus.AI.AIMachineLearn],
                skills: [tech.py.id, tech.js.id, 'Swift', 'Go', 'Flack', 'Django', tech.node.id, tech.react.id, 'UIKit', 'CoreData', 'Foundation', 'NumPy', 'Pandas', 'Scikit-Learn', 'Keras', 'TensorFlow', tech.p5.id],
                moreInfo: "Bachelor's degree in applied computer science 2022 at Make School accredited through Dominican University of California."
            }
        ],
    },
    {
        title: 'DVC | UX/UI Design',
        img: {
            src: 'images/education/dvc-logo.jpg',
            alt: 'Diablo Valley College also known as DVC. Located in Pleasant Hill California. image of collage campus with the a DVC logo overly.'
        },
        schools: [
            {
                school: 'www.dvc.edu',
                location: ': PleasantHill, CA',
                href: 'https://www.dvc.edu/',
                focus: [focus.design.xi, otherFocus.art.artDraw, otherFocus.art.artDM, otherFocus.webDes, otherFocus.math],
                skills: [tech.adobe.photo.id, tech.adobe.dream.id, tech.adobe.suite.id, tech.html.id, skill.drawing.id, skill.math.id],
                moreInfo: 'Certificate classes at Diablo Valley College in UX/UI Design.'
            }
        ],
    },
    {
        title: 'Code TL, CTD & Meda MT | Coding Bootcamp',
        img: {
            src: 'images/education/ctd-codetl-meda.svg',
            alt: 'Code Tenderloin logo, Code The Dream logo and a Meda Mission Techies logo'
        },
        schools: [
            {
                school: 'Code Tenderloin',
                location: ': SF, CA',
                focus: [focus.sofEngr, focus.game.desDev],
                skills: [tech.js.id, tech.html.id, tech.css.id]
            },
            {
                school: 'Code The Dream',
                location: ': Durham, NC',
                focus: [focus.sofEngr, `${focus.dev.type.wma} ${focus.dev.area.fs}`, focus.design.xi, focus.game.desDev, focus.data],
                skills: [tech.js.id, tech.rb.id, tech.html.id, tech.css.id, tech.dom.id, tech.react.id, tech.reactRouter.id, tech.reactBootstrap.id, tech.bootstrap.id, tech.rbOnRail.id, tech.erb.id, tech.activeRec.id, tech.aws.id, tech.sql.id, tech.jquery.id, tech.comandLine.id, tech.terminal.id, tech.gitHub.id, tech.git.id, tech.wireFrames.id, tech.chromeDev.id, tech.flexbox.id, tech.responsive.id, tech.mediaEl.id, tech.webOptimiz.id, tech.preformOptimiz.id, tech.webAccess.id, tech.ajax.id, tech.asyncAwait.id, tech.api.fetch.id]
            },
            {
                school: 'Meda Mission Techies',
                location: ': SF, CA',
                focus: [focus.sofEngr, `${focus.dev.type.wma} ${focus.dev.area.fs}`, focus.design.xi, focus.data],
                skills: [tech.js.id, tech.html.id, tech.css.id, tech.node.id, tech.react.id, tech.dom.id, tech.mongo.id, tech.mongoose.id, tech.jquery.id, tech.comandLine.id, tech.terminal.id, tech.git.id, tech.gitHub.id, tech.wireFrames.id, tech.flexbox.id]
            }
        ],
    },
    {
        title: 'Online/In-Person Courses | Computer Science Studies',
        img: {
            src: 'images/education/courses.png',
            alt: 'This photo includes a collage of Khan Academy logo, Codecademy logo, Team Treehouse logo, Udacity logo, Noise bridge logo, GitHub learning lab log, and Lynda.com that is now known as LinkedIn learning logo'
        },
        schools: [
            {
                school: 'Linda.com “LinkedIn Learning”',
                location: ':',
                focus: [focus.sofEngr, `${focus.dev.type.wm} ${focus.dev.area.fs}`, focus.design.xi, focus.data],
                skills: [tech.google.analytic.id, tech.SEO.id, tech.py.id, tech.html.id, tech.css.id, tech.js.id, tech.dom.id, tech.powerSh.id, tech.comandLine.id, tech.terminal.id, tech.gitHub.id, tech.git.id]
            },
            {
                school: 'TeamTreeHouse.com',
                location: ':',
                focus: [focus.sofEngr, `${focus.dev.type.wma} ${focus.dev.area.fs}`, focus.game.desDev, focus.design.xi, focus.data],
                skills: [tech.react.id, tech.reactRouter.id, tech.jsx.id, tech.chromeDev.id, tech.webAccess.id, tech.html.id, tech.css.id, tech.webOptimiz.id, tech.preformOptimiz.id, tech.mediaEl.id, tech.bootstrap.id, tech.reactBootstrap.id, tech.flexbox.id, tech.git.id, tech.gitHub.id, tech.sql.id, tech.js.id, tech.img.img.id, tech.wireFrames.id, tech.adobe.XD.id, tech.balsamiq.id, tech.sketchApp.id, tech.comandLine.id, tech.powerSh.id, tech.terminal.id, tech.c_sharp.id, tech.express.id, tech.api.rest.id, tech.http.id, tech.npm.id, tech.node.id, tech.responsive.id, tech.google.font.id, tech.asyncAwait.id, tech.ajax.id, tech.jquery.id, tech.dom.id, tech.api.api.id, tech.api.fetch.id, tech.nowVercel.id, tech.netlify.id]
            },
            {
                school: 'GA Dash',
                location: ':',
                focus: [focus.sofEngr, `${focus.dev.type.wm} ${focus.dev.area.f}`, focus.design.xi],
                skills: [tech.js.id, tech.html.id, tech.css.id, tech.jquery.id, tech.google.map.id, tech.responsive.id, tech.google.font.id]
            },
            {
                school: 'Udacity',
                location: ':',
                focus: [focus.sofEngr, focus.data],
                skills: [tech.js.id, tech.py.id]
            },
            {
                school: 'Khan Academy',
                location: ':',
                focus: [focus.sofEngr, `${focus.dev.type.wm} ${focus.dev.area.f}`, focus.design.xi, focus.data],
                skills: [tech.js.id, tech.html.id, tech.css.id, tech.sql.id, skill.math.id]
            },
            {
                school: 'CodeCademy.com',
                location: ':',
                focus: [focus.sofEngr, `${focus.dev.type.wm} ${focus.dev.area.f}`, focus.design.xi],
                skills: [tech.c_sharp.id, tech.rb.id, tech.react.id, tech.html.id, tech.css.id, tech.bootstrap.id]
            },
            {
                school: 'SOL Learn',
                location: ':',
                focus: [focus.sofEngr],
                skills: [tech.js.id, tech.py.id, tech.react.id]
            },
            {
                school: 'w3schools.com',
                location: ':',
                focus: [focus.sofEngr, `${focus.dev.type.wm} ${focus.dev.area.f}`, focus.game.desDev, focus.design.xi, focus.data],
                skills: [tech.js.id, tech.html.id, tech.css.id, tech.sql.id, tech.py.id, tech.jquery.id, tech.bootstrap.id]
            },
            {
                school: 'GitHub Learning Lab',
                location: ':',
                focus: [focus.sofEngr, `${focus.dev.type.wma} ${focus.dev.area.fs}`],
                skills: [skill.githubEd.comUsingMarkdown.id, skill.githubEd.upload.id, skill.githubEd.intro.id, skill.githubEd.circleCI.id]
            },
            {
                school: 'Noisebridge',
                location: ':',
                focus: [focus.sofEngr, focus.game.desDev, focus.data],
                skills: [tech.c_sharp.id, tech.py.id, tech.unity.id, tech.sql.id, tech.garageband.id, tech.milkyTrack.id]
            },
        ],
    },
    {
        title: 'SRVHS & Vanguard | High School Diploma',
        img: {
            src: "images/education/high-schools-glow.jpg",
            alt: 'This is a photo of both San Ramon Valley high school Located in Danville California and The Vangard School located in Lake Wales Florida. the photo is Split in half with a white line down the middle.'
        },
        schools: [
            {
                school: 'SRVHS: Danville, CA | Vanguard: Lake Wales, FL',
                focus: [otherFocus.math, otherFocus.science, otherFocus.history, otherFocus.english, otherFocus.electives.photo, otherFocus.electives.video, otherFocus.language],
                skills: [tech.imove.id, skill.darkRoomPhoto.id, skill.ASL.id, skill.highSpeedKey.id]
            }
        ],
    },
];

// {
//     title: '',
//     img: {
//         src: '',
//         alt: ''
//     },
//     schools: [
//         {
//             school: '',
//             location: '',
//             href: '#',
//             focus: [],
//             skills: [],
//             moreInfo: ''
//         }
//     ],
// },

// /{
//     school: '',
//     location: '',
//     href: '#',
//     focus: [],
//     skills: [],
//     moreInfo: ''
// }