const refs = {
	startBtn: document.querySelector('[data-start]'),
	stopBtn: document.querySelector('[data-stop]'),
 };
 
 let timerId = null;
 
 refs.startBtn.addEventListener('click', () => {
	refs.startBtn.disabled = true;
	refs.stopBtn.disabled = false;
 
	timerId = setInterval(() => {
	  document.body.style.backgroundColor = getRandomHexColor();
	}, 1000);
 });
 
 refs.stopBtn.addEventListener('click', () => {
	clearInterval(timerId);
 
	refs.stopBtn.disabled = true;
	refs.startBtn.disabled = false;
 });
 
 function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
