---
title: "The Breweries of a Century Ago: A Data Explorer for Historical Brewery Directories"
date: 2026-07-17
description: "A decade-old itch, finally scratched: a browsable, searchable data explorer for a dozen American brewery directories published between 1896 and 1918, built with the Directory Pipeline."
tags:
  - brooklyn
  - brewery
  - directory pipeline
  - iiif
  - digitization
  - ocr
  - ner
  - business directories
  - public domain
---

Here is the thing I finally built:

- **<https://hadro.github.io/brewery-guides/explorer#about>**

It's a browsable, searchable data explorer for a set of American brewery directories published between 1896 and 1918. If you just want to poke around the dozens of breweries that were operating near you a hundred years ago, that link is all you need. The rest of this is the backstory and the how.

## The decade-old itch

One of my dream spare-time project, for a long time, was to use digitized library collections to dive into the geospatial history of brewing in Brooklyn — to trace where the breweries were over the last 160 years or so, and to connect them to old maps and photos.

Back in 2016, I created [a GitHub repo](https://github.com/hadro/brewery-guides/) to hold the data from a wonderful run of brewery directories digitized by the New York Public Library. I ran all twelve volumes through the OCR and searchable-PDF tools of the day, generated coordinate text and page-level output for every page... and then lost steam. Getting from a pile of messy OCR to something you could actually *explore* was still more work than I had the energy for, and the project went quiet for the better part of a decade.

## Coming back with better tools

What changed is that the tools finally caught up to the itch. A lot of people have been writing lately about "vibe coding as enabler" for exactly this kind of long-deferred personal project, and that's more or less what happened here. I [came back to the brewery guides earlier this year](/blog/brewery-guides/) and got to where I'd always wanted to get in a matter of hours instead of weekends.

On the way to a proof-of-concept explorer for the breweries, I ended up building something more generic — a [Directory Pipeline](https://github.com/hadro/directory-pipeline/) that can take just about any directory-like digitized volume, run it through a handful of steps, and spit out structured data that's more than good enough to start exploring. The brewery guides are one example output of that pipeline; the [Tulsa 1921 City Directory explorer](/blog/tulsa-city-directories/) is another.

## What's actually in it

The explorer pulls together a dozen volumes spanning 1896–1918, from two titles:

- **Tovey's Official Brewers' and Maltsters' Directory** (1899–1918)
- **Brewers' Guide for the United States and Canada** (1896–1898)

The source scans are held by the New York Public Library and the Internet Archive. Because the underlying directories are old enough to be firmly in the public domain, all of the extracted data is public domain too, released with no rights reserved.

Across those volumes there are roughly 9,800 entries, sorted into the same three sections the directories themselves used:

- **Breweries** — the biggest group, a little over 5,600 entries
- **Supply Dealers** — around 3,500 entries for the trades that fed the industry: everyone from makers of aerators and ammonia bottles to bottling machinery, cork dealers, and "artesian well supplies"
- **Maltsters** — a few hundred entries

Each row is one firm as it appeared in print, with the fields the directory recorded: the firm's name, its city and state, a street address when there was one, the little trade codes the directory used, and a flag for whether it was a newly listed firm that year.

## What you can do with it

The point of the thing is to make a century-old reference feel browsable instead of like a wall of OCR:

- **Pick a volume** from the dropdown to focus on a single year, and see field-coverage stats for that volume — a quick sense of how complete the data is, since not every entry in the original scans filled in every field.
- **Filter** down the left side by year, state, city, or category.
- **Search** for a specific firm, family name, or address.
- **Click any row** to open the full entry — and this is the part I'm most fond of — a link that takes you to the *exact spot* on the original scanned page where that entry appears.
- **Toggle the charts** for a summary view of what you're currently looking at.
- **Export CSV** of whatever your current filtered selection is, so you can take the slice you care about and do your own thing with it.

That click-through to the primary source leans heavily on [IIIF](https://iiif.io/). Every entry snippet is a IIIF annotation, and the "see it on the page" links are built with IIIF Content State, so a link doesn't just open the page image — it drops you at the precise coordinates of the line you were reading in the table. It seemed like a valuable, and honestly more intuitive, access point to a resource that most people would never sit down and page through in its 19th-century original form. If a tool like this nudges someone to engage with the underlying digital collection even a little more than they otherwise would, that feels like a win to me.

## How it gets made

Under the hood, the pipeline runs a two-pass OCR sequence: [Surya](https://github.com/datalab-to/surya) mostly for the bounding boxes, then Gemini for very high-accuracy text, and then a multi-pass matching step to align the accurate text back onto the right lines (inspired by, and using the algorithm from, [this paper](https://arxiv.org/abs/2504.00414)). A named-entity-recognition pass then pulls the structured fields — firm, city, address, and the rest — out of each line.

It is not perfect. There are still OCR and alignment errors scattered through it, and it's not meant to be a 100% surrogate for the content of the directories. But as a modern way in to the richness of this kind of source, I think it more than holds up.

## Why it matters to me

I can code, but coding for personal projects lost its allure for me a long time ago. It may lose it again once I get through the backlog of things I've always wanted to see in the world — but for now I'm cheerfully producing them. And if nothing else, this one lets me sit down and pull up the dozens of breweries that, a century ago, were all operating within a few miles of where I live.

It's still not the Brooklyn brewing map I've been daydreaming about all these years -- but it's a large part of the way there, and the rest is very doable. And, to me this is perhaps as or more important: the thing I built to scratch this long-standing project itch is usable for so much more. I didn't create a bespoke one-off digital humanities set of scripts, I think it's useful for many of my own other projects, and hopefully the projects others out there have as well. 
