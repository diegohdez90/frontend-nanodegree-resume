var formattedName = HTMLheaderName.replace("%data%","Diego Arturo Hernandez Fuentes");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$('#header').prepend(formattedRole).prepend(formattedName);
var skills = ["developer","programming","javascript","jquery","json","git"];
var bio = {
	"name" : "Diego Arturo Hernandez Fuentes",
	"role" : "Web Developer",
	"contacts" : { 
		"email": "diegohdez12@gmail.com",
		"mobile" : "+52 22 21 77 31 45",
		"github" : "diegohdez90",
		"twitter" : "DiegoAHernandez",
		"linkedin" : "diegoarturohdez",
		"location" : "Calle la luz 3, Ignacio Romero Vargas, Puebla de Zaragoza"
	},
	"bioPic" : "https://www.facebook.com/photo.php?fbid=1526609010703285&l=fee6c40c6d",
	"welcomeMessage" : "Welcome to my resume online site. Review my goals in web development",
	"skills" : skills
};
bio.display=function(){
	$('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
	$('#topContacts, #footerContacts').append(HTMLemail.replace(/%data%/g, bio.contacts.email));
	$('#topContacts, #footerContacts').append(HTMLtwitter.replace(/%data%/g, bio.contacts.twitter));
	$('#topContacts, #footerContacts').append(HTMLgithub.replace(/%data%/g, bio.contacts.github));
	$('#topContacts, #footerContacts').append(HTMLlinkedin.replace(/%data%/g, bio.contacts.linkedin));
	$('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
}

bio.display();

var formattedImg = HTMLbioPic.replace('%data%', bio.bioPic);
$('#header').append(formattedImg);
var formattedMsg =  HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
$('#header').append(formattedMsg);

var work = {

	"jobs" : [
		{
			"employeer" : "SIBEI. Soluciones Informáticas Basados en Internet",
			"title" : "PHP Developer",
			"dates" : "March 2016 - ",
			"location" : "Calle Jalisco 13, Colonia el Carmen, Puebla de Zaragoza",
			"description" : "Developer Gabin Web Sites. With a configuration file contain all information about Gabin client: "+
							"contact info, database configuration, title, description, facebook and google analytics api and a "+
							"template to choose to publish all the information in the database: products, sales, images and galleries, contact info. "+
							"Each sibei client has a google analytics api to track activities in the site include products, collections and entries shared"+
							" in social networks (facebook, twitter, pinterest). Each client has a platform to see the activity in its site, product views, pages visited"+
							" by day and device and social networks share in the site. "+
							"<p>Developer SIBEI GABIN platform to create estimates of curtains and complements and convert them in sales. "+
							"List all estimates in a datatable complement and show all products that contain. Also send estimates through email and show "+
							"it in differents views.</p>"+
							"<p>Developer Matilde site. Page developed with HTML5, CSS3 with responsive technology (Bootstrap) and parallax images. Contact info can send emails. "+
							"URL: <a href='http://www.matilde.com.mx/' target='_blank'>http://www.matilde.com.mx/</a></p>"+
							"<p>Developer Bordapardinas site. Update page with responsive technology. Also include a reCaptcha to avoid bots in the contact form "+
							"of the site. URL: <a href='http://bordapardinas.com/' target='_blank'>http://bordapardinas.com/</a></p>"
		},{
			"employeer" : "Veotek",
			"title" : "Systems Engineer",
			"dates" : "October 2015 - February 2016",
			"location" : "Calle 3 Sur 302, Centro, Puebla de Zaragoza",
			"description" : ""
		}
	]
}


var projects = {
	projects: [{
			"title" : "Web Applications' Blog ",
			"dates" : "2012",
			"description" : "A webpage built in Google App Engine to publish content about web technologies in HTML5 and mobile device and, frameworks"+
							" IDE to development of these systems. URL: http://diegohdez-appweb.appspot.com"
		},
		{
			"title" : "Pizza App",
			"dates" : "2012",
			"description" : "Android application where clients can see a list of kind of pizzas and they can choose one and the server save the order in the list."+
							" When the order is finished the server delete the order from the list."
		},{
			"title" : "Social Network Application",
			"dates" : "2012",
			"description" : "Android application to share content like Facebook (only text)."
		}
	]
};
var education = {
	"schools" : [{
		"name" : "Benemerita Universidad Autonoma de Puebla",
		"degree" : "Engineer in Computer Science",
		"attendedYears" : "2009-2015",
		"location" : "Facultad de Ciencias de la Computacion, BUAP",
		"date" : "2014",
		"majors" : ["ICC"]
	},{
		"name" : "Colegio de Bachilleres del Estado de Puebla Plantel 20",
		"degree" : "Bachelor",
		"attendedYears" : "2006 - 2009",
		"location" : "Calle Citlaltepelt, Ignacio Romero Vargas, Puebla de Zaragoza",
		"date" : "2009",
		"majors" : ["TII"]
	}
	],
	"onlineCourses" : [
		{
			"title":"Introduccion a las Aplicaciones Web",
			"school": "Benemerita Universidad Autonoma de Puebla",
			"date" : "June - July 2012"
		},
		{
			"title":"MTA: Database Administration Fundamentals",
			"school": "Benemerita Universidad Autonoma de Puebla",
			"date" : "June 2013",
			"url" : "https://goo.gl/C7007p"
		},
		{
			"title":"Big Data In Data Lakes",
			"school": "E=mc<sup>2</sup>",
			"date" : "May - June 2015",
			"url" : "https://goo.gl/S6wHNt"
		},
		{
			"title": "TOEFL ITP",
			"school": "Benemerita Universidad Autonoma de Puebla",
			"date" : "June 2015"
		},{
			"title": "Desarrollando con PHP y Microsoft Azure",
			"school": "Microsoft Virtual Academy",
			"date" : "December 2015",
			"url" : "https://goo.gl/CLVFP9"
		},
		{
			"title": "Migración de Bases de Datos de 11g a 12c",
			"school": "Benemerita Universidad Autonoma de Puebla",
			"date" : "March 2016",
			"url" : " https://goo.gl/sNvC7K"
		}
	]
}
$("#main").append(education.name);

if (skills.length>0) {
	$('#header').append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0])
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1])
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2])
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3])
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4])
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5])
	$('#skills').append(formattedSkill);
}

