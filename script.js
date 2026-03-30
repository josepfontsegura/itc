// ITC 2026 - Course Website Scripts

// ---- Search index (trilingual) ----
var SEARCH_DATA = {
  en: [
    { title: "Course overview", url: "index.html", section: "General", keywords: "home overview schedule evaluation assessment calendar shannon" },
    { title: "Learning guide", url: "guide.html", section: "General", keywords: "guide evaluation plan competencies activities ECTS" },
    { title: "1. Sequences of random variables", url: "lecture1.html", section: "Lectures", keywords: "iid memoryless source sequence probability distribution" },
    { title: "2. Functions of random variables and concentration inequalities", url: "lecture2.html", section: "Lectures", keywords: "expectation variance Markov Chebyshev law large numbers" },
    { title: "Exercises overview", url: "exercises.html", section: "Exercises", keywords: "exercises problems solutions practice" },
    { title: "Exercises 1: Random variables", url: "exercises1.html", section: "Exercises", keywords: "exercises random variables iid sequences" },
    { title: "Exercises 2: Concentration inequalities", url: "exercises2.html", section: "Exercises", keywords: "exercises expectation variance Markov Chebyshev" },
    { title: "Quizzes", url: "quiz.html", section: "Quiz", keywords: "quizzes quiz overview practice test" },
    { title: "Quiz: Topics 1\u20132", url: "quiz1.html", section: "Quiz", keywords: "quiz random variables expectation probability" },
    { title: "Exams overview", url: "exams.html", section: "Exams", keywords: "exams past final resit" }
  ],
  ca: [
    { title: "Visió general del curs", url: "index.html", section: "General", keywords: "inici visió general horari avaluació calendari shannon" },
    { title: "Guia d'aprenentatge", url: "guide.html", section: "General", keywords: "guia avaluació pla competències activitats ECTS" },
    { title: "1. Seqüències de variables aleatòries", url: "lecture1.html", section: "Apunts", keywords: "iid sense memòria font seqüència probabilitat distribució" },
    { title: "2. Funcions de variables aleatòries i desigualtats de concentració", url: "lecture2.html", section: "Apunts", keywords: "esperança variància Markov Chebyshev llei grans nombres" },
    { title: "Exercicis", url: "exercises.html", section: "Exercicis", keywords: "exercicis problemes solucions pràctica" },
    { title: "Exercicis 1: Variables aleatòries", url: "exercises1.html", section: "Exercicis", keywords: "exercicis variables aleatòries iid seqüències" },
    { title: "Exercicis 2: Desigualtats de concentració", url: "exercises2.html", section: "Exercicis", keywords: "exercicis esperança variància Markov Chebyshev" },
    { title: "Qüestionaris", url: "quiz.html", section: "Qüestionari", keywords: "qüestionaris qüestionari resum pràctica test" },
    { title: "Qüestionari: Temes 1\u20132", url: "quiz1.html", section: "Qüestionari", keywords: "qüestionari variables aleatòries esperança probabilitat" },
    { title: "Exàmens", url: "exams.html", section: "Exàmens", keywords: "exàmens anteriors final recuperació" }
  ],
  es: [
    { title: "Visión general del curso", url: "index.html", section: "General", keywords: "inicio visión general horario evaluación calendario shannon" },
    { title: "Guía de aprendizaje", url: "guide.html", section: "General", keywords: "guía evaluación plan competencias actividades ECTS" },
    { title: "1. Secuencias de variables aleatorias", url: "lecture1.html", section: "Apuntes", keywords: "iid sin memoria fuente secuencia probabilidad distribución" },
    { title: "2. Funciones de variables aleatorias y desigualdades de concentración", url: "lecture2.html", section: "Apuntes", keywords: "esperanza varianza Markov Chebyshev ley grandes números" },
    { title: "Ejercicios", url: "exercises.html", section: "Ejercicios", keywords: "ejercicios problemas soluciones práctica" },
    { title: "Ejercicios 1: Variables aleatorias", url: "exercises1.html", section: "Ejercicios", keywords: "ejercicios variables aleatorias iid secuencias" },
    { title: "Ejercicios 2: Desigualdades de concentración", url: "exercises2.html", section: "Ejercicios", keywords: "ejercicios esperanza varianza Markov Chebyshev" },
    { title: "Cuestionarios", url: "quiz.html", section: "Cuestionario", keywords: "cuestionarios cuestionario resumen práctica test" },
    { title: "Cuestionario: Temas 1\u20132", url: "quiz1.html", section: "Cuestionario", keywords: "cuestionario variables aleatorias esperanza probabilidad" },
    { title: "Exámenes", url: "exams.html", section: "Exámenes", keywords: "exámenes anteriores final recuperación" }
  ]
};

