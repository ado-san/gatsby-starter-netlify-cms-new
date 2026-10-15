---
templateKey: blog-post
title: 'Writing music and code at the same time : Lilypond ♬♭♬'
date: 2019-12-19T14:28:40.007Z
updated: 2026-10-15T08:00:00.000Z
description: >-
  LilyPond is a free and open source program that turns plain text into
  beautiful sheet music. Released under the GNU GPL and available on Linux,
  macOS and Windows, it lets you write music like code: versioned, reusable
  and perfectly engraved.
featuredpost: true
featuredimage: /img/double-lily-modified3.png
tags:
  - LilyPond
  - music
  - free software
  - open source
  - GNU
---
![LilyPond, writing music with code](/img/lilypond-image-intro.png "LilyPond on AD Ventures")

I actually learned how to read sheet music by writing code. When music scores looked like Chinese to me, writing something like `c c g g a a` felt very familiar, because I had learned guitar with tablatures found online. `c c g g a a` simply means "do do sol sol la la", and **LilyPond** generates a beautiful score from this simple code. Hurray!

Let's see how it works.

## What is LilyPond?

[LilyPond](https://lilypond.org/) is a music engraving program, part of the **GNU Project**, released under the **GNU General Public License**. It was started in 1996 by Han-Wen Nienhuys and Jan Nieuwenhuizen, and it is still actively developed by a community of volunteers.

Its philosophy: instead of placing notes with the mouse like in a word processor, you **describe the music in a text file** and LilyPond computes the best possible layout, following the rules of traditional hand engraving. The result is often more elegant than commercial software, and it is used by publishers, composers, choirs and the [Mutopia Project](https://www.mutopiaproject.org/), a library of thousands of free public domain scores.

LilyPond is cross-platform and runs on **Linux, macOS and Windows**.

## Your first score

Install LilyPond from the [download page](https://lilypond.org/download.html), then create a file called `twinkle.ly`:

```lilypond
\version "2.24.0"

\header {
  title = "Twinkle Twinkle Little Star"
}

\relative c' {
  \time 4/4
  c4 c g' g | a a g2 |
  f4 f e e | d d c2 \bar "|."
}
```

Compile it:

```bash
lilypond twinkle.ly
```

You get `twinkle.pdf`, a perfectly engraved score. Add a `\midi { }` block to also get a MIDI file you can listen to.

## Understanding the syntax

- **Notes** are letters: `c d e f g a b`. Sharps and flats use suffixes: `cis` is C sharp, `bes` is B flat (Dutch names by default, other languages are available).
- **Durations** are numbers: `1` whole note, `2` half, `4` quarter, `8` eighth. A duration applies to the following notes until you change it.
- **Octaves** use `'` (up) and `,` (down). In `\relative` mode, LilyPond picks the closest octave automatically, which saves a lot of typing.
- **Bars** are checked with `|`: if a bar is incomplete, LilyPond warns you, just like a compiler.
- **Chords**, lyrics, dynamics, guitar tablatures, drums and full orchestral scores are all supported.

## Why writing music as code is brilliant

As a developer, I find all the advantages of code applied to music:

- **Version control.** Store your scores in **Git**, see what changed between two versions, collaborate with pull requests.
- **Variables and reuse.** Define a melody once (`melody = { ... }`) and reuse it in the score, the MIDI and the parts for each instrument.
- **Separation of content and presentation.** You write the music; LilyPond handles the layout, like HTML and CSS.
- **Automation.** Generate dozens of transposed parts or exercises with a script.
- **Longevity.** A plain text file will still be readable in fifty years, unlike proprietary formats.

## Tools that make it easier

- [**Frescobaldi**](https://www.frescobaldi.org/): a free editor dedicated to LilyPond, with live preview and point-and-click between code and score.
- **VS Code / VSCodium extensions**: syntax highlighting and preview inside your usual editor.
- **Hacklily** and other online editors to try LilyPond without installing anything.
- **MuseScore** can export to MusicXML, which LilyPond can import with `musicxml2ly`.

## Who is it for?

- **Developers who play music**, like me: it feels natural from day one.
- **Teachers** who create exercises and need consistent, beautiful handouts.
- **Composers and arrangers** who care about engraving quality.
- **Beginners in music theory**: writing notes as text forces you to understand rhythm and intervals.

## Resources

- [LilyPond official website](https://lilypond.org/) and [learning manual](https://lilypond.org/doc/v2.24/Documentation/learning/)
- [Frescobaldi](https://www.frescobaldi.org/)
- [Mutopia Project](https://www.mutopiaproject.org/)

![LilyPond sheet music example](/img/lilypond-image-sheet.png "LilyPond score")

Like creative coding? Discover how to [draw with code using p5.js](/blog/2017-01-05-p5js-drawing-and-coding-made-easy/).
