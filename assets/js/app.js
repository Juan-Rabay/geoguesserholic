/* ============================================================
   ATLAS — lógica da interface
   ============================================================ */
(function () {
  "use strict";

  var C = (window.GG && window.GG.countries) || [];
  var GUIDES = (window.GG && window.GG.guides) || [];

  /* mescla as pistas vivas (frota, flora, fauna) por id */
  var EXTRA = (window.GG && window.GG.extra) || {};
  C.forEach(function (c) {
    var e = EXTRA[c.id];
    if (!e) return;
    if (e.cars) c.cars = e.cars;
    if (e.flora) c.flora = e.flora;
    if (e.fauna) c.fauna = e.fauna;
  });

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- utilidades ---------- */
  function norm(s) {
    return String(s == null ? "" : s)
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
  function strip(s) { return String(s == null ? "" : s).replace(/<[^>]*>/g, ""); }

  var REGIONS = ["Europa", "Ásia", "África", "Américas", "Oceania"];
  var DIF_LABEL = { 1: "Muito fácil", 2: "Fácil", 3: "Média", 4: "Difícil", 5: "Muito difícil" };

  /* índice de busca — inclui nome, ficha, metas, regiões e confusões */
  C.forEach(function (c) {
    var m = c.m || {};
    c._q = norm(strip([
      c.n, c.en, c.rg, c.lang, c.scr, c.dom, c.side, c.cov, c.plate, c.tldr,
      (c.quick || []).join(" "),
      [m.car, m.bol, m.pol, m.road, m.sign, m.arch, m.nat, m.extra].join(" "),
      [c.cars, c.flora, c.fauna].join(" "),
      (c.rgs || []).map(function (r) { return r.n + " " + r.t; }).join(" "),
      (c.cf || []).map(function (r) { return r.n + " " + r.t; }).join(" ")
    ].join(" ")));
  });

  C.sort(function (a, b) { return a.n.localeCompare(b.n, "pt-BR"); });

  /* ---------- estado ---------- */
  var state = { q: "", rg: "all", dif: "all", side: "all" };
  var view = C.slice();

  /* ---------- elementos ---------- */
  var elGrid = $("#grid"), elCount = $("#count"), elSearch = $("#q"),
      elScrim = $("#scrim"), elPanel = $("#panel"), elPanelBd = $("#panelBody"),
      elPanelHd = $("#panelHead"), elTop = $("#totop");

  /* ---------- filtros ---------- */
  function apply() {
    /* busca por tokens: todas as palavras precisam aparecer, em qualquer ordem */
    var terms = norm(state.q).split(/\s+/).filter(Boolean);
    view = C.filter(function (c) {
      if (state.rg !== "all" && c.rg !== state.rg) return false;
      if (state.dif === "easy" && c.dif > 2) return false;
      if (state.dif === "mid" && c.dif !== 3) return false;
      if (state.dif === "hard" && c.dif < 4) return false;
      if (state.side !== "all" && c.side !== state.side) return false;
      for (var i = 0; i < terms.length; i++) {
        if (c._q.indexOf(terms[i]) === -1) return false;
      }
      return true;
    });
    renderGrid();
  }

  function renderGrid() {
    elCount.textContent = view.length + (view.length === 1 ? " país" : " países");
    if (!view.length) {
      elGrid.innerHTML = '<div class="empty"><b>Nenhum resultado</b>Tente outro termo ou limpe os filtros.</div>';
      return;
    }
    var html = view.map(function (c) {
      var dots = "";
      for (var i = 1; i <= 5; i++) dots += '<i class="' + (i <= c.dif ? "on" : "") + '"></i>';
      return '' +
        '<button class="card" data-id="' + c.id + '" type="button">' +
          '<span class="card__top">' +
            '<span class="card__fl" aria-hidden="true">' + c.fl + '</span>' +
            '<span>' +
              '<span class="card__nm">' + c.n + '</span>' +
              '<span class="card__en">' + c.en + '</span>' +
            '</span>' +
          '</span>' +
          '<span class="card__tl">' + c.tldr + '</span>' +
          '<span class="card__ft">' +
            '<span class="tag tag--rg">' + c.rg + '</span>' +
            '<span class="tag tag--sd">' + c.side + '</span>' +
            (c.cov !== "Completa" ? '<span class="tag tag--pt">' + c.cov + '</span>' : '') +
            '<span class="dots" title="Dificuldade: ' + DIF_LABEL[c.dif] + '">' + dots + '</span>' +
          '</span>' +
        '</button>';
    }).join("");
    elGrid.innerHTML = html;
  }

  /* ---------- painel de detalhe ---------- */
  var current = -1;

  function openCountry(id, push) {
    var idx = C.findIndex(function (c) { return c.id === id; });
    if (idx < 0) return;
    current = idx;
    var c = C[idx];

    elPanelHd.innerHTML =
      '<span class="panel__fl" aria-hidden="true">' + c.fl + '</span>' +
      '<span class="panel__hh">' +
        '<h3 id="panelTitle">' + c.n + '</h3>' +
        '<span class="sub">' + c.en + ' · ' + c.rg + ' · Dificuldade: ' + DIF_LABEL[c.dif] + '</span>' +
      '</span>' +
      '<button class="panel__x" id="panelClose" type="button" aria-label="Fechar">✕</button>';

    var m = c.m || {};
    var metaRows = [
      ["Carro Google", "captura", m.car],
      ["Delineadores", "bollards", m.bol],
      ["Postes", "energia", m.pol],
      ["Solo", "marcação", m.road],
      ["Sinalização", "placas", m.sign],
      ["Arquitetura", "construções", m.arch],
      ["Natureza", "vegetação", m.nat],
      ["Extra", "detalhe fino", m.extra]
    ].filter(function (r) { return r[2]; });

    var html = '<p class="tldr">' + c.tldr + '</p>';

    if (c.quick && c.quick.length) {
      html += '<section class="blk"><h4 class="blk__t">Identificação rápida</h4><ol class="qlist">' +
        c.quick.map(function (q) { return "<li><span>" + q + "</span></li>"; }).join("") +
        "</ol></section>";
    }

    html += '<section class="blk"><h4 class="blk__t">Ficha</h4><dl class="facts">' +
      fact("Direção", c.side) +
      fact("Idioma", c.lang) +
      fact("Escrita", c.scr) +
      fact("Domínio", c.dom) +
      fact("Cobertura", c.cov) +
      fact("Placa do veículo", c.plate) +
      "</dl></section>";

    if (metaRows.length) {
      html += '<section class="blk"><h4 class="blk__t">Metas detalhadas</h4><dl class="meta">' +
        metaRows.map(function (r) {
          return '<div class="mrow"><dt>' + r[0] + '<span>' + r[1] + '</span></dt><dd>' + r[2] + "</dd></div>";
        }).join("") + "</dl></section>";
    }

    var vivas = [
      ["Frota", "carros e transporte", c.cars],
      ["Flora", "vegetação indicadora", c.flora],
      ["Fauna", "animais visíveis", c.fauna]
    ].filter(function (r) { return r[2]; });

    if (vivas.length) {
      html += '<section class="blk blk--live"><h4 class="blk__t">Pistas vivas</h4><dl class="meta">' +
        vivas.map(function (r) {
          return '<div class="mrow"><dt>' + r[0] + '<span>' + r[1] + '</span></dt><dd>' + r[2] + "</dd></div>";
        }).join("") + "</dl></section>";
    }

    if (c.rgs && c.rgs.length) {
      html += '<section class="blk"><h4 class="blk__t">Divisão regional</h4><div class="rlist">' +
        c.rgs.map(function (r) { return '<div class="ritem"><b>' + r.n + "</b><span>" + r.t + "</span></div>"; }).join("") +
        "</div></section>";
    }

    if (c.cf && c.cf.length) {
      html += '<section class="blk"><h4 class="blk__t">Confusões comuns</h4><div class="clist">' +
        c.cf.map(function (r) { return '<div class="citem"><b>' + r.n + "</b><span>" + r.t + "</span></div>"; }).join("") +
        "</div></section>";
    }

    var prev = C[(idx - 1 + C.length) % C.length], next = C[(idx + 1) % C.length];
    html += '<nav class="panel__nav">' +
      '<button class="pnav" type="button" data-go="' + prev.id + '"><small>← Anterior</small>' + prev.fl + " " + prev.n + "</button>" +
      '<button class="pnav r" type="button" data-go="' + next.id + '"><small>Próximo →</small>' + next.fl + " " + next.n + "</button>" +
      "</nav>";

    elPanelBd.innerHTML = html;
    elPanelBd.scrollTop = 0;

    elPanel.classList.add("on");
    elScrim.classList.add("on");
    elPanel.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    $("#panelClose").focus();

    if (push !== false && location.hash !== "#/" + c.id) {
      history.pushState({ id: c.id }, "", "#/" + c.id);
    }
    document.title = c.n + " — Atlas de Metas do GeoGuessr";
  }

  function fact(k, v) {
    if (!v) return "";
    return '<div class="fact"><dt>' + k + "</dt><dd>" + v + "</dd></div>";
  }

  function closePanel(push) {
    elPanel.classList.remove("on");
    elScrim.classList.remove("on");
    elPanel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    current = -1;
    document.title = "Atlas de Metas do GeoGuessr";
    if (push !== false && location.hash) history.pushState(null, "", location.pathname + location.search);
  }

  /* ---------- guias ---------- */
  function renderGuides() {
    var el = $("#guides");
    if (!el) return;
    el.innerHTML = GUIDES.map(function (g) {
      return '' +
        '<article class="gcard" data-g="' + g.id + '">' +
          '<button class="gcard__b" type="button" aria-expanded="false">' +
            '<span class="gcard__ic" aria-hidden="true">' + g.ic + '</span>' +
            '<span><span class="gcard__t">' + g.t + '</span><span class="gcard__s">' + g.sub + '</span></span>' +
            '<span class="gcard__x" aria-hidden="true">＋</span>' +
          '</button>' +
          '<div class="gcard__body">' +
            '<p class="gcard__intro">' + g.intro + '</p>' +
            g.items.map(function (i) {
              return '<div class="gitem"><b>' + i.n + "</b><span>" + i.t + "</span></div>";
            }).join("") +
          '</div>' +
        '</article>';
    }).join("");
  }

  /* ---------- eventos ---------- */
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    var card = e.target.closest(".card");
    if (card) { openCountry(card.dataset.id); return; }

    var go = e.target.closest("[data-go]");
    if (go) { openCountry(go.dataset.go); return; }

    if (e.target.closest("#panelClose")) { closePanel(); return; }
    if (e.target === elScrim) { closePanel(); return; }

    var gb = e.target.closest(".gcard__b");
    if (gb) {
      var card2 = gb.closest(".gcard");
      var open = card2.classList.toggle("open");
      gb.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }

    var chip = e.target.closest(".chip");
    if (chip) {
      var key = chip.dataset.k, val = chip.dataset.v;
      state[key] = val;
      $$('.chip[data-k="' + key + '"]').forEach(function (b) {
        b.setAttribute("aria-pressed", b === chip ? "true" : "false");
      });
      apply();
      return;
    }

    if (e.target.closest("#totop")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  elSearch.addEventListener("input", function () {
    state.q = elSearch.value;
    elSearch.parentNode.classList.toggle("has-val", !!elSearch.value);
    apply();
  });

  $("#clearQ").addEventListener("click", function () {
    elSearch.value = ""; state.q = "";
    elSearch.parentNode.classList.remove("has-val");
    elSearch.focus(); apply();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (elPanel.classList.contains("on")) closePanel();
      else if (document.activeElement === elSearch && elSearch.value) $("#clearQ").click();
      return;
    }
    if (elPanel.classList.contains("on") && current >= 0) {
      if (e.key === "ArrowRight") { e.preventDefault(); openCountry(C[(current + 1) % C.length].id); }
      if (e.key === "ArrowLeft") { e.preventDefault(); openCountry(C[(current - 1 + C.length) % C.length].id); }
      return;
    }
    if (e.key === "/" && document.activeElement !== elSearch) {
      e.preventDefault(); elSearch.focus(); elSearch.select();
    }
  });

  window.addEventListener("popstate", function () { route(false); });

  window.addEventListener("scroll", function () {
    elTop.classList.toggle("on", window.scrollY > 700);
  }, { passive: true });

  /* ---------- tema ---------- */
  var themeBtn = $("#theme");
  function currentTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function paintThemeBtn() { themeBtn.textContent = currentTheme() === "dark" ? "☀" : "☾"; }
  themeBtn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("atlas-theme", next); } catch (err) {}
    paintThemeBtn();
  });

  /* ---------- rota por hash ---------- */
  function route(push) {
    var m = /^#\/(.+)$/.exec(location.hash || "");
    if (m) {
      var id = decodeURIComponent(m[1]);
      if (C.some(function (c) { return c.id === id; })) { openCountry(id, push); return; }
    }
    if (elPanel.classList.contains("on")) closePanel(false);
  }

  /* ---------- estatísticas do hero ---------- */
  function stats() {
    var byRg = {};
    C.forEach(function (c) { byRg[c.rg] = (byRg[c.rg] || 0) + 1; });
    var set = $("#statCountries");
    if (set) set.textContent = C.length;
    var g = $("#statGuides");
    if (g) g.textContent = GUIDES.length;
    var left = C.filter(function (c) { return c.side === "Esquerda"; }).length;
    var l = $("#statLeft");
    if (l) l.textContent = left;
    var reg = $("#statRegions");
    if (reg) reg.textContent = Object.keys(byRg).length;
  }

  /* ---------- filtros dinâmicos ---------- */
  function buildFilters() {
    var box = $("#fRegion");
    box.innerHTML = '<button class="chip" data-k="rg" data-v="all" aria-pressed="true">Todas</button>' +
      REGIONS.filter(function (r) { return C.some(function (c) { return c.rg === r; }); })
        .map(function (r) {
          var n = C.filter(function (c) { return c.rg === r; }).length;
          return '<button class="chip" data-k="rg" data-v="' + r + '" aria-pressed="false">' + r + " <span style=\"opacity:.6\">" + n + "</span></button>";
        }).join("");
  }

  /* ---------- init ---------- */
  paintThemeBtn();
  buildFilters();
  renderGuides();
  stats();
  apply();
  route(false);
})();
