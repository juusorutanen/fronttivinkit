---
title: ":has-pseudoluokka ja sen hyödyt"
description: |
  Lorem lipsum lipsum lipsum, Lorem lipsum lipsum lipsum Lorem lipsum lipsum lipsum
date: 2024-04-04T14:23:10.796Z
image: "/test.jpg"
category: CSS
---
Lorem lipsum

**Header**.

Has on suosiota kasvattanut CSS:n pseudoluokka, joka on toiminut uusilla selaimilla viime joulukuusta lähtien. 

:has toimii niin, että sen avulla voi valita kaikki elementit, jotka sisältävät tietyn lapsielementin. 

Esimerkiksi 

h1:has(h2) {
color: red;
}

Ilman :has luokkaa, sama toiminto pitäisi tehdä JavaScriptillä

const h1Elements = document.querySelectorAll('h1');

h1Elements.forEach((h1) => {
const h2Sibling = h1.nextElementSibling;
if (h2Sibling && h2Sibling.tagName.toLowerCase() === 'h2') {
h1.classList.add('makeThisRed');
}
});

Koodi käy läpi jokaisen **`<h1>`**-elementin, tarkistaa, onko sen seuraava sisarelementti **`<h2>`**-elementti, ja jos näin on, lisää **`'makeThisRed'`**-luokan **`<h1>`**:lle, ja CSS:n puolella luokkaan voidaan tehdä sääntöjä, jotka muuttavat <h1> -elementin ulkoasua:

.makeThisRed {
color:red;
}

:has luokkaa voi käyttää myös monimutkaisemmin tavoin, esimerkiksi tässä tapauksessa kaikki **`<ul>`**-elementit, jotka sisältävät vähintään yhden **`<li>`**-elementin, jonka luokka on "error", saavat punaisen reunan.

ul:has(li.error) {
border: 2px solid red;
}

<!--more-->