function detectLang() {
  var path = window.location.pathname;
  if (path.indexOf("/ca/") !== -1) return "ca";
  if (path.indexOf("/es/") !== -1) return "es";
  return "en";
}

document.addEventListener("DOMContentLoaded", function () {
  // ---- KaTeX auto-render with custom macros ----
  if (typeof renderMathInElement !== "undefined") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false }
      ],
      macros: {
        "\\sfbf": "\\mathsf{\\textbf{#1}}",
        "\\beq": "\\begin{equation}",
        "\\eeq": "\\end{equation}",
        "\\pii": "p_j",
        "\\li": "\\ell_j",
        "\\Lav": "L_{\\rm av}",
        "\\HU": "H(U)",
        "\\Uc": "\\mathcal{U}",
        "\\EE": "\\mathbb{E}",
        "\\x": "\\boldsymbol{x}",
        "\\y": "\\boldsymbol{y}",
        "\\X": "\\boldsymbol{X}",
        "\\Y": "\\boldsymbol{Y}",
        "\\px": "P_{X}",
        "\\py": "P_{Y}",
        "\\pyx": "P_{Y|X}",
        "\\pxy": "P_{XY}",
        "\\pxcy": "P_{X|Y}",
        "\\undermat": "\\underbrace{\\begin{matrix}#2\\end{matrix}}_{\\text{#1}}",
      },
      trust: true,
      throwOnError: false,
    });
  }

  // Post-render: build eqref links from tagged equations
  document.querySelectorAll(".katex-display .tag").forEach(function (tag) {
    var num = tag.textContent.replace(/[()]/g, "").trim();
    tag.id = "eq:" + num;
  });

  // ---- Dark mode toggle ----
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("itc-theme", next);
    });
  }

  // ---- Sidebar toggle with backdrop ----
  var toggle = document.querySelector(".menu-toggle");
  var sidebar = document.querySelector(".sidebar");

  // Create backdrop element
  var backdrop = document.createElement("div");
  backdrop.className = "sidebar-backdrop";
  document.body.appendChild(backdrop);

  // On mobile, start with sidebar hidden
  if (sidebar && window.innerWidth <= 768 && !sidebar.classList.contains("hidden")) {
    sidebar.classList.add("hidden");
  }

  function closeSidebar() {
    if (sidebar) {
      sidebar.classList.add("hidden");
      backdrop.classList.remove("visible");
    }
  }

  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      sidebar.classList.toggle("hidden");
      if (!sidebar.classList.contains("hidden") && window.innerWidth <= 768) {
        backdrop.classList.add("visible");
      } else {
        backdrop.classList.remove("visible");
      }
    });
  }

  backdrop.addEventListener("click", closeSidebar);

  // ---- Search ----
  var lang = detectLang();
  var placeholders = { en: "Search lectures, exercises\u2026", ca: "Cerca apunts, exercicis\u2026", es: "Buscar apuntes, ejercicios\u2026" };
  var navHints = { en: "navigate", ca: "navegar", es: "navegar" };
  var noResults = { en: "No results found", ca: "Cap resultat trobat", es: "Sin resultados" };

  // Create search overlay
  var searchOverlay = document.createElement("div");
  searchOverlay.className = "search-overlay";
  searchOverlay.innerHTML =
    '<div class="search-box">' +
      '<div class="search-input-wrap">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
        '<input type="text" class="search-input" id="search-input" placeholder="' + (placeholders[lang] || placeholders.en) + '" autocomplete="off">' +
      '</div>' +
      '<div class="search-results" id="search-results"></div>' +
      '<div class="search-footer"><kbd>\u2191\u2193</kbd> ' + (navHints[lang] || navHints.en) + ' \u00b7 <kbd>\u21b5</kbd> open \u00b7 <kbd>esc</kbd> close</div>' +
    '</div>';
  document.body.appendChild(searchOverlay);

  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");
  var selectedIdx = -1;

  var searchBtn = document.querySelector(".search-toggle");
  if (searchBtn) {
    searchBtn.addEventListener("click", openSearch);
  }

  function openSearch() {
    searchOverlay.classList.add("open");
    searchInput.value = "";
    searchInput.focus();
    renderSearchResults("");
  }

  function closeSearch() {
    searchOverlay.classList.remove("open");
  }

  searchOverlay.addEventListener("click", function (e) {
    if (e.target === searchOverlay) closeSearch();
  });

  searchInput.addEventListener("input", function () {
    renderSearchResults(this.value);
  });

  searchInput.addEventListener("keydown", function (e) {
    var items = searchResults.querySelectorAll(".search-result");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIdx = Math.min(selectedIdx + 1, items.length - 1);
      updateSelection(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIdx = Math.max(selectedIdx - 1, 0);
      updateSelection(items);
    } else if (e.key === "Enter" && selectedIdx >= 0 && items[selectedIdx]) {
      e.preventDefault();
      window.location.href = items[selectedIdx].getAttribute("href");
    }
  });

  function updateSelection(items) {
    items.forEach(function (item, i) {
      item.classList.toggle("selected", i === selectedIdx);
    });
    if (items[selectedIdx]) {
      items[selectedIdx].scrollIntoView({ block: "nearest" });
    }
  }

  function renderSearchResults(query) {
    selectedIdx = -1;
    var data = SEARCH_DATA[lang] || SEARCH_DATA.en;

    if (!query.trim()) {
      searchResults.innerHTML = data.map(function (item) {
        return '<a class="search-result" href="' + item.url + '">' +
          '<span class="search-result-title">' + item.title + '</span>' +
          '<span class="search-result-section">' + item.section + '</span></a>';
      }).join("");
      return;
    }

    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    var results = data.filter(function (item) {
      var text = (item.title + " " + item.keywords + " " + item.section).toLowerCase();
      return terms.every(function (t) { return text.indexOf(t) !== -1; });
    });

    if (results.length) {
      searchResults.innerHTML = results.map(function (item) {
        return '<a class="search-result" href="' + item.url + '">' +
          '<span class="search-result-title">' + item.title + '</span>' +
          '<span class="search-result-section">' + item.section + '</span></a>';
      }).join("");
    } else {
      searchResults.innerHTML = '<div class="search-empty">' + (noResults[lang] || noResults.en) + '</div>';
    }
  }

  // Global keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (searchOverlay.classList.contains("open")) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === "Escape") {
      if (searchOverlay.classList.contains("open")) {
        closeSearch();
      } else {
        closeSidebar();
      }
    }
  });

  // ---- Expand/collapse all solutions ----
  var expandBtn = document.getElementById("expand-all");
  if (expandBtn) {
    expandBtn.addEventListener("click", function () {
      var details = document.querySelectorAll("details.solution");
      var allOpen = Array.from(details).every(function (d) {
        return d.open;
      });
      details.forEach(function (d) {
        d.open = !allOpen;
      });
      expandBtn.textContent = allOpen
        ? expandBtn.dataset.expand
        : expandBtn.dataset.collapse;
    });
  }
});
