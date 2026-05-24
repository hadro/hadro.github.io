---
title: "Looking at NYC 311 Complaint Data"
date: 2021-10-15
description: "Using NYC open 311 data to examine suspicious patterns in how quickly NYPD-related complaints are closed."
tags:
  - data
  - nyc
  - nypd
  - 311
  - open data
  - data journalism
  - data viz

---

*[This post was assembled from a Twitter thread in October 2021.]*

---

I was curious about the claims made here re: NYPD closing out complaints in less than 5 minutes [Note: the original tweet I was quoting seems to be gone, but that quote tweet was itself referencing this [tweet from then NYC Council Speaker Corey Johnson](https://web.archive.org/web/20211013153557/https://twitter.com/NYCSpeakerCoJo/status/1448304238355009545), accusing NYPD of falsifying responses to parking complaints], and since NYC makes @NYC311 data openly available, I thought I would take a look. The number of 311 complaints closed in less than 5 minutes has increased a lot since the pandemic!

[![Map of NYC 311 parking complaints closed in under 5 minutes, showing unusual clustering patterns by community board](img/nyc-311-under5min-map.jpg)](img/nyc-311-under5min-map.jpg)

But it's more than just closing tickets in < 5min -- if you look by community board, you see a lot of clustering of resolution descriptions that sure looks a bit funny. For example, CB6 in Brooklyn has seen a lot of "not our jurisdiction" closures ramp up in the last few months.

[![Table showing 311 complaint resolution descriptions for Brooklyn Community Board 6, with suspicious clustering of identical closure reasons](img/nyc-311-cb6-brooklyn.jpg)](img/nyc-311-cb6-brooklyn.jpg)

Here are the other 3 boroughs, which all exhibit this to some degree when you look at complaints closed out in under 5 minutes. [Ed note: When I published this to Twitter, I definitely had Staten Island in there, but the Twitter archive didn't seem to capture that last tweet]

[![NYC 311 complaint data showing fast-closed complaints in Manhattan community boards](img/nyc-311-other-boroughs-1.jpg)](img/nyc-311-other-boroughs-1.jpg)

[![NYC 311 complaint data showing fast-closed complaints in Queens community boards](img/nyc-311-other-boroughs-2.jpg)](img/nyc-311-other-boroughs-2.jpg)

[![NYC 311 complaint data showing fast-closed complaints in the Bronx and Staten Island](img/nyc-311-other-boroughs-3.jpg)](img/nyc-311-other-boroughs-3.jpg)
