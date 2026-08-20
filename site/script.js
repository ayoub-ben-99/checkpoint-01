"use strict";

const data = typeof LEVELS !== "undefined" ? LEVELS : [];
const content = document.getElementById("content");
const searchInput = document.getElementById("search");
const toggleAllBtn = document.getElementById("toggleAll");
const emptyState = document.getElementById("emptyState");
const snMeta = document.getElementById("snMeta");
const navLinks = document.getElementById("navLinks");
const footerLinks = document.getElementById("footerLinks");

const TINT_PATTERN = ["tile-parchment"];

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(text) {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, (m, c) => "<code>" + c + "</code>");
  out = out.replace(/\*\*([^*]+)\*\*/g, (m, c) => "<strong>" + c + "</strong>");
  out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, (m, b, c) => b + "<em>" + c + "</em>");
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, t, u) => '<a href="' + u + '" target="_blank" rel="noopener">' + t + "</a>");
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
      html += '<pre><code class="language-' + escapeHtml(lang) + '">' + escapeHtml(code.join("\n")) + "</code></pre>";
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      html += "<h" + level + ">" + inline(heading[2]) + "</h" + level + ">";
      i++;
      continue;
    }

    if (/^\s*---+\s*$/.test(line) || /^\s*===+\s*$/.test(line)) {
      closeList();
      html += "<hr />";
      i++;
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      closeList();
      html += "<blockquote>" + inline(quote[1]) + "</blockquote>";
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
      html += "<table><thead><tr>";
      headerCells.forEach((c) => {
        html += "<th>" + inline(c) + "</th>";
      });
      html += "</tr></thead><tbody>";
      body.forEach((row) => {
        html += "<tr>";
        row.split("|").forEach((c) => {
          html += "<td>" + inline(c.trim()) + "</td>";
        });
        html += "</tr>";
      });
      html += "</tbody></table>";
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      if (listType !== "ul") {
        closeList();
        html += "<ul>";
        listType = "ul";
      }
      html += "<li>" + inline(line.replace(/^\s*[-*+]\s+/, "")) + "</li>";
      i++;
      continue;
    }

    if (/^\s*\d+[.)]\s+/.test(line)) {
      if (listType !== "ol") {
        closeList();
        html += "<ol>";
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
    html += "<p>" + inline(line) + "</p>";
    i++;
  }

  closeList();
  return html;
}

function buildNavigation() {
  data.forEach((level) => {
    const a = document.createElement("a");
    a.className = "gn-link";
    a.href = "#level-" + level.id;
    a.dataset.target = "level-" + level.id;
    a.textContent = String(level.id).toUpperCase();
    navLinks.appendChild(a);

    const fl = document.createElement("a");
    fl.href = "#level-" + level.id;
    fl.textContent = level.title || level.id;
    if (footerLinks) footerLinks.appendChild(fl);
  });

  const totalEx = data.reduce((n, l) => n + l.exercises.length, 0);
  if (snMeta) snMeta.textContent = data.length + " levels · " + totalEx + " exercises";
}

function cardHtml(level, ex, index) {
  return (
    '<article class="exercise-card" data-idx="' + index + '">' +
      '<button class="exercise-toggle" type="button" aria-expanded="false">' +
        '<span class="exercise-index">' + String(index + 1).padStart(2, "0") + "</span>" +
        '<span class="exercise-name">' + escapeHtml(ex.name) + "</span>" +
        '<svg class="exercise-chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>' +
      "</button>" +
      '<div class="exercise-body" role="region">' +
        '<div class="exercise-desc">' + mdToHtml(ex.md) + "</div>" +
      "</div>" +
    "</article>"
  );
}

function buildLevels() {
  if (!content) return;
  const frag = document.createDocumentFragment();

  data.forEach((level, li) => {
    const tile = TINT_PATTERN[li % TINT_PATTERN.length];
    const sec = document.createElement("section");
    sec.className = "level-section " + tile;
    sec.id = "level-" + level.id;

    const inner = document.createElement("div");
    inner.className = "tile-inner";

    const header = document.createElement("div");
    header.className = "level-header";
    header.innerHTML =
      '<span class="level-number">' +
      escapeHtml(level.id) +
      "</span>" +
      '<h2 class="level-title">' +
      escapeHtml(level.title || level.id) +
      "</h2>" +
      '<p class="level-subtitle">' +
      escapeHtml(level.subtitle || "Level exercises") +
      "</p>" +
      '<span class="level-count"><strong>' +
      level.exercises.length +
      "</strong> exercises</span>";

    inner.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "exercise-list";
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

function toggleCard(card) {
  card.classList.toggle("open");
  const btn = card.querySelector(".exercise-toggle");
  if (btn) btn.setAttribute("aria-expanded", card.classList.contains("open") ? "true" : "false");
}

function expandAll(open) {
  document.querySelectorAll(".exercise-card").forEach((c) => c.classList.toggle("open", open));
  if (toggleAllBtn) toggleAllBtn.textContent = open ? "Collapse all" : "Expand all";
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

  toggleAllBtn.addEventListener("click", onToggleAll);
  searchInput.addEventListener("input", onSearch);

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".exercise-card");
    if (card && e.target.closest(".exercise-toggle")) toggleCard(card);
  });

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("content").scrollIntoView({ behavior: "smooth" });
    });
  });

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id.replace("level-", "");
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