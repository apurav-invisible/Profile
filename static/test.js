window.onload = function () {
  console.log("✅ test.js loaded");

  const canvasEl = document.getElementById("codeCanvas");
  const ctx = canvasEl.getContext("2d");

  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;

  // Full character set for random matrix rain
  const chars = "1234567890@#$%^&*_+-=|;:<>/?~";

  const sarcasticLines = [
    "Power whispers. The world obeys",
    "Hearts break. Minds learn. Clowns rise",
    "undefined is my best friend",
    "Love? A beautiful lie dressed in hope",
    "Why so serious about code?",
    "let life = null;",
    "Love dies. Ego lives.",
    "I don’t chase power. I become it",
    "res.send('chaos')",
    "Error 666: Joker Mode Enabled",
    "They plan. I smile",
    "I don’t dream. I design",
    "Masks are safer than faces",
    "AI doesn’t dream. It replaces yours",
    "You fed it your selfies. Now it knows your soul.",
    "While you sleep, I debug reality",
    "If (life == bugged) { rewrite(); }",
    "They fear AI. I fear people"
  ];

  const fontSize = 18;
  let columns = Math.floor(canvasEl.width / fontSize);
  let drops = Array(columns).fill(1);
  let glitchTexts = [];

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

    ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length)); // dynamic random character
      const isRed = Math.random() < 0.05;

      ctx.fillStyle = isRed ? "#ff0000" : "#00ff00";
      ctx.shadowColor = isRed ? "#ff0000" : "#00ff00";

      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvasEl.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    if (Math.random() > 0.93) {
      const text = sarcasticLines[Math.floor(Math.random() * sarcasticLines.length)];
      const x = Math.random() * (canvasEl.width - 400);
      const y = Math.random() * (canvasEl.height - 50);
      glitchTexts.push({ text, x, y, life: 80 });
    }

    for (let i = glitchTexts.length - 1; i >= 0; i--) {
      const glitch = glitchTexts[i];
      ctx.globalAlpha = glitch.life / 80;
      ctx.font = `24px 'Share Tech Mono', monospace`;
      ctx.fillStyle = "#ff0000";
      ctx.shadowColor = "#ff0000";
      ctx.fillText(glitch.text, glitch.x, glitch.y);
      glitch.life--;

      if (glitch.life <= 0) {
        glitchTexts.splice(i, 1);
      }
    }

    ctx.globalAlpha = 1;
  }

  const interval = setInterval(draw, 50);

  window.addEventListener("resize", () => {
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
    columns = Math.floor(canvasEl.width / fontSize);
    drops = Array(columns).fill(1);
  });

  document.getElementById("enterButton").addEventListener("click", () => {
//    clearInterval(interval);
    document.getElementById("enterLayer").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
//    canvasEl.style.display = "none";
  const canvasEl = document.getElementById("codeCanvas");
  canvasEl.style.opacity="0.3";
  });
};
const quotes = [
    "Madness is like gravity... all it takes is a little push.",
    "Smile, because it confuses people.",
    "I’m not a monster. I’m just ahead of the curve.",
    "If you're good at something, never do it for free.",
    "Introduce a little anarchy. Upset the established order.",
    "You have nothing, nothing to threaten me with."
];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById('quoteText');
  if (quoteElement) {
    quoteElement.textContent = quotes[randomIndex];
  }
