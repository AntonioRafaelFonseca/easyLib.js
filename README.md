# EasyLib.js

A simple library for drawing and creating small canvas projects using
JavaScript.

Created by António Fonseca\
License: MIT

------------------------------------------------------------------------

# Getting Started

1)  Place the library file in your project folder.
2)  In your HTML file add:

``` html
<script src="easyLib.js"></script>
<script src="script.js"></script>
```

3)  Your main script MUST start like this:

``` javascript
function onload() {

}

function main() {

}
```

`onload()` runs once when the page loads.\
`main()` runs multiple times per second (game loop).

------------------------------------------------------------------------

# Creating the Canvas

``` javascript
createCanvas(width, height, parentElement)
```

Example:

``` javascript
createCanvas(400, 300, document.body)
```

------------------------------------------------------------------------

# Drawing

## fillBackground(color)

Fills the entire background.

``` javascript
fillBackground([0,0,0,1])
```

Color format: `[R, G, B, A]` A = transparency (0 to 1)

------------------------------------------------------------------------

## drawSquare(x, y, w, h, border, fill)

Draws a rectangle.

``` javascript
drawSquare(50, 50, 100, 100, [255,0,0,1], [0,255,0,1])
```

------------------------------------------------------------------------

## drawCircle(x, y, radius, border, fill)

Draws a circle.

------------------------------------------------------------------------

## drawLine(x1, y1, x2, y2, border)

Draws a line.

------------------------------------------------------------------------

# Custom Shapes

``` javascript
startShape()
addCustomPoint(x, y)
endShape(fill, border)
```

Example:

``` javascript
startShape()
addCustomPoint(100,100)
addCustomPoint(150,100)
addCustomPoint(125,150)
endShape([0,255,0,1], [255,0,0,1])
```

------------------------------------------------------------------------

# Math Functions

## random(min, max, decimals)

``` javascript
random(0, 10)
random(0, 10, 2)
```

## map(value, minFrom, maxFrom, minTo, maxTo)

Converts a value from one range to another.

## round(number)

Rounds a number.

## limitDecimal(number, decimals)

Limits decimal places.

------------------------------------------------------------------------

# Mouse

DO NOT use `mouseX` or `mouseY`.

Always use the mouse object:

``` javascript
mouse.x
mouse.y
mouse.pressed
```

Example:

``` javascript
if(mouse.pressed){
    drawCircle(mouse.x, mouse.y, 10, null, [255,0,0,1])
}
```

------------------------------------------------------------------------

# Vectors

Create a vector:

``` javascript
let v = vector(10, 20)
```

## Main Methods

-   add(x,y)
-   sub(x,y)
-   mult(x,y)
-   div(x,y)
-   magnitude()
-   normalize()
-   distance(otherVector)
-   dot(otherVector)
-   angle(otherVector)

Example:

``` javascript
let v1 = vector(10,10)
let v2 = vector(20,20)

console.log(v1.distance(v2))
```

------------------------------------------------------------------------

# FPS

Default is 30 FPS.

To change:

``` javascript
setFPS(60)
```

------------------------------------------------------------------------

# Complete Example

``` javascript
function onload(){
    createCanvas(400,300, document.body)
}

function main(){
    fillBackground([0,0,0,1])
    drawCircle(mouse.x, mouse.y, 20, null, [255,0,0,1])
}
```

------------------------------------------------------------------------

# License

MIT License

Copyright (c) 2026 António Fonseca

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

-----------------------------------------------------------------------

# EasyLib.js

Biblioteca simples para desenhar e criar pequenos projetos com canvas em
JavaScript.

Criado por António Fonseca\
Licença: MIT

------------------------------------------------------------------------

# Como começar

1)  Coloca o ficheiro da biblioteca no teu projeto.
2)  No HTML adiciona:

``` html
<script src="easyLib.js"></script>
<script src="script.js"></script>
```

3)  O teu ficheiro principal DEVE começar assim:

``` javascript
function onload() {

}

function main() {

}
```

A função `onload()` corre uma vez quando a página carrega.\
A função `main()` corre várias vezes por segundo (loop do jogo).

------------------------------------------------------------------------

# Criar Canvas

``` javascript
createCanvas(largura, altura, elementoPai)
```

Exemplo:

``` javascript
createCanvas(400, 300, document.body)
```

------------------------------------------------------------------------

# Desenho

## fillBackground(cor)

Preenche o fundo inteiro.

``` javascript
fillBackground([0,0,0,1])
```

Formato da cor: `[R, G, B, A]` A = transparência (0 a 1)

------------------------------------------------------------------------

## drawSquare(x, y, w, h, border, fill)

Desenha um retângulo.

``` javascript
drawSquare(50, 50, 100, 100, [255,0,0,1], [0,255,0,1])
```

------------------------------------------------------------------------

## drawCircle(x, y, raio, border, fill)

Desenha um círculo.

------------------------------------------------------------------------

## drawLine(x1, y1, x2, y2, border)

Desenha uma linha.

------------------------------------------------------------------------

# Formas Personalizadas

``` javascript
startShape()
addCustomPoint(x, y)
endShape(fill, border)
```

Exemplo:

``` javascript
startShape()
addCustomPoint(100,100)
addCustomPoint(150,100)
addCustomPoint(125,150)
endShape([0,255,0,1], [255,0,0,1])
```

------------------------------------------------------------------------

# Matemática

## random(min, max, casasDecimais)

``` javascript
random(0, 10)
random(0, 10, 2)
```

## map(valor, minOrigem, maxOrigem, minNovo, maxNovo)

Converte um valor de um intervalo para outro.

## round(numero)

Arredonda número.

## limitDecimal(numero, casas)

Limita casas decimais.

------------------------------------------------------------------------

# Rato (Mouse)

NÃO uses `mouseX` ou `mouseY`.

Usa sempre o objeto:

``` javascript
mouse.x
mouse.y
mouse.pressed
```

Exemplo:

``` javascript
if(mouse.pressed){
    drawCircle(mouse.x, mouse.y, 10, null, [255,0,0,1])
}
```

------------------------------------------------------------------------

# Vetores

Criar vetor:

``` javascript
let v = vector(10, 20)
```

## Métodos principais

-   add(x,y)
-   sub(x,y)
-   mult(x,y)
-   div(x,y)
-   magnitude()
-   normalize()
-   distance(outroVetor)
-   dot(outroVetor)
-   angle(outroVetor)

Exemplo:

``` javascript
let v1 = vector(10,10)
let v2 = vector(20,20)

console.log(v1.distance(v2))
```

------------------------------------------------------------------------

# FPS

Por defeito corre a 30 FPS.

Para mudar:

``` javascript
setFPS(60)
```

------------------------------------------------------------------------

# Exemplo Completo

``` javascript
function onload(){
    createCanvas(400,300, document.body)
}

function main(){
    fillBackground([0,0,0,1])
    drawCircle(mouse.x, mouse.y, 20, null, [255,0,0,1])
}
```

------------------------------------------------------------------------

Agora já podes começar a criar jogos e projetos com EasyLib.js.
