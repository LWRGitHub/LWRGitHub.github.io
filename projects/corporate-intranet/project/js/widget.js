var scheduling = document.getElementById('scheduling');

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if(xhr2.readyState === 4 && xhr2.status === 200) {
    var rooms = JSON.parse(xhr2.responseText);
    var statusHTML2 = '<ul class="rooms">';
    for (var i = 0; i < rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML2 += '<li class="empty">';
      } else {
        statusHTML2 += '<li class="full">';
      }
      statusHTML2 += rooms[i].room;
      statusHTML2 += '</li>';
    }
    statusHTML2 += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML2;
  }
};
xhr2.open('GET', '../data/rooms.json');
xhr2.send();

scheduling.addEventListener("click", function(){
  alert("This is where managers schedule a meeting room and enter if the employee is in or out. A manager can simply enter their username & password to login.\n\n   User: Username\n   Password: Password");
});

