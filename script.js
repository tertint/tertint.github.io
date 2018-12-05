let url = prompt('Kidai');
let timer = setInterval(function opener() {
	let urls = url.split(' ');
    for (let i = 0; i < urls.length; i++) {
        window.open(urls[i], "_blank	");
    }
}, 12000);
