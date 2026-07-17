// Projects listed on /projects/, newest first.
// `post` is optional and should be a site-relative URL to related writing.
// `image` is optional and lives in content/img/projects/, referenced relative to content/projects.njk.
export default [
	{
		title: "The Green Books and other Black travel guides",
		url: "https://hadro.github.io/green-books/all-volumes",
		year: "2026",
		image: "./img/projects/green-books.png",
		alt: "The explorer’s opening screen with sample entries for Lake Lodge, Olivia’s House of Beauty, and Stevens Hotel shown beside their scanned listings",
		description: "More than 105,000 listings from seven African American travel guides published between 1930 and 1966, including the Negro Motorist Green Book. Search by name, place, category, or year, with every entry linked back to the digitized page image at NYPL.",
	},
	{
		title: "Tulsa 1921 City Directory Viewer",
		url: "https://hadro.github.io/tulsa-city-directories/1921.html",
		year: "2026",
		image: "./img/projects/tulsa-1921.png",
		alt: "The explorer showing filters for business, race designation, and Greenwood residency beside a table of 1921 Tulsa directory entries",
		description: "A browsable, searchable explorer for the Polk-Hoffhine Tulsa City Directory of 1921, published weeks before the Tulsa Race Massacre. Filter by occupation, address, and race designation, view the original scan beside each extracted listing, and download filtered results as CSV. A Greenwood filter surfaces the 2,147 people whose listed addresses fall inside the neighborhood that was burned down in the massacre, and who were killed or displaced by it.",
		post: "/blog/tulsa-city-directories/"
	},
	{
		title: "Brewery Guides Data Explorer",
		url: "https://hadro.github.io/brewery-guides/explorer#about",
		year: "2026",
		image: "./img/projects/brewery-guides.png",
		alt: "The explorer showing field coverage charts and a table of brewery listings by state and city",
		description: "Thousands of breweries, maltsters, and supply dealers listed in American brewery business directories from 1896 to 1918, extracted from volumes digitized at NYPL and made filterable, sortable, and exportable.",
		post: "/blog/brewery-guides/"
	},
	{
		title: "Directory Pipeline",
		url: "https://github.com/hadro/directory-pipeline",
		year: "2026",
		image: "./img/projects/directory-pipeline.png",
		alt: "The pipeline’s web interface, showing a IIIF URL queued through stages for ingest, calibration, OCR, review, extraction, and IIIF export",
		description: "The LLM-assisted tool behind the explorers above. It takes a public IIIF archive URL, downloads the scans, runs OCR and named-entity recognition over them, and produces a structured CSV plus a browsable explorer with deep links back to the source images — no manual transcription, no custom code per collection.",
	},
	{
		title: "MoMA Collecting Gender Disparity",
		url: "https://hadro.github.io/Interactive-Data-Vis-Fall2023/moma/",
		year: "2023",
		image: "./img/projects/moma-gender-disparity.png",
		alt: "Bubble chart plotting the percentage of artists collected by MoMA each year since 1929, split by gender, against a parity line",
		description: "The percentage of unique artists collected by the Museum of Modern Art each year since 1929, broken out by the genders identified in MoMA’s own open data, with bubble size showing how many artists a year represents. Built in D3 as the final project for CUNY DATA73200, Interactive Data Visualization.",
	},
	{
		title: "Smithsonian Data Fun",
		url: "https://hadro.github.io/smithsonian_data_fun/",
		year: "2020",
		image: "./img/projects/smithsonian-word-cloud.png",
		alt: "Detail of the word cloud, showing names such as Reflora Project, Marine Resources, and Plant Image in pale grey type",
		description: "Every name extracted from the 11 million metadata records of the Smithsonian’s Open Access release, arranged into a word cloud shaped like the right tower of the Smithsonian Castle and served as a static IIIF image. Built on Matt Miller’s parsing code and his fanart drawing of the tower.",
	},
	{
		title: "3D PixPlot of DPLA Fourth of July images",
		url: "https://hadro.github.io/pix-plot-dpla/",
		year: "2018",
		image: "./img/projects/pix-plot-dpla.png",
		alt: "A WebGL point cloud of thousands of small images, with cluster thumbnails for fireworks, crowds, and the Statue of Liberty",
		description: "7,384 “Fourth of July” images from the Digital Public Library of America, positioned in 3D by how an Inception convolutional neural network perceives their similarity and mapped with UMAP so that lookalike images cluster together. Click through any image to its DPLA record. Adapted from the Yale DH Lab’s PixPlot.",
	},
	{
		title: "Periods vs. emoji in my text messages",
		url: "https://github.com/hadro/data-analysis-and-viz-examples/blob/master/images/Josh_text_messages.jpg",
		year: "2018",
		image: "./img/projects/text-messages.png",
		alt: "Line chart of text messages per month, with messages ending in a period declining after 2014 as messages with emoji rise sharply",
		description: "A chart of my own text messages per month, counting those that end with a period against those that end with an emoji. The crossover around 2015 is unreasonably tidy.",
	},
	{
		title: "NYPL Public Domain Data and Utilities",
		url: "https://github.com/NYPL-publicdomain/data-and-utilities",
		year: "2016",
		image: "./img/projects/nypl-public-domain.png",
		alt: "The GitHub repository page for NYPL-publicdomain/data-and-utilities",
		description: "Item and collection metadata for more than 187,000 public domain materials in NYPL Digital Collections, released as CSV and JSON alongside code examples in Python, JavaScript, R, and shell for grabbing and analyzing them. Part of NYPL’s January 2016 public domain release.",
	}
];
