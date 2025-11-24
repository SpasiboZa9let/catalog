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

// ====== СОСТОЯНИЕ ======

const state = {
  selectedCategory: "all",
  search: "",
  modalTool: null
};

// ====== ЭЛЕМЕНТЫ DOM ======

const els = {
  categories: document.getElementById("categories"),
  toolsList: document.getElementById("tools-list"),
  searchInput: document.getElementById("search-input"),

  modalOverlay: document.getElementById("modal-overlay"),
  modalWindow: document.getElementById("modal-window"),
  modalClose: document.getElementById("modal-close"),
  modalTitle: document.getElementById("modal-title"),
  modalUrl: document.getElementById("modal-url"),
  modalSummary: document.getElementById("modal-summary"),
  modalHowtoList: document.getElementById("modal-howto-list")
};

// ====== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ======

function getCategories() {
  const set = new Set(TOOLS.map((t) => t.category));
  const arr = Array.from(set).sort((a, b) => a.localeCompare(b, "ru"));
  return arr;
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

// ====== РЕНДЕР КАТЕГОРИЙ ======

function renderCategories() {
  const categories = getCategories();
  els.categories.innerHTML = "";

  // Кнопка "Все"
  const allBtn = document.createElement("button");
  allBtn.className = "category-btn category-btn--active";
  allBtn.dataset.category = "all";
  allBtn.textContent = "Все";
  allBtn.addEventListener("click", () => {
    state.selectedCategory = "all";
    updateCategoryButtons();
    renderTools();
  });
  els.categories.appendChild(allBtn);

  // Остальные категории
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.dataset.category = cat;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      state.selectedCategory = cat;
      updateCategoryButtons();
      renderTools();
    });
    els.categories.appendChild(btn);
  });
}

function updateCategoryButtons() {
  const buttons = els.categories.querySelectorAll(".category-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("category-btn--active");
    if (btn.dataset.category === state.selectedCategory) {
      btn.classList.add("category-btn--active");
    }
  });
}

// ====== ФИЛЬТРАЦИЯ ======

function getFilteredTools() {
  const term = state.search.trim().toLowerCase();

  return TOOLS.filter((tool) => {
    if (state.selectedCategory !== "all" && tool.category !== state.selectedCategory) {
      return false;
    }

    if (!term) return true;

    const haystack =
      (tool.name || "") +
      " " +
      (tool.description || "") +
      " " +
      (tool.summary || "") +
      " " +
      (tool.url || "") +
      " " +
      (tool.category || "");

    return haystack.toLowerCase().includes(term);
  });
}

// ====== РЕНДЕР КАРТОЧЕК ======

function renderTools() {
  const tools = getFilteredTools();
  els.toolsList.innerHTML = "";

  if (!tools.length) {
    const empty = document.createElement("p");
    empty.textContent = "По заданным фильтрам ничего не найдено.";
    empty.className = "tools-empty";
    els.toolsList.appendChild(empty);
    return;
  }

  tools.forEach((tool) => {
    const card = document.createElement("article");
    card.className = "tool-card";

    const title = document.createElement("h3");
    title.className = "tool-title";
    title.textContent = tool.name;

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
    copyBtn.textContent = "Копировать";
    copyBtn.addEventListener("click", () => {
      copyToClipboard(tool.url);
    });

    const detailsBtn = document.createElement("button");
    detailsBtn.className = "tool-btn tool-btn-secondary";
    detailsBtn.textContent = "Подробнее";
    detailsBtn.addEventListener("click", () => {
      openModal(tool);
    });

    actions.appendChild(copyBtn);
    actions.appendChild(detailsBtn);

    linkRow.appendChild(link);
    linkRow.appendChild(actions);

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(linkRow);

    els.toolsList.appendChild(card);
  });
}

// ====== МОДАЛКА ======

function openModal(tool) {
  state.modalTool = tool;

  if (!els.modalOverlay || !els.modalWindow) return;

  els.modalTitle.textContent = tool.name || "";
  els.modalUrl.href = tool.url || "#";
  els.modalUrl.textContent = tool.url
    ? tool.url.replace(/^https?:\/\//, "")
    : "Ссылка недоступна";

  // summary: если нет — используем description
  const summaryText = tool.summary || tool.description || "";
  els.modalSummary.textContent =
    summaryText || "Краткое описание этого инструмента пока не добавлено.";

  // howTo: массив шагов, иначе заглушка
  els.modalHowtoList.innerHTML = "";
  if (Array.isArray(tool.howTo) && tool.howTo.length > 0) {
    tool.howTo.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      els.modalHowtoList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "Инструкция ещё не добавлена.";
    els.modalHowtoList.appendChild(li);
  }

  els.modalOverlay.classList.remove("hidden");
  els.modalWindow.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal() {
  state.modalTool = null;
  if (!els.modalOverlay || !els.modalWindow) return;
  els.modalOverlay.classList.add("hidden");
  els.modalWindow.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function initModal() {
  if (!els.modalOverlay || !els.modalWindow) return;

  els.modalClose?.addEventListener("click", () => {
    closeModal();
  });

  els.modalOverlay.addEventListener("click", () => {
    closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.modalWindow.classList.contains("hidden")) {
      closeModal();
    }
  });
}

// ====== ПОИСК ======

function initSearch() {
  if (!els.searchInput) return;
  els.searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderTools();
  });
}

// ====== INIT ======

function init() {
  renderCategories();
  updateCategoryButtons();
  initSearch();
  renderTools();
  initModal();
}

document.addEventListener("DOMContentLoaded", init);
