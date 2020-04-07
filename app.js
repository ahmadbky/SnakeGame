const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const scale = 20;
const framerate = 10;

const cellHeight = canvas.height / scale;
const cellWidth = canvas.width / scale;