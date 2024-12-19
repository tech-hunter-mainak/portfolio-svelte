import taskify from '../taskify.png';
import arduino from '../arduino.jpg';
import movieapp from '../movieapp.png';
import weather from '../weatherapp.png';
const projects = [
	{
		title: 'Taskify - Task Tracker',
		subtitle: 'https://todolistwebapplive.vercel.app/',
		date: 'Oct 2024 - Nov 2024',
		tools: ['Firebase', 'Vite', 'React', 'Tailwind CSS', 'TypeScript', 'Express JS', 'Vercel'],
		description:
			'Implemented a to-do list tracker website with an intuitive and visually appealing web interface using Shadcn-UI. Integrated a backend system with Firebase Firestore for real-time database management and seamless synchronization.',
		image: taskify
	},
	{
		title: 'Line Follower BOT',
		subtitle: 'https://github.com/tech-hunter-mainak/line-follower-bot/',
		date: 'Nov 2024',
		tools: ['C Programming', 'Arduino Uno'],
		description:
			'Developed and prototyped a line follower bot using Arduino UNO module and IR Sensors, that follows black line on white background.',
		image: arduino
	},
	{
		title: 'Movie Website',
		subtitle: 'https://mainakmovieapp.netlify.app/',
		date: 'Jun 2024',
		tools: ['React', 'CSS', 'Databaset', 'SQL', 'JS', 'Express JS', 'Vercel'],
		description:
			'Implemented a to-do list tracker website with an intuitive and visually appealing web interface using Shadcn-UI. Integrated a backend system with Firebase Firestore for real-time database management and seamless synchronization.',
		image: movieapp
	},
	{
		title: 'Realtime Weather Website',
		subtitle: 'https://tech-hunter-mainak.github.io/weather-app-onlyjs/home/',
		date: 'March 2024',
		tools: ['HTML', 'CSS', 'JS', 'API'],
		description:
			'The purpose of this project is to develop a website that provides users with real-time updates on the weather of the place where the user is currently with hourly forecasts. This website can provide weather data for any global place. Also, users can search for a place to check the weather and access the previously searched history.',
		image: weather
	}
];
export default projects;
