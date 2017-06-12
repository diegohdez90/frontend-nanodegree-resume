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
		"location" : "Puebla de Zaragoza"
	},
	"bioPic" : "https://www.facebook.com/photo.php?fbid=1526609010703285&l=fee6c40c6d",
	"welcomeMessage" : "Welcome to my resume online site. Review my goals in web development",
	"skills" : skills
};

$('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
$('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
$('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
$('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
$('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));


var formattedImg = HTMLbioPic.replace('%data%', bio.bioPic);
$('#header').append(formattedImg);
var formattedMsg =  HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
$('#header').append(formattedMsg);
var work = [{
		"employeer" : "SIBEI. Soluciones Informáticas Basados en Internet",
		"title" : "PHP Developer",
		"dates" : "March 2016 - ",
		"location" : "Puebla de Zaragoza",
		"description" : "Developer Gabin Web Sites. With a configuration file contain all information about Gabin client: "+
						"contact info, database configuration, title, description, facebook and google analytics api and a "+
						"template to choose to publish all the information in the database: products, sales, images and galleries, contact info. "+
						"Each sibei client has a google analytics api to track activities in the site include products, collectios and entries shared"+
						" in social networks (facebook, twitter, pinterest). Each client has a platform to see the activity in its site, product views, pages visited"+
						" by day and device and social networks share in the site. "+
						"Devloper SIBEI GABIN platform to create estimates of curtains and complements and convert them in sales. "+
						"List all estimates in a datatable complement and show all products that contain. Also send estimates through email and show "+
						"it in differents views."+
						" Developer Matilde site. Page developed with HTML5, CSS3 with responsive technology (Boostrap) and parallax images. Contact info can send emails. "+
						""
	},{
		"employeer" : "Veotek",
		"title" : "Systems Engineer",
		"dates" : "October 2015 - February 2016",
		"location" : "Puebla de Zaragoza",
		"description" : ""
	}
]
$("#main").append(work["position"]);

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
	"education" : [{
		"name" : "Benemerita Universidad Autonoma de Puebla",
		"degree" : "Engineer in Computer Science",
		"attendedYears" : "6 years",
		"location" : "Puebla de Zaragoza",
		"date" : "2014",
		"majors" : ["ICC"]
	},{
		"name" : "Colegio de Bachilleres del Estado de Puebla Plantel 20",
		"degree" : "Informatic",
		"attendedYears" : "3 years",
		"city" : "Puebla de Zaragoza",
		"date" : "2009"
	}
	],
	"onlineCourses" : [
		{
			"title":"Introduccion a las Aplicaciones Web",
			"school": "Benemerita Universidad Autonoma de Puebla",
			"date" : "June - July 2012"
		},
		{
			"title":"Big Data In Data Lakes",
			"school": "E=mc",
			"date" : "May - June 2015"
		},
		{
			"title": "TOEFL ITP",
			"school": "Benemerita Universidad Autonoma de Puebla",
			"date" : "June 2015"
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
	if (work.length>0) {
		for (w in work){
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work[w].employeer);
			var formattedTitle = HTMLworkTitle.replace('%data%', work[w].title);
			var formattedDate = HTMLworkDates.replace('%data%', work[w].dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', work[w].location);
			var formattedDescription = HTMLworkDescription.replace('%data%',work[w].description);
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
		console.log(p)
	}
}
projects.display();