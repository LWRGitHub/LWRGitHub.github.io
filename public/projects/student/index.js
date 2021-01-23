const students = document.getElementById('students');
const cardColums = document.getElementById('cardColums');
const courses = document.getElementById('courses');
const newStudent = document.getElementById('new_student');
const info = document.getElementById('info');

const dataSudents = [];
const dataCourses = [];

fetch('https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json')
    .then(response => response.json())
    .then(dataS => {
        fetch('https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json')
            .then(response => response.json())
            .then(dataC => {
                // const loop = dataC.length > dataS.length ? dataC.length : dataS.length;
                for(let i = 0; i < dataS.length; i++){
                    const classes = dataS[i].status ? [dataC[i].name, dataC[i+2].name] : [];
                    dataSudents.push({ name: dataS[i].name, last_name: dataS[i].last_name, status: dataS[i].status, courses: classes})
                }
                for(let i = 0; i < dataC.length; i++){
                    const attending = [];
                    for(let i2 = 0; i2 < dataSudents.length; i2++){
                        if(dataSudents[i2].courses.length != 'undefined'){
                            for(let i3 = 0; i3 < dataSudents[i2].courses.length; i3++){
                                if(dataC[i].name === dataSudents[i2].courses[i3]){
                                    attending.push(dataSudents[i2].name)
                                }
                            }
                        }
                    }
                    dataCourses.push({name: dataC[i].name, duration: dataC[i].duration, students: attending})
                }
            })
    })



async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

let card;

const organizData = () => {
    info.innerHTML = ``;
    cardColums.innerHTML = card;
}
const displayInfo = () => {
    cardColums.innerHTML = ``;
    info.innerHTML = card;
}

const addStuInCourseSP = (sName, cName) => {
    for(let i = 0; i < dataCourses.length; i++){
        if(cName === dataCourses[i].name){
            dataCourses[i].students.push(sName)
        }
    }
    for(let i = 0; i < dataSudents.length; i++){
        if(sName === dataSudents[i].name){
            dataSudents[i].courses.push(cName)
        }
    }
    courseList(sName)
}

const addStuInCourseCP = (sName, cName) => {
    for(let i = 0; i < dataCourses.length; i++){
        if(cName === dataCourses[i].name){
            dataCourses[i].students.push(sName)
        }
    }
    for(let i = 0; i < dataSudents.length; i++){
        if(sName === dataSudents[i].name){
            dataSudents[i].courses.push(cName)
        }
    }
    studentToCourses(cName);
}

const courseList = (sName) => {
    card = ``;
    for(let i = 0; i < dataSudents.length; i++){
        if(sName === dataSudents[i].name){
            for(let i2 = 0; i2 < dataCourses.length; i2++){
                let isInCourse = false;
                console.log(dataCourses[i2].name)
                console.log(typeof dataSudents[i].courses)
                if(typeof dataSudents[i].courses.length != 'undefined'){
                    for(let i3 = 0; i3 < dataSudents[i].courses.length; i3++){
                        if(dataCourses[i2].name == dataSudents[i].courses[i3]){
                            isInCourse = true;
                        }
                    }
                    if(!isInCourse){
                        const cName = dataCourses[i2].name
                        card += `
                        <div class='card text-center'>
                            <div class="card-body">
                                <p class="card-text">${dataCourses[i2].name} <button class='btn btn-outline-info' onclick='addStuInCourseSP("${sName}", "${cName}")'>Add</button></p>
                            </div>
                        </div>
                        `;
                    }  
                }
                
            }
        }
    }
    organizData();
}

const changeStatus = (sName, sLName) => {
    for(let i = 0; i < dataSudents.length; i++){
        if(sName === dataSudents[i].name){
            dataSudents[i].status ? dataSudents[i].status = false : dataSudents[i].status = true;
        }
    }
    editStudent(sName, sLName);
}

const removeCouse = (sName, cName, sLName) => {
    console.log(1)
    for(let i = 0; i < dataSudents.length; i++){
        console.log(2)
        if(sName === dataSudents[i].name){
            console.log(dataSudents[i].name)
            console.log(dataSudents[i])
            for(let i2 = 0; i2 < dataSudents[i].courses.length; i2++){
                console.log(dataSudents[i].courses[i2])
                if(dataSudents[i].courses[i2] === cName){
                    console.log(dataSudents[i].courses)
                    dataSudents[i].courses.splice(i2, 1);
                    console.log(dataSudents[i].courses)
                }
            }
        }
    }
    editStudent(sName, sLName);
}

