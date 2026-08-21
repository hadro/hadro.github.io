---
eleventyExcludeFromCollections: true
---

# Directory Pipeline — a talk at Aboard, July 28, 2026

Cleaned transcript of <https://www.youtube.com/watch?v=_k_1Ci_Jejo>
Event page: <https://luma.com/aboard-p9g1>

Speakers: **Paul Ford** (president and co-founder, Aboard) and **Josh Hadro**.
Audience questions are marked **Audience member**.

Source: Whisper transcript, lightly edited for readability — filler removed, false
starts smoothed, misheard proper nouns corrected (e.g. "AAAF" → IIIF, "Shauberg" →
Schomburg, "Brian Fu" → Brian Foo, "Periano" → *Player Piano*, "hotly trusted" →
HathiTrust). Square brackets mark editorial insertions or genuinely unclear audio.
Timestamps are approximate and refer to the YouTube video.

---

## [0:00] Welcome

**Paul Ford:** Hello, welcome. My name is Paul Ford. I'm the president and co-founder
of the company Aboard. You are at our offices, and we build things — we build software,
we build software for clients, we build software for ourselves. We use a lot of AI to do
it quickly.

We also wanted to build a space where people could talk this out. This is a big,
confusing, messy and often hideous transformation in our industry, so we wanted a space
that would be warm and loungy and have lots of books and feel familiar. That's why this
is where you are. During the day we work for lots of clients — lots of business, lots of
insurance, lots of NGOs and civic work as well. Whatever you can do with software, we do,
and my co-founder and I have been running shops like this for a long time.

I have a background as a journalist and open access person, and I've gotten to know Josh
on and off over many, many years now — I was also an advisor to [Library Journal?
unclear], which I'd forgotten about. I'm surprisingly relevant.

So this is kind of a special event. Many of you are librarians. Josh is like, "this is
very weird" — he keeps seeing people from all different parts of his life. I think he
thinks he died.

Anyway, you're very welcome here. It would be great if you ate all the food — we take
what's left to food pantries, but it's better if you're the food pantry. Really make
yourself at home.

What we're going to do: Josh is going to talk for a little bit. I'm not going to ask him
too many questions, so I'll just sort of sit here awkwardly. He'll talk, and then we'll
open it up for questions. My sense is this is a group that probably wants to talk to each
other, so we want to make space for that. We'll be open for a while after, to let
everybody connect.

The things I'll announce before introducing Josh: this is one of a series of library
events. On August 18th we're doing a panel on AI in museums with folks from the Met and
formerly the Museum of Natural History. It'll be on our Luma page — you're on the list,
it's on our website, it's in our newsletter. I think we automatically subscribe you. You
can opt out, it's okay, but the information will come to you and you're welcome to come
back.

On September 15th we're doing a conversation with Julia Stoyanovich of NYU. She's the
director of the Center for Responsible AI. And then October 22nd — the date isn't totally
firm — the Public Data Project from Harvard, from the Berkman Klein Center, associated
with the Harvard Law Library. They're doing a lot of work about saving data that's being
destroyed by the Trump administration, and in particular climate data. So we're going to
do a preserving-climate-data event with a lot of climate data people, sort of as
customers for librarianship. That'll be a good one too.

So for the next couple of months, if you're looking and hurting for social activities,
here it is. My kids are in camp and my wife is here. This is a date for us.

The only other thing I'd say, in the interest of the business: we like to build for
civic works, sometimes pro bono, sometimes as a product delivery studio. So if you end up
with needs, or your friends do, this is a good place to get in touch. We're always glad
to talk.

## [3:53] Introducing Josh

**Paul Ford:** And now it's my privilege to introduce Josh Hadro, who I think almost
everybody here knows, but I'll go ahead and introduce him. It's always good to know where
people are coming from.

Josh has a pretty hybrid background. Your big library moment was as editor of *Library
Journal*, when you started to really lead in the field; and then fast forward — teaching
at Pratt, all sorts of stuff. But you are — let me get the title right — you told me you
changed. What is it?

**Josh Hadro:** Until Friday I was the acting chief of the Library of Congress Innovation
Division, also known as LC Labs. Now I'm a program analyst at the Library of Congress in
the Digital Strategy Division.

**Paul Ford:** I think in this room everybody's like, "oh cool, program analyst — yeah, I
think you're safe, we're good."

You were also managing director, which I don't think we talk about enough, of the
International Image Interoperability Framework Consortium. When somebody serves on a
standards body like that, that is a soldier of culture. That is difficult work, and I
remember when you took it over and how transformative and solid that was. An image
standard is maybe not the most rewarding work, but it is really important for the
culture.

So we're glad to have somebody here who is infrastructurally very dedicated to the data
layer as well as the access layer — making sure that patrons and constituents have access
to things in both a low-level digital way, but also in the classic sense of bringing
people into the space and giving them tools to explore and understand. It's very special
and we're very glad you're here. Let's get a round of applause for Josh. I'm just going
to hand it over to you. You're going to talk through projects and work, and how you're
balancing AI with the other things we just talked about. I've seen some of it, but I want
to learn more.

## [6:10] Josh begins

