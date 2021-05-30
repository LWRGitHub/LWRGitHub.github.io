import { platform, focus, tech } from './skills';


export const ProProj = [
    {
        img: {
            src: "images/experience/dance4healing.jpeg",
            alt: "screen shot of www.dance4healing.com this is an image of the dance for healing website mobile site or small version has many people in the image dancing woman has dance for healing logo. a slide show would move if you on the site but this is a still image."
        },
        title: 'Dance4Healing.com',
        paragraph1: 'Continuous integration and continuous deployment of the website. Including aspects such as web design, web publishing, web programming, & database management. Creating a computer program or a set of programs to perform the different tasks that the business requires. Building economical software which is reliable & works efficiently on the real machines. Worked closely with business stakeholders to understand their goals & determine how data can be used to achieve those goals.',
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, `${focus.dev.area.fs} ${focus.dev.type.wma}`, focus.design.xi, focus.data], 
            tech: [
                // tech.ai.id, 
                tech.express.id, 
                tech.heroku.id, 
                tech.node.id, 
                // tech.jade.id, 
                tech.mongo.id, 
                tech.mongoose.id, 
                // tech.twilio.id, 
                tech.js.id, 
                tech.html.id, 
                tech.css.id, 
                // tech.passport.id, 
                // tech.vimeo.id, 
                tech.bitBucket.id, 
                tech.git.id, 
                tech.gitHub.id, 
                // tech.browserify.id, 
                tech.CI_CD.id, 
                tech.adobe.photo.id,  
                tech.trello.id, 
                tech.google.analytic.id, 
                tech.google.font.id, 
                // tech.sketchApp.id, 
                tech.npm.id, 
                tech.yarn.id
            ]
        },
        paragraph2: 'Once on the site, sign up to begin learning different dance moves.',
        projectLink: "http://dance4healing.com/sandbox/index.html",
        codeLink: false
    },
    {
        img: {
            src: "images/experience/stageIV.jpg", 
            alt: "This is a screenshot of the homepage for stage four .org. Stage IV.org is tan e-commerce website."
        },
        title: 'StageIV.org',
        paragraph1: "As part of my dance4healing.com internship, it was requested that I set up Google Analytics for StageIV.org. There were some bugs in the code from other people's attempts so I had to use my software engineering skills to fix the code & make it all work together correctly.",
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, `${focus.dev.area.fs} ${focus.dev.type.wm}`, focus.design.xi, focus.data], 
            tech: [
                tech.js.id, 
                tech.css.id, 
                tech.html.id, 
                // tech.wordPr.id, 
                tech.google.analytic.id
            ]
        },
        paragraph2: 'This is an e-commerce platform where you can buy products from artists, view blogs & see art galleries.',
        projectLink: "https://stageiv.org",
        codeLink: false
    }
];


