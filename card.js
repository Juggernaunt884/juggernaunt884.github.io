const card = document.querySelector(".card");
const cursor = document.querySelector(".custom-cursor");
const nameTag = document.querySelector(".name-tag");
const pointerIcon = document.querySelector(".cursor-icon");

const colorPairs = [
  { primary: "#FF6B6B", secondary: "#4ECDC4" },
  { primary: "#A17FB0", secondary: "#000" },
  { primary: "#FF9F43", secondary: "#FF5E7D" },
  { primary: "#00D2FF", secondary: "#f00" },
  { primary: "#08AEEA", secondary: "#2AF598" },
];

function getRandomColorPair() {
  return colorPairs[Math.floor(Math.random() * colorPairs.length)];
}

let colors = getRandomColorPair();

card.addEventListener("mouseenter", () => {
  colors = getRandomColorPair();
  nameTag.style.backgroundColor = colors.secondary;
  pointerIcon.style.color = colors.secondary;

  gsap.to(cursor, { opacity: 1, duration: 0.1 });
  gsap.to(nameTag, { scale: 1, duration: 0.3 });
  card.style.border = `1px solid ${colors.secondary}`;
});

card.addEventListener("mouseleave", () => {
  gsap.to(cursor, { opacity: 0, duration: 0.1 });
  gsap.to(nameTag, { scale: 0, duration: 0.1 });
  card.style.border = `1px solid #ccc`;
});

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  gsap.to(cursor, { x, y, duration: 0.1 });
});