**Josh Hadro:** Great. Well, thank you, Paul. Thank you for the intro, and thank you for
being an open access advocate. Some of the things I'm going to talk about are how a lot
of the project work I'm doing these days really is just trying to finish projects that I
had in my mind, and that we were working on at NYPL, since 2013, 2015. Paul in that era
was a big booster and supporter and helped us to see. So I've just been grateful for your
support and thought since that time.

What I'm going to do is talk through some of the stuff that's been rattling around in my
brain for almost 20 years now: some background, some of the recent tooling I've built —
which is rooted in IIIF, that Paul mentioned, but I think is generalizable — and then I'm
going to get to a couple of demos of what I think are pretty neat ways of turning JPEGs on
a page into something that's interactive.

**Paul Ford:** I'm just going to interrupt. There are lots of chairs. I see you all
standing around. It's fine if you'd like to stay in the back and Google, that's totally
fine. But there are lots of chairs. No one will think it's awkward if you walk in — we'll
stop the talk and we'll all stare at you. But at least I feel weird.

## [7:37] What the pipeline does

**Josh Hadro:** So the tooling is what I call the Directory Pipeline. I call it a
personal digital collections project, partly because I work for the federal government —
I work for the Library of Congress. But as you may have heard other people who work for
the government say: this is not the Library of Congress's view on digital collections.
Maybe eventually it could be. Right now this is me talking to you as a person who's really
into open digital culture.

The pipeline I've been working on for about six months takes a digital collections item —
it uses something called IIIF manifests, we'll get into what that is, but basically you
give it a link to a digital collections item — and it runs it through a human-in-the-loop,
LLM-augmented set of steps. One of the neat things I'll talk about is that it generates
item-specific prompts using meta-prompting, to get really specific ways of extracting the
text out of that specific item or collection.

The result is: you give it a link, and the output is basically a data browser — a viewer
for whatever the item type is. I'm really interested in directories and travel guides and
things that have entry-like structures, but almost everything I've built is very
generalizable. It could work on manuscript material, handwritten documents, all sorts of
stuff. So I'll refer to things like OCR — optical character recognition — and there's
also handwriting recognition, HTR. A lot of this is all in the same tool.

**Audience member:** Can we take pictures?

**Josh Hadro:** Feel free to take a picture. Just don't [blame] the Library of Congress.

So that's the technical description. But really what I'm talking about is trying to get
from *this*.

*[Slide: NYPL Digital Collections viewer for Tovey's Official Brewers' and Maltsters'
Directory, 1915]*

This is a picture of a digital collections item, and this took a ton of work to do. There
are a ton of photographers and metadata people and a million people who put in a ton of
work to get here. But it's also an awkward way to work with something that was a really
beautiful travel guide or book. This is a brewery guide — there were all these breweries
in Brooklyn and New York, and in the late 1800s, early 1900s, there were these
directories.

What we're trying to do is go from that to something like *this*.

*[Slide: the Directory Pipeline data explorer for the brewery guides]*

Which is a little bit easier to engage with — a more modern interface to that same exact
thing. This is the same data that was on those pages, just in a really wireframe-y,
prototype version. It's a different way of helping people engage with that and lose
themselves in that book.

And importantly — this is something that's really important to me, and I think why it's
important to have librarians and archivists doing this work — everything I'm building
always roots you in the text. There's always a picture of the thing that you're talking
about. So I've selected the Nassau Brewing Company [in Brooklyn — you can see the building
from the S train]. There's a picture of the entry right there. Every version of the
different things I'm building roots you in that specific connection.

## Two things I think are new here

There are a couple of things that I don't think I've seen in a lot of the software
applied to digital libraries and digital archives.

The first is meta-prompting. I didn't invent meta-prompting, but the specific application
here is new to me. You can ask Claude or whoever to look at a JPEG and transcribe it. And
you can try prompting Gemini to transcribe something, but you're never going to do it as
well as it could be done. People are bad at it — they focus on the wrong things.

So what my pipeline does is sample selection. You figure out where the key is, where the
average page is; you hand-pick five or ten pages. Then you send that to an LLM and say:
design for yourself the OCR extraction prompt. Figure out whatever you need to do to
understand the layouts. And then figure out whatever you need to give me the exact JSON or
YAML schema. Instead of trying to second-guess the LLM — that's part of what this is
doing. Your job is just to pick the samples.

The other one is two-pass OCR. We're getting to a place where OCR is cheap. There are a
lot of different ways to do it, but the newer tools can't output bounding boxes. You saw
the image of the snippet — so I'm doing two passes. Old-school OCR — Tesseract or Surya or
whatever it might be — which gives you bounding boxes, but the quality isn't as good. And
then something like Gemini, which is near-flawless in terms of OCR, but doesn't have the
bounding boxes. You merge them together.

An amazing byproduct of that is that it's a guard against hallucinations. For a
hallucination to make it through this pipeline, two independent systems would have to
hallucinate the same thing. So a byproduct is that you're protecting yourself from that.

## Background

