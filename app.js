// app.js
// Подтягиваем все тематические модули

import { TOOLS_PROMPTS } from "./data/tools_prompts.js";
import { TOOLS_VIDEO } from "./data/tools_video.js";
import { TOOLS_UI } from "./data/tools_ui.js";
import { TOOLS_LEARNING } from "./data/tools_learning.js";
import { TOOLS_OSINT } from "./data/tools_osint.js";
import { TOOLS_3D } from "./data/tools_3d.js";
import { TOOLS_MUSIC } from "./data/tools_music.js";
import { TOOLS_AGENTS } from "./data/tools_agents.js";
import { TOOLS_UTILS } from "./data/tools_utils.js";
import { TOOLS_GAMES } from "./data/tools_games.js";
import { TOOLS_PRESENTATIONS } from "./data/tools_presentations.js";

// ====== ОБЪЕДИНЁННЫЙ МАССИВ ======

const TOOLS = [
  ...TOOLS_PROMPTS,
  ...TOOLS_VIDEO,
  ...TOOLS_UI,
  ...TOOLS_LEARNING,
  ...TOOLS_OSINT,
  ...TOOLS_3D,
  ...TOOLS_MUSIC,
  ...TOOLS_AGENTS,
  ...TOOLS_UTILS,
  ...TOOLS_GAMES,
  ...TOOLS_PRESENTATIONS
];

// ====== ЛОГИКА UI ======

const state = {
  selectedCategory: "all",
  search: ""
};

const els = {
  categoryList: document.getElementById("category-list"),
  toolsList: document.getElementById("tools-list"),
  totalCount: document.getElementById("total-count"),
  visibleCount: document.getElementById("visible-count"),
  searchInput: document.getElementById("search-input"),
  activeFilters: document.getElementById("active-filters")
};

function getCategories() {
  const set = new Set(TOOLS.map((t) => t.category));
  return Array.from(set).sort((a, b) => a.localeCompare(b, "ru"));
}

function renderCategories() {
  const categories = getCategories();
  els.categoryList.innerHTML = "";

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = cat;
    btn.dataset.category = cat;
    btn.addEventListener("click", () => {
      state.selectedCategory = cat;
      updateCategoryButtons();
      renderActiveFilters();
      renderTools();
    });
    els.categoryList.appendChild(btn);
  });

  // Кнопка "Все инструменты" уже лежит в HTML (в aside)
  const allBtn = document.querySelector('.category-btn[data-category="all"]');
  if (allBtn) {
    allBtn.addEventListener("click", () => {
      state.selectedCategory = "all";
      updateCategoryButtons();
      renderActiveFilters();
      renderTools();
    });
  }
}

function updateCategoryButtons() {
  document
    .querySelectorAll(".category-btn")
    .forEach((btn) => btn.classList.remove("category-btn--active"));

  const activeBtn = document.querySelector(
    `.category-btn[data-category="${state.selectedCategory}"]`
  );
  if (activeBtn) {
    activeBtn.classList.add("category-btn--active");
  } else {
    const allBtn = document.querySelector('.category-btn[data-category="all"]');
    if (allBtn) allBtn.classList.add("category-btn--active");
  }
}

function copyToClipboard(text) {
  if (!navigator.clipboard) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (e) {}
    document.body.removeChild(textarea);
    return;
  }
  navigator.clipboard.writeText(text).catch(() => {});
}

function getFilteredTools() {
  const term = state.search.trim().toLowerCase();

  return TOOLS.filter((tool) => {
    if (state.selectedCategory !== "all" && tool.category !== state.selectedCategory) {
      return false;
    }

    if (!term) return true;

    const haystack = (
      tool.name +
      " " +
      tool.description +
      " " +
      tool.url +
      " " +
      tool.category
    ).toLowerCase();

    return haystack.includes(term);
  });
}

function renderTools() {
  const tools = getFilteredTools();
  els.toolsList.innerHTML = "";

  els.totalCount.textContent = TOOLS.length.toString();
  els.visibleCount.textContent = tools.length.toString();

  if (!tools.length) {
    const empty = document.createElement("p");
    empty.textContent = "По заданным фильтрам ничего не найдено.";
    empty.style.fontSize = "13px";
    empty.style.color = "#9ca3b8";
    els.toolsList.appendChild(empty);
    return;
  }

  tools.forEach((tool) => {
    const card = document.createElement("article");
    card.className = "tool-card";

    const nameRow = document.createElement("div");
    nameRow.className = "tool-name-row";

    const nameEl = document.createElement("h3");
    nameEl.className = "tool-name";
    nameEl.textContent = tool.name;

    const catPill = document.createElement("div");
    catPill.className = "tool-category-pill";
    catPill.textContent = tool.category;

    nameRow.appendChild(nameEl);
    nameRow.appendChild(catPill);

    const desc = document.createElement("p");
    desc.className = "tool-desc";
    desc.textContent = tool.description;

    const linkRow = document.createElement("div");
    linkRow.className = "tool-link-row";

    const link = document.createElement("a");
    link.className = "tool-link";
    link.href = tool.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = tool.url.replace(/^https?:\/\//, "");

    const actions = document.createElement("div");
    actions.className = "tool-actions";

    const copyBtn = document.createElement("button");
    copyBtn.className = "tool-btn";
    copyBtn.textContent = "Копировать ссылку";
    copyBtn.addEventListener("click", () => {
      copyToClipboard(tool.url);
    });

    actions.appendChild(copyBtn);
    linkRow.appendChild(link);
    linkRow.appendChild(actions);

    card.appendChild(nameRow);
    card.appendChild(desc);
    card.appendChild(linkRow);

    els.toolsList.appendChild(card);
  });
}

function renderActiveFilters() {
  els.activeFilters.innerHTML = "";

  const hasCategory = state.selectedCategory !== "all";
  const hasSearch = state.search.trim().length > 0;

  if (!hasCategory && !hasSearch) return;

  if (hasCategory) {
    const catChip = document.createElement("div");
    catChip.className = "filter-chip";
    catChip.textContent = `Категория: ${state.selectedCategory}`;
    els.activeFilters.appendChild(catChip);
  }

  if (hasSearch) {
    const searchChip = document.createElement("div");
    searchChip.className = "filter-chip";
    searchChip.textContent = `Поиск: “${state.search.trim()}”`;
    els.activeFilters.appendChild(searchChip);
  }
}

function initSearch() {
  els.searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderActiveFilters();
    renderTools();
  });
}

// ====== INIT ======

function init() {
  renderCategories();
  updateCategoryButtons();
  initSearch();
  renderActiveFilters();
  renderTools();
}

document.addEventListener("DOMContentLoaded", init);
