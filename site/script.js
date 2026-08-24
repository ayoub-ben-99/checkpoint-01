"use strict";

const data = typeof LEVELS !== "undefined" ? LEVELS : [];
const content = document.getElementById("content");
const searchInput = document.getElementById("search");
const toggleAllBtn = document.getElementById("toggleAll");
const emptyState = document.getElementById("emptyState");
const navLinks = document.getElementById("navLinks");
const footerLinks = document.getElementById("footerLinks");
const heroLevels = document.getElementById("heroLevels");
const heroExercises = document.getElementById("heroExercises");

const TINT_PATTERN = [
  "bg-white dark:bg-black text-slate-900 dark:text-white",
  "bg-slate-50/70 dark:bg-slate-950/70 text-slate-900 dark:text-white"
];

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(text) {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, (m, c) => '<code class="font-mono text-xs px-1.5 py-0.5 bg-slate-200/60 dark:bg-slate-800/80 rounded text-slate-900 dark:text-slate-100">' + c + "</code>");
  out = out.replace(/\*\*([^*]+)\*\*/g, (m, c) => '<strong class="font-semibold text-slate-900 dark:text-white">' + c + "</strong>");
  out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, (m, b, c) => b + "<em>" + c + "</em>");
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, t, u) => '<a href="' + u + '" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">' + t + "</a>");
  return out;
}

function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let i = 0;
  let listType = null;

  const closeList = () => {
    if (listType) {
      html += "</" + listType + ">";
      listType = null;
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    const fence = line.match(/^```(\w*)\s*$/);
    if (fence) {
      closeList();
      const lang = fence[1];
      i++;
      const code = [];
      while (i < lines.length && !/^```/.test(lines[i])) {
        code.push(lines[i]);
        i++;
      }
      i++;
      html += '<pre class="my-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs sm:text-sm overflow-x-auto shadow-lg"><code class="language-' + escapeHtml(lang) + '">' + escapeHtml(code.join("\n")) + "</code></pre>";
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      const sizeClass = level === 1 ? "text-xl sm:text-2xl font-bold mt-6 mb-3 text-slate-900 dark:text-white font-display" :
                        level === 2 ? "text-lg sm:text-xl font-bold mt-5 mb-2.5 text-slate-900 dark:text-white font-display" :
                        level === 3 ? "text-base sm:text-lg font-bold mt-4 mb-2 text-slate-900 dark:text-white font-display" :
                        "text-sm font-bold mt-3 mb-1.5 text-slate-900 dark:text-white font-display";
      html += "<h" + level + ' class="' + sizeClass + '">' + inline(heading[2]) + "</h" + level + ">";
      i++;
      continue;
    }

    if (/^\s*---+\s*$/.test(line) || /^\s*===+\s*$/.test(line)) {
      closeList();
      html += '<hr class="my-5 border-t border-slate-200 dark:border-slate-800" />';
      i++;
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      closeList();
      html += '<blockquote class="my-3 pl-4 border-l-4 border-blue-500 text-slate-600 dark:text-slate-400 italic text-sm sm:text-base">' + inline(quote[1]) + "</blockquote>";
      i++;
      continue;
    }

    const tbl = line.match(/^\|(.+)\|$/);
    if (tbl) {
      closeList();
      const rows = [];
      while (i < lines.length && /^\|.+\|$/.test(lines[i])) {
        rows.push(lines[i].replace(/^\||\|$/g, ""));
        i++;
      }
      const sepRow = rows[1] ? /^[\s:|-]+$/.test(rows[1].replace(/[| ]/g, "")) : false;
      const headerCells = rows[0].split("|").map((c) => c.trim());
      const body = sepRow ? rows.slice(2) : rows.slice(1);
      html += '<div class="overflow-x-auto my-4"><table class="w-full border-collapse text-xs sm:text-sm text-left border border-slate-200 dark:border-slate-800"><thead><tr class="bg-slate-100 dark:bg-slate-800/60 font-semibold text-slate-900 dark:text-white">';
      headerCells.forEach((c) => {
        html += '<th class="border border-slate-200 dark:border-slate-800 px-3 py-2">' + inline(c) + "</th>";
      });
      html += "</tr></thead><tbody>";
      body.forEach((row) => {
        html += '<tr class="border-b border-slate-200 dark:border-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-900/40">';
        row.split("|").forEach((c) => {
          html += '<td class="border border-slate-200 dark:border-slate-800 px-3 py-2">' + inline(c.trim()) + "</td>";
        });
        html += "</tr>";
      });
      html += "</tbody></table></div>";
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      if (listType !== "ul") {
        closeList();
        html += '<ul class="list-disc pl-6 my-3 space-y-1 sm:space-y-1.5 text-slate-700 dark:text-slate-300">';
        listType = "ul";
      }
      html += "<li>" + inline(line.replace(/^\s*[-*+]\s+/, "")) + "</li>";
      i++;
      continue;
    }

    if (/^\s*\d+[.)]\s+/.test(line)) {
      if (listType !== "ol") {
        closeList();
        html += '<ol class="list-decimal pl-6 my-3 space-y-1 sm:space-y-1.5 text-slate-700 dark:text-slate-300">';
        listType = "ol";
      }
      html += "<li>" + inline(line.replace(/^\s*\d+[.)]\s+/, "")) + "</li>";
      i++;
      continue;
    }

    if (line.trim() === "") {
      closeList();
      i++;
      continue;
    }

    closeList();
    html += '<p class="my-2 leading-relaxed text-slate-700 dark:text-slate-300 text-sm sm:text-base">' + inline(line) + "</p>";
    i++;
  }

  closeList();
  return html;
}

