/* ============================================================
   ATLAS — lógica de interfaz (multiidioma)
   Base de contenido: português. Capas es/en en GG.tr, con fallback.
   ============================================================ */
(function () {
  "use strict";

  var C = (window.GG && window.GG.countries) || [];
  var GUIDES = (window.GG && window.GG.guides) || [];
  var UI = (window.GG && window.GG.ui) || {};
  var TR = (window.GG && window.GG.tr) || {};
  var LANGS = (window.GG && window.GG.langs) || [{ code: "pt", short: "PT", label: "Português" }];

  /* mezcla las pistas vivas (flota, flora, fauna) por id */
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

  function norm(s) {
    return String(s == null ? "" : s)
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function strip(s) { return String(s == null ? "" : s).replace(/<[^>]*>/g, ""); }

  /* ---------- idioma ---------- */
  var LANG = (function () {
    try {
      var s = localStorage.getItem("atlas-lang");
      if (s && UI[s]) return s;
    } catch (e) {}
    var nav = (navigator.language || "").slice(0, 2).toLowerCase();
    if (UI[nav]) return nav;
    return UI.es ? "es" : "pt";
  })();

  function t(k) {
    var d = UI[LANG] || {};
    return d[k] != null ? d[k] : (UI.pt && UI.pt[k] != null ? UI.pt[k] : k);
  }
  /* traducción de contenido de país, con fallback al portugués */
  function tc(c, field) {
    var e = TR[LANG] && TR[LANG][c.id];
    if (e && e[field] != null) return e[field];
    return c[field];
  }
  function tcm(c, key) {
    var e = TR[LANG] && TR[LANG][c.id];
    if (e && e.m && e.m[key] != null) return e.m[key];
    return (c.m || {})[key];
  }
  function name(c) {
    var m = TR[LANG] && TR[LANG]._names;
    if (m && m[c.id]) return m[c.id];
    if (LANG === "en") return c.en;
    return c.n;
  }
  function enumT(kind, v) { var d = (UI[LANG] || {})[kind] || {}; return d[v] || v; }
  function difLabel(n) { return ((UI[LANG] || {}).dif || {})[n] || n; }

  /* ---------- bandera: emoji -> código ISO -> imagen ---------- */
  function iso(fl) {
    var cp = Array.from(String(fl || "")).map(function (ch) { return ch.codePointAt(0); });
    if (cp.length < 2 || cp[0] < 0x1F1E6 || cp[0] > 0x1F1FF) return "";
    return cp.slice(0, 2).map(function (c) {
      return String.fromCharCode(c - 0x1F1E6 + 97);
    }).join("");
  }
  function flagHTML(c, cls) {
    var code = iso(c.fl);
    if (!code) return '<span class="' + cls + ' flag--emoji" aria-hidden="true">' + c.fl + "</span>";
    return '<img class="' + cls + '" src="https://flagcdn.com/w80/' + code + '.png"' +
      ' srcset="https://flagcdn.com/w160/' + code + '.png 2x"' +
      ' width="40" height="30" loading="lazy" decoding="async" alt=""' +
      ' onerror="this.outerHTML=&quot;<span class=\\&quot;' + cls + ' flag--emoji\\&quot;>' + c.fl + '</span>&quot;">';
  }

  /* ---------- índice de búsqueda (por idioma) ---------- */
  function buildIndex() {
    C.forEach(function (c) {
      var parts = [c.n, c.en, name(c), c.rg, c.lang, c.scr, c.dom, c.side, c.cov,
        enumT("rg", c.rg), enumT("side", c.side), enumT("cov", c.cov)];
      ["plate", "tldr", "cars", "flora", "fauna"].forEach(function (f) { parts.push(tc(c, f)); });
      parts.push((tc(c, "quick") || []).join(" "));
      ["car", "bol", "pol", "road", "sign", "arch", "nat", "extra"].forEach(function (k) {
        parts.push(tcm(c, k));
      });
      (tc(c, "rgs") || []).forEach(function (r) { parts.push(r.n + " " + r.t); });
      (tc(c, "cf") || []).forEach(function (r) { parts.push(r.n + " " + r.t); });
      c._q = norm(strip(parts.join(" ")));
    });
    C.sort(function (a, b) { return name(a).localeCompare(name(b), LANG); });
  }

  /* ---------- estado ---------- */
  var state = { q: "", rg: "all", dif: "all", side: "all" };
  var view = C.slice();

  var elGrid = $("#grid"), elCount = $("#count"), elSearch = $("#q"),
      elScrim = $("#scrim"), elPanel = $("#panel"), elPanelBd = $("#panelBody"),
      elPanelHd = $("#panelHead"), elTop = $("#totop");

  function apply() {
    var terms = norm(state.q).split(/\s+/).filter(Boolean);
    view = C.filter(function (c) {
      if (state.rg !== "all" && c.rg !== state.rg) return false;
      if (state.dif === "easy" && c.dif > 2) return false;
      if (state.dif === "mid" && c.dif !== 3) return false;
      if (state.dif === "hard" && c.dif < 4) return false;
      if (state.side !== "all" && c.side !== state.side) return false;
      for (var i = 0; i < terms.length; i++) if (c._q.indexOf(terms[i]) === -1) return false;
      return true;
    });
    renderGrid();
  }

  function renderGrid() {
    elCount.textContent = view.length + " " + (view.length === 1 ? t("countOne") : t("countMany"));
    if (!view.length) {
      elGrid.innerHTML = '<div class="empty"><b>' + t("emptyTitle") + "</b>" + t("emptyBody") + "</div>";
      return;
    }
    elGrid.innerHTML = view.map(function (c) {
      var dots = "";
      for (var i = 1; i <= 5; i++) dots += '<i class="' + (i <= c.dif ? "on" : "") + '"></i>';
      return '<button class="card" data-id="' + c.id + '" type="button">' +
        '<span class="card__top">' + flagHTML(c, "card__fl") +
          '<span><span class="card__nm">' + name(c) + '</span>' +
          '<span class="card__en">' + (LANG === "en" ? c.n : c.en) + "</span></span>" +
        "</span>" +
        '<span class="card__tl">' + tc(c, "tldr") + "</span>" +
        '<span class="card__ft">' +
          '<span class="tag tag--rg">' + enumT("rg", c.rg) + "</span>" +
          '<span class="tag tag--sd">' + enumT("side", c.side) + "</span>" +
          (c.cov !== "Completa" ? '<span class="tag tag--pt">' + enumT("cov", c.cov) + "</span>" : "") +
          '<span class="dots" title="' + t("difficulty") + ": " + difLabel(c.dif) + '">' + dots + "</span>" +
        "</span></button>";
    }).join("");
  }

  /* ---------- panel ---------- */
  var current = -1;

  function fact(k, v) { return v ? '<div class="fact"><dt>' + k + "</dt><dd>" + v + "</dd></div>" : ""; }

  /* fotos específicas del país: postes y balizadores */
  function countryShots(id) {
    var list = (window.GG.countryShots || {})[id];
    if (!list || !list.length) return "";
    return '<div class="gshots gshots--in">' + list.map(function (im) {
      var cap = im[LANG] || im.pt || "";
      return '<figure class="gshot">' +
        '<img src="' + im.url + '" alt="' + cap.split('"').join("&quot;") +
        '" loading="lazy" decoding="async">' +
        "<figcaption>" + cap +
        '<a class="gshot__by" href="' + im.page + '" target="_blank" rel="noopener">' +
        im.by + " · " + im.lic + "</a></figcaption></figure>";
    }).join("") + "</div>";
  }

  /* foto de la patente del país, cuando hay una verificada */
  function plateShot(id) {
    var p = (window.GG.plateImages || {})[id];
    if (!p) return "";
    var cap = p[LANG] || p.pt || "";
    return '<figure class="plate"><img src="' + p.url + '" alt="' +
      cap.split('"').join("&quot;") + '" loading="lazy" decoding="async">' +
      "<figcaption>" + cap +
      '<a class="plate__by" href="' + p.page + '" target="_blank" rel="noopener">' +
      p.by + " · " + p.lic + "</a></figcaption></figure>";
  }
  function rows(list) {
    return list.map(function (r) {
      return '<div class="mrow"><dt>' + r[0] + '<span>' + r[1] + "</span></dt><dd>" + r[2] + "</dd></div>";
    }).join("");
  }

  function openCountry(id, push) {
    var idx = -1;
    for (var i = 0; i < C.length; i++) if (C[i].id === id) { idx = i; break; }
    if (idx < 0) return;
    current = idx;
    var c = C[idx];

    elPanelHd.innerHTML = flagHTML(c, "panel__fl") +
      '<span class="panel__hh"><h3 id="panelTitle">' + name(c) + "</h3>" +
      '<span class="sub">' + (LANG === "en" ? c.n : c.en) + " · " + enumT("rg", c.rg) +
      " · " + t("difficulty") + ": " + difLabel(c.dif) + "</span></span>" +
      '<button class="panel__x" id="panelClose" type="button" aria-label="' + t("closeLabel") + '">✕</button>';

    var html = '<p class="tldr">' + tc(c, "tldr") + "</p>";

    var quick = tc(c, "quick") || [];
    if (quick.length) {
      html += '<section class="blk"><h4 class="blk__t">' + t("bQuick") + '</h4><ol class="qlist">' +
        quick.map(function (q) { return "<li><span>" + q + "</span></li>"; }).join("") + "</ol></section>";
    }

    html += '<section class="blk"><h4 class="blk__t">' + t("bFacts") + '</h4><dl class="facts">' +
      fact(t("fSide"), enumT("side", c.side)) + fact(t("fLang"), c.lang) +
      fact(t("fScript"), c.scr) + fact(t("fDom"), c.dom) +
      fact(t("fCov"), enumT("cov", c.cov)) + fact(t("fPlate"), tc(c, "plate")) + "</dl>" +
      plateShot(c.id) + "</section>";

    var meta = [["mCar", "mCarS", "car"], ["mBol", "mBolS", "bol"], ["mPol", "mPolS", "pol"],
      ["mRoad", "mRoadS", "road"], ["mSign", "mSignS", "sign"], ["mArch", "mArchS", "arch"],
      ["mNat", "mNatS", "nat"], ["mExtra", "mExtraS", "extra"]]
      .map(function (r) { return [t(r[0]), t(r[1]), tcm(c, r[2])]; })
      .filter(function (r) { return r[2]; });
    if (meta.length) {
      html += '<section class="blk"><h4 class="blk__t">' + t("bMeta") + '</h4><dl class="meta">' +
        rows(meta) + "</dl>" + countryShots(c.id) + "</section>";
    }

    var live = [[t("vCars"), t("vCarsS"), tc(c, "cars")], [t("vFlora"), t("vFloraS"), tc(c, "flora")],
      [t("vFauna"), t("vFaunaS"), tc(c, "fauna")]].filter(function (r) { return r[2]; });
    if (live.length) {
      html += '<section class="blk blk--live"><h4 class="blk__t">' + t("bLive") + '</h4><dl class="meta">' +
        rows(live) + "</dl></section>";
    }

    var rgs = tc(c, "rgs") || [];
    if (rgs.length) {
      html += '<section class="blk"><h4 class="blk__t">' + t("bRegions") + '</h4><div class="rlist">' +
        rgs.map(function (r) { return '<div class="ritem"><b>' + r.n + "</b><span>" + r.t + "</span></div>"; }).join("") +
        "</div></section>";
    }

    var cf = tc(c, "cf") || [];
    if (cf.length) {
      html += '<section class="blk"><h4 class="blk__t">' + t("bConfuse") + '</h4><div class="clist">' +
        cf.map(function (r) { return '<div class="citem"><b>' + r.n + "</b><span>" + r.t + "</span></div>"; }).join("") +
        "</div></section>";
    }

    var prev = C[(idx - 1 + C.length) % C.length], next = C[(idx + 1) % C.length];
    html += '<nav class="panel__nav">' +
      '<button class="pnav" type="button" data-go="' + prev.id + '"><small>' + t("prev") + "</small>" + name(prev) + "</button>" +
      '<button class="pnav r" type="button" data-go="' + next.id + '"><small>' + t("next") + "</small>" + name(next) + "</button>" +
      "</nav>";

    elPanelBd.innerHTML = html;
    elPanelBd.scrollTop = 0;
    elPanel.classList.add("on");
    elScrim.classList.add("on");
    elPanel.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    var x = $("#panelClose"); if (x) x.focus();

    if (push !== false && location.hash !== "#/" + c.id) history.pushState({ id: c.id }, "", "#/" + c.id);
    document.title = name(c) + " — " + t("title");
  }

  function closePanel(push) {
    elPanel.classList.remove("on");
    elScrim.classList.remove("on");
    elPanel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    current = -1;
    document.title = t("title");
    if (push !== false && location.hash) history.pushState(null, "", location.pathname + location.search);
  }

  /* ---------- guías ---------- */
  function guideT(g) {
    var tr = window.GG.guidesTr && GG.guidesTr[LANG] && GG.guidesTr[LANG][g.id];
    return tr || {};
  }
  /* galería de imágenes verificadas de Wikimedia Commons */
  function guideGallery(id) {
    var imgs = (window.GG.guideImages || {})[id];
    if (!imgs || !imgs.length) return "";
    return '<div class="gshots">' + imgs.map(function (im) {
      var cap = im[LANG] || im.pt || "";
      return '<figure class="gshot">' +
        '<img src="' + im.url + '" alt="' + cap.split('"').join("&quot;") +
        '" loading="lazy" decoding="async">' +
        "<figcaption>" + cap +
        '<a class="gshot__by" href="' + im.page + '" target="_blank" rel="noopener">' +
        im.by + " · " + im.lic + "</a></figcaption></figure>";
    }).join("") + "</div>";
  }

  function renderGuides() {
    var el = $("#guides");
    if (!el) return;
    el.innerHTML = GUIDES.map(function (g) {
      var x = guideT(g);
      var items = x.items || g.items;
      return '<article class="gcard" data-g="' + g.id + '">' +
        '<button class="gcard__b" type="button" aria-expanded="false">' +
          '<span class="gcard__ic" aria-hidden="true">' + g.ic + "</span>" +
          '<span><span class="gcard__t">' + (x.t || g.t) + '</span>' +
          '<span class="gcard__s">' + (x.sub || g.sub) + "</span></span>" +
          '<span class="gcard__x" aria-hidden="true">＋</span></button>' +
        '<div class="gcard__body"><p class="gcard__intro">' + (x.intro || g.intro) + "</p>" +
          guideGallery(g.id) +
          items.map(function (i) { return '<div class="gitem"><b>' + i.n + "</b><span>" + i.t + "</span></div>"; }).join("") +
        "</div></article>";
    }).join("");
  }

  /* ---------- textos estáticos ---------- */
  function applyUI() {
    var d = UI[LANG] || {};
    document.documentElement.lang = d.htmlLang || LANG;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.dataset.i18nPh); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    var md = $('meta[name="description"]'); if (md) md.content = t("metaDesc");
    document.title = t("title");
    $$(".langbtn").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === LANG ? "true" : "false");
    });
  }

  function setLang(code) {
    if (!UI[code] || code === LANG) return;
    LANG = code;
    try { localStorage.setItem("atlas-lang", code); } catch (e) {}
    buildIndex();
    applyUI();
    buildFilters();
    renderGuides();
    stats();
    apply();
    if (current >= 0) openCountry(C[current] ? C[current].id : "", false);
  }

  /* ---------- eventos ---------- */
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;

    var lb = e.target.closest(".langbtn");
    if (lb) { setLang(lb.dataset.lang); return; }

    var card = e.target.closest(".card");
    if (card) { openCountry(card.dataset.id); return; }

    var go = e.target.closest("[data-go]");
    if (go) { openCountry(go.dataset.go); return; }

    if (e.target.closest("#panelClose")) { closePanel(); return; }
    if (e.target === elScrim) { closePanel(); return; }

    var gb = e.target.closest(".gcard__b");
    if (gb) {
      var open = gb.closest(".gcard").classList.toggle("open");
      gb.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }

    var chip = e.target.closest(".chip");
    if (chip) {
      var key = chip.dataset.k;
      state[key] = chip.dataset.v;
      $$('.chip[data-k="' + key + '"]').forEach(function (b) {
        b.setAttribute("aria-pressed", b === chip ? "true" : "false");
      });
      apply();
      return;
    }

    if (e.target.closest("#totop")) window.scrollTo({ top: 0, behavior: "smooth" });
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
    var s = document.documentElement.getAttribute("data-theme");
    if (s) return s;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function paintThemeBtn() { themeBtn.textContent = currentTheme() === "dark" ? "☀" : "☾"; }
  themeBtn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("atlas-theme", next); } catch (e) {}
    paintThemeBtn();
  });

  function route(push) {
    var m = /^#\/(.+)$/.exec(location.hash || "");
    if (m) {
      var id = decodeURIComponent(m[1]);
      for (var i = 0; i < C.length; i++) if (C[i].id === id) { openCountry(id, push); return; }
    }
    if (elPanel.classList.contains("on")) closePanel(false);
  }

  function stats() {
    var byRg = {};
    C.forEach(function (c) { byRg[c.rg] = (byRg[c.rg] || 0) + 1; });
    var set = function (id, v) { var e = $(id); if (e) e.textContent = v; };
    set("#statCountries", C.length);
    set("#statGuides", GUIDES.length);
    set("#statLeft", C.filter(function (c) { return c.side === "Esquerda"; }).length);
    set("#statRegions", Object.keys(byRg).length);
  }

  var REGIONS = ["Europa", "Ásia", "África", "Américas", "Oceania"];
  function buildFilters() {
    $("#fRegion").innerHTML =
      '<button class="chip" data-k="rg" data-v="all" aria-pressed="' + (state.rg === "all") + '">' + t("fAll") + "</button>" +
      REGIONS.filter(function (r) { return C.some(function (c) { return c.rg === r; }); })
        .map(function (r) {
          var n = C.filter(function (c) { return c.rg === r; }).length;
          return '<button class="chip" data-k="rg" data-v="' + r + '" aria-pressed="' + (state.rg === r) +
            '">' + enumT("rg", r) + ' <span style="opacity:.6">' + n + "</span></button>";
        }).join("");
  }

  function buildLangSwitch() {
    var box = $("#langSwitch");
    if (!box) return;
    box.innerHTML = LANGS.map(function (l) {
      return '<button class="langbtn" type="button" data-lang="' + l.code + '" title="' + l.label +
        '" aria-pressed="' + (l.code === LANG) + '">' + l.short + "</button>";
    }).join("");
  }

  /* ---------- init ---------- */
  paintThemeBtn();
  buildLangSwitch();
  buildIndex();
  applyUI();
  buildFilters();
  renderGuides();
  stats();
  apply();
  route(false);
})();