We sort of mentioned this already, but this is stuff I've been trying to get my brain
around for years and years. I worked at the New York Public Library. I ran digitization
there. I was part of something called NYPL Labs — one of the projects I'll talk about in
a bit. IIIF is a technology standard for sharing high-resolution images; I worked with the
British Library and the BnF in France and the Library of Congress, a lot of institutions
that are trying to figure out how to do good things with digital collections. Now I'm at
the Library of Congress — not speaking for the Library of Congress — but I work in digital
strategy there, thinking about some of these big questions, like how do we make these
things useful.

### 1. Looking at pictures of books is not the same as reading a book

I alluded to this: looking at pictures of books is not really great. It's better than
what we had before, and it makes us think it's better than nothing — but JPEGs embedded in
HTML is a very awkward experience. There's a lot of work that's been done over 20 years —
there are PDF readers and book readers on the Internet Archive — but people still need a
lot of activation energy to spend time with these books that we spent a million years
digitizing.

Here's an example. This is the Library of Congress. The screenshot before was at NYPL; I'm
not going to pick on NYPL, I will pick on the Library of Congress.

*[Slide: the 1915 Automobile Blue Book, Volume 3, on the Library of Congress site]*

This is a 1,200-page book, and it's an amazing resource. Before highways were numbered,
before there was a national highway system, before there were even state highway systems,
in 1915, if you wanted to drive more than your known distance — there were books. You
bought a book. If you were rich enough to have a car, you were probably rich enough to buy
these books that had 1,200 pages of turn-by-turn drives. So this is the drive from New
York City to Nyack, just listed turn by turn. Elder millennials, right — there's a meme
about how we remember printing out MapQuest directions. 1915 has us all beat.

But it's very hard to spend more than a few minutes with it on the Library of Congress
site.

My wife sort of distilled what I've been working on. I've been talking about digitization
for years, and a few months ago she said, "Oh, you mean you just took pictures? That's
what you mean by digitization?" She'd assumed there was all this other connection and
access. That was a really crystallizing thing.

I already showed this one — it's the same idea. It's a lot of work as it is. I'm not
picking on them, but we can do better. That's kind of what we're doing.

### 2. It's possible we in libraries have digitized too much

Related to that: we have a lot of stuff. We've been doing this for 20, 30 years in some
cases. There are millions of digitized books. There's a lot of investment — once you start
doing it, you've got to keep feeding the digitization piece.

But maybe a different way to put this: we haven't put commensurate effort into making
those things as useful as they could be. Figuring out ways to give people the handholds,
the access mechanisms. We've done an amazing job of digitizing and putting it online, and
I think we're ready for some of the next steps.

## [16:31] The thesis

So, getting into the thesis of the Directory Pipeline and the broader ideas. It's a talk
about AI, right? That's the moment, in all sorts of ways. But I really think in this
particular domain the value proposition is that we're on the cusp of this being completely
different.

It used to be impossible to get data out of digitized volumes. Then suddenly it was
doable, but you needed an R&D lab to do it — you needed expertise. And then with Stanford
NLP and some of these toolkits, you could do it, but you needed a fairly narrow set of
circumstances, and it was still a bunch of work.

I really think we're on the cusp of this being broadly applicable. We just need some work
setting it up and putting some interfaces in place. But I think we're on the cusp of
doable, cheap, and broadly useful.

I mentioned OCR, but that's a big piece of how I think about this too. Optical character
recognition — if you've ever tried to copy text out of a PDF, that's OCR in most cases.
But God forbid you try to copy text across a line break; then your computer might freeze.
OCR is amazing and it makes good-quality scans searchable. But it also has a lot of flaws.
There's a lot of bad OCR. We've spent years adding OCR to all these texts, and we think
it's valuable despite the flaws.

I think we can think about these data processing tools in that same vein. Even though
there will be some flaws, I think they will be incredibly useful despite all that.

## The catalysts

Some specific catalysts. I've been thinking about this for years, but a very local
catalyst: I'll talk about the Green Book project, but I was literally flipping through
this book with my kid. We were looking at entries near where we live in Brooklyn, and
using that as a moment to talk about how Brooklyn has changed, how the country has
changed. So: thinking about how easy it was to do that with this item, this reproduction
that I have, and how many other things there are that I couldn't teach her with, because
they're hard to get at.

Paul — and not just because I'm up here with Paul — but his piece really was a catalyst.
He basically said: the tools are great now, they really unlock some things. Sorry to
summarize.

**Paul Ford:** That's great.

**Josh Hadro:** That really prompted me to think, oh, I can also start building this. I
should.

There's a digital humanities guy named Mark Humphries who wrote a piece that got a lot of
attention in library circles, basically about how handwriting recognition is a solved
problem. Not that it's flawless, but that when you use Gemini 3 in particular for
handwriting recognition, you're getting quality that exceeds human transcription. Even
humans transcribing handwritten documents have a 1, 2, 3% error rate. Gemini is there,
basically. He's got a lot of evidence to back that up. And then there's some literature
talking about the techniques that I've stolen from — that last paper.

### [21:07] Vonnegut's barber

The last bit of background — well, two pieces. One is Kurt Vonnegut's *Player Piano*.
It's his first book. It's very weird. I don't know if I recommend it. But there's a very
minor character who's a barber.

