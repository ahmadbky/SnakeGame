const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const scale = 20;
const framerate = 10;

const cellSideLength = canvas.height / scale;