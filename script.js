// ITC 2026 - Course Website Scripts

// ---- Search index (trilingual) ----
var SEARCH_DATA = {
  en: [
    { title: "Course overview", url: "index.html", section: "General", keywords: "home overview schedule evaluation assessment calendar shannon" },
    { title: "Learning guide", url: "guide.html", section: "General", keywords: "guide evaluation plan competencies activities ECTS" },
    { title: "1. Sequences of random variables", url: "lecture1.html", section: "Lectures", keywords: "iid memoryless source sequence probability distribution" },
    { title: "2. Functions of random variables and concentration inequalities", url: "lecture2.html", section: "Lectures", keywords: "expectation variance Markov Chebyshev law large numbers" },
    { title: "3. Prefix-free binary source codes", url: "lecture3.html", section: "Lectures", keywords: "source code prefix free uniquely decodable Kraft inequality entropy" },
    { title: "4. Huffman codes", url: "lecture4.html", section: "Lectures", keywords: "Huffman optimal code tree algorithm" },
    { title: "5. Fundamental limits in data compression", url: "lecture5.html", section: "Lectures", keywords: "Shannon source coding theorem AEP typical set compression" },
    { title: "6. Error probability of channel codes", url: "lecture6.html", section: "Lectures", keywords: "channel code error probability BSC maximum likelihood decoding" },
    { title: "7. Linear codes", url: "lecture7.html", section: "Lectures", keywords: "linear code generator matrix parity check Hamming distance weight" },
    { title: "8. Channel capacity", url: "lecture8.html", section: "Lectures", keywords: "capacity mutual information channel coding theorem Shannon" },
    { title: "9. Information measures", url: "lecture9.html", section: "Lectures", keywords: "entropy mutual information conditional entropy KL divergence" },
    { title: "Exercises overview", url: "exercises.html", section: "Exercises", keywords: "exercises problems solutions practice" },
    { title: "Exercises 1: Random variables", url: "exercises1.html", section: "Exercises", keywords: "exercises random variables iid sequences" },
    { title: "Exercises 2: Concentration inequalities", url: "exercises2.html", section: "Exercises", keywords: "exercises expectation variance Markov Chebyshev" },
    { title: "Exercises 3: Prefix-free codes", url: "exercises3.html", section: "Exercises", keywords: "exercises prefix free Kraft entropy source code" },
    { title: "Exercises 4: Huffman codes", url: "exercises4.html", section: "Exercises", keywords: "exercises Huffman optimal code tree" },
    { title: "Exercises 5: Data compression", url: "exercises5.html", section: "Exercises", keywords: "exercises Shannon source coding compression" },
    { title: "Exercises 6: Error probability", url: "exercises6.html", section: "Exercises", keywords: "exercises channel code error BSC decoding" },
    { title: "Exercises 7: Linear codes", url: "exercises7.html", section: "Exercises", keywords: "exercises linear code Hamming generator matrix" },
    { title: "Exercises 8: Channel capacity", url: "exercises8.html", section: "Exercises", keywords: "exercises capacity mutual information channel" },
    { title: "Exercises 9: Information measures", url: "exercises9.html", section: "Exercises", keywords: "exercises entropy mutual information conditional" },
    { title: "Quizzes", url: "quiz.html", section: "Quiz", keywords: "quizzes quiz overview practice test" },
    { title: "Quiz: Topics 1\u20132", url: "quiz1.html", section: "Quiz", keywords: "quiz random variables expectation probability" },
    { title: "Quiz: Topics 3\u20135", url: "quiz2.html", section: "Quiz", keywords: "quiz source coding Huffman prefix free compression" },
    { title: "Quiz: Topics 6\u20139", url: "quiz3.html", section: "Quiz", keywords: "quiz channel coding linear codes capacity information" },
    { title: "Exams overview", url: "exams.html", section: "Exams", keywords: "exams past final resit" },
    { title: "Final exam 2025", url: "exam-final-2025.html", section: "Exams", keywords: "exam final 2025 entropy source coding linear codes channel capacity information measures" },
    { title: "Resit exam 2025", url: "exam-resit-2025.html", section: "Exams", keywords: "exam resit 2025 entropy source coding linear codes channel decoding information measures" }
  ],
  ca: [
    { title: "Visió general del curs", url: "index.html", section: "General", keywords: "inici visió general horari avaluació calendari shannon" },
    { title: "Guia d'aprenentatge", url: "guide.html", section: "General", keywords: "guia avaluació pla competències activitats ECTS" },
    { title: "1. Seqüències de variables aleatòries", url: "lecture1.html", section: "Apunts", keywords: "iid sense memòria font seqüència probabilitat distribució" },
    { title: "2. Funcions de variables aleatòries i desigualtats de concentració", url: "lecture2.html", section: "Apunts", keywords: "esperança variància Markov Chebyshev llei grans nombres" },
    { title: "3. Codis de font binaris sense prefixe", url: "lecture3.html", section: "Apunts", keywords: "codi font sense prefixe unívocament decodificable desigualtat Kraft entropia" },
    { title: "4. Codis de Huffman", url: "lecture4.html", section: "Apunts", keywords: "Huffman codi òptim arbre algorisme" },
    { title: "5. Límits fonamentals en compressió de font", url: "lecture5.html", section: "Apunts", keywords: "Shannon teorema codificació font AEP conjunt típic compressió" },
    { title: "6. Probabilitat d'error de codis de canal", url: "lecture6.html", section: "Apunts", keywords: "canal codi error probabilitat BSC màxima versemblança decodificació" },
    { title: "7. Codis lineals", url: "lecture7.html", section: "Apunts", keywords: "codi lineal matriu generadora paritat Hamming distància pes" },
    { title: "8. Capacitat de canal", url: "lecture8.html", section: "Apunts", keywords: "capacitat informació mútua teorema codificació canal Shannon" },
    { title: "9. Mesures d'informació", url: "lecture9.html", section: "Apunts", keywords: "entropia informació mútua entropia condicional divergència KL" },
    { title: "Exercicis", url: "exercises.html", section: "Exercicis", keywords: "exercicis problemes solucions pràctica" },
    { title: "Exercicis 1: Variables aleatòries", url: "exercises1.html", section: "Exercicis", keywords: "exercicis variables aleatòries iid seqüències" },
    { title: "Exercicis 2: Desigualtats de concentració", url: "exercises2.html", section: "Exercicis", keywords: "exercicis esperança variància Markov Chebyshev" },
    { title: "Exercicis 3: Codis sense prefixe", url: "exercises3.html", section: "Exercicis", keywords: "exercicis prefixe Kraft entropia codi font" },
    { title: "Exercicis 4: Codis de Huffman", url: "exercises4.html", section: "Exercicis", keywords: "exercicis Huffman codi òptim arbre" },
    { title: "Exercicis 5: Compressió de font", url: "exercises5.html", section: "Exercicis", keywords: "exercicis Shannon codificació font compressió" },
    { title: "Exercicis 6: Probabilitat d'error", url: "exercises6.html", section: "Exercicis", keywords: "exercicis canal codi error BSC decodificació" },
    { title: "Exercicis 7: Codis lineals", url: "exercises7.html", section: "Exercicis", keywords: "exercicis codi lineal Hamming matriu generadora" },
    { title: "Exercicis 8: Capacitat de canal", url: "exercises8.html", section: "Exercicis", keywords: "exercicis capacitat informació mútua canal" },
    { title: "Exercicis 9: Mesures d'informació", url: "exercises9.html", section: "Exercicis", keywords: "exercicis entropia informació mútua condicional" },
    { title: "Qüestionaris", url: "quiz.html", section: "Qüestionari", keywords: "qüestionaris qüestionari resum pràctica test" },
    { title: "Qüestionari: Temes 1\u20132", url: "quiz1.html", section: "Qüestionari", keywords: "qüestionari variables aleatòries esperança probabilitat" },
    { title: "Qüestionari: Temes 3\u20135", url: "quiz2.html", section: "Qüestionari", keywords: "qüestionari codificació font Huffman prefixe compressió" },
    { title: "Qüestionari: Temes 6\u20139", url: "quiz3.html", section: "Qüestionari", keywords: "qüestionari codificació canal codis lineals capacitat informació" },
    { title: "Exàmens", url: "exams.html", section: "Exàmens", keywords: "exàmens anteriors final recuperació" },
    { title: "Examen final 2025", url: "exam-final-2025.html", section: "Exàmens", keywords: "examen final 2025 entropia codificació font codis lineals capacitat canal mesures informació" },
    { title: "Examen de recuperació 2025", url: "exam-resit-2025.html", section: "Exàmens", keywords: "examen recuperació 2025 entropia codificació font codis lineals canal decodificació mesures informació" }
  ],
  es: [
    { title: "Visión general del curso", url: "index.html", section: "General", keywords: "inicio visión general horario evaluación calendario shannon" },
    { title: "Guía de aprendizaje", url: "guide.html", section: "General", keywords: "guía evaluación plan competencias actividades ECTS" },
    { title: "1. Secuencias de variables aleatorias", url: "lecture1.html", section: "Apuntes", keywords: "iid sin memoria fuente secuencia probabilidad distribución" },
    { title: "2. Funciones de variables aleatorias y desigualdades de concentración", url: "lecture2.html", section: "Apuntes", keywords: "esperanza varianza Markov Chebyshev ley grandes números" },
    { title: "3. Códigos de fuente binarios sin prefijo", url: "lecture3.html", section: "Apuntes", keywords: "código fuente sin prefijo unívocamente decodificable desigualdad Kraft entropía" },
    { title: "4. Códigos de Huffman", url: "lecture4.html", section: "Apuntes", keywords: "Huffman código óptimo árbol algoritmo" },
    { title: "5. Límites fundamentales en compresión de fuente", url: "lecture5.html", section: "Apuntes", keywords: "Shannon teorema codificación fuente AEP conjunto típico compresión" },
    { title: "6. Probabilidad de error de códigos de canal", url: "lecture6.html", section: "Apuntes", keywords: "canal código error probabilidad BSC máxima verosimilitud decodificación" },
    { title: "7. Códigos lineales", url: "lecture7.html", section: "Apuntes", keywords: "código lineal matriz generadora paridad Hamming distancia peso" },
    { title: "8. Capacidad de canal", url: "lecture8.html", section: "Apuntes", keywords: "capacidad información mutua teorema codificación canal Shannon" },
    { title: "9. Medidas de información", url: "lecture9.html", section: "Apuntes", keywords: "entropía información mutua entropía condicional divergencia KL" },
    { title: "Ejercicios", url: "exercises.html", section: "Ejercicios", keywords: "ejercicios problemas soluciones práctica" },
    { title: "Ejercicios 1: Variables aleatorias", url: "exercises1.html", section: "Ejercicios", keywords: "ejercicios variables aleatorias iid secuencias" },
    { title: "Ejercicios 2: Desigualdades de concentración", url: "exercises2.html", section: "Ejercicios", keywords: "ejercicios esperanza varianza Markov Chebyshev" },
    { title: "Ejercicios 3: Códigos sin prefijo", url: "exercises3.html", section: "Ejercicios", keywords: "ejercicios prefijo Kraft entropía código fuente" },
    { title: "Ejercicios 4: Códigos de Huffman", url: "exercises4.html", section: "Ejercicios", keywords: "ejercicios Huffman código óptimo árbol" },
    { title: "Ejercicios 5: Compresión de fuente", url: "exercises5.html", section: "Ejercicios", keywords: "ejercicios Shannon codificación fuente compresión" },
    { title: "Ejercicios 6: Probabilidad de error", url: "exercises6.html", section: "Ejercicios", keywords: "ejercicios canal código error BSC decodificación" },
    { title: "Ejercicios 7: Códigos lineales", url: "exercises7.html", section: "Ejercicios", keywords: "ejercicios código lineal Hamming matriz generadora" },
    { title: "Ejercicios 8: Capacidad de canal", url: "exercises8.html", section: "Ejercicios", keywords: "ejercicios capacidad información mutua canal" },
    { title: "Ejercicios 9: Medidas de información", url: "exercises9.html", section: "Ejercicios", keywords: "ejercicios entropía información mutua condicional" },
    { title: "Cuestionarios", url: "quiz.html", section: "Cuestionario", keywords: "cuestionarios cuestionario resumen práctica test" },
    { title: "Cuestionario: Temas 1\u20132", url: "quiz1.html", section: "Cuestionario", keywords: "cuestionario variables aleatorias esperanza probabilidad" },
    { title: "Cuestionario: Temas 3\u20135", url: "quiz2.html", section: "Cuestionario", keywords: "cuestionario codificación fuente Huffman prefijo compresión" },
    { title: "Cuestionario: Temas 6\u20139", url: "quiz3.html", section: "Cuestionario", keywords: "cuestionario codificación canal códigos lineales capacidad información" },
    { title: "Exámenes", url: "exams.html", section: "Exámenes", keywords: "exámenes anteriores final recuperación" },
    { title: "Examen final 2025", url: "exam-final-2025.html", section: "Exámenes", keywords: "examen final 2025 entropía codificación fuente códigos lineales capacidad canal medidas información" },
    { title: "Examen de recuperación 2025", url: "exam-resit-2025.html", section: "Exámenes", keywords: "examen recuperación 2025 entropía codificación fuente códigos lineales canal decodificación medidas información" }
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
        "\\argmin": "\\operatorname*{arg\\,min}",
        "\\argmax": "\\operatorname*{arg\\,max}",
        "\\undermat": "#2",
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
