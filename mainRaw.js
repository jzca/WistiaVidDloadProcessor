const sample1=`<p><a href="https://wistia.com/about-wistia?utm_type=player&amp;utm_product=host&amp;utm_campaign=songs-about-wistia&amp;utm_medium=referral&amp;utm_source=wistia&amp;about=100959&amp;wvideo=0j69dfdsq4"><img src="https://embedwistia-a.akamaihd.net/deliveries/b58ea4360b39c30ce5425bbbfd08fe0e8fd7caf1.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=4074e1e0" width="400" height="225" style="width: 400px; height: 225px;"></a></p><p><a href="https://wistia.com/about-wistia?utm_type=player&amp;utm_product=host&amp;utm_campaign=songs-about-wistia&amp;utm_medium=referral&amp;utm_source=wistia&amp;about=100959&amp;wvideo=0j69dfdsq4">Welcome to Wistia</a></p>`;

const sample2=`<p><a href="https://wistia.com/video-marketing?wvideo=469wyyyk9j"><img src="https://embedwistia-a.akamaihd.net/deliveries/b793608fe4191a16daeda7ca1828434e39cd63a3.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=274f6ae0" width="400" height="225" style="width: 400px; height: 225px;"></a></p><p><a href="https://wistia.com/video-marketing?wvideo=469wyyyk9j">Wistia Product Features</a></p>`;

const inputSamples = [sample1,sample2];

const findTheString2 = (arr) => {
	const outputLink = `http://fast.wistia.net/embed/iframe/`
	let newOut = [];
	for (const str of arr) {
		let i = str.indexOf('wvideo');
		let beginUrl=i+7;
		let endUrl=beginUrl+10;
		let url = str.slice(beginUrl, endUrl);
		newOut.push(outputLink.concat(url));
	}
	return newOut;
}

findTheString2(inputSamples)

// For NodeJS console.log(findTheString2(inputSamples));
