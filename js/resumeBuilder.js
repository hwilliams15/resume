var bio = {
  "name": "Holly Williams",
  "role": "Front End Developer",
  "contacts": {
    "email": "hlly.williams@yahoo.com",
    "mobile": "251-404-8097",
    "github": "hwilliams15",
    "location": "Atlanta, GA"
  },
  "biopic": "https://lh3.googleusercontent.com/-P8Ru35QaNOc/VlImrmusLiI/AAAAAAAABCo/V_1Fyv37m9U/s2048-Ic42/pic-no-bg%252520small.jpg",
  "welcomeMessage": "Welcome to my resume.",
  "skills": ["Java", "SQL", "Spring", "HTML", "CSS", "JavaScript"]
};

var education = {
  "schools": [{
    "name": "University of Alabama at Birmingham",
    "location": "Birmingham, AL",
    "degree": "BS",
    "majors": ["Computer Information Sciences"],
    "dates": 2011,
    "url": "http://www.uab.edu"
  }, {
    "name": "Georgia Institute of Technology",
    "location": "Atlanta, GA",
    "degree": "MS",
    "majors": ["Computational Science and Engineering"],
    "dates": 2013,
    "url": "http://www.gatech.edu"
  }],
  "onlineCourses": [{
    "title": "JavaScript Basics",
    "school": "Udacity",
    "date": 2015,
    "url": "https://www.udacity.com/course/javascript-basics--ud804"
  }, {
    "title": "Intro to jQuery",
    "school": "Udacity",
    "date": 2015,
    "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
  }, {
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "date": 2015,
    "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
  }, {
    "title": "Responsive Web Design Fundamentals",
    "school": "Udacity",
    "date": 2015,
    "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
  }]
};

var work = {
  "jobs": [{
    "employer": "Incomm",
    "title": "Software Engineer",
    "location": "Atlanta, GA",
    "description": "Java developer for fraud detection system",
    "dates": "Jan 2014 - Present"
  }, {
    "employer": "University of Tennessee",
    "title": "Researcher",
    "location": "Oak Ridge, TN",
    "description": "High performance computing profiling",
    "dates": "Jun 2011 - May 2012"
  }, {
    "employer": "University of Alabama at Birmingham",
    "title": "Researcher",
    "location": "Birmingham, AL",
    "description": "High performance computing developer",
    "dates": "Aug 2010 - May 2011"
  }, {
    "employer": "Texas A&M University",
    "title": "Researcher",
    "location": "College Station, TX",
    "description": "Student reseacher working in high performance computing",
    "dates": "May 2010 - Aug 2010"
  }]
};

var projects = {
  "projects": [{
    "title": "Portfolio",
    "technologies": ["HTML", "CSS", "Bootstrap"],
    "dates": 2015,
    "description": "A responsive portfolio using HTML, CSS, and Bootstrap to" +
    " showcase my projects",
    "images":["https://placehold.it/200x150","https://placehold.it/200x150"]
  },{
    "title": "Resume",
    "technologies": ["HTML", "CSS", "JavaScript", "jQuery"],
    "dates": 2015,
    "description": "An online resume to show my skills, education, and work experience",
    "images":["https://placehold.it/200x150","https://placehold.it/200x150"]

  }]
};

bio.display = function() {
  var replaceStr = "%data%";
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var biopic = HTMLbioPic.replace("%data%", bio.biopic);
  var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  var contactInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
  contactInfo = contactInfo + HTMLemail.replace("%data%", bio.contacts.email);
  contactInfo = contactInfo + HTMLgithub.replace("%data%", bio.contacts.github);
  contactInfo = contactInfo + HTMLlocation.replace("%data%", bio.contacts.location);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(contactInfo);
  $("#footerContacts").append(contactInfo);
  $("#header").append(biopic);
  $("#header").append(welcome);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var i;
    for (i = 0; i < bio.skills.length; i+=1) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }
};

work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var elem = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    elem = elem + HTMLworkTitle.replace("%data%", work.jobs[job].title);
    elem = elem + HTMLworkDates.replace("%data%", work.jobs[job].dates);
    elem = elem + HTMLworkLocation.replace("%data%", work.jobs[job].location);
    elem = elem + HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(elem);
  }
};