const editStudent = (sName, sLName) => {
    card = ``;
    let status;
    for(let i = 0; i < dataSudents.length; i++){
        if(sName === dataSudents[i].name){
            status = dataSudents[i].status;
            
            const top = `
            <div class="p-5 text-center">
                <strong>${sName} ${sLName}</strong> ${status ? `<button class="btn btn-success" onclick='changeStatus("${sName}","${sLName}")'>Curently Atending</button>` : `<button class="btn btn-outline-danger" onclick='changeStatus("${sName}","${sLName}")'>Not Atending</button>`}
            `;
            let body = ``;
            for(let i2 = 0; i2 < dataSudents[i].courses.length; i2++){
                const cName = dataSudents[i].courses[i2]
                console.log(dataSudents[i])
                body += `
                    <p>${dataSudents[i].courses[i2]}</p><button class="btn btn-outline-danger" onclick='removeCouse("${sName}","${cName}","${sLName}")'>X</button>
                `;
            }
            const end = `
            </div>
            `;
            card = top + body + end;
        }
    }
    displayInfo();
}

students.addEventListener('click', () => {
    card = '';
    for(let i = 0; i < dataSudents.length; i++){
        const top = `
        <div class="card p-1 text-center">
            <div class="card-body">
            <p class="card-text"><strong>${dataSudents[i].name} ${dataSudents[i].last_name}</strong>${dataSudents[i].status ? ' <span class="dot"></span></p>' : '</p>'}
            
        `;
        let body = ``;
        if(dataSudents[i].courses.length != 'undefined'){
            for(let i2 = 0; i2 < dataSudents[i].courses.length; i2++){
                body += `
                <p class="card-text">${dataSudents[i].courses[i2]}<p/>
                `;
            }
        }
        const sName = dataSudents[i].name
        const sLName = dataSudents[i].last_name
        const end = `
                <button class="btn btn-outline-info" onclick='courseList("${sName}")'>Add Course</button>
                <button class="btn btn-outline-info" onclick='editStudent("${sName}", "${sLName}")'>Edit info</button>
            </div>
        </div>
        `;
        card += top + body + end;
    }
    organizData()
        
})

const studentToCourses = (cName) => {
    card = ``;
    for(let i = 0; i < dataCourses.length; i++){
        if(cName === dataCourses[i].name){
            for(let i2 = 0; i2 < dataSudents.length; i2++){
                let isInCourse = false;
                for(let i3 = 0; i3 < dataCourses.length; i3++){
                    if(dataSudents[i2].name == dataCourses[i].students[i3]){
                        isInCourse = true;
                    }
                }
                if(!isInCourse){
                    const sName = dataSudents[i2].name
                    card += `
                    <div class='card text-center'>
                        <div class="card-body">
                            <p class="card-text">${dataSudents[i2].name} ${dataSudents[i2].last_name} <button class='btn btn-outline-info' onclick='addStuInCourseCP("${sName}", "${cName}")'>Add</button></p>
                        </div>
                    </div>
                    `;
                }  
                
            }
        }
    }
    organizData()
}

courses.addEventListener('click', () =>{
    card = '';
    for(let i = 0; i < dataCourses.length; i++){
        const top = `
        <div class="card p-1 text-center">
            <div class="card-body">
            <p class="card-text"><strong>${dataCourses[i].name}</strong> <span class="badge badge-pill badge-info">${dataCourses[i].duration}</span></p> 
        `;
        let body =``;
        if(dataCourses[i].students.length != 'undefined'){
            for(let i2 = 0; i2 < dataCourses[i].students.length; i2++){
                body += `
                    <p class="card-text">${dataCourses[i].students[i2]}</p>
                `
            }
        }
        const cName = `${dataCourses[i].name}`;
        const end = `
                <button class="btn btn-outline-info" onclick='studentToCourses("${cName}")'>Add student</button>
            </div>
        </div>
        `;
        card += top + body + end;
    }
    organizData()
})

const addStudent = () =>{
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    card = ``;

    if(firstName.length != 0 && lastName.length != 0){
        postData('https://student-challenge-api.herokuapp.com/students', {name: `${firstName}`, last_name: `${lastName}`})
            .then(data => {
                card += `
                <div class='text-center m-5'>
                    <h1>${data.message}</h1>
                </div>
                `
                displayInfo();
                data.student.courses = [];
                dataSudents.push(data.student);
                console.log(dataSudents);
            });

    } else{
        alert('You must enter a first & last name.')
        card = `
        <form class='text-center m-5' >
            <input id='fName' placeholder='First Name' type="text" />
            <input id='lName' placeholder='Last Name name' type="text" />
            <button class="btn btn-outline-info" type="button" onclick="addStudent()">Submit</button>
        </form>
        `;
        displayInfo();
    }
}

newStudent.addEventListener('click', () =>{
    card = `
        <form class='text-center m-5' >
            <input id='fName' placeholder='First Name' type="text" />
            <input id='lName' placeholder='Last Name name' type="text" />
            <button class="btn btn-outline-info" type="button" onclick="addStudent()">Submit</button>
        </form>
    `;
    displayInfo();
})