export const PersonalProj = [
    {
        img: {
            src: "images/experience/pong-like-game-paddle.svg", 
            alt: "Screenshot of paddle game that is kind of like pong Where are you trying to destroy the bricks by moving the ball around. Video game online for the computer. This video game is in mid play and most of the bricks have been destroyed player is about to win."
        },
        title: 'Pong like Game',
        paragraph1: 'I created an awesome game that uses the DOM "a tightly integrated part of JavaScript." The game is on one HTML document with the CSS, DOM & JavaScript. I had fun making it & hope you enjoy playing it also.',
        skills: {
            platform: [platform.des], 
            focus: [focus.sofEngr, focus.dev.type.wa, focus.game.desDev], 
            tech: [tech.js.id, tech.dom.id, tech.html.id, tech.css.id, tech.google.analytic.id]
        },
        paragraph2: 'Use a desktop or laptop computer not a phone. Moving the mouse around the play area will move the board at the bottom.',
        projectLink: 'https://lwrgithub.github.io/pong-like-game/',
        codeLink: "https://github.com/LWRGitHub/pong-like-game"
    },
    {
        img: {
            src: "images/experience/mobile-home-page-portfolio-site.png", 
            alt: "Screenshot on the mobile phone of Logan Reynolds' software engineering portfolio website. This is the homepage otherwise known as the index page. Shows a list of programming languages such as JavaScript ESS6 Ruby python & C#. Shows navigation bar in blue. Has a big jumbotron image in the background"
        },
        title: 'Portfolio Site',
        paragraph1: 'This website you are curently on is the "Personal Portfolio" project. I made it with React.js & hope you like it!',
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, `${focus.dev.area.fs} ${focus.dev.type.wma}`, focus.design.xi, focus.data], 
            tech: [
                tech.react.id, 
                tech.reactBootstrap.id, 
                tech.reactRouter.id, 
                tech.js.id, 
                tech.html.id, 
                tech.css.id, 
                tech.bootstrap.id, 
                tech.google.analytic.id, 
                tech.dom.id, 
                tech.google.map.id, 
                tech.CI_CD.id, 
                tech.git.id, 
                tech.gitHub.id, 
                tech.adobe.photo.id, 
                // tech.sketchApp.id, 
                // tech.img.png.id, 
                // tech.img.jpg.id, 
                // tech.img.svg.id
            ]
        },
        paragraph2: 'You are currently viewing this project.',
        projectLink: 'index.html',
        codeLink: "https://github.com/LWRGitHub/LWRGitHub.github.io"
    },
    {
        img: {
            src: "images/experience/js-animation.svg", 
            alt: "This is an image of a JavaScript animation game. Action has yet to get taken on the animation. Image shows a triangle circle and two squares one twisted sideways. The image also has words saying which shape has no corner, This is to entice you to click on the shape you think it is, which will begin the animation."
        },
        title: 'Interactive Animation',
        paragraph1: 'This project is an example of interactive animation with Javascript. This project uses HTML, CSS, DOM, SVG & JavaScript. The ending was an interesting part of the project as it was the first time I used an svg image. The project was completed with time to spare and was fun to make, I hope you all enjoy it!',
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, focus.dev.type.wma,], 
            tech: [
                tech.html.id, 
                tech.css.id, 
                tech.js.id, 
                // tech.img.svg.id, 
                // tech.img.png.id, 
                tech.dom.id, 
                tech.google.analytic.id
            ]
        },
        paragraph2: 'Click once to select a shape in the animation & it will play itself through to the end. If you keep clicking it will quickly go through animation.',
        projectLink: "https://lwrgithub.github.io/js-animation/",
        codeLink: "https://github.com/LWRGitHub/js-animation"
    },
    {
        img: {
            src: "images/experience/dish-site.jpg", 
            alt: "dish submitter website, add food & cooking instructions to the local storage on your internet browser. blue & green faded background on baner the rest of the background is very light green."
        },
        title: `Dish Yumy Food`,
        paragraph1: 'I received an inquiry to create a website where you can add, remove & edit dishes. I found this site to be a good example of the kind of work I can do.',
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, focus.dev.type.wma, focus.design.xi], 
            tech: [tech.js.id, tech.css.id, tech.html.id, tech.dom.id, tech.google.font.id, tech.google.analytic.id]
        },
        paragraph2: 'Type in the name of your dish along with the ingredients & submit it. You can then edit or remove the dish if you like.',
        projectLink: 'https://lwrgithub.github.io/Dish-submitter/',
        codeLink: "https://github.com/LWRGitHub/Dish-submitter"
    },
    {
        img: {
            src: "images/experience/phaser-io-game-like-mario-lg.jpeg", 
            alt: "This is a screenshot of an interactive computer game that looks kind of like Super Mario. There are coins spinning on screen, poison bottles as well as a Barely visible spinning star. The upper left corner says score is 15. Player in the game is jumping from what appears to be floating pieces of land and floating pieces of metal there are coins and items all over the screen. Player appears in midair."
        },
        title: 'Mario Like Game',
        paragraph1: 'This project is a one-page game using the framework Phaser. This framework "Phaser" is an HTML & JS gaming framework basically it makes it easy to make a game with JavaScript. I hope you all have fun with it!',
        skills: {
            platform: [platform.des], 
            focus: [focus.sofEngr, focus.dev.type.wa, focus.design.xi, focus.game.desDev], 
            tech: [
                tech.html.id, 
                tech.css.id, 
                tech.js.id, 
                // tech.phaser.id, 
                // tech.img.png.id, 
                tech.dom.id, tech.google.analytic.id
            ]
        },
        paragraph2: '"Space bar" = jump, "Left & Right arrows" = move',
        projectLink: "https://lwrgithub.github.io/mario-like-game/",
        codeLink: "https://github.com/LWRGitHub/mario-like-game"
    },
    {
        img: {
            src: "images/experience/connect-four-in-a-row-game.svg", 
            alt: "This is a screenshot of the completed connect four game. We're player one is the winner, This shows that the red coins have four in a row going vertically, yellow came close though. Shows is clearly as a computer game designed to get played by two people on one computer."
        },
        title: 'Connect Four',
        paragraph1: 'I am happy to say that the game uses JavaScript, classes a new feature that was added in 2015. The game is called "Connect Four" also known as "Four in a Row."  You may just be one of these people that have played the game in real life, I hope you like it! TAKE NOTE: This game has some beautiful comments in the JS files.',
        skills: {
            platform: [platform.des], 
            focus: [focus.sofEngr, focus.dev.type.wa, focus.design.xi, focus.game.desDev], 
            tech: [
                tech.js.id, 
                tech.html.id, 
                tech.css.id, 
                tech.dom.id, 
                // tech.img.svg.id, 
                tech.google.analytic.id, 
                tech.google.font.id, 
                tech.jquery.id
            ]
        },
        paragraph2: 'Use the mouse to click "Start." use the left, right & down arrows to place token.',
        projectLink: "projects/fourInARow/index.html",
        codeLink: "https://github.com/LWRGitHub/LWRGitHub.github.io/tree/master/my-app/public/projects/fourInARow"
    },
    {
        img: {
            src: "images/experience/video-audio-project.jpg", 
            alt: "Screenshot of a webpage that includes video of a river In what seems like farmland but more so the wild and lots of trees, with a subtitle saying birds chirping. Audio recording below and a title on the web page stating HTML video and audio. Other heading tags stating audio example and video example. White background & Black outlines on the video area and audio area"
        },
        title: 'Video/Audio Elements',
        paragraph1: 'Code includes WebVTT subtitling & MediaElement.js which brings consistency through all browsers. A skip-back plug-in is used to get a 4 sec. playback button. Project has a video and an audio file displayed on screen with user-friendly access.',
        skills: {
            platform: [platform.des], 
            focus: [focus.sofEngr, focus.dev.type.wa], 
            tech: [
                tech.webVtt.id, 
                tech.mediaEl.id, 
                tech.js.id, 
                tech.html.id, 
                tech.css.id, 
                tech.jquery.id, 
                tech.dom.id, 
                tech.gitHub.id, 
                tech.git.id, 
                // tech.mp4.id, 
                // tech.audio.mp3.id, 
                // tech.audio.ogg.id, 
                // tech.vlcMedia.id, 
                // tech.img.svg.id, 
                tech.google.analytic.id, 
                tech.google.font.id
            ]
        },
        paragraph2: 'Use your mouse to control the video & audio elements on the screen.',
        projectLink: "projects/video-audio-vtt-mediaelement/index.html",
        codeLink: "https://github.com/LWRGitHub/LWRGitHub.github.io/tree/master/my-app/public/projects/video-audio-vtt-mediaelement"
    },
    {
        img: {
            src: "images/experience/form.jpg", 
            alt: "This is a screenshot of an online form. The background is white the form is gray and it is a sign up form. The first section is called your basic info which includes name email password and age, greater than 13 or under 13. The second section is called your profile it includes biography charbroil interest interest include development design and business. There's a drop-down menu select your job role you can select from front end developer and many more options at the bottom of the form there is a button labeled sign up."
        },
        title: 'Form',
        paragraph1: 'This is just one example of a type of form I can create. Forms can be made in a variety of different ways depending upon what is requested.',
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, focus.dev.type.wma, focus.design.xi, focus.data], 
            tech: [tech.js.id, tech.dom.id, tech.html.id, tech.css.id, tech.google.analytic.id, tech.google.font.id]
        },
        paragraph2: 'Simply fill out the form and click submit.',
        projectLink: "projects/form/index.html",
        codeLink: "https://github.com/LWRGitHub/LWRGitHub.github.io/blob/master/my-app/public/projects/form"
    },
    {
        img: {
            src: "images/experience/full-stack-conf.jpg", 
            alt: "Screenshot of the full stock tech conference website. This is an image that provides a good example of the web development skills available by Logan Reynolds. Has a blue navigation bar in a light blue Jumbotron with the blue filter over the image on the Jumbotron. Heading says Full Stack Conf A one day conference about all things JavaScript. Buttons to register now and see speakers. there is an imgae of the city they are in. Other titles on the page include about full stack conference, Expert speakers and what you'll learn. Subjects and details are below those tiles."
        },
        title: 'Full Stack Conf',
        paragraph1: 'This is a good one page example website of the work I can do as a Software Engineer & a UX/UI Designer. This example website includes a registration form that upon clicking the button pops up, as well as the necessary information & sections needed for a tech conference website.',
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, `${focus.dev.area.f} ${focus.dev.type.wma}`, focus.design.xi], 
            tech: [
                tech.js.id, 
                tech.dom.id, 
                tech.html.id, 
                tech.css.id, 
                // tech.img.png.id, 
                // tech.img.jpg.id, 
                tech.jquery.id, 
                tech.bootstrap.id, 
                tech.google.analytic.id
            ]
        },
        paragraph2: 'Scrolling down the website you will find a pop up registration form, along with the schedule, speakers, & other necessary information.',
        projectLink: "projects/tech-conf/index.html",
        codeLink: "https://github.com/LWRGitHub/LWRGitHub.github.io/blob/master/my-app/public/projects/tech-conf"
    },
    {
        img: {
            src: "images/experience/html-table.png", 
            alt: "White background screenshot of an HTML table. HTML table is Different shades of gray. It has heading of employee information, The categories include name, email and job rule. Below each category are some names and emails & some different job rolls in the computer science industry. At the bottom it has italicized refreshes every 15 minutes."
        },
        title: 'HTML Table',
        paragraph1: 'This is an example of an HTML table. If I had a good explanation of my capabilities, although there are so many different ways to make tables.',
        skills: {
            platform: [platform.des], 
            focus: [focus.sofEngr, focus.dev.type.w, focus.design.xi, focus.data], 
            tech: [tech.html.id, tech.css.id, tech.google.analytic.id, tech.google.font.id]
        },
        paragraph2: 'This is a table of employee information.',
        projectLink: "projects/html-table/index.html",
        codeLink: "https://github.com/LWRGitHub/LWRGitHub.github.io/blob/master/my-app/public/projects/html-table"
    },
    {
        img: {
            src: "images/experience/react-scoreboard-lg.png", 
            alt: "This is an image scoreboard. The scoreboard is purple and has four players listed on it player two is winning. Play or two has a crown Player one score has gone negative and the other is a trailing behind player two. A timer is counting up in the corner currently at 47 seconds. The background is white."
        },
        title: 'React Scoreboard',
        paragraph1: 'This is a scoreboard application designed with React.js. It keeps track of players scores throughout the game, you can add and remove the players & the current leader will have a crown.',
        skills: {
            platform: [platform.des], 
            focus: [focus.sofEngr, `${focus.dev.area.f} ${focus.dev.type.wa}`, focus.design.xi], 
            tech: [
                tech.html.id, 
                tech.css.id, 
                tech.google.analytic.id, 
                tech.react.id, 
                tech.jsx.id, 
                tech.json.id, 
                // tech.lock.id, 
                tech.js.id, 
                tech.git.id, 
                tech.gitHub.id, 
                tech.reactBootstrap.id
            ]
        },
        paragraph2: 'Up date the score with the plus or minus button, add players at the bottom or remove players with the red "X" by the players name.',
        projectLink: "https://lwrgithub.github.io/gaming-scoreboard/",
        codeLink: "https://github.com/LWRGitHub/gaming-scoreboard"
    },
    {
        img: {
            src: "images/experience/p5-js.jpg", 
            alt: "Screenshot of Logan Reynolds P5JS projects sorted in arranged in a card like format through bootstraps. Clearly a screenshot of the website grayish background cards on screen with images of the P5JS projects."
        },
        title: 'P5.JS',
        paragraph1: 'This is an example of several P5*JS projects. It includes projects such as Mardi Gras, Sketch, Light on Light off, Fleeing or Chasing.',
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, `${focus.dev.area.f} ${focus.dev.type.wma}`, focus.design.xi, focus.game.desDev], 
            tech: [tech.html.id, tech.css.id, tech.google.analytic.id, tech.p5.id, tech.js.id]
        },
        paragraph2: 'Some projects are interactive to a click of the mouse or movement of the mouse others just move on their own.',
        projectLink: "projects/p5*js/p5.html",
        codeLink: "https://github.com/LWRGitHub/LWRGitHub.github.io/blob/master/my-app/public/projects/p5*js"
    },
    {
        img: {
            src: "images/experience/react-router.png", 
            alt: "Image of react router side, background green with a different box that is white with the light gray bar on top that has home about teachers and tech courses as links to click on to move to the site.Upper left corner has a dark box with two opening and closing brackets below the light color gray bar, You find a header that says front in course directory below that it says the fun directory is a project using react router emphasized. Hello settings is whole bunch of lorem ipsum text. Hello that is an area called featured teachers or you can type in the name of the teacher and the topic and press the button go and it'll bring you to another page. Basically this is a screenshot of the website."
        },
        title: 'Course Directory Site',
        paragraph1: 'This is a website coded with React Router. React Router alows you to have all of your content on one page but it seems like multiple pages.',
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, `${focus.dev.area.f} ${focus.dev.type.wm}`, focus.design.xi, focus.data], 
            tech: [tech.html.id, tech.css.id, tech.google.analytic.id, tech.react.id, tech.js.id, tech.reactRouter.id, tech.reactBootstrap.id, tech.dom.id]
        },
        paragraph2: 'This site is an example of my React Router work. The site is about different technologies to learn!',
        projectLink: "http://LWRGitHub.github.io/Course-Directory-Site",
        codeLink: "https://github.com/LWRGitHub/Course-Directory-Site"
    },
    {
        img: {
            src: "images/experience/veganRestaurant.jpg", 
            alt: "Screen shot of vegan restaurant website. image's of vegan food and a google map of the location."
        },
        title: 'Vegan Restaurant',
        paragraph1: 'This project is programmed on one page displaying my skills with Google maps & the ability to do web & mobile development. I hope you enjoy the vegan website.',
        skills: {
            platform: [platform.des, platform.mob], 
            focus: [focus.sofEngr, `${focus.dev.area.f} ${focus.dev.type.wm}`, focus.design.xi], 
            tech: [tech.html.id, tech.css.id, tech.js.id, tech.jquery.id, tech.google.analytic.id, tech.google.map.id, tech.google.font.id]
        },
        paragraph2: 'Vegan restaurant website demo.',
        projectLink: "/projects/vegan-restaurant.html",
        codeLink: "https://github.com/LWRGitHub/LWRGitHub.github.io/blob/master/my-app/public/projects/vegan-restaurant.html"
    },
    {
    img: {
        src: 'images/experience/student-enrollment-program.png', 
        alt: 'This is a screen shot of a student enrollment app that is on the web. buttons are students courses & add a student. below buttons are a list of students in boxes.'
    },
    title: 'Student Enrollment',
    paragraph1: 'This web application is an example student enrollment platform. It alows the teacher to edit, add or remove students at any time.',
    skills: {
        platform: [platform.des, platform.mob], 
        focus: [focus.sofEngr, `${focus.dev.area.f} ${focus.dev.type.wa}`, focus.design.xi, focus.data], 
        tech: [
            tech.html.id, 
            tech.css.id, 
            tech.js.id, 
            // tech.img.png.id, 
            tech.google.analytic.id, 
            tech.google.font.id, 
            tech.bootstrap.id, 
            tech.api.api.id, 
        ]
    },
    paragraph2: 'Click on "Students" to edite & add them to a course, use "Courses" to add student to course, & add a new student with "New Student',
    projectLink: '/projects/student/index.html',
    codeLink: 'https://github.com/LWRGitHub/LWRGitHub.github.io/blob/master/my-app/public/projects/studnet'
}
];

// {
//     img: {
//         src: '', 
//         alt: ''
//     },
//     title: '',
//     paragraph1: '',
//     skills: {
//         platform: [], 
//         focus: [], 
//         tech: []
//     },
//     paragraph2: '',
//     projectLink: '',
//     codeLink: ''
// }
