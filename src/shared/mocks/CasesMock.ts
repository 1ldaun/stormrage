import birdImgUrl from "../img/bird.jpg";
import spotifyImgUrl from "../img/spotify.jpg";
import deliveryImgUrl from "../img/delivery.jpg";
import alCatanImgUrl from "../img/al-catan.jpg";
import iProffiImgUrl from "../img/iproffi.jpg";
import fooBarImgUrl from "../img/foo-bar.jpg";
import hackImgUrl from "../img/hackathon.jpg";
import HackModal from "../../entities/HackModal/HackModal";

export const cases = [
	{
		title: "Spotify clone",
		subtitles: [
			"React app",
			"Another one Spotify clone. Made with Redux and Spotify API",
		],
		url: "https://spotify.ildan-dev.ru/",
		imageUrl: spotifyImgUrl,
	},
	{
		title: "Foo-Bar",
		subtitles: [
			"React app (desktop-only)",
			"Common meal delivery service. Made with React Hooks and backend part (last one temporary unavailable)",
		],
		url: "https://foo-bar.ildan-dev.ru/",
		imageUrl: fooBarImgUrl,
	},
	{
		title: "Iproffi",
		subtitles: [
			"React app (TEMPORARY UNAVAILABLE)",
			"Course platform like Geekbrains and Skillbox",
		],
		url: "https://i-proffi.com/",
		imageUrl: iProffiImgUrl,
	},
	{
		title: "Hotel 'Bird'",
		subtitles: ["Self-made template for Wordpress site"],
		url: "https://birdhotel.ru/",
		imageUrl: birdImgUrl,
	},
	{
		title: "Catan map/game generator",
		subtitles: [
			"Map and dice generator for table game 'Catan'",
			"Made with React + TS",
		],
		url: "https://al-catan.ildan-dev.ru/",
		imageUrl: alCatanImgUrl,
	},
	{
		title: "Delivery food",
		subtitles: [
			"Simple template (HTML5/CSS3/Vue.js)",
			"Google PageSpeed Insights score: 95-100",
		],
		url: "https://delivery-food.ildan-dev.ru/",
		imageUrl: deliveryImgUrl,
	},
	{
		title: "Aeroflot hackathon project",
		subtitles: [
			"Solution for the problem of hackathon",
			"My team took 3rd place with this project",
		],
		url: "https://air.ildan-dev.ru/",
		imageUrl: hackImgUrl,
		modal: HackModal,
	},
];
