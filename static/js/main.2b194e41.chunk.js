(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var i=t(0),l=t.n(i),o=t(13),n=t.n(o),s=(t(21),t(22),t(14)),r=t(1),c=function(e){return l.a.createElement("div",{className:"m-0 p-0"},l.a.createElement("header",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h1",null,l.a.createElement("a",{href:"/#/home",id:"LWR"},"Logan Reynolds")),l.a.createElement("nav",{id:"hrefpNav",className:"text-right"},l.a.createElement("a",{href:"/#/about"},"About"),l.a.createElement("a",{href:"/#/education"},"Education"),l.a.createElement("a",{href:"/#/experience"},"Experience"),l.a.createElement("a",{href:"/#/contact"},"Contact")))),l.a.createElement("section",{className:"jumbotron"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,e.page)),l.a.createElement("div",{className:"row"},function(e){if(e)return l.a.createElement("h4",null,e)}(e.focus)))))},d=function(){return l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("img",{className:"rounded",src:"images/about/me.jpeg",alt:"Cartoon Sketch drawing image of computer programmer Software Engineer LWR."}),l.a.createElement("p",null,"Logan is a Full Stack Software Engineer with, expert knowledge of BEW, FEW, proficient in UX/UI Design and novice knowledge of DS and MOB. He always goes above and beyond to ensure the job gets done right the first time. His work stands out because he pays close attention to all details of the job. "),l.a.createElement("p",null,"Logan is a compelling Full Stack Web/App Developer. He is effective at combining creativity and problem solving to develop user-friendly tested/benchmarked applications, in various cloud environments with novel methods of design. He's known among staff for strong wit, attention to detail and multi-tasking no matter the complexity of the project. He has an ability to work independently, in a team environment or as a Project Manager."),l.a.createElement("p",null,"Logan's been doing computer science work for a while now, as it provides him with a skill set to design applications with a variety of technologies. During his free time you can find him watching movies, coding his own projects, and learning new skills!"),l.a.createElement("a",{className:"p-0",href:"files/logan-reynolds-resume.pdf"},l.a.createElement("span",null,"Resume:  "),l.a.createElement("img",{src:"images/about/file.png",id:"resume-btn",alt:"Blue computer folder file With see-through background."})))))},g=function(){return l.a.createElement("div",null,l.a.createElement(c,{page:"About Me"}),l.a.createElement(d,null))},p=function(){return l.a.createElement("div",{className:"m- p-0"},l.a.createElement(c,{page:"Software Engineer",focus:"JavaScript, Python, Swift UI, Java, Go (Golang)"}),l.a.createElement("section",{className:"container"}))},m=function(e,a,t,i){e.join(" - ");a.map((function(e){" ".concat(e,",")}));var o="";return i&&(o=l.a.createElement("li",null,l.a.createElement("a",{className:"p-0 font-weight-bold",href:i.href},i.aText))),t?"object"===typeof t?l.a.createElement("span",null,o,function(e){return e.map((function(e){return l.a.createElement("span",null,l.a.createElement("span",{className:"font-weight-bold"},e.title),e.content)}))}(t)):l.a.createElement("p",{className:"pt-2"}):l.a.createElement("span",null)},h=function(e){return l.a.createElement("span",null,(a=e.school,t=e.location,(i=e.href)?l.a.createElement("span",null,l.a.createElement("span",{className:"font-weight-bold"},l.a.createElement("a",{className:"p-0",href:i},a)),t):l.a.createElement("span",null,l.a.createElement("span",{className:"font-weight-bold card-title"},a),t)),m(e.focus,e.skills,e.moreInfo,e.credentials));var a,t,i},u=function(e){return e.data.map((function(e){return l.a.createElement(h,{school:e.school,location:e.location,credentials:e.credentials,href:e.href,focus:e.focus,skills:e.skills,moreInfo:e.moreInfo,moreInfoLen:e.moreInfoLen,key:"School_".concat(e.school)})}))},f=function(e){return l.a.createElement("div",{className:"col-sm-6 p-3"},l.a.createElement("div",{className:"card pb-4"},l.a.createElement("img",{src:e.src,alt:e.alt}),l.a.createElement("p",{className:"font-weight-bold card-title px-3 "},e.title),l.a.createElement("div",{className:"pl-4"},l.a.createElement(u,{data:e.schools}))))},v=function(e){return e.data.map((function(e){return l.a.createElement(f,{title:e.title,src:e.img.src,alt:e.img.alt,schools:e.schools,key:"EdSection_".concat(e.title)})}))},y="Expert",b="Proficient",w="Novice",T={js:{id:"JavaScript",level:b},py:{id:"Python",level:b},swift:{id:"Swift",level:w},go:{id:"Go (Golang)",level:w},java:{id:"Java",level:w}},E="Desktop",k="Mobile",S="Cloud",j="Software Engr",C={area:{fs:"(Full-Stack)",f:"(Front-End)",b:"(Back-End)"},type:{wma:"Web/Mobile/App Dev",wm:"Web/Mobile Dev",wa:"Web/App Dev",ma:"Mobile/App Dev",w:"Web Dev",m:"Mobile Dev",a:"App Dev"}},L={xi:"UX/UI Design",x:"UX Design",i:"UI Design",gd:"Graphic Design"},N="Data Sci",x="Ethics",D="Quant Math",H="Affective Communications",P="Women's History",A={swift:{id:"Swift",langType:!1,level:w},java:{id:"Java",langType:!1,level:w},go:{id:"Go (Golang)",langType:!1,level:w},goScrape:{id:"Go Web Scraping",langType:T.go.id,level:w},goTempGen:{id:"Go Template Generation",langType:T.go.id,level:w},goTest:{id:"Go Testing",langType:T.go.id,level:w},goBenchmark:{id:"Go Benchmarking",langType:T.go.id,level:w},swiftUI:{id:"Swift UI",langType:T.swift.id,level:w},xCode:{id:"xCode",langType:T.swift.id,level:b},ai:{id:"AI/Machine Learning",langType:T.py.id,level:w},numPy:{id:"NumPy",langType:T.py.id,level:w},matlab:{id:"Matlab",langType:T.py.id,level:w},pandas:{id:"Pandas",langType:T.py.id,level:w},handlebars:{id:"Handlebars",langType:!1,level:w},flask:{id:"Flask",langType:T.py.id,level:b},flaskWTF:{id:"Flask-WTF",langType:T.py.id,level:b},jinja2:{id:"Jinja2",langType:T.py.id,level:b},express:{id:"Express.js",langType:T.js.id,level:b},heroku:{id:"Heroku",langType:!1,level:b},node:{id:"Node.js",langType:T.js.id,level:b},jade:{id:"Jade",langType:!1,level:w},pug:{id:"Pug",langType:!1,level:w},bootstrap:{id:"Bootstrap",langType:!1,level:y},boostrIcon:{id:"Bootstrap Icons",langType:T.js.id,level:b},react:{id:"React.js",langType:T.js.id,level:b},reactBootstrap:{id:"React Bootstrap",langType:T.js.id,level:b},reactRouter:{id:"React Router",langType:T.js.id,level:b},dom:{id:"DOM",langType:T.js.id,level:b},mongo:{id:"MongoDB",langType:!1,level:b},mongoose:{id:"Mongoose",langType:!1,level:b},js:{id:"JS",langType:!1,level:b},py:{id:"Python",langType:!1,level:b},pyTest:{id:"Pytest",langType:T.py.id,level:w},dotenv:{id:"Dotenv",langType:!1,level:b},unittest:{id:"Unit Test",langType:T.py.id,level:w},html:{id:"HTML",langType:!1,level:y},css:{id:"CSS",langType:!1,level:b},bitBucket:{id:"Bitbucket",langType:!1,level:w},git:{id:"Git",langType:!1,level:b},gitHub:{id:"GitHub",langType:!1,level:b},gitHubPg:{id:"GitHub Pages",langType:!1,level:b},bs4:{id:"BeautifulSoup 4",langType:T.py.id,level:b},selenium:{id:"Selenium",langType:T.py.id,level:b},request:{id:"Requests",langType:T.py.id,level:b},CI_CD:{id:"CI/CD",langType:!1,level:b},adobe:{photo:{id:"Photoshop",langType:!1,level:b},dream:{id:"Dreamweaver",langType:!1,level:w},muse:{id:"Adobe Muse",langType:!1,level:w},suite:{id:"Adobe Creative Cloud Suite",langType:!1,level:w}},sketchApp:{id:"Sketch",langType:!1,level:w},cloudPlat:{id:"Cloud Platforms",langType:!1,level:w},trello:{id:"Trello",langType:!1,level:y},localStor:{id:"Local-Storage",langType:!1,level:b},npm:{id:"npm",langType:!1,level:b},yarn:{id:"yarn",langType:!1,level:b},chromeDev:{id:"Chrome DevTools",langType:!1,level:b},google:{font:{id:"Google Fonts",langType:!1,level:b},analytic:{id:"Google Analytics",langType:!1,level:b},adsense:{id:"Google AdSense",langType:!1,level:b},map:{id:"Google Maps",langType:!1,level:b},cloud:{id:"Google Cloud",langType:!1,level:w}},wordPr:{id:"WordPress",langType:!1,level:w},jquery:{id:"jQuery",langType:T.js.id,level:b},webVtt:{id:"WebVTT",langType:!1,level:w},mediaEl:{id:"MediaElement.js",langType:T.js.id,level:w},json:{id:"JSON",langType:!1,level:b},jsx:{id:"JSX",langType:!1,level:b},p5:{id:"P5.js",langType:T.js.id,level:w},shell:{id:"Shell Code",langType:!1,level:b},unixShell:{id:"Unix Shell",langType:!1,level:b},powerSh:{id:"Power Shell",langType:!1,level:w},aspNet:{id:"ASP.NET",langType:!1,level:w},terminal:{id:"Terminal",langType:!1,level:b},wix:{id:"Wix",langType:!1,level:b},goDaddy:{id:"Go Daddy",langType:!1,level:b},wireFrames:{id:"Wire Frames",langType:!1,level:b},figma:{id:"Figma",langType:!1,level:b},asyncAwait:{id:"Async/Await",langType:!1,level:b},wShark:{id:"Wire Shark",langType:!1,level:w},unixCLI:{id:"Unix CLI",langType:!1,level:b},aws:{id:"AWS",langType:!1,level:w},cloud9:{id:"Cloud9",langType:!1,level:w},netlify:{id:"Netlify",langType:!1,level:w},testDev:{id:"Test-Driven Development",langType:!1,level:w},dataAnaly:{id:"Data Analytics",langType:!1,level:w},devOps:{id:"DevOps",langType:!1,level:w},webAccess:{id:"Web Accessibility",langType:!1,level:b},webOptimiz:{id:"Web Optimization",langType:!1,level:b},preformOptimiz:{id:"Performance Optimization",langType:!1,level:b},flexbox:{id:"Flexbox",langType:!1,level:w},responsive:{id:"Responsive Design/Layout",langType:!1,level:b},sql:{sql:{id:"SQL",langType:!1,level:w}},ajax:{id:"AJAX",langType:T.js.id,level:b},vSCode:{id:"VS Code",langType:!1,level:y},adam:{id:"Adam",langType:!1,level:b},brackets:{id:"Brackets",langType:!1,level:b},vS:{id:"Visual Studio",langType:!1,level:b},iHWare:{id:"Install Hardware",langType:!1,level:b},cfgHWare:{id:"Configure Hard Ware",langType:!1,level:b},rMComp:{id:"Repair & Maintain Computer System in a Typical Office Environment",langType:!1,level:b},ftp:{id:"File Transfer Protocol (FTP)",langType:!1,level:b},fZilla:{id:"File Zilla",langType:!1,level:b},gitHubCP:{id:"GitHub Copilot",langType:!1,level:b},docker:{id:"Docker",langType:!1,level:w},windows:{id:"Windows",langType:!1,level:b},mac:{id:"Mac",langType:!1,level:y},Linux:{id:"Linux",langType:!1,level:w},ios:{id:"iOS",langType:T.swift.id,level:w},api:{api:{id:"API",langType:!1,level:b},fetch:{id:"FETCH API",langType:!1,level:b},rest:{id:"REST API",langType:!1,level:b}},garageband:{id:"Garageband",level:b},imove:{id:"iMove",level:b},markdown:{id:"Markdown",level:b}},I=[{title:"City College of San Francisco  |  Dual Major CS & CNIT Undergrad",img:{src:"images/education/ccsf-mission.jpeg",alt:"City College of San Francisco also known as CCSF. Located in San Francisco California. image of ccsf mission collage campus."},schools:[{school:"www.CCSF.edu",location:": SF, CA - In Progress",href:"https://www.ccsf.edu",focus:["".concat(C.area.f," ").concat(C.type.w),j],skills:[A.js.id,A.html.id,A.css.id,A.jquery.id,A.ajax.id,"Calculus I","Calculus II","Discrete Mathematics"],moreInfo:"Dual Major, Associates in Computer Science & Associates in Computer Networking and Information Technology"}]},{title:"Dominican University Of California  |  CS Undergrad",img:{src:"images/education/dominican-university-of-california-building.jpg",alt:"Dominican University Of California logo overlaying front of the Dominican University Of California building."},schools:[{school:"www.Dominican.edu",location:": CA",href:"https://www.dominican.edu",focus:["".concat(C.area.b," ").concat(j,". with additional classes in ").concat(N,", ").concat(C.type.m," & ").concat(L.xi)],skills:[A.py.id,A.js.id,A.swift.id,A.go.id,A.node.id,A.react.id,A.swiftUI.id,A.ios.id,A.xCode.id,A.p5.id,A.flask.id,A.jinja2.id,A.numPy.id,A.pandas.id,A.html.id,A.css.id,A.bootstrap.id,A.wireFrames.id,A.flexbox.id,A.git.id,A.gitHub.id,A.terminal.id,A.api.api.id,A.api.rest.id,A.api.fetch.id,A.npm.id,A.responsive.id,A.google.font.id,A.asyncAwait.id,A.handlebars.id,A.node.id,A.shell.id,A.pug.id,A.swiftUI.id,A.jquery.id,A.mongo.id,A.sql.id,A.pyTest.id,A.devOps.id,A.mac.id,A.heroku.id,A.testDev.id,A.dataAnaly.id,A.aws.id,A.docker.id,A.trello.id,A.chromeDev.id,A.figma.id,A.markdown.id,x,H,D,P],moreInfo:"Undergrad in Applied Computer Science"}]},{title:"University Of The People  |  CS Undergrad",img:{src:"images/education/uo-people.png",alt:"University Of The People also known as UoPeople is located online. the image is of the UoPeople Logo."},schools:[{school:"www.UOPeople.edu",location:": Online",href:"https://www.uopeople.edu",focus:[j],skills:[A.py.id],moreInfo:"Undergrad in Applied Computer Science"}]},{title:"DVC  |  Graphic Design Undergrad",img:{src:"images/education/dvc-logo.jpg",alt:"Diablo Valley College also known as DVC. Located in Pleasant Hill California. image of collage campus with the a DVC logo overly."},schools:[{school:"www.DVC.edu",location:": Pleasant Hill, CA",href:"https://www.dvc.edu/",focus:[L.gd],skills:[A.adobe.photo.id,"Business"],moreInfo:"Undergrad in Graphic Design"}]},{title:"Code Tenderloin  |  Front End Web Development",img:{src:"images/education/codeTLRampCertificate.png",alt:"Code Tenderloin Code Ramp Certificate"},schools:[{school:"www.CodeTenderloin.org",location:": SF, CA",href:"https://www.codetenderloin.org",focus:[j],skills:[A.js.id,A.html.id,A.css.id]}]},{title:"Code Tenderloin  |  Intermediate JavaScript",img:{src:"images/education/codeTLRampPlusPlusCertificate.png",alt:"Code Tenderloin Code Ramp++ Certificate"},schools:[{school:"www.CodeTenderloin.org",location:": SF, CA",href:"https://www.codetenderloin.org",focus:[j],skills:[A.js.id,A.html.id,A.css.id]}]},{title:"Code The Dream |  Software Development",img:{src:"images/education/codeTheDreamCertificate.png",alt:"Code The Dream Certificate"},schools:[{school:"www.CodeTheDream.org",location:": Durham, NC",href:"https://codethedream.org",focus:["".concat(C.area.f," ").concat(j)],skills:[A.js.id,A.html.id,A.css.id,A.dom.id,A.react.id,A.reactRouter.id,A.reactBootstrap.id,A.bootstrap.id,A.aws.id,A.sql.id,A.jquery.id,A.terminal.id,A.gitHub.id,A.git.id,A.wireFrames.id,A.chromeDev.id,A.flexbox.id,A.responsive.id,A.mediaEl.id,A.webOptimiz.id,A.preformOptimiz.id,A.webAccess.id,A.ajax.id,A.asyncAwait.id,A.api.fetch.id]}]},{title:"Meda Mission Techies |  Full Stack Development",img:{src:"images/education/medaMissionTechiesCertificate.png",alt:"Meda Mission Techies Certificate"},schools:[{school:"www.MedaSF.org",location:": SF, CA",href:"https://medasf.org",focus:["".concat(C.area.fs," ").concat(j)],skills:[A.js.id,A.html.id,A.css.id,A.node.id,A.react.id,A.dom.id,A.mongo.id,A.mongoose.id,A.jquery.id,A.terminal.id,A.git.id,A.gitHub.id,A.wireFrames.id,A.flexbox.id]}]},{title:"Vanguard | High School Diploma",img:{src:"images/education/highSchoolDeploma.png",alt:"This is Logan's High School Deploma form The Vangard School located in Lake Wales Florida."},schools:[{school:"www.VanguardSchool.org",location:": Lake Wales, FL",href:"https://www.vanguardschool.org",focus:[],skills:[]}]},{title:"Online/In-Person Courses |  Software Engineering Studies",img:{src:"images/education/courses.png",alt:"This photo includes a collage of Khan Academy logo, Codecademy logo, Team Treehouse logo, Udacity logo, Noise bridge logo, GitHub learning lab log, and Lynda.com that is now known as LinkedIn learning logo"},schools:[]}],G=function(){return l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(v,{data:I})))},W=function(){return l.a.createElement("div",null,l.a.createElement(c,{page:"Education"}),l.a.createElement(G,null))},R=function(e){if("string"==typeof e)return l.a.createElement("a",{type:"a",className:"btn btn-outline-secondary p-1 mb-1",href:e},"Tutorial")},F=function(e){var a,t,i,o,n=e.platform.map((function(a){return l.a.createElement("span",{className:"badge badge-pill badge-dark",key:"".concat(e.title,"_").concat(a)},a)})),s=e.focus.map((function(a){return l.a.createElement("span",{className:"badge badge-pill badge-secondary",key:"".concat(e.title,"_").concat(a)},a)})),r=e.tech.map((function(a){return l.a.createElement("span",{className:"badge badge-pill badge-light",key:"".concat(e.title,"_").concat(a)},a)}));return l.a.createElement("div",{className:"card"},l.a.createElement("a",{className:"p-0",href:e.projectLink},l.a.createElement("img",{className:"card-img-top",src:e.src,alt:e.alt})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-text"},e.paragraph1),l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-header"},n,s,r),(a=e.tutorial,t=e.codeLink,i=e.paragraph2,o=e.projectLink,"string"==typeof t?l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Details:"),l.a.createElement("p",{className:"card-text"},i),l.a.createElement("a",{type:"a",className:"btn btn-outline-secondary p-1 mb-1",href:o},"Project"),l.a.createElement("a",{type:"a",className:"btn btn-outline-secondary p-1 mb-1",href:t},"GitHub"),R(a)):l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Details:"),l.a.createElement("p",{className:"card-text"},i),l.a.createElement("a",{type:"a",className:"btn btn-outline-secondary p-1 mb-1",href:o},"Project"),l.a.createElement("a",{type:"a",className:"btn btn-outline-secondary p-1 mb-1 disabled"},"GitHub"),l.a.createElement("br",null),l.a.createElement("span",{className:"badge badge-danger"},"Private Code"),R(a))))))},M=function(e){var a=e.data.map((function(e){return l.a.createElement(F,{src:e.img.src,alt:e.img.alt,title:e.title,paragraph1:e.paragraph1,platform:e.skills.platform,focus:e.skills.focus,tech:e.skills.tech,paragraph2:e.paragraph2,projectLink:e.projectLink,codeLink:e.codeLink,tutorial:e.tutorial,key:"Project_Card_".concat(e.title)})}));return l.a.createElement("div",{className:"card-columns"},a)},U=function(e){e.associatedLang.map((function(a){return l.a.createElement("li",{key:"".concat(e.id,"_").concat(a.id,"_").concat(a.level)},a.id,"  ",l.a.createElement("span",{id:"skill-bg",className:"badge badge-pill badge-light"},a.level))}));return l.a.createElement("div",{className:"col-sm-6 col-md-3"},l.a.createElement("h5",null,e.id,"  ",l.a.createElement("span",{id:"main-lang-bg",className:"badge badge-pill badge-light"},e.level)),l.a.createElement("img",{src:e.src,alt:e.alt}))},B=function(e){var a=e.data.map((function(e){return l.a.createElement(U,{id:e.id,level:e.level,associatedLang:e.associatedLang,src:e.src,alt:e.alt,key:"Language_".concat(e.id)})}));return l.a.createElement("section",{className:"container my-5"},l.a.createElement("div",{className:"row"},a))},O=function(e){return l.a.createElement("section",{className:"container"},l.a.createElement("h2",{className:"my-5"},"Extended Knowledge"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 col-md"},l.a.createElement("h3",{id:"ext-knowledge-bg",className:"badge badge-pill badge-light"},"Expert"),l.a.createElement("p",null,e.experience.expert)),l.a.createElement("div",{className:"col-sm-6 col-md"},l.a.createElement("h3",{id:"ext-knowledge-bg",className:"badge badge-pill badge-light"},"Proficient"),l.a.createElement("p",null,e.experience.proficient)),l.a.createElement("div",{className:"col-sm-6 col-md"},l.a.createElement("h3",{id:"ext-knowledge-bg",className:"badge badge-pill badge-light"},"Novice"),l.a.createElement("p",null,e.experience.novice))))},V=[{img:{src:"images/experience/wipro.png",alt:"Screen Shot of the Wipro.com home page."},title:"Wipro: App-Cloud Services-Developer",paragraph1:"Received application development training in Java & AWS, in-order to be able to use a variety of different technologies to develop and maintain code base.",skills:{platform:[S],focus:[j,"".concat(C.area.fs," ").concat(C.type.wma)],tech:[A.CI_CD.id,A.aws.id]},paragraph2:"Application development with cloud environments such as AWS (Amazon Web Services). Using Full Stack software engineering with a variety of different technologies to develop & maintain code base.",projectLink:"https://www.wipro.com/",codeLink:!1},{img:{src:"images/experience/dance4healing.jpeg",alt:"screen shot of www.dance4healing.com this is an image of the dance for healing website mobile site or small version has many people in the image dancing woman has dance for healing logo. a slide show would move if you on the site but this is a still image."},title:"Dance4Healing.com",paragraph1:"Continuous integration and continuous deployment of the website. Including aspects such as web design, web publishing, web programming, & database management. Creating a computer program or a set of programs to perform the different tasks that the business requires. Building economical software which is reliable & works efficiently on the real machines. Worked closely with business stakeholders to understand their goals & determine how data can be used to achieve those goals.",skills:{platform:[E,k],focus:[j,"".concat(C.area.fs," ").concat(C.type.wma),L.xi,N],tech:[A.express.id,A.heroku.id,A.node.id,A.mongo.id,A.mongoose.id,A.js.id,A.html.id,A.css.id,A.bitBucket.id,A.git.id,A.gitHub.id,A.CI_CD.id,A.adobe.photo.id,A.trello.id,A.google.analytic.id,A.google.font.id,A.npm.id,A.yarn.id]},paragraph2:"Once on the site, sign up to begin learning different dance moves.",projectLink:"https://dance4healing.com",codeLink:!1},{img:{src:"images/experience/stageIV.jpg",alt:"This is a screenshot of the homepage for stage four .org. Stage IV.org is tan e-commerce website."},title:"StageIV.org",paragraph1:"As part of the dance4healing.com internship, it was requested that Logan set up Google Analytics for StageIV.org. There were some bugs in the code from other people's attempts so Logan had to use his software engineering skills to fix the code & make it all work together correctly.",skills:{platform:[E,k],focus:[j],tech:[A.js.id,A.css.id,A.html.id,A.google.analytic.id]},paragraph2:"This is an e-commerce platform where you can buy products from artists, view blogs & see art galleries.",projectLink:"https://stageiv.org",codeLink:!1}],J=[{img:{src:"images/experience/kdp-books-site.png",alt:"this is a screen shot of the home page for The Midnight Dream Publishing website."},title:"Amazon KDP E-commerce & Website",paragraph1:"Logan created this React.js website for an Amazon KDP project. He managed/orchestrated the publication of 10+ ebooks on Amazon including paper & audible publication of books. Gave ideas & directed ghostwriters in realizing those ideas as published works. Plus he designed eight book covers. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability & function. Making interfaces in software or computerized devices with a focus on looks or style.",skills:{platform:[E],focus:[j,"".concat(C.area.fs," ").concat(C.type.wma),L.xi],tech:[A.js.id,A.html.id,A.css.id,A.react.id,A.reactBootstrap.id,A.bootstrap.id,A.git.id,A.gitHub.id,A.gitHubPg.id]},paragraph2:"Feel free to poke around the site!",projectLink:"https://lwrgithub.github.io/book-site/#/",codeLink:"https://github.com/LWRGitHub/book-site"},{img:{src:"images/experience/womens-basketball.png",alt:"this is a screen shot of the home page for women's basketball through the years. Image of a big photo black-and-white of women playing basketball with the chalkboard in the back."},title:"Women's Basketball Through The Years",paragraph1:"As part of a woman's history class I took in college we were encouraged to create a website related to a pivotal moment in history for women. This site about women's basketball. It provides information about specific events throughout the years. The site has been made with React.js & hosted through GitHub Pages.",skills:{platform:[E],focus:[j,"".concat(C.area.fs," ").concat(C.type.wma),L.xi],tech:[A.js.id,A.html.id,A.css.id,A.react.id,A.reactBootstrap.id,A.bootstrap.id,A.git.id,A.gitHub.id,A.gitHubPg.id]},paragraph2:"Use a desktop, laptop or phone to take a look around the site!",projectLink:"https://lwrgithub.github.io/womens-basketball-website/#/",codeLink:"https://github.com/LWRGitHub/womens-basketball-website"},{img:{src:"images/experience/scraping-craigslist.png",alt:"Image of the app having found something & starting to text a number."},title:"Scraping Craigslist & TrashNothing.com!",paragraph1:"Free Apple products & more through scraping Craigslist & the website Trash Nothing! These python files use bs4 & selenium to scrape the web & send you a text message when you find that awesome thing your looking for! The file are setup to search for free apple products, computers, laptops, video games, ect.",skills:{platform:[E],focus:[j,C.type.a],tech:[A.py.id,A.git.id,A.gitHub.id,A.bs4.id,A.selenium.id,A.request.id,A.dotenv.id,A.unixCLI.id]},paragraph2:"You will have to follow the detailed instructions in the README.md file on GetHub.",projectLink:"https://github.com/LWRGitHub/cs_scraper",codeLink:"https://github.com/LWRGitHub/cs_scraper"},{img:{src:"images/experience/lovers-art.png",alt:"This is a screen shot of lovers art websites home page."},title:"Art Site Template",paragraph1:"Built with Flask, Jinga2 & hosted through Heroku this site is a grate template for organizing art for sale & as a plus it has the capability to sell art supplies as well.",skills:{platform:[E,k],focus:[j,"".concat(C.area.fs," ").concat(C.type.wma),L.xi],tech:[A.html.id,A.css.id,A.js.id,A.py.id,A.flask.id,A.jinja2.id,A.jquery.id,A.bootstrap.id,A.boostrIcon.id,A.heroku.id,A.wireFrames.id,A.figma.id,A.heroku.id,A.git.id,A.gitHub.id]},paragraph2:"Browse the website get to know the template possibilities!",projectLink:"https://lover-artist-site.herokuapp.com",codeLink:"https://github.com/LWRGitHub/lover-artist-site"},{img:{src:"images/experience/duro-ios.png",alt:"Image of the app's wallet page."},title:"Duro iOS App!",paragraph1:"An inflation resistant currency backed by inflation resistant assets such as the CPI index.",skills:{platform:[k],focus:[j,"".concat(C.area.f," ").concat(C.type.ma),L.xi],tech:[A.swift.id,A.swiftUI.id,A.xCode.id,A.api.api.id,A.git.id,A.gitHub.id]},paragraph2:"The project is available to clone on GetHub.",projectLink:"https://github.com/LWRGitHub/duro-ios",codeLink:"https://github.com/LWRGitHub/duro-ios"},{img:{src:"images/experience/astrology-api.png",alt:"Screenshot of the astrology home page. It has images & names of all the zodiac signs."},title:"Daily Horoscopes",paragraph1:"This Node.js web app is a grate web page to get your daily horoscope from. It uses the horoscope API from astrology.com. The project has been deployed using Heroku.",skills:{platform:[E,k],focus:[j,"".concat(C.area.fs," ").concat(C.type.wma),L.xi],tech:[A.js.id,A.node.id,A.pug.id,A.express.id,A.bootstrap.id,A.html.id,A.css.id,A.heroku.id,A.git.id,A.gitHub.id]},paragraph2:"Simply click on your zodiac sign to view your horoscope for the day.",projectLink:"https://astrology-horoscope.herokuapp.com",codeLink:"https://github.com/LWRGitHub/astrology-api"},{img:{src:"images/experience/veganQuery.png",alt:"Screenshot of the home page. The image has photos of the Different vegan dishes with their names such as tomato soup & slaw with coriander."},title:"Vegan Recipe Search Engine",paragraph1:"This project uses Go (Golang) to scrape the web for vegan recipes & it delivers them with React.js on the front end. I hope you like it!",skills:{platform:[E,k],focus:[j,"".concat(C.area.fs," ").concat(C.type.wma),L.xi],tech:[A.js.id,A.go.id,A.react.id,A.bootstrap.id,A.reactBootstrap.id,A.goBenchmark.id,A.goScrape.id,A.goTest.id,A.html.id,A.css.id,A.git.id,A.gitHub.id,A.gitHubPg.id]},paragraph2:"Simply search for something like tomato soup.",projectLink:"https://github.com/VeganQuery/VeganQuery.github.io",codeLink:"https://github.com/VeganQuery/VeganQuery.github.io"}],q=[{img:{src:"images/experience/mobile-home-page-portfolio-site.png",alt:"Screenshot on the mobile phone of Logan Reynolds' software engineering portfolio website. This is the homepage otherwise known as the index page. Shows a list of programming languages such as JavaScript ESS6 Ruby python & C#. Shows navigation bar in blue. Has a big jumbotron image in the background"},title:"Portfolio Site",paragraph1:"Logan has turned this Basic HTML/CSS tutorial into to something so much more by turning the entire website into a React.js app & adding some custom UI/UX Design. This site has detailed information about Logan along with personal and professional projects he's worked on.",skills:{platform:[E,k],focus:[j,"".concat(C.area.fs," ").concat(C.type.wma),L.xi,N],tech:[A.react.id,A.reactBootstrap.id,A.reactRouter.id,A.js.id,A.html.id,A.css.id,A.bootstrap.id,A.google.analytic.id,A.dom.id,A.google.map.id,A.CI_CD.id,A.git.id,A.gitHub.id,A.gitHubPg.id,A.adobe.photo.id]},paragraph2:"You are currently viewing this project. It is estimated that Logan has created over 85% of the code on this project as the tutorial was originally simply HTML/CSS & bootsrtap.",projectLink:"index.html",codeLink:"https://github.com/LWRGitHub/LWRGitHub.github.io",tutorial:"https://www.codecademy.com/learn/make-a-website"},{img:{src:"images/experience/dish-site.jpg",alt:"dish submitter website, add food & cooking instructions to the local storage on your internet browser. blue & green faded background on baner the rest of the background is very light green."},title:"Dish Yumy",paragraph1:"Logan has turned this RSVP tutorial into a Dish submitter website. Origanally just a place to RSVP for an event you can now submit dishes & have them stored locally.",skills:{platform:[E,k],focus:[j,C.type.wma,L.xi],tech:[A.js.id,A.css.id,A.html.id,A.dom.id,A.google.font.id,A.google.analytic.id,A.git.id,A.gitHub.id,A.gitHubPg.id]},paragraph2:"Type in the name of your dish along with the ingredients & submit it. You can then edit or remove the dish if you like.",projectLink:"https://lwrgithub.github.io/Dish-submitter/",codeLink:"https://github.com/LWRGitHub/Dish-submitter",tutorial:"https://teamtreehouse.com/library/dom-scripting-by-example"}],_="",z="",Q="",X=[],Y=[],K=[],Z=[],$=[],ee=[],ae=[];for(var te in A)for(var ie in A[te])if("id"==ie)"Expert"==A[te].level?_+=", ".concat(A[te].id):"Proficient"==A[te].level?z+=", ".concat(A[te].id):"Novice"==A[te].level&&(Q+=", ".concat(A[te].id));else if("langType"==ie)"JavaScript"==A[te].langType?X.push({id:A[te].id,level:A[te].level}):"Python"==A[te].langType?K.push({id:A[te].id,level:A[te].level}):"Ruby"==A[te].langType?Z.push({id:A[te].id,level:A[te].level}):"C#"==A[te].langType?ae.push({id:A[te].id,level:A[te].level}):"Swift"==A[te].langType?$.push({id:A[te].id,level:A[te].level}):"Go (Golang)"==A[te].langType?ee.push({id:A[te].id,level:A[te].level}):"Java"==A[te].langType&&Y.push({id:A[te].id,level:A[te].level});else if("langType"!=ie&&"level"!=ie)for(var le in A[te][ie])"id"==le?"Expert"==A[te][ie].level?_+=", ".concat(A[te][ie].id):"Proficient"==A[te][ie].level?z+=", ".concat(A[te][ie].id):"Novice"==A[te][ie].level&&(Q+=", ".concat(A[te][ie].id)):"langType"==le&&("JavaScript"==A[te][ie].langType?X.push({id:A[te][ie].id,level:A[te][ie].level}):"Python"==A[te][ie].langType?K.push({id:A[te][ie].id,level:A[te][ie].level}):"Ruby"==A[te][ie].langType?Z.push({id:A[te][ie].id,level:A[te][ie].level}):"C#"==A[te][ie].langType?ae.push({id:A[te][ie].id,level:A[te][ie].level}):"Swift"==A[te][ie].langType?$.push({id:A[te][ie].id,level:A[te][ie].level}):"Go (Golang)"==A[te][ie].langType&&ee.push({id:A[te][ie].id,level:A[te][ie].level}));var oe={expert:_=_.substring(2),proficient:z=z.substring(2),novice:Q=Q.substring(2)},ne=[{level:T.js.level,id:T.js.id,associatedLang:X,src:"images/experience/js-logo.svg",alt:"programming language logo for JavaScript"},{level:T.py.level,id:T.py.id,associatedLang:K,src:"images/experience/python-logo.svg",alt:"programming language logo for Python"},{level:T.swift.level,id:T.swift.id,associatedLang:$,src:"images/experience/swift-logo.png",alt:"programming language logo for Swift"},{level:T.go.level,id:T.go.id,associatedLang:ee,src:"images/experience/go-logo.png",alt:"programming language logo for Golang"},{level:T.java.level,id:T.java.id,associatedLang:Y,src:"images/experience/java-logo.png",alt:"programming language logo for Java"}],se=function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"container"},l.a.createElement("h2",{className:"my-5"},"Professional Projects"),l.a.createElement(M,{data:V})),l.a.createElement("section",{className:"container"},l.a.createElement("h2",{className:"my-5"},"Personal Projects"),l.a.createElement(M,{data:J})),l.a.createElement("section",{className:"container"},l.a.createElement("h2",{className:"my-5"},"Tutorial Projects Taken To The Next Level"),l.a.createElement(M,{data:q})))},re=function(){return l.a.createElement("div",null,l.a.createElement(c,{page:"Experience"}),l.a.createElement(B,{data:ne}),l.a.createElement(O,{experience:oe}),l.a.createElement(se,null))},ce=function(){return l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("ul",null,l.a.createElement("li",null,"Email: ",l.a.createElement("a",{className:"p-0",href:"mailto:engineerlwr@gmail.com?subject=Seen%20Portfolio%20Site"},"EngineerLWR@gmail.com")),l.a.createElement("li",null,"Current Location: Greater San Francisco City Area"),l.a.createElement("li",null,"GitHub: ",l.a.createElement("a",{className:"p-0",href:"https://github.com/LWRGitHub"},"GitHub.com/LWRGitHub")," "),l.a.createElement("li",null,"LinkedIn: ",l.a.createElement("a",{className:"p-0",href:"https://www.linkedin.com/in/logan-reynolds/"},"Linkedin.com/in/Logan-Reynolds/")),l.a.createElement("li",null,"Resume: ",l.a.createElement("a",{className:"p-0",href:"files/logan-reynolds-resume.pdf"},"PDF"))))},de=function(){return l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("iframe",{className:"map-center ml-4 border-0",style:{width:"90%"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201879.9713778576!2d-122.57785017067407!3d37.75781489551214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1579829066660!5m2!1sen!2sus",frameborder:"0",allowfullscreen:""}))},ge=function(){return l.a.createElement("div",null,l.a.createElement(c,{page:"Contact Me"}),l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(ce,null),l.a.createElement(de,null))))},pe=function(){return l.a.createElement("footer",{className:"container"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("a",{href:"https://github.com/LWRGitHub"},"GitHub"),l.a.createElement("a",{href:"https://www.linkedin.com/in/logan-reynolds/"},"LinkedIn"),l.a.createElement("a",{href:"files/logan-reynolds-resume.pdf"},"Resume")),l.a.createElement("br",null),l.a.createElement("p",null,"Logan Reynolds \xa9 2021"))},me=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(r.c,null,l.a.createElement(r.a,{path:"/home",component:p}),l.a.createElement(r.a,{path:"/about",component:g}),l.a.createElement(r.a,{path:"/education",component:W}),l.a.createElement(r.a,{path:"/experience",component:re}),l.a.createElement(r.a,{path:"/contact",component:ge}),l.a.createElement(r.a,{component:p})),l.a.createElement(pe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.2b194e41.chunk.js.map