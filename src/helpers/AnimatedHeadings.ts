export default function animateWordsAndChars(el, charDelay = 35, wordDelay = 35) {
  if (!el) return;

  const text = el.textContent?.trim() || "";
  el.textContent = "";

  // Split text into words
  const wordsArray = text.split(" ");
  wordsArray.forEach((word, wordIndex) => {
    // Create outer span for word
    const wordSpan = document.createElement("span");
    wordSpan.classList.add("word");

    // Wrap each character inside the word
    word.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      charSpan.classList.add("char");
      wordSpan.appendChild(charSpan);
    });

    el.appendChild(wordSpan);

    // Add space between words except for last
    if (wordIndex < wordsArray.length - 1) {
      el.appendChild(document.createTextNode("\u00A0"));
    }
  });

  // Animate each character sequentially
  const wordSpans = el.querySelectorAll("span.word");
  let totalDelay = 0;

  wordSpans.forEach((word) => {
    const charSpans = word.querySelectorAll("span.char");
    charSpans.forEach((char, i) => {
      setTimeout(() => char.classList.add("visible"), totalDelay + i * charDelay);
    });
    totalDelay += charSpans.length * charDelay + wordDelay; // delay between words
  });
}