The book is about automation. I'm sure this book has been relevant every decade since it
was written, but it's particularly relevant now. In 1952 they viewed automation as robots
— robots being built that were replacing people in industries left and right. And there's
this very minor character, a barber. They haven't built the haircutting robot yet, but
he's anxious about it. He can't sleep anymore. He keeps staying up all night thinking of
reasons why a robot could never cut hair — but then he figures out that actually it could.
He starts teaching himself some engineering skills. And in a very Vonnegut turn, he
becomes the person who invents the haircutting robot he was worried about at night.

I don't think I'm the barber in that metaphor, but somebody is. It's a metaphor I think
about a lot.

### [21:33] Navigating the Green Book

Okay, so this is the project that caused me to actually start building. This is from my
time at NYPL Labs, and this is not my project — it's rooted in the work of a ton of other
colleagues, some of whom are here.

Maira [Liriano] at the Schomburg Center in 2014 or 2015 proposed digitizing the Green
Books. If you haven't heard of them — you probably have heard of them — Maira should be up
here talking about this part of it, but they're travel guides for Black travelers from the
1930s through the 1960s. They're not rare items, but the New York Public Library had an
almost complete run. So she proposed digitizing it. We did it. We put them online. They
were public domain. Great — this is the system working.

A year after we digitized them, Brian Foo, who was a member of NYPL Labs, said: hey, I
want to do this project as an example of how we can use the public domain and get people
excited. He wanted to build an interface using modern tools to get people to engage with
historical artifacts — a mapping interface. Basically Google Maps, but for entries only in
the Green Books. So you would see the routes you would have to take if you were only
stopping at entries in the Green Book.

*[Slide: Navigating the Green Book, beefoo.github.io/greenbook-map]*

I had a minor role in this project, which was the data extraction. I was working on the
OCR and the extraction of the data. It was really hard. This was 2015 — ten years ago,
this was an extremely difficult project. We ended up doing a lot of manual data entry to
get the quality we needed to enable that digital interface.

We wanted to do all 23 volumes of the Green Books, but it was just way too much work, so
we ended up doing one volume. The University of South Carolina had also hand-transcribed
one volume, so there were two volumes we could work with. That's what Brian's interface
ended up working from. In some ways, what I'll show in a minute is the finished product —
the data side of this project that we didn't get to finish.

And just because it's fun, and I showed it before: because they were public domain, we
digitized all the volumes and put them out there in the world. These were well known in
Black scholarship circles — we didn't invent the idea of researching the Green Books, but
we did enable a lot of it. So there's a publisher out in California, About Comics, that's
been selling reproductions of the Green Books. There's a bunch of volumes; I have them up
here. To me, that's a great use of the public domain: finding items that are of interest
to somebody out there, and then doing something with it. Making a company about it.

## [24:08] The steps of the pipeline

Okay. The steps of the pipeline. These are generalizable, and then I'll show you the
Green Book and other travel guides explorer that I built with it.

*[Slide: Basic pipeline — download files → select sample pages\* → generate OCR + NER
prompts → run LLM OCR → extract entry data]*

The basic pipeline: the guided steps you go through with any item — Internet Archive, the
Library of Congress, the New York Public Library, basically any number of places that make
digital collections available. I guide you through the steps. You download files, and then
the human interaction piece: you pick the sample pages. It has a key; it's a directory
guide and it has abbreviations; it's a city directory. You pick the sample pages and a few
example layouts.

Then, as I said, it runs those samples through an LLM where it designs for itself the OCR
extraction tools — not the tools, the prompts. Then it designs for itself the data
extraction prompts. From there you just run the OCR, and then you run the data extraction.

*[Slide: Enriched pipeline — adds run layout detection → match lines → review alignment\*
→ extract aligned entry data]*

Then there's the enriched version. If you really want the most granular connection to that
entry on the page — which is what I was showing earlier — you add a step where you're
doing layout detection. You're defining those coordinates on the page, you're tracking
those, and then you're doing an alignment step so that you're aligning that OCR. That's
the guard against hallucination I was talking about. Then you've got a CSV with all the
data and all the coordinates in it.

Pipelines — we're talking about infrastructure. I'm not showing the code, because it's
really in the weeds, but the results of this — it's not super hard to run — are, in my
opinion, extremely engaging, and great ways to connect people to these library materials.

You get the data explorer, which I can show you in a second. For anything that has a
geographic component you can geocode those things, map coordinates, start viewing things
on a map — if they have addresses or states or whatever it might be.

I've been talking about this in terms of single volumes, but those prompts — the OCR
prompts and the NER prompts — can work at the collection level. If you have 35 volumes or
100 volumes running through the same pipeline, you only have to do that selection process
once, and then you get all of these data extraction pieces. You can build cross-volume
comparisons, which I'll show you in a second. That's the fun stuff.

## [26:59] The demos

Okay, so that's all the theory and the background. Here are the actual examples.

I'll start by calling it unsexy, but this most basic version is what comes out of the
Python scripts. It's just this raw, unstyled, wireframe version — but this is that set of
brewery guides I was talking about. It'll give you a little dashboard of what's in there,
but you can hide that. Let me pull that up a little bit — can you see that? Each one of
these entries, each row in this data viewer, corresponds to one of those entries in that
brewery guide.

