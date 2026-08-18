---
title: "The Green Books and Other Black Travel Guides, Now as a Dataset on Hugging Face"
date: 2026-07-16
description: "105,701 listings from 45 volumes of African American travel guides published between 1930 and 1966, released as CC0 data."
tags:
  - green books
  - travel guides
  - directory pipeline
  - public domain
  - hugging face
  - nypl
  - iiif
  - ocr
  - ner
  - open data
---

Short version: the data behind the [Green Books explorer](https://hadro.github.io/green-books/all-volumes) is now a dataset on Hugging Face.

- **<https://huggingface.co/datasets/hadro/green-books-travel-guides>**

Using my [Directory Pipeline project](https://github.com/hadro/directory-pipeline/), I've pulled out 105,701 listings from 45 volumes of African American travel guides published between 1930 and 1966 — including hotels, restaurants, tourist homes, service stations, and beauty parlors that would serve Black travelers during the Jim Crow era. The Green Book is widely known (23 editions, 63,590 of the listings here), but the dataset also covers Travelguide, Go, Guide to Pleasant Motoring, Hackley & Harrison's, The Travelers Guide, Smith's Tourist Guide, and the NHA Directory.

I oversaw the digitization of these volumes when I worked at the New York Public Library, at the suggestion of Maira Liriano at the Schomburg Center, and I've written before about [Navigating *The Green Book*](https://hadro.github.io/blog/manufacturing-impact/), the public domain remix Brian Foo built from them back in my NYPL Labs days. That project mapped a subset of the listings. This is all of them, from every volume, with the fields split out: name, proprietor, category, normalized address, city, state, phone, rates, notes, and a IIIF reference that connects every entry to its precise spot on the source page.

It's all public domain data -- directory data is factual, 44 of the 45 volumes are unambiguously public domain in the US, and the one orphan work in there is flagged as such, but I'm confident the factual information from that volume like the names and addresses of establishments is public domain as well.

The data does have caveats: it was all transcribed by a vision-language model, not hand-transcribed. On the denser multi-column pages it sometimes slides a value into the wrong column, and sometimes the alignment of the OCR with the spot on the page is off. Every row carries its IIIF link for exactly this reason — if an entry matters to you or your research, go look at the scan. As I say in the front-matter of the forthcoming viewer: I see this as a modern access point to these volumes, not a replacement for them.

As I said, everything here is an output from the [Directory Pipeline](https://github.com/hadro/directory-pipeline/), same as the [Tulsa city directory work](https://hadro.github.io/blog/tulsa-city-directories/) and the [brewery guides](https://hadro.github.io/blog/brewery-guides/).
