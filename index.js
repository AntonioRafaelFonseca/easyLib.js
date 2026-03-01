function onload()
{
  div = document.querySelector('#div')
  createCanvas(800, 800, div);
}
function main()
{
  fillBackground([255, 255, 255, 255])
  drawCircle(mouse.x, mouse.y, 30, [0, 0, 0, 0], [255, 0, 0, 255])
}