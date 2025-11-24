// ====== ДАННЫЕ (из двух твоих справочников) ======

const TOOLS = [
  // 🎛️ Базы промптов / обучение ИИ
  {
    name: "Prompts.chat",
    url: "https://prompts.chat/",
    category: "Базы промптов / обучение ИИ",
    description: "Большая библиотека готовых промптов."
  },
  {
    name: "Agents 101",
    url: "https://devin.ai/agents101#introduction",
    category: "Базы промптов / обучение ИИ",
    description: "Вводный гайд по агентам ИИ от Devin."
  },
  {
    name: "ExplainPaper",
    url: "https://www.explainpaper.com/",
    category: "Базы промптов / обучение ИИ",
    description: "Объясняет научные статьи простым языком."
  },
  {
    name: "ML Visualized",
    url: "https://ml-visualized.com/index.html",
    category: "Базы промптов / обучение ИИ",
    description: "Визуальный учебник по машинному обучению."
  },
  {
    name: "Differentiable Wonderland",
    url: "https://arxiv.org/pdf/2404.17625",
    category: "Базы промптов / обучение ИИ",
    description: "Обзорный научный материал по современным ИИ-методам."
  },
  {
    name: "Microsoft AI Course",
    url: "https://t.co/viU8JXtrAc",
    category: "Базы промптов / обучение ИИ",
    description: "Бесплатный курс Microsoft по основам ИИ."
  },

  // 🎬 Видео / Анимация / Motion
  {
    name: "Higgsfield",
    url: "https://higgsfield.ai/",
    category: "Видео / Анимация / Motion",
    description: "Генерация рекламных видео по одному промпту."
  },
  {
    name: "Wan Video",
    url: "http://wan.video/",
    category: "Видео / Анимация / Motion",
    description: "Генерация видео с помощью модели Wan."
  },
  {
    name: "Pika",
    url: "https://apps.apple.com/us/app/pika-social-ai-video/id6744712684",
    category: "Видео / Анимация / Motion",
    description: "Создание дипфейков и роликов по аудио."
  },
  {
    name: "Runway Aleph",
    url: "https://app.runwayml.com/video-tools/teams/tellembitt/ai-tools/generate",
    category: "Видео / Анимация / Motion",
    description: "Генерация и редактирование видео средствами Runway."
  },
  {
    name: "Veed AI Playground",
    url: "https://www.veed.io/ai-playground",
    category: "Видео / Анимация / Motion",
    description: "Набор ИИ-инструментов для видео и субтитров."
  },
  {
    name: "Dora Studio",
    url: "https://trydorastudio.com/",
    category: "Видео / Анимация / Motion",
    description: "Анимация графиков и данных."
  },
  {
    name: "Aura",
    url: "https://aurachat.io/",
    category: "Видео / Анимация / Motion",
    description: "Генератор анимированных UI-дизайнов."
  },
  {
    name: "Hera",
    url: "https://app.hera.video/motions/",
    category: "Видео / Анимация / Motion",
    description: "Создание анимированных сцен и motion-роликов."
  },
  {
    name: "Krea 3D Stage",
    url: "https://www.krea.ai/stage",
    category: "Видео / Анимация / Motion",
    description: "3D-сцены и анимации для визуализации."
  },
  {
    name: "ToonComposer",
    url: "https://huggingface.co/spaces/TencentARC/ToonComposer",
    category: "Видео / Анимация / Motion",
    description: "Композиция мультяшных сцен по референсам."
  },
  {
    name: "Odyssey 2",
    url: "https://experience.odyssey.ml/",
    category: "Видео / Анимация / Motion",
    description: "Создание интерактивных ИИ-видео и историй."
  },

  // 🖥️ UI / сайты / приложения
  {
    name: "HeroUI",
    url: "https://heroui.chat/",
    category: "UI / сайты / приложения",
    description: "Генерация приложений и игр по запросу."
  },
  {
    name: "Blink",
    url: "https://blink.new/",
    category: "UI / сайты / приложения",
    description: "Создание веб-сервисов за секунды."
  },
  {
    name: "Genspark",
    url: "http://genspark.ai/",
    category: "UI / сайты / приложения",
    description: "Создание сайтов вместо статичных картинок."
  },
  {
    name: "Blocks",
    url: "https://blocks.diy/",
    category: "UI / сайты / приложения",
    description: "Генерация приложений по текстовому описанию."
  },
  {
    name: "ScreenCoder",
    url: "https://github.com/leigest519/ScreenCoder",
    category: "UI / сайты / приложения",
    description: "Преобразование рисунка интерфейса в работающий сайт."
  },
  {
    name: "Kimi OK Computer",
    url: "https://www.kimi.com/",
    category: "UI / сайты / приложения",
    description: "ИИ-ассистент для кода, документов и поиска."
  },
  {
    name: "EasyCode",
    url: "https://www.easycode.ai/",
    category: "UI / сайты / приложения",
    description: "Среда для написания кода с ИИ-подсказками."
  },
  {
    name: "Mocha Backend",
    url: "https://mochacode.com/",
    category: "UI / сайты / приложения",
    description: "Генерация backend-части приложений."
  },
  {
    name: "Lovable.dev",
    url: "https://lovable.dev/",
    category: "UI / сайты / приложения",
    description: "Сборка приложений и SaaS на основе ИИ."
  },

  // 📚 Учёба / Текст / Психология
  {
    name: "Ultratext",
    url: "https://ultratext.ru/",
    category: "Учёба / Текст / Психология",
    description: "Превращает черновик в готовую работу."
  },
  {
    name: "Toolsmart",
    url: "https://www.toolsmart.ai/feature-free-humanize-ai",
    category: "Учёба / Текст / Психология",
    description: "«Очеловечивание» текста, написанного ИИ."
  },
  {
    name: "Structurepedia",
    url: "https://structurepedia.org/",
    category: "Учёба / Текст / Психология",
    description: "Строит план изучения любой темы."
  },
  {
    name: "Accent Spy",
    url: "https://start.boldvoice.com/accent-spy",
    category: "Учёба / Текст / Психология",
    description: "Анализ произношения и работа над акцентом (английский)."
  },
  {
    name: "Khan Academy",
    url: "https://www.khanacademy.org/",
    category: "Учёба / Текст / Психология",
    description: "Глобальная платформа бесплатного обучения."
  },
  {
    name: "Bexi",
    url: "https://bexi.ai/",
    category: "Учёба / Текст / Психология",
    description: "Полностью переписывает курсовые, создавая новый уникальный текст."
  },

  // 🕵️ OSINT / Поиск / Анонимность
  {
    name: "Doppio Labs",
    url: "https://www.doppio-labs.com/",
    category: "OSINT / Поиск / Анонимность",
    description: "Инструменты для анализа и работы с данными (OSINT)."
  },
  {
    name: "FilePursuit",
    url: "https://filepursuit.com/",
    category: "OSINT / Поиск / Анонимность",
    description: "Поисковик файлов и архивов в сети."
  },
  {
    name: "Temp Mail (Mohmal)",
    url: "http://mohmal.com/",
    category: "OSINT / Поиск / Анонимность",
    description: "Временная почта для регистрации без раскрытия основного e-mail."
  },

  // 🌍 3D / Миры / Интерактивы
  {
    name: "Odyssey Worlds",
    url: "https://experience.odyssey.world/",
    category: "3D / Миры / Интерактивы",
    description: "Генерация виртуальных миров."
  },
  {
    name: "BioDigital Human",
    url: "https://human.biodigital.com/explore",
    category: "3D / Миры / Интерактивы",
    description: "Интерактивная 3D-анатомия человека."
  },

  // 🎵 Музыка / Аудио / Голос
  {
    name: "DiffRhythm",
    url: "https://diffrhythm.ai/",
    category: "Музыка / Аудио / Голос",
    description: "Генерация музыки и вокала."
  },
  {
    name: "Producer",
    url: "https://www.producer.ai/",
    category: "Музыка / Аудио / Голос",
    description: "Альтернатива Suno для генерации треков."
  },
  {
    name: "MusicGPT",
    url: "https://musicgpt.com/",
    category: "Музыка / Аудио / Голос",
    description: "Генерация музыки, речи и звуковых эффектов."
  },
  {
    name: "NeuTTS-Air",
    url: "https://huggingface.co/spaces/neuphonic/neutts-air",
    category: "Музыка / Аудио / Голос",
    description: "Локальное клонирование голоса (TTS-модель)."
  },
  {
    name: "Kokoro WebGPU",
    url: "https://huggingface.co/spaces/webml-community/kokoro-webgpu",
    category: "Музыка / Аудио / Голос",
    description: "Озвучивает текст разными голосами, работает бесплатно."
  },

  // 🤖 Автоматизация / Агенты
  {
    name: "Caesr AI",
    url: "https://www.caesr.ai/",
    category: "Автоматизация / Агенты",
    description: "Агент для выполнения рутинных задач."
  },
  {
    name: "Manus",
    url: "https://manus.im/",
    category: "Автоматизация / Агенты",
    description: "Автономный ИИ-агент для сложных задач."
  },
  {
    name: "Pokee",
    url: "https://pokee.ai/workflow-agent",
    category: "Автоматизация / Агенты",
    description: "ИИ-автоматизация рабочих процессов."
  },
  {
    name: "Same.dev Chat",
    url: "https://same.dev/chat",
    category: "Автоматизация / Агенты",
    description: "Клонирование сайтов одной кнопкой."
  },
  {
    name: "Pake",
    url: "https://github.com/tw93/Pake/",
    category: "Автоматизация / Агенты",
    description: "Преобразование сайта в desktop-приложение."
  },
  {
    name: "Neural Agent",
    url: "https://github.com/withneural/neuralagent",
    category: "Автоматизация / Агенты",
    description: "Фреймворк для запуска ИИ-агентов."
  },

  // 🧰 Утилиты
  {
    name: "Free Background Remover",
    url: "https://free-background-remover.com/uploads",
    category: "Утилиты",
    description: "Удаление фона с изображений."
  },
  {
    name: "BEN2",
    url: "https://huggingface.co/spaces/PramaLLC/BEN2",
    category: "Утилиты",
    description: "Удаляет фон с фото или видео одним кликом."
  },
  {
    name: "Snack It",
    url: "http://snackprompt.com/feature/snack-it",
    category: "Утилиты",
    description: "Утилита для работы с промптами и текстом."
  },
  {
    name: "Toolbrew",
    url: "http://toolbrew.co/",
    category: "Утилиты",
    description: "Большой набор бесплатных онлайн-инструментов."
  },
  {
    name: "4me.tools",
    url: "https://4me.tools/",
    category: "Утилиты",
    description: "Онлайн-мультитул: форматы, калькуляторы, конвертеры."
  },

  // 🎮 Игры / Генерация игровых миров
  {
    name: "DreamLab",
    url: "https://app.dreamlab.gg/",
    category: "Игры / Генерация игровых миров",
    description:
      "Создаёт и обучает созданию игр по твоей идее; текстуры и логика генерируются ИИ."
  }
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

  // обработка кнопки "Все инструменты"
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