var displayWork = function () {
	if (work.jobs.length>0) {
		for (w in work.jobs){
			$('#workExperience').append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[w].employeer);
			var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[w].title);
			var formattedDate = HTMLworkDates.replace('%data%', work.jobs[w].dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[w].location);
			var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[w].description);
			formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription;

			$('.work-entry:last').append(formattedEmployerTitle);
		}
	}
}
displayWork();


$('#main').append(internationalizeButton);

var inName = function(){
	var name = bio.name;
	var tmpName = name.split(' ');
	var lName = tmpName[2].toUpperCase();
	lName += " " + tmpName[3].slice(0, 1) + '.';

	return tmpName[0] + " " + tmpName[1] + " " + lName;
}

projects.display = function() {
	var HTMLprojectStart = '<div class="project-entry"></div>';
	for(var p in projects.projects){
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[p].title);
		$('.project-entry:last').append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[p].dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[p].description);
		$('.project-entry:last').append(formattedDescription);

		if (projects.projects[p].images!=undefined && projects.projects[p].images.length>0) {
			for(var img in projects.projects[p].images){
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[p].images[img]);
				$('.project-entry:last').append(formattedDescription);
			}
		}
	}
}
projects.display();

education.display = function(){

	if (education.schools.length>0) {
		for(var s in education.schools){
			var school = education.schools[s];
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLschoolName.replace('%data%',school.name));
			$('.education-entry:last').append(HTMLschoolDegree.replace('%data%',school.degree));
			$('.education-entry:last').append(HTMLschoolDates.replace('%data%',school.attendedYears));
			$('.education-entry:last').append(HTMLschoolLocation.replace('%data%',school.location))
			for(var m in school.majors){
				var major = school.majors[m];
				$('.education-entry:last').append(HTMLschoolMajor.replace('%data%',major));
			}
		}
	}

	if (education.onlineCourses.length>0) {
		$('#education').append(HTMLonlineClasses);
		for (var o in education.onlineCourses) {
			var c = education.onlineCourses[o];
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLonlineTitle.replace('%data%',c.title));
			$('.education-entry:last').append(HTMLonlineSchool.replace('%data%',c.school));
			$('.education-entry:last').append(HTMLonlineDates.replace('%data%',c.date));
			if(c.url!==undefined) $('.education-entry:last').append(HTMLonlineURL.replace('%data%',c.url));
		}
	}
}
education.display();
$('#mapDiv').append(googleMap);