function buildNavigation() {
  const totalEx = data.reduce((n, l) => n + l.exercises.length, 0);

  data.forEach((level) => {
    const a = document.createElement("a");
    a.className = "gn-link px-2.5 py-1 text-white/80 no-underline whitespace-nowrap rounded hover:text-white text-xs font-medium transition-all [&.active]:text-white [&.active]:font-bold [&.active]:bg-white/10";
    a.href = "#level-" + level.id;
    a.dataset.target = "level-" + level.id;
    a.textContent = "L" + String(level.id).padStart(2, "0");
    if (navLinks) navLinks.appendChild(a);

    const fl = document.createElement("a");
    fl.className = "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline py-0.5";
    fl.href = "#level-" + level.id;
    fl.textContent = level.title || level.id;
    if (footerLinks) footerLinks.appendChild(fl);
  });

  if (heroLevels) heroLevels.textContent = String(data.length);
  if (heroExercises) heroExercises.textContent = String(totalEx);
}

function cardHtml(level, ex, index) {
  const panelId = "level-" + level.id + "-exercise-" + index;
  return (
    '<details class="exercise-card group border-b border-slate-200/80 dark:border-slate-800 text-left transition-colors hover:bg-slate-500/5" data-idx="' + index + '">' +
      '<summary class="exercise-toggle flex items-center justify-between gap-4 w-full py-5 px-2.5 cursor-pointer select-none list-none outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">' +
        '<div class="flex items-center gap-3.5 min-w-0">' +
          '<span class="exercise-index font-mono text-xs sm:text-sm text-slate-400 dark:text-slate-500 flex-shrink-0">' + String(index + 1).padStart(2, "0") + "</span>" +
          '<span class="exercise-name text-base sm:text-lg font-semibold text-slate-900 dark:text-white truncate">' + escapeHtml(ex.name) + "</span>" +
        "</div>" +
        '<svg class="exercise-chevron w-5 h-5 text-blue-600 dark:text-blue-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>' +
      "</summary>" +
      '<div id="' + panelId + '" class="exercise-body overflow-hidden">' +
        '<div class="exercise-desc px-2.5 sm:px-10 pb-8 text-base text-slate-700 dark:text-slate-300 max-w-none">' + mdToHtml(ex.md) + "</div>" +
      "</div>" +
    "</details>"
  );
}

