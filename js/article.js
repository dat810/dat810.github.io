/* Always match the <title /> tag with the h1 title 
in each HTML document in the /blog directory */
var titleElement = document.querySelector("title");
var h1Element = document.querySelector("h1.article-header");
titleElement.text = h1Element.innerHTML + " | Datario Blog";

/* var allH2 = document.querySelectorAll("article > h2"), i;
for (i = 0; i < allH2.length; i++) {
    hrBelowH2[i] = document.createElement("HR");
    allH2[i].appendChild(hrBelowH2[i]);
} */