The trick is then finding the right material that really appeals to you. But as I said,
the Internet Archive has literally millions of things that you will find interesting.
There's no lack of this. I was really interested in the brewery guide — that was the one I
used for the proof of concept.

### [28:11] The Green Books explorer

Maybe the one that's more interesting, and more valuable to researchers and scholars and
just data nerds out there, is the Green Books.

Talking to Maira, talking to some others — the Green Books have been digitized for, I
guess, more than a decade at this point. But there are other volumes. The Green Books
weren't unique; they were very popular. There was a movie, I think it won an Academy
Award.

**Audience member:** It won a bunch of awards.

**Josh Hadro:** Right. The Green Books are well known and well-trod territory. But there
are all these other guides, similar guides for Black travelers, that NYPL has and has made
available in the years since. That was the focus of this particular one.

I put a little more design emphasis on this than on the wireframe one, but that's part of
the idea here. These are all the different — so there's seven different publications, and
these aren't the only ones. These are the ones that have been digitized. But to my
knowledge, this is the first time these seven publications have been brought together in
any kind of relatively complete way. All told there's about 110,000 entries, from not just
the US — most of the US — but also some of these guides got into international territory.

There's also a fun little side quest I went on. As I said, NYPL has an almost complete
run, but I found one volume at the Library of Congress that was digitized, and that rounds
out the collection. The 1946 edition that the Library of Congress has was not represented
in the New York Public Library's collections.

I mentioned that I didn't want to make this an abstract data tool. The data is all public
domain — I put the entries on Hugging Face in case people want to do something with it.
But to me it's important to root people in the examples, in the typeface, in the
advertisements. There's a lot of beautiful materiality to — that's a funny way to describe
it, but you get what I mean — there's a bunch of beautiful stuff about the page elements.

So every time you open this page you get — there's always a little terror in having a
randomized shuffle on anything — but you're always getting three entries pulled from these
directories. You click on Charles Hotel; it'll drop you down into the guide, but it'll
also open up this entry viewer.

A really important thing that happens is that you not only get the snippet of the guide —
you can click on every single one of the entries. Every one of the 110,000 takes you
directly to the location on the page. I didn't know this page had this great ad, but look
at this. The entries have a lot of value, and so does everything else around them: the
typography, the way these are being described, the fonts in these advertisements. We
clicked on a Charles Hotel guide, but now I'm really interested in this Alfred Steakhouse
in Washington, DC.

Another thing to look at is how these appear across different volumes. You can see some of
them were listed, and other ones advertised. There are multiple entries for many of them.

So we'll close that entry. If you search for some well-known places like the Dew Drop —
which had many different iterations; iteration isn't quite right, there are many different
places around the country called Dew Drop. The most famous — I'm not a historian, but a
famous one — was not the one in Brooklyn, although there was one in Brooklyn. The one in
New Orleans. This appeared many times in the Green Books, but also across these other
publications, and you can see every year in which the Dew Drop is listed.

That's one of the things I'm trying to highlight: the fact that these appeared in many
locations, across all these different guides published by totally independent people.
You've got a little tool to search for the different variations. You can see how they
change the names; sometimes the addresses change slightly.

I built this little establishments view, which collapses all the differences, so you don't
have to look at all the individual entries. It gives you the little data bits on the right
side, so you can see at a glance which ones appeared in the most volumes across the set.
The Dew Drop restaurant in Brooklyn, in Bed-Stuy, appears — I guess it was almost 30
years, 1938 to 1966 — but was only listed in the Green Books. Whereas the one I mentioned,
the Dew Drop in New Orleans, cuts across not just the Green Books but also Travelguide and
Go.

Let me give you one more example. There are only a handful that made it into every one of
the seven publications, but one of them is this Ward Hotel. You can see just beautifully
filled out data there. You can click on each one of these and it'll take you to the right
entry, so you can click around and see the typography and the way it's represented in each
one of these guides. As I showed before, each one zooms you in to the right spot.

So that really gets to — as I said, and I keep saying, there are many other people who are
more expert on the Green Books. This is for other people to really mine and write about
and use, and hopefully discover new things. But the larger thing I'm interested in is
making this tool easier to get to, showing examples of things like this and saying: this
is very doable.

This entire thing cost $7 and a bunch of my time. Without the design elements, the brewery
guides one, I think, was $3 or $4. And that's only because I'm lazy and using Gemini.
There's absolutely no reason local models couldn't do all this, especially six months from
now.

### [35:51] The National Directory of Morticians

So this is the Green Book viewer — one among many. If you want the teaser of the next
thing, this is the next one I want to do.

I want you to picture in your mind how many pages you think are in the National Directory
of Morticians. Have a guess.

**Audience member:** What year?

**Josh Hadro:** Oh, great question. 1948 was a good year for the National Directory of
Morticians.

**Audience member:** *Six Feet Under.*

**Josh Hadro:** Yeah, right. Elder millennials and older will remember *Six Feet Under*. I
had that thought too.

This is almost 600 pages of listings of morticians around the country. Let me open an
example. The listings — first of all, look at that font. Look at this Alabama font.

