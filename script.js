const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- mobile nav ---------- */

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

toggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

/* ---------- active nav highlighting ---------- */

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => navObserver.observe(section));

/* ---------- scroll reveals ---------- */

const revealEls = Array.from(document.querySelectorAll(".reveal"));

if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // stagger siblings that reveal in the same batch
        const delay = (entry.target.dataset.revealIndex ?? 0) * 90;
        setTimeout(() => entry.target.classList.add("visible"), delay);
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );

  // assign stagger indices within each parent
  const byParent = new Map();
  revealEls.forEach((el) => {
    const count = byParent.get(el.parentElement) ?? 0;
    el.dataset.revealIndex = count;
    byParent.set(el.parentElement, count + 1);
    revealObserver.observe(el);
  });
}

/* ---------- hero terminal typing ---------- */

const terminalBody = document.getElementById("terminal-body");

const TERMINAL_SCRIPT = [
  { text: "$ ", cls: "t-prompt" },
  { text: "bret --status", type: true },
  { text: "\n" },
  { text: "  role      ", cls: "t-key" },
  { text: "Agentic Intern @ Queen One\n" },
  { text: "  studying  ", cls: "t-key" },
  { text: "MIS @ RIT Saunders '27\n" },
  { text: "  location  ", cls: "t-key" },
  { text: "Brooklyn, NY / Chester, NJ\n" },
  { text: "  focus     ", cls: "t-key" },
  { text: "agentic systems · databases · VR\n" },
  { text: "  rank      ", cls: "t-key" },
  { text: "Eagle Scout\n" },
  { text: "\n" },
  { text: "$ ", cls: "t-prompt" },
  { text: "bret --now", type: true },
  { text: "\n" },
  { text: "  ● ", cls: "t-run" },
  { text: "building agentic business workflows...\n", cls: "t-dim" },
  { text: "  ● ", cls: "t-run" },
  { text: "this site: designed & shipped with AI agents\n", cls: "t-dim" },
];

function renderTerminalInstant() {
  TERMINAL_SCRIPT.forEach((seg) => {
    const span = document.createElement("span");
    if (seg.cls) span.className = seg.cls;
    span.textContent = seg.text;
    terminalBody.appendChild(span);
  });
}

async function renderTerminalTyped() {
  const cursor = document.createElement("span");
  cursor.className = "type-cursor";
  cursor.textContent = " ";
  terminalBody.appendChild(cursor);

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  for (const seg of TERMINAL_SCRIPT) {
    const span = document.createElement("span");
    if (seg.cls) span.className = seg.cls;
    terminalBody.insertBefore(span, cursor);

    if (seg.type) {
      // human-speed typing for command segments
      for (const ch of seg.text) {
        span.textContent += ch;
        await wait(40 + Math.random() * 55);
      }
      await wait(320);
    } else {
      span.textContent = seg.text;
      await wait(seg.text.includes("\n") ? 90 : 30);
    }
  }
}

if (terminalBody) {
  if (prefersReducedMotion) {
    renderTerminalInstant();
  } else {
    // start typing once the terminal is on screen
    const startTyping = new IntersectionObserver(
      (entries, obs) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        obs.disconnect();
        renderTerminalTyped();
      },
      { threshold: 0.3 }
    );
    startTyping.observe(terminalBody);
  }
}
