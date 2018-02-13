function getString(song, className) {
	var nodes = song.getElementsByClassName(className);
	if (nodes.length > 0) {
		return nodes[0].innerText.toLowerCase();
	} else {
		return '';
	}
}

function filter(songs, text) {
	for (var i = 0; i < songs.length; i++) {
		var title = getString(songs[i], 'title');
		var firstline = getString(songs[i], 'firstline');
		var number = getString(songs[i], 'number');
		if (title.includes(text) || firstline.includes(text) || number.includes(text)) {
			songs[i].classList.remove('hide');
		} else {
			songs[i].classList.add('hide');
		}
	}
}

function clear(songs) {
	for (var i = 0; i < songs.length; i++) {
		songs[i].classList.remove('hide');
	}
}

function onChange(event) {
	var songs = document.getElementsByClassName('song');
	if (event.value !== '') {
		filter(songs, event.value.toLowerCase());
	} else {
		clear(songs);
	}
}