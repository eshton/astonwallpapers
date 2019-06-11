
var images = [
	'https://images.pexels.com/photos/259660/pexels-photo-259660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/1366922/pexels-photo-1366922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	'https://images.pexels.com/photos/462146/pexels-photo-462146.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=beach-blur-boardwalk-132037.jpg&fm=jpg',
	'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
	'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=background-calm-clouds-747964.jpg&fm=jpg',
	'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?cs=srgb&dl=cropland-daylight-ecology-247599.jpg&fm=jpg',
	'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg',
	'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=boathouse-cottage-dock-147411.jpg&fm=jpg',
	'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=clouds-cloudy-conifers-247478.jpg&fm=jpg',
	'https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?cs=srgb&dl=architecture-blue-sky-cliff-248771.jpg&fm=jpg',
	'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=beautiful-calm-clouds-206359.jpg&fm=jpg',	
	'https://live.staticflickr.com/1923/45272752942_a41bdfee9b_o.jpg',
	'https://live.staticflickr.com/1964/31447357528_82b199c983_o.jpg',
	'https://live.staticflickr.com/1962/31447358118_fa0a9299fe_o.jpg',
	'https://live.staticflickr.com/1935/31447358878_8d22461cbb_o.jpg',
	'https://live.staticflickr.com/1971/30381880687_dd21d239cb_o.jpg',
	'https://live.staticflickr.com/1941/30381884297_0c85dfa4fb_o.jpg',
	'https://live.staticflickr.com/5481/30865722015_ec2626699f_o.jpg',
	'https://live.staticflickr.com/5555/30777432221_43590f8fd3_o.jpg',
	'https://live.staticflickr.com/5583/30228693063_90eab3ee16_o.jpg',
	'https://live.staticflickr.com/5824/30862543135_ab1c62d3dc_o.jpg',
	'https://live.staticflickr.com/5768/30561349430_62f02fa21b_o.jpg',
	'https://live.staticflickr.com/5688/30774181391_e0be9d6a57_o.jpg',
	'https://live.staticflickr.com/5752/30862210185_73469ef4cb_o.jpg',
	'https://live.staticflickr.com/5538/30862198835_3f46d4925f_o.jpg',
	'https://live.staticflickr.com/5441/30229995944_a21b707f00_o.jpg',
	'https://live.staticflickr.com/5787/30825785016_731fbebb20_o.jpg'
];

var quotes = [
{
	text: "A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness.",
	subtext: "Albert Einstein, 1922."
},
{
	text: "You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
	subtext: "Steve Jobs, 2005"
},
{
	text: "For the past 33 years, I have looked in the mirror every morning and asked myself: 'If today were the last day of my life, would I want to do what I am about to do today?' And whenever the answer has been 'No' for too many days in a row, I know I need to change something.",
	subtext: "Steve Jobs"
},
{
	text: "Missing somebody? ... Call<br/>Wanna meet up? ... Invite<br/>Wanna be understood? ... Explain<br/>Have questions? ... Ask<br/>Don't like something? ...Say it<br/>Like something? ...State it<br/>Want something? ... Ask for it<br/>Love someone? ... Tell it<br/> We just have one life, keep it simple!",
	subtext: "Anonymous"
},
{
	text: "A journey of a thousand miles begins with a single step.",
	subtext: "Lao Tzu"
},
{
	text: "Be not afraid of growing slowly; Be afraid only of standing still.",
	subtext: "Chinese Proverb"
},
{
	text: "He who returns from a journey is not the same as he who left.",
	subtext: "Chinese Proverb"
},
{
	text: "Your teacher can open the door but you must enter by yourself.",
	subtext: "Chinese Proverb"
},
{
	text: "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.",
	subtext: "Chinese Proverb"
}
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeBackground() {
	var num = getRandomInt(0, images.length - 1);
	document.body.background = images[num];
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundPosition = "center center";
}

function setQuote() {
	var num = getRandomInt(0, quotes.length - 1);
	$('#text').html("“" + quotes[num].text + "“");
	$('#subtext').html(quotes[num].subtext);
}

$(document).ready(function(){
	changeBackground();
	setQuote();
});