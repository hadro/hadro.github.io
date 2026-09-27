// Sidenotes: copy each footnote into the margin next to its reference.
// The footnotes list at the end of the post stays in the page; it's what
// narrow screens (and browsers without JS) see. css/sidenotes.css decides
// which of the two is visible.
function addSidenotes() {
	const added = new Set();

	for (const link of document.querySelectorAll(".footnote-ref a")) {
		const id = link.hash.slice(1);
		const footnote = document.getElementById(id);
		// A footnote referenced twice gets a sidenote only at its first reference
		if (!footnote || added.has(id)) continue;
		added.add(id);

		const sidenote = document.createElement("span");
		sidenote.className = "sidenote";
		sidenote.setAttribute("role", "note");

		// The sidenote sits inside the referencing paragraph, so each footnote
		// paragraph becomes a block-level span instead of a <p>
		for (const paragraph of footnote.children) {
			const part = document.createElement("span");
			part.className = "sidenote-part";
			part.append(...paragraph.cloneNode(true).childNodes);
			sidenote.append(part);
		}
		sidenote.querySelectorAll(".footnote-backref").forEach((backref) => backref.remove());

		const number = document.createElement("span");
		number.className = "sidenote-number";
		number.textContent = link.textContent;
		sidenote.firstChild?.prepend(number);

		link.parentElement.after(sidenote);

		// The footnotes list is hidden while sidenotes show, so don't jump to it
		link.addEventListener("click", (event) => {
			if (getComputedStyle(sidenote).display !== "none") event.preventDefault();
		});
	}

	if (added.size) document.documentElement.classList.add("has-sidenotes");
}

addSidenotes();
