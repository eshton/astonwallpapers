
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

$(document).ready(function(){
	changeBackground();
});