Two things. Ten years ago, this ad that cuts across two columns would have blown up any
data extraction tool you would have tried to write. This would have been so challenging to
do. And now it's really just very straightforward.

But also, think for a minute about why each mortician listing lists the population of the
county in which they operated. That's such a *Six Feet Under* idea. It's just actuarial.
This is what's important to people looking up mortician data: a county of 10,000 people
that only has one mortician probably needs another.

So I'm going to work on the mortician one next. And I think you should all go find an
item. Let's talk. The source code is all open. Let's have a world in which everybody's got
a data viewer for their weird interests. What a beautiful world that would be. Thank you.

## [37:23] Conversation with Paul Ford

**Paul Ford:** I'm going to ask kind of one big question. It's going to be my only
question.

Even though you're not here officially in that capacity, you do work for the Library of
Congress. The Library of Congress publishes vast sets of resources around librarianship —
how the TIFFs must be uncompressed, and so on. There's a real culture of librarianship
around how to deal with digital access. And it feels like you're now about 20 years ahead
of what those web pages can accurately describe. It feels like we're not there yet.

So help me close that gap. Because you just told everybody, hey, let's go do this — and
there are a lot of librarians in this room. There's a process that used to be applicable:
I'm going to have uncompressed TIFFs, and they're going to be 24-bit, and you're going to
want to know all that stuff. And that is there for this new world. And not everybody is
you. So how do we start to close that gap? What are the missing pieces? If you could
publish one standard, one thing that everyone could use to get started, what would the
shape look like?

**Josh Hadro:** Honestly, the answer is a very wonky answer. But IIIF really closes a lot
of that gap. It makes it possible for libraries to just deal with publishing their
archival TIFF — the one that's a gigabyte per page — and then if they use IIIF, which is
this technology standard for sharing high-resolution images, you can share arbitrary
subsets of those. Little snippets, but also lower-quality versions.

So a person doesn't have to go download 544 images of a morticians directory — that's 400
gigabytes. Instead you can just download much smaller versions of it. It's a growing
standard, and that helps. If libraries use the same technology, all of a sudden everybody
doesn't have to build or redo their infrastructure to do something like this. So that's a
very wonky answer to closing the gap: libraries should be advocating for IIIF.

**Paul Ford:** No, but you know, AI keeps acting like everything is brand new. And so I
think there's something interesting to extract there, which is: no, the standards we've
been using forever are still perfectly valuable. They're just a little faster to
orchestrate than they used to be. But don't think we're throwing them all away. We're
going to use IIIF, the metadata standards are going to be similar to the ones we've used
before, etc., etc.

**Josh Hadro:** Yeah, that's a big piece of this too. I maybe was a little snarky about
the previous generation of digital collection building — that was a Herculean task, and
the metadata effort that went into making these things findable at all, literally just a
title and an author and a publisher, that is amazing. And yes, the standards that make
that consistent across institutions are now going to bear a lot of returns as AI tools
start wanting to work.

### [40:36] Taxonomy and metadata

**Paul Ford:** I promise this will be my real last question. But what about taxonomy and
metadata extraction in this world? I saw a lot of named entity recognition — would you try
to do LOC subject headings using Gemini? A lot of what you're showing is data. When does
it get to metadata, and to kind of automated librarianship?

**Josh Hadro:** I think that's really where it's going to get item-specific. Again, I'm
really not hostile to cataloging and processing, but I also think we can do other things.
We don't necessarily need Library of Congress Subject Headings for a personal project like
this. That doesn't mean the Library of Congress shouldn't be using Library of Congress
Subject Headings. But I think — I'm going to regret saying this — let a new way of
describing it bloom, for each project. The facets are going to be different for a
different tool.

And that's part of what to me is the very awesome human element of it. We're not just
letting the robots loose. You are going to sit there with a thing that you're interested
in and think: whoa, how would I want to start browsing through this? Is it by state? Is it
by population size for the morticians directory? Am I going to do little fun bubbles?

### [42:06] The New York City map

I'll show maybe one last thing, while people think of other questions. I did do one
version of this site that is just the entries in New York City. This is the data limited
to New York City. I wouldn't geocode the whole country, because historical geocoding is
very fraught. But New York City has been fairly stable since the 40s, 50s, 60s —
obviously not completely stable, but directionally stable. So you can start building, for
this little viewer, the neighborhoods — that was the facet I really wanted to look at.

Let's see where we are. There are a ton. It was not a hot spot for — yeah, I think their
Pete's restaurant is right behind here.

**Audience member:** Yeah, Pete's.

**Josh Hadro:** So I trust this for New York City. I wouldn't necessarily automate this
for everything.

## [43:22] Audience questions

**Josh Hadro:** People who are not me — are there any questions?

**Audience member:** Hi there. You made a distinction between building for personal versus
building for institutional. When thinking about standards — with a personal project you're
able to do whatever standard suits your fancy, but when you're working with an
institution, you don't have that luxury. So I was wondering, maybe using your work at the
Library of Congress as an example: how would you go about building something like this, or
pitching something like this, in that institutional setting, where there are so many other
factors to consider?

