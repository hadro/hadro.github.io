---
title: "The Tulsa Race Massacre, Data Journalism, and Why Libraries Digitize"
date: 2021-05-25
description: "Reflections on the NYT Tulsa Race Massacre piece and how it made use of digitized public domain Sanborn maps, city directories, and archival photos."
tags:
  - tulsa race massare
  - journalism
  - data journalism
  - digitization
  - cultural-heritage
  - iiif
  - digital humanities
  - tulsa
  - public domain
  - copyright
  - twitter archive
  - city directories
---

*[This post is re-assembled from a thread I posted on Twitter May 25, 2021, preserved via an export of my Twitter archive (my account no longer exists). It has been copy-edited lightly, and I inserted the quoted elements of the methodology section, but otherwise the thoughts below are as they appeared originally.]*

---

This is a powerful and compelling piece of visual journalism about the Tulsa Race Massacre that integrates amazing elements of digitized cultural heritage, from maps to photo archives and lots more:

<https://www.nytimes.com/interactive/2021/05/24/us/tulsa-race-massacre.html>

Take a look at the "Methodology" section at the very end of the article -- just a wonderful set of examples of how thoughtful synthesis can make digitized collections so much greater than the sum of their parts:

> ### Methodology

> The buildings, maps and data presented in this article are based on historical records. In as many cases as possible, multiple sources were used to confirm details like the location of businesses and residences. When there were differing accounts or information, The Times used what was cited by the most sources. The number of killings in the massacre has been estimated to be up to 300, but a precise number was not available. Street addresses of some buildings were numbered in different ways, depending on the source.

> The 3-D model of Tulsa, Okla., was created using a series of both computerized and manual steps that transformed historical material into digital data. First, we took images of Sanborn insurance maps from 1920 and 1915 and used a process called georeferencing to align them to modern geography. The 1920 maps came from the Tulsa Historical Society and Museum and were used to reconstruct as much of Greenwood and downtown Tulsa as possible. The 1915 maps were from the Library of Congress and were used to fill in other parts of Tulsa, where 1920 maps were not available.

> Next, we wrote a computer program to extract the building outlines from those maps using a technique called machine learning. We also created an application to input the height information for each building from the Sanborn maps.

> Archival photographs and maps were used to create a detailed model of the 100 block of Greenwood Avenue. Buildings or parts of buildings without photographic reference are shown without details. The street grid was created by georeferencing a 1921 street map of Tulsa from the Library of Congress.

> We utilized a combination of optical character recognition and manual data entry to digitize the Polk-Hoffhine Tulsa City Directory from 1921, obtained from the Tulsa City-County Library. Those data were used to analyze and map businesses in Greenwood. Additional businesses were identified using the “Tulsa Colored Business Directory” in The Tulsa Star (1913-21) and The List of Losses published in “Events of The Tulsa Disaster” by Mary E. Jones Parrish. Owners of businesses on the 100 block were identified using The Tulsa Star and accounts of survivors and their descendants.

> To create the maps of the occupations of African-American residents in Greenwood, we analyzed 1920 U.S. census data from Ancestry.com for residents for which occupation data was recorded. Our analysis included residents who the 1920 census classified as Black or mulatto. We then mapped the homes of thousands of those residents using the 1920 Sanborn maps.

> Street maps from 1921 and Sanborn maps from 1939 were also used to help map addresses. The addresses of landmarks and other buildings were used to help determine the order of house numbers on a block. In some cases, Open Street Maps was used to locate addresses where the numbering system had not changed. Street name changes from the 1920 and 1921 city directories were incorporated in this process.

> We categorized occupations into three broad categories: professionals, skilled craftspeople and service workers. Records in which occupations were illegible, or were without a house number or clear address were excluded.

>While the Greenwood neighborhood boundary is not officially defined, the outline shown in this piece includes the predominantly African-American area shown in the 2001 state commission report as well as some additional areas, based on our analysis of census data.

... and it's really got me thinking about where journalism ends and things like #DigitalHumanities begin, not just in terms of illuminating past culture and context, but also in the obligation to (re)publish openly so others can also build upon the work.

The folks who built this article did amazing things with public domain Sanborn maps from the @LibraryCongress and elsewhere, and used machine learning tools (that we were only dreaming of in @nypl_labs 5 years ago) to build the 3D models of historical Greenwood.

And then they used public domain city directories to extract amazing detail about the historical addresses in the Greenwood neighborhood, thanks to the digitized materials made available by the @TulsaLibrary (incidentally, #IIIF compliant via CONTENTdm).

This is why libraries digitize things! It's not the only reason, certainly, but it's a compelling example of what can be done with open assets and building blocks like maps and city directories.

Now ... can you imagine if the team of authors and data journalists had also made available the tools/scripts they used to georeference the Sanborn insurance maps, & extract 3D features from the outlines, & parse city directory jpgs to get from error-filled OCR to super clean name/address/profession data? 

Or just documented the tools/processes used a bit more than is described in the methodology? Of course, I recognize it's a ton more work to do all that; no doubt this work was done w/o generalization front of mind, & I know it's not totally fair to have that expectation here [See postcript below: they did later release the underlying data, though no tools or scripts]. 

(and I don't say that to take away from or diminish the extraordinary research and journalism on top of it all that went into creating the larger work, just pointing out that the kinds of sources will look familiar to tons of folks working with GLAM collections)

I guess in the end it comes down to the two conflicting thoughts I had when I finished reading/experiencing this article: 1.) This is a powerful piece and a wonderful example of digital collections being used to support essential journalism and research, but also ...

2.) holy shit, I wish this work also made it easier to allow others to do the same for the thousands of other cities and towns with Sanborn maps/digitized city directories/photo archives and histories of racism/prejudice/oppression that all need to be brought to wider attention

---

*[Postscript: A month after I posted this thread the NYTimes did publish the underlying data to [Github](https://github.com/nytimes/tulsa-1921-data) on June 22, 2021. I have no reason to believe they ever saw my thread, I assume they always intended to release the data. But I believe my points above mostly stand, because releasing the data a month later, on a totally unrelated platform with no link in the original piece nor any indication there that data would be forthcoming, means that orders of magnitude fewer people will ever know the data was released. And as noted above, it's just the raw data, not the tools/scripts/parsers used.* 

*They also put a [copyright notice](https://github.com/nytimes/tulsa-1921-data/blob/main/LICENSE) as the repository license file; I am not a lawyer, but I am reasonably confident nothing in the repository can be copyrighted given that it is all factual information derived themselves from public domain source, with very little in the way of original arrangement, which I think means it falls squarely within the findings of [Feist Publications, Inc. v. Rural Telephone Service Co.](https://en.wikipedia.org/wiki/Feist_Publications,_Inc._v._Rural_Telephone_Service_Co.) Any copyright scholars who see this, please corect me if I'm wrong.]*