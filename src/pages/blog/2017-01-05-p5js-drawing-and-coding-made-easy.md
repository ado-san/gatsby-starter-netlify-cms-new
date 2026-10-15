---
templateKey: blog-post
title: Drawing and Coding unified and made easy with p5.js  (づ￣ ³￣)づ
date: 2017-01-05T15:04:10.000Z
updated: 2026-10-15T08:00:00.000Z
description: >-
  p5.js is a free and open source JavaScript library that makes creative coding
  accessible to artists, designers, educators and beginners. Here is how to
  start drawing with code in your browser, in five minutes and without
  installing anything.
featuredpost: false
featuredimage: /img/p5.png
tags:
  - p5.js
  - JavaScript
  - creative coding
  - open source
  - education
  - web technology
---
![p5.js creative coding with JavaScript](/img/p5js-pink.png "p5.js")

Most people learn to draw long before they learn to program. **p5.js** builds a bridge between the two: you write a few lines of JavaScript and a drawing appears on the screen, moves, reacts to your mouse and plays sound. It is one of the friendliest ways to discover programming, and one of the most fun ways to make generative art.

## What is p5.js?

[p5.js](https://p5js.org/) is a free and open source JavaScript library maintained by the [Processing Foundation](https://processingfoundation.org/). It is the web successor of **Processing**, the Java-based sketchbook created at the MIT Media Lab in 2001 to teach programming in a visual context.

p5.js keeps the same philosophy:

- **A sketch is a program.** You do not build an "application", you write a sketch, like an artist in a notebook.
- **Immediate visual feedback.** Every change in the code produces a visible change on the canvas.
- **Inclusive by design.** The community puts accessibility, diversity and beginners first, and the documentation is translated into many languages.

Because it is plain JavaScript running in the browser, everything you create can be shared with a simple link and embedded in any website.

## Your first sketch in five minutes

You do not need to install anything. Open the [p5.js web editor](https://editor.p5js.org/), and you will see the two functions that structure every sketch:

```js
function setup() {
  createCanvas(400, 400) // runs once, at the start
}

function draw() {
  background(240)              // runs about 60 times per second
  fill(255, 0, 120)
  circle(mouseX, mouseY, 50)   // a pink circle follows your mouse
}
```

Press **Play**: a pink circle follows your cursor. `setup()` runs once; `draw()` runs in a loop, about sixty times per second. That loop is the heart of animation, games and interactive art.

From there, small changes teach big concepts:

- remove `background(240)` and the circle leaves a trail: you just discovered **state**;
- replace `mouseX` with `random(width)`: you discovered **randomness**;
- wrap `circle()` in a `for` loop: you discovered **iteration**.

## Learning programming concepts by drawing

The official [examples](https://p5js.org/examples/) are a great curriculum on their own. A few favourites:

- **Hello p5: drawing.** A minimal paint program, perfect for a first lesson with children.
- **Recursive tree.** A tree that grows by calling the same function on its own branches: the most visual explanation of **recursion** you will ever see.
- **Koch curve.** A snowflake fractal that explains geometry and algorithms at the same time.
- **Game of Life.** John Conway's cellular automaton, a classic introduction to **2D arrays** and simulation.

Each example can be opened in the editor, modified and saved to your own account.

## Generative art and animated loops

p5.js is also a serious tool for artists. Generative artists use it to create posters, digital art, live visuals for concerts and data visualisations. A few tips if you want to go further:

- use `noise()` (Perlin noise) instead of `random()` to get organic, natural movement;
- use `frameCount` to drive time-based animations;
- export perfect animated GIFs with the [p5.createloop](https://www.npmjs.com/package/p5.createloop) library, which makes seamless loops easy;
- explore `WEBGL` mode to draw in 3D with the same simple API.

## p5.js in a real web project

Once you are comfortable, p5.js can live inside any modern stack. With **React** or **Next.js**, the usual approach is to create the sketch in "instance mode" inside a client component, so that the canvas is mounted and cleaned up with the component. This is how you can add interactive headers, educational widgets or small games to a professional website without heavy dependencies.

## Why it matters

Creative coding lowers the barrier to entry of programming. Children, designers and artists who would never open a terminal discover variables, loops and functions because they want to *make something beautiful*. And because p5.js is **free software**, schools and associations can use it without licences, adapt it and share their work.

## Resources

- [p5.js official website](https://p5js.org/) and [reference](https://p5js.org/reference/)
- [p5.js web editor](https://editor.p5js.org/)
- [The Coding Train](https://thecodingtrain.com/), Daniel Shiffman's video tutorials, the best way to learn p5.js
- [p5.createloop on npm](https://www.npmjs.com/package/p5.createloop)

Want to see more creative technology? Read how [Lilypond lets you write music with code](/blog/2019-12-19-writing-music-and-code-at-the-same-time-lilypond/), or how [CodinGame turns programming practice into a game](/blog/2019-09-19-learning-how-to-code-by-playing-with-codingame/).