**Josh Hadro:** At the Library of Congress — and I think this is probably true anywhere —
pitching something like this coming in raw, or orthogonally to other stuff, maybe would
work if you had a leader who was really into experimentation. But the answer is: find the
project that has been annoying people for 10 years that this helps solve.

There's probably some aspect of one of these things — I'm trying to think of a very
specific example off the top of my head — but that data extraction we were talking about,
just raw data extraction, is the root of many, many people's problems. There's somebody
who's been around for 10 years who's been annoyed that something doesn't exist. Find that
person and build that thing, and that solves a couple of problems at once. You made
somebody really happy. You've got an advocate. You've got somebody who's championing this
idea. You solve the problem. Leadership loves that. You make sure that it's a sanctioned
problem. That's what I would say.

### [45:14] AI hesitancy

**Audience member:** Along the lines of institutions — what kind of pushback do you get
because of various bias against AI, or the sort of voodoo kind of stuff, the way people
look at AI?

**Josh Hadro:** I didn't track it that closely, but I probably didn't use the word AI. I
may have used it once at the beginning. I basically don't use the word AI unless I'm with
somebody where that's the thing that will be appealing to them. AI is a term that
immediately gets people's haunches up. It's also so broad as to be mostly meaningless.

Other things — partly this is very specific to my context, but this isn't my first rodeo.
I keep saying I've been thinking about this stuff for 20 years, and I'm doing it
thoughtfully, understanding the pitfalls. I've been working with bad OCR for 20 years. So
leading with that: there are guards against hallucination, but otherwise this is better
OCR. Basically just demonstrating that you've talked through where the failure points are,
that you brought some expertise to it — so you're not just trying to sprinkle AI dust on
something for the sake of it.

To me this is solving those big-picture problems. We can do something with the pictures.
We can do something that creates an interface that's engaging.

So I don't know if that's sidestepping the AI hesitancy problem. But the analogy I think
about all the time is that this is moving much, much, much faster. If you think about the
resistance to Wikipedia in 2006 — there are similar tenors to the conversation, where
people were just constitutionally opposed to it. Now, ask those same people what their
views are: I bet if nothing else, they don't care anymore. They've come down from the
ledge.

It's moving a lot faster, so that's part of the difficulty. It's hard to keep up. ChatGPT
3.5 or whatever in 2023 was bad — it wasn't good enough to do this stuff. It was bad in a
way that I think people understood. A lot of people haven't updated their priors. That's
part of the difficulty I encounter: just showing that the stuff we're talking about came
out two weeks ago, and isn't that.

### [47:44] Semantics, embeddings, and subtext

**Audience member:** One of the last things you mentioned, with the morticians — now
you're not just looking at data, you're looking at the subtext, or the context of what's
happening. You've got data extraction, but now you're taking a deeper read, not just
looking at the text on the screen but at what the relationship is, what's happening at a
deeper level.

I'm wondering, with all this data you have, what are your thoughts on what the next step
is beyond parsing through it as a data retrieval tool? In other words, leveraging semantic
understanding, semantic relationships. What could be unearthed that could really help you
understand this text in a deeper way than people ever have?

**Josh Hadro:** Okay. As I said, I'm really into these guides — that's a reference card,
right? I like that one, but this applies to tons of other stuff.

Maybe the way I'll answer your question is that I'll plug another thing, and this I do
work on for work, and I think I'm allowed to pitch this. This is a cool thing that your
tax dollars are supporting, and I think it's another good use of AI. It's a collaboration
between the Smithsonian, the Library of Congress, and the National Archives, and basically
we're using AI tools to look at all the stuff we have in our various collections from 1770
to 1810, the founding period. We're doing similar sorts of things — data extraction. Let
me see if I can find a better slide. Here we go.

Everything we're doing is on Hugging Face. We run LLM OCR on all the newspapers from that
era, on all the pension files of the war widows and the children of the soldiers. And in
that context, the next step is embeddings — we're doing semantic search.

We're a little skeptical of just wanting to slap a RAG chat button on top of everything,
but we're also not *not* doing that. We're doing it a little more roundabout. What we don't
want is an LLM just synthesizing the answers that it finds in Chronicling America, because
there's a ton that isn't in there. But if we can give it some of the context and say,
these sources are a lot of the primary documents from that era but they're not all of
them — can we faithfully represent that?

So yeah, we're doing a lot of text embeddings, trying to figure out if multimodal
embeddings are a useful thing. Partly it's about figuring out who the audience is. For the
[Revolution Crossroads] project it's historians — we're trying to unlock cross-connection
stories among materials for historians. For my thing, honestly, I don't know exactly who
I'm pitching this to. I want people to work with it, but partly I think I'm advocating that
libraries should do this stuff on behalf of their patrons.

**Audience member:** I just thought — you could launch this incredible thing. It's not
even about unlocking it, it's about how you walk through the door.

**Josh Hadro:** Yeah, I mean, a RAG interface on it would probably be useful to a lot of
people. I don't know why I'm being a Grinch about RAG tools; I think that would be useful.
People find chat-style and natural language interfaces a useful way to do it. It just
feels weird to me — I would never do that with these materials, it feels weird. That's not
how I'm engaging with the page material, with the way the entries are, having the context
where you're reading it and understanding what these are. I don't think chat style speaks
the right language for that.

