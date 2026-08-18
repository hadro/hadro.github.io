# Directory Pipeline — CNI Spring 2026 video brief

Cleaned transcript of <https://www.youtube.com/watch?v=SFvmz0wIwpg>
CNI post: <https://www.cni.org/topics/special-collections/directory-pipeline-a-tool-for-turning-historical-digital-collections-into-structured-data>
Slides: <https://www.cni.org/wp-content/uploads/2026/03/Hadro-Directory-Pipeline-Spring-2026.pdf>

Single speaker: **Josh Hadro**.

Source: Whisper transcript, lightly edited for readability — filler removed, false
starts smoothed, misheard terms corrected against the slides and the project data
(e.g. "AAAF"/"AAIF"/"triple F" → IIIF, "Brian Fu" → Brian Foo, "founding box" →
bounding box, "QWAN 3.5" → Qwen 3.5, "Clod code" → Claude Code, "Raul J. Lopsis" →
Raoul J. Llopis). Timestamps are approximate and refer to the YouTube video.

---

## [0:00] Introduction

Hi there. My name is Josh Hadro, and I'm very excited to be able to present to the CNI
audience about this Directory Pipeline project I've been working on recently.

I work for the Library of Congress, in the Digital Strategy Directorate, but I want to
make very clear that this is a personal digital collections project. This is a nights and
weekends thing, and not by any means an official output of the Library of Congress.

## What the pipeline does

So let's start here: what does the Directory Pipeline do?

It takes any digitized item that has a IIIF manifest. It works specifically for
directory-like objects — but any directory-like object with a IIIF manifest — and runs it
through a series of LLM-augmented steps to produce structured data.

The primary output of the pipeline is a web page with a data explorer on it, basically a
CSV viewer. Every row in that data explorer corresponds to an entry in the underlying
work. So if it's a city directory, each row is a person represented in that city
directory. Each column is one of the data fields associated with that entry.

Very importantly, though, I want to stress that every entry in the data explorer also has
an image of the underlying entry itself. The image of the entry is carried with it. So
this isn't an abstracted data effort at all — it's very much rooted in the image of the
text itself, for verification and for all sorts of things that are useful to researchers.

### [1:55] An example: the Woods Directory

This is an example of the interface I'm talking about. This is wireframe output for a
work we'll talk about in a bit, called the Woods Directory — a directory of Black-owned
and Black-serving businesses in New Orleans in 1911 and the 19-teens.

Each entry here is one of the entries in that business directory. I've selected Miss
Elizabeth Armstrong, who was a dressmaker on Seventh Street. You can see on the right all
of the data the pipeline has extracted from that entry. But very important, there at the
top, is the image of the heading of that entry: "Miss Elizabeth Armstrong, Dressmaker,"
with all the other data a little bit below that. That's true for every entry in that
work.

## [2:57] The two things I most want to highlight

Let me front-load the two things I think are most useful to other kinds of projects in
this vein.

**One is the meta-prompting strategy.** The pipeline prompts the user to select a handful
of example pages from a given work, and then asks the LLM to look at those sample pages
and design for itself the OCR prompt — the text extraction prompt — and then the NER
prompt, the data extraction prompt. It designs the prompts that will be most effective at
extracting text, and extracting the data from that text, for that specific work.

**The other is this two-pass strategy.** Older OCR tools are very good at bounding boxes,
but the quality can be hit or miss, especially on certain kinds of materials. The newer
batch of LLM-driven OCR tools are extremely high quality — they're even doing handwriting
recognition with really low error rates — but you can't get bounding boxes out of them.
So I've landed on a strategy of taking the bounding boxes from the older tools, the text
extraction from the newer tools, and then a post-alignment step that does a very nice job
of sewing those things together.

## What this is for (and not for)

More generally, we're talking about any IIIF-compliant directory work. It's mainly for
directories, gazetteers, and really highly structured works. As many or most of you will
know, those directories are very easy for people to read, but a lot of the time there's
information latent in the structure of the pages. That has historically been very
difficult for data extraction purposes — headings that carry across pages, ditto marks,
all sorts of conventions that were used. This pipeline works really well for all of those
different kinds of things.

It's less useful — it's not really meant — for generalized tabular data that ends up in
print works. But it does work really well for handwritten documents. If you have
manuscript material where there are basically entries or entry-like items in handwriting,
the Directory Pipeline does work really nicely for that sort of thing, in my testing.

## [5:15] The thesis

The main thesis, if I had to boil this down, is something like this: I think the tradeoffs
have really shifted, and there's been a real sea change in the last couple of months
especially.

