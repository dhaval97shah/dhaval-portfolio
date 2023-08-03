import emoji from "react-easy-emoji";

export const greetings = {
	name: "Dhaval Shah",
	title: "Hi, I'm Dhaval",
	resumeLink: "https://cv.Dhaval.ga",
};

export const openSource = {
	githubUserName: "1Dhaval100",
};

export const contact = {};

export const socialLinks = {
	linkedin: "https://www.linkedin.com/in/dhaval-shah-a73a29116",
	github: "https://github.com/dhaval97shah",
	instagram: "https://instagram.com/dhaval_s14?utm_medium=copy_link",
};

export const skillsSection = {
	title: "What I do?",
	subTitle:
		"I CREATE HIGH PERFORMANCE SCALABLE AND PIXEL PERFECT MOBILE SMOOTH APPLICATIONS.",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Make sure of having more code reusability to have the best performance and less coding time."
		),
		emoji(
			"⚡ Integration of Firebase | AWS | Lottie | One Signal | Social Logins | Deep Linking | Redux"
		),
	],

	softwareSkills: [
		{
			skillName: "reactnative",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "93", //Insert relative proficiency in percentage
	},
	{
		Stack: "Programming",
		progressPercentage: "95",
	},
];

export const educationInfo = [
	{
		schoolName: "Gujarat University",
		subHeader: "H.S.C",
		duration: "March 2012 - April 2014",
		desc: "Marks - 94%",
		descBullets: [
			"I completed my 12th Science from Gujarat university."
		],
	},
	{
		schoolName: "Gujarat Technological University",
		subHeader: "Bechelor Of Enginieering",
		duration: "March 2012 - April 2012",
		desc: "Marks - 8.5 CPI",
		descBullets: [
			"I completed my B.E Degree from G.E.C - Gandhinagar college, GTU."
		],
	}
];

export const experience = [
	{
		role: "Java Intern",
		company: "Kiran Infosoft Technologies",
		companylogo: "/img/kiranInfosoft.jpeg",
		date: "Aug 2017 – March 2018",
		desc: "I was doing 6 months internship as per the rules of college to get hands on experience with any technology.",
		descBullets: [
			"I joined as Java Trainee and was working on a project that to be submitted to the college.",
			"I learned a lot from this compnay, I got very high skills set from here.",
		],
	},
	{
		role: "A Senior React - Native | React JS Developer",
		company: "Gadgetapp Development",
		companylogo: "/img/gadgetapp.png",
		date: "Aug 2018 – Present",
		desc: "",
		descBullets: [
			"I have been creating lots of mobile applications and websites.",
			"My role is to gather requirements - creating plan for the project and present it to clients - start developing - communicating with clients and demoing on some interval - Deleivering the product with satisfaction.",
		],
	}
];

export const projects = [
	{
		name: "The Gigs Live",
		desc: "This app stands as a platform for artists and their fans to get connected, artists can host events on this platform and people can buy tickets for the same and artists can go live on particular date, users can chat with each other, users can send some tips($) to the artists to show them their love, so it helps fans to get more connected with artists and helps artists to get more fans.",
		android: "https://play.google.com/store/apps/details?id=live.gigs.app",
		iOS: "_",
		platforms: 'Android | iOS',
		images: [{
			img: "/img/gigs2.png",
			style: { width: '100%', marginTop: 50 }
		}],
		logo: "/img/gigslogo.png",
		logoStyle: { height: 100, marginRight: 12, backgroundColor: '#000', padding: 12, marginBottom: 10, marginTop: 10, boxShadow: '2px 2px 6px 0 hsl(0deg 0% 100% / 11%), -2px -2px 6px 0 #000' }
	},
	{
		name: "Ouro",
		desc: "This app is for a company who is selling used shoes, mainly used in the USA. On this app users can register as seller or Buyer, Seller can post their used shoes with its current condition and expected price and buyer can either buy it or ask for negotiation by offering a new price. In this we have tried to give a good user experience so that sellers can easily post their shoes and can track the orders and offers timely and at the same time buyer can also check all the latest status for their offers and orders.",
		iOS: "https://apps.apple.com/in/app/ouro-pre-owned-sneakers/id1587501347",
		platforms: 'iOS',
		images: [{
			img: "/img/ouro.png",
			style: { width: '100%', marginTop: 50 }
		}],
		logo: "/img/ourologo.png",
		logoStyle: { height: 80, marginRight: 12, backgroundColor: '#000', padding: 12, marginBottom: 10, marginTop: 10, boxShadow: '2px 2px 6px 0 hsl(0deg 0% 100% / 11%), -2px -2px 6px 0 #000' }
	},
	{
		name: "Tandm",
		desc: "TANDM, Inc. develops innovative surf products under the TANDM Surf brand name that allow two people to catch and surf waves together. Using this app one can see seshes on different locations and can select for which sesh to go and can see store of differet surf prfoducts.",
		iOS: "",
		platforms: 'iOS',
		// image: "/img/tandm.jpeg",
		images: [{
			img: "/img/tandm1.png",
			style: { height: '10%', width: '200px', marginTop: 50 }
		},
		{
			img: "/img/tandm2.png",
			style: { height: '10%', width: '200px', marginTop: 50, marginLeft: 24 }
		},
		{
			img: "/img/tandm3.png",
			style: { height: '10%', width: '200px', marginTop: 50, marginLeft: 24 }
		}],
		logo: "/img/tandm.jpeg",
		logoStyle: { height: 80, width: 80, marginRight: 12, border: '1px solid rgba(0,0,0,0)', padding: 12, marginBottom: 10, marginTop: 10, boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Dhaval Shah has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Dhaval web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