### [52:14] What's the state of the data?

**Audience member:** Can you tell a little bit more about the state of the data? You
mentioned a lot of the books are basically images — but how many of them are parsed? It's
interesting because you show locations, and in other books there might be tax information,
in other books there might be other information. If I'm ready to go somewhere and start
merging this data and making good models, I start seeing more and more information. I like
your layer, but what other layers are there right now? I'm going to parse my textbooks,
I'm going to parse other books, to create a full picture.

**Josh Hadro:** So the thing that I've built — if I'm understanding you — is really geared
toward those directory-style entries. This is a set of Python scripts geared toward that.
I should have — the link is in the slides, and I'm not sure there's a way to get to the
slides right now. But there are people who forked this and turned it into something where
you just run the PDF.

**Audience member:** The question is more, for data enthusiasts: is there any place to
understand what kind of data is available for this specific moment, for this specific
object, for this specific place ID or object ID — how do you describe what process works
for indie enthusiasts?

**Josh Hadro:** The closest thing I can think of that would answer your question is
Wikidata. There are many people who are tying digital projects like this to Wikidata,
minting IDs or tying them to existing IDs. There are name authorities and authority files
in the library and archive worlds, but they're not geared toward just the digitized
materials; they're broader than that. So Wikidata is one source where people are doing
that — it's hit or miss, it's very spotty in certain ways. Museums are also doing a great
job connecting this stuff to Wikidata.

The other thing I'd say is that I've put all the data I have on Hugging Face — all the
Green Book data is on Hugging Face. I think you've seen more and more humanities or
digital humanities and digital scholarship people try to use that. It's not searchable in
the way I think you're maybe trying to get at. There's not one place where you can say, I
want everything about this subject at this moment, available from the libraries. I think
we're not quite there. There's HathiTrust and Google Books for the book side, but there's
no universal entry point yet. The Internet Archive is really big — they have a lot of
stuff.

### [55:08] Funding for independent work

**Audience member:** For those who are curious about building off this work, or seeking
funding for independent research — are there organizations that you recommend, and how
would you think about evaluating partnerships in that sense? A lot of people have a lot of
opinions and perspectives, so I'm curious about your thoughts.

**Josh Hadro:** I've been at that exact issue lately. The next thing I want to do, besides
the morticians thing, is take that work and apply it to all the city directories from New
York City and extract all the data in all of them. And if I build a model for city
directories in New York City, there's no reason it wouldn't work for most of the cities in
the country.

But I'm at a place now where this is no longer a three-dollar thing. If I tune a model,
it's going to be 40, 50 bucks a shot, probably a couple of times. So I'm trying to figure
that out.

The answer is, unfortunately, that there aren't a ton of micro-grants. I think Villanova
has one, but they basically want you to be a historian. They want scholars, and I'm not —
I'm a practitioner. The Metropolitan New York Library Council, metro.org, they're mostly
for digitization grants, but they have a micro-grant system.

The answer is there isn't a lot of funding set up for this level. If you need a hundred
thousand dollars, you can talk to IMLS — or, well, I used to be able to talk to the NEH. I
am just arriving at this place where I want somebody to fund this at a thousand dollars. I
don't need forty thousand dollars. I might just need three hundred dollars.

I wish I had a more satisfying answer. I don't. But if somebody knows, please enlighten us
all, because that's where I am. I need to learn.

**Audience member:** [On big companies doing the parsing] — for a lot of the companies,
compute is not the problem, but data is very valuable. Would you be comfortable if someone
just did the parsing for you and gave you a data set?

**Josh Hadro:** Maybe to the comment about partnerships — that would be a wonderful thing.
If there's spare compute, or pro bono HPC, high performance clusters where digital
humanities people could use somebody's Mac tower at night. Maybe we could bootstrap that.

For me, it's hard. I'm sure there are people who would be very into just handing off a
Python script and saying, run this and give me the data. I really want to mess with it —
part of this is me going through the iterations. But I think somebody would absolutely
value just handing it off.

## [58:14] Closing

**Josh Hadro:** Any more questions? Awesome.

**Paul Ford:** So look, that was fantastic. Thank you. Let's give a big round of applause.

I know it took a lot of time. So what do you really need? Do you want people sending
emails to you? Where should people get started?

**Josh Hadro:** Selfishly, I would love people to try it out. If you have Python facility
and you're interested in this, I would love other — a few people have tried it, but I
think it is reusable and valuable, and I would love validation of that. That's one thing.

If you're interested in this city directory parsing, I would love to build a little cohort
of people who just want to do weird New York City data challenge stuff. I'm sure there's
infrastructure for that, but maybe now is the time to build some energy into things like
that.

**Paul Ford:** I will throw out: if you want to do a hack day here, some weekend or some
evening, we will make sure there's food and offer some refuge. I think it's kind of in
range; I think we can do that. So if people want to do that, talk to Josh, and we'll work
with some stuff in the future. If you want to make it happen, let us know.

So let's do that, and make all the directories come alive. And now let's give a round of
applause.
