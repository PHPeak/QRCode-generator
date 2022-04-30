const canvas = document.getElementById('canvas');
/** @type CanvasRenderingContext2D */
const context = canvas.getContext('2d', {
  antialias: false,
  depth: false
});

const blockCount = 57;
const blockDimensions = canvas.clientWidth / blockCount;

let isWhite = true;

//ww
//bw
/**
 *
 * @param startX {number}
 * @param startY {number}
 */
function drawCorner(startX, startY) {
  const lineW = context.lineWidth;
  context.fillStyle = '#000';
  context.fillRect(startX, startY, blockDimensions * 7, blockDimensions * 7);

  context.strokeStyle = '#fff';
  context.lineWidth = blockDimensions;
  context.strokeRect(startX + blockDimensions * 1.5, startY + blockDimensions * 1.5, blockDimensions * 4, blockDimensions * 4);

  context.lineWidth = lineW;
}

context.fillStyle = '#fff';
context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

drawCorner(0, 0);
drawCorner(0, canvas.clientHeight - blockDimensions * 7);
drawCorner(canvas.clientWidth - blockDimensions * 7, 0);


//draw horizontal control line
for(let x = 7; x < blockCount - 7; x++) {
  context.fillStyle = `#${isWhite ? 'fff' : '000'}`;
  context.fillRect(blockDimensions * x, blockDimensions * 5, blockDimensions, blockDimensions);

  isWhite = !isWhite;
}

//draw vertical control line
isWhite = true;
for(let y = 7; y < blockCount - 7; y++) {
  context.fillStyle = `#${isWhite ? 'fff' : '000'}`;
  context.fillRect(blockDimensions * 5, blockDimensions * y, blockDimensions, blockDimensions);

  isWhite = !isWhite;
}

//draw encoding
context.fillStyle = '#000';
context.fillRect(canvas.clientWidth - blockDimensions * 2, canvas.clientHeight - blockDimensions, blockDimensions, blockDimensions);