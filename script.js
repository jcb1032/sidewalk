function updateTimer() {
    var cd = document.querySelector('#cd');
    var now = new Date();
    var end = new Date('Jul 17 2020 00:00:00 EDT');
    var ms = end.getTime() - now.getTime();
    var days = Math.floor(ms / (1000 * 60 * 60 * 24));
    var hours = Math.floor(ms / (1000 * 60 * 60) % 24);
    var minutes = Math.floor(ms / (1000 * 60) % 60);
    var seconds = Math.floor(ms / (1000) % 60);
    var list = [days, hours, minutes, seconds];
    if (ms <= 0) {
        cd.innerHTML = 'coming soon';
    } else {
        cd.innerHTML = list.join(':');
    }
}
updateTimer();
setInterval(updateTimer, 500);
