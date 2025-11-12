//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

 function stripArticle(bandName) {
      return bandName.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort ignoring 'A', 'An', 'The'
    const sortedBands = bands.sort((a, b) => {
      return stripArticle(a) > stripArticle(b) ? 1 : -1;
    });

    // Get the UL element
    const ul = document.getElementById("band");

    // Display sorted list
    for (const band of sortedBands) {
      const li = document.createElement("li");
      li.textContent = band;
      ul.appendChild(li);
	}



