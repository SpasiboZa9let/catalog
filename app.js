import { TOOLS_3D } from "./data/tools_3d.js";
import { TOOLS_PROMPTS } from "./data/tools_prompts.js";
import { TOOLS_VIDEO } from "./data/tools_video.js";
import { TOOLS_UI } from "./data/tools_ui.js";
import { TOOLS_LEARNING } from "./data/tools_learning.js";
import { TOOLS_OSINT } from "./data/tools_osint.js";
import { TOOLS_MUSIC } from "./data/tools_music.js";
import { TOOLS_AGENTS } from "./data/tools_agents.js";
import { TOOLS_PRESENTATIONS } from "./data/tools_presentations.js";
import { TOOLS_UTILS } from "./data/tools_utils.js";
import { TOOLS_GAMES } from "./data/tools_games.js";

const TOOLS = [
  ...TOOLS_3D,
  ...TOOLS_PROMPTS,
  ...TOOLS_VIDEO,
  ...TOOLS_UI,
  ...TOOLS_LEARNING,
  ...TOOLS_OSINT,
  ...TOOLS_MUSIC,
  ...TOOLS_AGENTS,
  ...TOOLS_PRESENTATIONS,
  ...TOOLS_UTILS,
  ...TOOLS_GAMES
];

// ===== RENDER ITEMS =====
const listEl = document.getElementById("tools-list");
const searchEl = document.getElementById("search-input");
const categoriesEl = document.getElementById("categories");

let currentCategory = "Все";

function renderCategories() {
  const cats = ["Все", ...new Set(TOOLS.map(t => t.category))];

  categoriesEl.innerHTML = cats
    .map(c => `<button class="cat-btn ${currentCategory === c ? "active" : ""}">${c}</button>`)
    .join("");
}

function renderTools() {
  let filtered = TOOLS;

  if (currentCategory !== "Все") {
    filtered = filtered.filter(t => t.category === currentCategory);
  }

  const q = searchEl.value.trim().toLowerCase();
  if (q) filtered = filtered.filter(t => t.name.toLowerCase().includes(q));

  listEl.innerHTML = filtered
    .map(
      t => `
      <div class="tool-card">
        <h3>${t.name}</h3>
        <p>${t.description}</p>
        <div class="tool-actions">
          <a href="${t.url}" target="_blank">Открыть</a>
          <button class="more-btn" data-name="${t.name}">Подробнее</button>
        </div>
      </div>
    `
    )
    .join("");
}

// ===== SEARCH & CATEGORIES =====
searchEl.addEventListener("input", renderTools);

categoriesEl.addEventListener("click", e => {
  if (!e.target.classList.contains("cat-btn")) return;
  currentCategory = e.target.textContent.trim();
  renderCategories();
  renderTools();
});

// ===== MODAL =====
const modalOverlay = document.getElementById("modal-overlay");
const modalWindow = document.getElementById("modal-window");
const modalTitle = document.getElementById("modal-title");
const modalUrl = document.getElementById("modal-url");
const modalSummary = document.getElementById("modal-summary");
const modalHowToList = document.getElementById("modal-howto-list");
const modalClose = document.getElementById("modal-close");

document.addEventListener("click", e => {
  if (e.target.classList.contains("more-btn")) {
    const name = e.target.dataset.name;
    const tool = TOOLS.find(t => t.name === name);
    openModal(tool);
  }
});

function openModal(tool) {
  modalTitle.textContent = tool.name;
  modalUrl.href = tool.url;
  modalSummary.textContent = tool.summary;

  modalHowToList.innerHTML = tool.howTo
    .map(step => `<li>${step}</li>`)
    .join("");

  modalOverlay.classList.remove("hidden");
  modalWindow.classList.remove("hidden");
}

function closeModal() {
  modalOverlay.classList.add("hidden");
  modalWindow.classList.add("hidden");
}

modalOverlay.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);

// ===== INIT =====
renderCategories();
renderTools();