For digitized works or digitized collections, it used to be basically impossible to do
this kind of data extraction. Then maybe it was possible, but it was hard and expensive
and therefore not that useful. Then suddenly it was more doable — you could do it on
commodity hardware — but especially for natural language processing tools, it was maybe
only useful in narrow circumstances. It certainly couldn't be applied to arbitrary items
in our digital collections.

I think we are now on the cusp of tooling that can apply this kind of data extraction to
essentially arbitrary kinds of works that we have in our digitized library collections.

I've mentioned OCR a lot. I think about this a lot in the context of OCR, where we made a
decision as an industry many, many years ago that, despite the flaws in the OCR we
generate, it is a valuable thing to present to users in many cases — maybe most cases.

I think there are similar opportunities for some of these data extraction options and
tools. We will never get 100% accuracy. But if we think of it as something like OCR — as a
supplement and an augmentation — I think there's a lot of opportunity to think broadly
about how this could be useful to researchers and patrons. For many of our materials, the
question "is this useful despite its flaws?" is getting closer to yes.

## [7:15] Background: Navigating the Green Book

A quick note on the background, and what prompted this.

I was very fortunate to work on a project when I was at the New York Public Library called
Navigating the Green Book. This was developed by a really talented developer and designer
named Brian Foo, who took the data from the Green Books and created a mapping interface,
so that people could experience the data of this artifact of segregation in modern mapping
tools.

I was fortunate to work on the data extraction part of this, to supply the data for the
project. In 2016, as much as we wanted to, it was very hard to do. It essentially ended up
being a manual transcription effort — using some crowdsourcing tools, but still a manual
effort to get the data out of these books.

This idea of being able to extract the data coherently out of all these different volumes
is something I've wanted to work on for about 10 or 12 years. And finally, I think the
tools are there to do this responsibly.

## [8:27] The steps of the pipeline

The actual steps of the pipeline are these. It takes the IIIF item, downloads the images,
prompts the user to select some samples, and then — based on those samples — generates an
item-specific OCR prompt and an item-specific data extraction prompt. Then it runs through
those processes: the optical character recognition, then the data extraction, and delivers
you the results.

The enriched version of the pipeline — the richest version of this — just adds an
additional step that does the bounding box detection. You add a step of detecting bounding
boxes, you do the same text extraction and the same entity extraction, and then you align
all of those things together, so that you get the kind of viewer I was talking about at
the beginning.

And that's the fun stuff, to me. You can have these data explorers. You can have map
interfaces, with a geocoding step — anything that has an address field, and where the
underlying maps haven't shifted too much, you can do some fun geocoding stuff. You can
start doing cross-volume comparison: entries that appear in multiple editions of a work,
you can start calling those out and building interfaces around that.

## [9:49] The Woods Directory in depth

I want to talk about this one example in a little more depth. The Woods Directory is the
one I mentioned at the front. It's an incredible resource of Black and minority owned and
serving businesses in New Orleans. The Library of Congress has digitized the editions from
1911, 1912, and 1913.

When I was researching materials to help me develop this Directory Pipeline, this is one
of the ones I was looking at. This is what it looks like on the Library of Congress web
page. And this is what a given page looks like.

It has a layout that makes it very difficult for older generations of extraction tools to
work with: a headline that cuts across two columns, then two columns of prose, and then
two columns of entry material. That can really trip up a lot of OCR engines.

But I really want to highlight this. When I was searching around about the Woods Directory
and how it's been written about and perceived — a lot of people write about it. One
genealogist wrote about it in 2013, before these were digitized. And like a lot of these
kinds of reference works, that blog post generated a lot of interest. All sorts of people
were in the comments talking about their own relatives who had businesses represented in
this directory, or who had pictures of their relatives as part of the advertisements in
these directories. All these people just hoping, trying to find ways that they could see
these items that are held in a couple of research libraries.

### [11:49] Finding the relatives from the comments

If you take any of the names that people mention in that blog post and go into the
Directory Pipeline output that I have, you can find them very easily.

So I want to show you an example. If you search for "funeral" — one of the comments was
talking about a relative who owned a funeral company, Boyer & Taylor. This is the example
here, the Boyer & Taylor Co. entry.

There are all sorts of details in this entry, but this is what I want to show. If you
click through from this image — this is just the title of the company — we get a IIIF
viewer that takes us to the page context. And on that page we can see the names, and see
the images of the people who were named in that blog post. In this particular example it
was Ella P. Taylor and Raoul J. Llopis, who were associated with the Boyer & Taylor
funeral company.