function buildLevels() {
  if (!content) return;
  const frag = document.createDocumentFragment();

  data.forEach((level, li) => {
    const tile = TINT_PATTERN[li % TINT_PATTERN.length];
    const sec = document.createElement("section");
    sec.className = "level-section scroll-mt-16 py-16 px-6 border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300 " + tile;
    sec.id = "level-" + level.id;

    const inner = document.createElement("div");
    inner.className = "max-w-4xl mx-auto";

    const header = document.createElement("div");
    header.className = "text-center max-w-2xl mx-auto mb-12";
    header.innerHTML =
      '<h2 class="level-title font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2 text-slate-900 dark:text-white">' +
      escapeHtml(level.title || level.id) +
      "</h2>" +
      '<p class="level-subtitle text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-4">' +
      escapeHtml(level.subtitle || "Level exercises") +
      "</p>" +
      '<div class="level-meta flex items-center justify-center gap-3 flex-wrap text-sm text-slate-500 dark:text-slate-400">' +
      '<span class="level-count inline-flex items-center gap-1.5"><strong class="font-semibold text-blue-600 dark:text-blue-400">' +
      level.exercises.length +
      "</strong> exercises</span>" +
      (level.unlock
        ? '<span class="level-unlock inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-tight">Available from ' + escapeHtml(level.unlock) + "</span>"
        : "") +
      "</div>";

    inner.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "exercise-list border-t border-slate-200/80 dark:border-slate-800";
    level.exercises.forEach((ex, ei) => {
      grid.insertAdjacentHTML("beforeend", cardHtml(level, ex, ei));
    });
    inner.appendChild(grid);
    sec.appendChild(inner);
    frag.appendChild(sec);
  });

  content.appendChild(frag);

  if (window.hljs) {
    content.querySelectorAll(".exercise-desc pre code").forEach((el) => {
      if (!el.dataset.hljs) {
        el.classList.add("hljs");
        hljs.highlightElement(el);
        el.dataset.hljs = "1";
      }
    });
  }
}

function expandAll(open) {
  document.querySelectorAll(".exercise-card").forEach((c) => {
    c.open = open;
  });
  const label = document.getElementById("toggleAllLabel");
  if (label) label.textContent = open ? "Collapse all" : "Expand all";
}

let allOpen = false;

function onToggleAll() {
  allOpen = !allOpen;
  expandAll(allOpen);
}

function onSearch() {
  const q = (searchInput ? searchInput.value : "").trim().toLowerCase();
  let total = 0;
  content.classList.toggle("searching", !!q);
  data.forEach((level) => {
    const sec = document.getElementById("level-" + level.id);
    if (!sec) return;
    let count = 0;
    sec.querySelectorAll(".exercise-card").forEach((card, ci) => {
      const name = (level.exercises[ci] && level.exercises[ci].name || "").toLowerCase();
      const ok = !q || name.includes(q);
      card.style.display = ok ? "" : "none";
      if (ok) count++;
    });
    sec.classList.toggle("has-results", count > 0);
    total += count;
  });
  if (emptyState) emptyState.classList.toggle("visible", total === 0 && !!q);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("cp-theme", theme);
  } catch (e) {}
}

function initTheme() {
  let theme = "light";
  try {
    theme = localStorage.getItem("cp-theme") || theme;
  } catch (e) {}
  if (!["light", "dark"].includes(theme)) {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(theme);
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }
}

function init() {
  initTheme();
  buildNavigation();
  buildLevels();

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  if (toggleAllBtn) toggleAllBtn.addEventListener("click", onToggleAll);
  if (searchInput) searchInput.addEventListener("input", onSearch);

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("content").scrollIntoView({ behavior: "smooth" });
    });
  });

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(".gn-link").forEach((l) => {
          l.classList.toggle("active", l.dataset.target === entry.target.id);
        });
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  data.forEach((level) => {
    const sec = document.getElementById("level-" + level.id);
    if (sec) navObserver.observe(sec);
  });

  document.querySelectorAll('a[href^="#level-"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(a.getAttribute("href").slice(1));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
