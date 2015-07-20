'use strict';

(function(d, m){
	let then = m('2015-07-05T22:39:15', 'YYYY-MM-DDTHH:mm:ss');

	let update = () => {
		let now = m(),
			years = `${now.diff(then, 'years')} Years`,
			months = `${now.diff(then, 'months') % 12} Months`,
			// This may result in the wrong number of days... probably a better way of doing this
			days = `${now.diff(then, 'days') % 30} Days`,
			hours = `${now.diff(then, 'hours') % 24} Hours`,
			minutes = `${now.diff(then, 'minutes') % 60} Minutes`,
			seconds = `${now.diff(then, 'seconds') % 60} Seconds`;

		let el = d.querySelector('#js-moment');
		el.innerText = `\n${years}\n${months}\n${days}\n${hours}\n${minutes}\n${seconds}!`;
	};

	update();
	setInterval(update, 1000);

})(document, moment);