/*$("#main").append(internationalizeButton);*/

projects.display = function() {
  for (var index in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var elem = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
    elem = elem + HTMLprojectDates.replace("%data%", projects.projects[index].dates);
    elem = elem + HTMLprojectDescription.replace("%data%", projects.projects[index].description);
    for (var image in projects.projects[index].images) {
      elem = elem + HTMLprojectImage.replace("%data%", projects.projects[index].images[image]);
    }
    $(".project-entry:last").append(elem);
  }
};

education.display = function() {
  for (var index in education.schools) {
    var school = education.schools[index];
    $("#education").append(HTMLschoolStart);
    var elem = HTMLschoolName.replace("%data%", school.name);
    elem = elem + HTMLschoolDegree.replace("%data%", school.degree);
    elem = elem + HTMLschoolDates.replace("%data%", school.dates);
    elem = elem + HTMLschoolLocation.replace("%data%", school.location);
    for (var index2 in school.majors) {
      elem = elem + HTMLschoolMajor.replace("%data%", school.majors[index2]);
    }
    $(".education-entry:last").append(elem);
  }

  $("#education").append(HTMLonlineClasses);

  for (index in education.onlineCourses) {
    var course = education.onlineCourses[index];
    $("#education").append(HTMLschoolStart);
    elem = HTMLonlineTitle.replace("%data%", course.title);
    elem = elem + HTMLonlineSchool.replace("%data%", course.school);
    elem = elem + HTMLonlineDates.replace("%data%", course.date);
    elem = elem + HTMLonlineURL.replace("%data%", course.url);
    $(".education-entry:last").append(elem);
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

markerContent = {

  "Oak Ridge, TN, USA": '<h1>Oak Ridge National Laboratory</h1><br/>' +
    'Oak Ridge National Laboratory is an American multiprogram ' +
    'science and technology national laboratory managed for the United States ' +
    'Department of Energy (DOE) by UT-Battelle. ORNL is the largest science ' +
    'and energy national laboratory in the Department of Energy system by ' +
    'acreage[1] and by annual budget.[2] ORNL is located in Oak Ridge, ' +
    'Tennessee, near Knoxville. ORNL\'s scientific programs focus on materials, ' +
    'neutron science, energy, high-performance computing, systems biology and ' +
    'national security.',

  "Atlanta, GA, USA": '<h1>Incomm</h1><br/>' +
    'InComm is dedicated to transforming the shopping experience ' +
    'by continuously driving innovation wherever commerce happens. We\'re making a ' +
    'difference with leading-edge solutions that help retailers build prepaid card ' +
    'destinations, brands connect with new markets, and consumers enjoy a convenient, ' +
    'secure and rewarding payment experience.',

  "College Station, TX, USA": '<h1>Texas A&M University</h1><br/>' +
    'Texas A&M University is a coeducational ' +
    'public research university located in College Station, Texas, United States. ' +
    'It is the flagship institution of the Texas A&M University System, the fourth-largest ' +
    'university in the United States and the largest university in Texas. ' +
    'Texas A&M\'s designation as a land, sea, and space grant institution reflects ' +
    'a range of research with ongoing projects funded by agencies such as the ' +
    'National Aeronautics and Space Administration (NASA), the National Institutes ' +
    'of Health, the National Science Foundation, and the Office of Naval Research. ' +
    'The school ranks in the top 20 American research institutes in funding and has ' +
    'made contributions to such fields as animal cloning and petroleum engineering.',

  "Birmingham, AL, USA": '<h1>University of Alabama at Birmingham</h1><br/>' +
    'The University of Alabama at Birmingham (UAB) is a public university in Birmingham ' +
    'in the U.S. state of Alabama. Developed from an academic extension center established ' +
    'in 1936, the institution became an autonomous institution in 1969 and is today ' +
    'one of three institutions in the University of Alabama System. In the fall of ' +
    '2013, 18,568 students from more than 110 countries were enrolled at UAB pursuing ' +
    'studies in 140 programs of study in 12 academic divisions leading to bachelor\'s, ' +
    'master\'s, doctoral, and professional degrees in the social and behavioral sciences, ' +
    'the liberal arts, business, education, engineering, and health-related fields such ' +
    'as medicine, dentistry, optometry, nursing, and public health.'
};
