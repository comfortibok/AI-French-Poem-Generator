function handleSubmit(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    cursor: "",
    delay: 1.5,
  });
}
let poemElement = document.querySelector("form");
poemElement.addEventListener("submit", handleSubmit);
