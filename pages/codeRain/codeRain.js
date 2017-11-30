let q = document.createElement('canvas');
document.body.appendChild(q);
q.style.position = 'position';
q.style.top = 0;
q.style.left = 0;
let width = q.width = document.documentElement.clientWidth;
let height = q.height = document.documentElement.clientHeight;

let yPositions = Array(300).join(0).split('');
let ctx = q.getContext('2d');

RunMatrix();

function RunMatrix() {
  setInterval(draw, 30);
}

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,.05)';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = 'green';
  /*代码颜色*/
  ctx.font = '10pt Georgia';
  yPositions.map(function (y, index) {
    text = String.fromCharCode(1e2 + Math.random() * 330);
    x = (index * 10) + 10;
    q.getContext('2d').fillText(text, x, y);
    if (y > Math.random() * 1e4 || y > height) {
      yPositions[index] = 0;
    } else {
      yPositions[index] = y + 10;
    }
  });
}