That's just one example that I found in one reference work, and instantly I was able to
find the relatives of the people who were mentioned. There are so many examples of that
kind of thing across all the different directories and city guides and phone books that we
digitize and make available as research libraries. A really awesome example, I think, of
what the pipeline can do.

## [13:15] How the prompts figure in

I've mentioned this previously, but I want to talk a bit about how the prompts figure into
the pipeline. Again I'll use the Woods Directory as the example.

I took a couple of sample pages and asked the LLM to generate for itself the OCR prompt
that would best extract the text from the work, and then to design the data extraction
prompt that would best extract the data from the different entries in the work.

This is a screenshot of the OCR prompt. You can see it talks about the layouts and some of
the quirkiness of them: that it's most commonly a two-column layout, but that the items at
the top of the pages sometimes cut across, and those were always recorded as prose
paragraphs, and then later on the page the actual entries appear. Just a little bit of
that prompting went a long way toward appropriate extraction of the text from that work.

That feeds into this item-specific data extraction prompt. It's generating a schema that
is specific to the work — capturing the volume year of whichever one was being reviewed,
the category of the business, the subcategory that appears sometimes, the name (sometimes
proprietor is a little bit different from, or in addition to, the name), address, phone
numbers, and meeting schedules, which was really useful for some of these directory works.

So it gives you a sense — and this would be completely different for any other kind of
work that we passed through the pipeline.

## [15:20] The human in the loop

Just a couple of screenshots of the human-in-the-loop piece of this.

This is the interface the pipeline presents to ask you to select a handful of example
pages, which it will then use to generate those prompts. You can resize this, and
generally you want to pick representative pages. Also, if there's a page with keys on it
that describe what's going to appear in the work, that's what you want to select here.

And then this is the alignment view. If you want to review the alignment of the older
bounding boxes with the newer generation of OCR, you can do that. If it ever misses a
section, you can draw boxes here and trigger a new round of OCR. But generally the
alignment is working extremely well — I'm reviewing the alignment, but I'm not doing a lot
of custom work in here.

## [16:06] The actors in this pipeline

Maybe on a final note, let me talk about the different actors in this pipeline.

I talk a lot about the way the LLMs are working, but the **people** working on this
pipeline are bringing a lot to it. Particularly, they're bringing their curiosity to bear.
They're exhibiting agency and judgment in terms of what they want to run through this
pipeline, and judgment in terms of what the review criteria are. They're doing QA and
review of the prompts, to make sure it's going to capture the right things. And then
they're looking at the outputs and making sure this is potentially useful to a researcher,
to a community.

The **LLM** is obviously a major actor in this. The LLM is doing that meta-prompting
strategy. It's doing the OCR extraction based on that prompt. It's doing the data
extraction. There's also a mechanism for handwriting detection: if it detects manuscript
material, it will kick it to a slightly higher quality model, so the handwriting
recognition can be handled capably.

And then there's just some **plain old computer** work happening. There's a ton of file
management. There's a ton of scripting. There's spread detection and column detection
baked into the pipeline. The basic layout analysis and the older bounding box
identification are all just happening on basic hardware. And the IIIF aspects of this —
creating IIIF annotations and content state — that's all done through the kind of plain
old scripting we've appreciated from our computers for decades.

## Other outputs, and what's next

I've run a number of other things through the pipeline. I talked about the Woods Directory
here, but there will be links in the slides to the Green Books — I've done a project to do
a similar sort of thing on the Green Book travel guides. I've also done the same kind of
data extraction for a series of brewery guides: business directories of breweries and
maltsters from the late 19th and early 20th centuries. And here is the link to the
Directory Pipeline code itself, in case that's of interest.

[18:37] A final note: I mentioned I've been using Gemini for the OCR and the data
extraction. I find it to be a great balance of capability and cost. But a next phase of
this that I'll be looking into is figuring out how to do this almost entirely locally —
using smaller models like Qwen 3.5 that can run on more commodity hardware. I think it's
probably possible, especially in the coming months, to remove the formal paid API aspects
of this.

So if you're interested, please do get in touch. I'm happy to direct some of this research
and exploration in ways that would be of use to people, and please do let me know if there
are other areas you'd find useful to look into.

## [19:36] Readings and disclosure

Finally, a handful of readings that really inspired all of this.

And a disclosure: I do use Claude Code to write code, and I use Gemini for the data
extraction — but I did all of this presentation myself. No AI was used in the creation of
these slides, for better or for worse.

Thank you very much for watching, and for your time, and for the opportunity to talk a bit
about the Directory Pipeline. Thanks so much.
