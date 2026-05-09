/**
 * Better Specialty Coffee — Bean Matrix, brew calculator, Coffee Concierge.
 */
(function () {
  "use strict";

  console.log("Hello Coffee");

  /** @typedef {'fruity' | 'chocolatey' | 'floral'} FlavorNote */
  /** @typedef {'rotational' | 'fixed'} ConciergePlan */

  /**
   * @typedef {Object} BeanLot
   * @property {string} id
   * @property {string} origin
   * @property {string} roastDate ISO date
   * @property {number} scaScore
   * @property {FlavorNote[]} flavorNotes
   * @property {ConciergePlan[]} plans
   */

  /** @type {BeanLot[]} */
  const BEAN_LOTS = [
    {
      id: "et-1",
      origin: "Ethiopia · Yirgacheffe",
      roastDate: "2026-05-02",
      scaScore: 86,
      flavorNotes: ["fruity", "floral"],
      plans: ["rotational"],
    },
    {
      id: "co-1",
      origin: "Colombia · Huila",
      roastDate: "2026-05-07",
      scaScore: 84,
      flavorNotes: ["chocolatey", "fruity"],
      plans: ["rotational", "fixed"],
    },
    {
      id: "br-1",
      origin: "Brazil · Cerrado",
      roastDate: "2026-05-08",
      scaScore: 82,
      flavorNotes: ["chocolatey"],
      plans: ["fixed"],
    },
    {
      id: "ke-1",
      origin: "Kenya · Nyeri",
      roastDate: "2026-04-28",
      scaScore: 88,
      flavorNotes: ["fruity", "floral"],
      plans: ["rotational"],
    },
    {
      id: "gt-1",
      origin: "Guatemala · Huehuetenango",
      roastDate: "2026-05-01",
      scaScore: 85,
      flavorNotes: ["chocolatey", "floral"],
      plans: ["rotational", "fixed"],
    },
    {
      id: "cr-1",
      origin: "Costa Rica · Tarrazú",
      roastDate: "2026-05-06",
      scaScore: 83,
      flavorNotes: ["fruity", "chocolatey"],
      plans: ["rotational"],
    },
  ];

  const METHOD_DEFAULTS = {
    v60: {
      ratio: 16,
      hint: "V60: start 1:15–1:17, then interrogate the cup. Precision is the flex.",
    },
    aeropress: {
      ratio: 14,
      hint: "AeroPress: tighter ratios common—1:12–1:15 before you invert your luck.",
    },
  };

  const PLAN_COPY = {
    rotational:
      "Rotational mode: seasonal edges, limited drops, flavor that refuses to sit still. The Matrix shows what belongs in the chaos pipeline.",
    fixed:
      "Fixed mode: the same cut-throat profile on repeat—balanced, chocolate-leaning lots for the cup you trust when the alarm wins.",
  };

  /**
   * 1:n water-to-coffee ratio: water (g) = coffee (g) × n.
   * @param {number} coffeeGrams
   * @param {number} ratioWaterPerCoffee e.g. 16 for 1:16
   * @returns {number | null}
   */
  function calculateBrewWater(coffeeGrams, ratioWaterPerCoffee) {
    if (!Number.isFinite(coffeeGrams) || coffeeGrams <= 0) return null;
    if (!Number.isFinite(ratioWaterPerCoffee) || ratioWaterPerCoffee <= 0) {
      return null;
    }
    return coffeeGrams * ratioWaterPerCoffee;
  }

  /**
   * @param {BeanLot[]} lots
   * @param {{ plan: ConciergePlan; flavorFilters: FlavorNote[] }} opts
   * @returns {BeanLot[]}
   */
  function filterBeanMatrix(lots, opts) {
    const { plan, flavorFilters } = opts;
    return lots.filter(function (lot) {
      if (!lot.plans.includes(plan)) return false;
      if (flavorFilters.length === 0) return true;
      return flavorFilters.some(function (note) {
        return lot.flavorNotes.indexOf(note) !== -1;
      });
    });
  }

  function formatRoastDate(iso) {
    try {
      const d = new Date(iso + "T12:00:00");
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return iso;
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderBeanCards(container, lots) {
    container.innerHTML = "";
    if (lots.length === 0) {
      var empty = document.createElement("p");
      empty.className = "col-span-full py-16 text-center text-sm text-white/45";
      empty.textContent =
        "Nothing in the Matrix matches that combo. Loosen the filters or switch plans—the beans are still ruthless elsewhere.";
      container.appendChild(empty);
      return;
    }

    lots.forEach(function (lot) {
      var card = document.createElement("article");
      card.className = "bsc-bean-card flex flex-col p-5 sm:p-6";
      card.setAttribute("data-bean-id", lot.id);

      var notes = lot.flavorNotes
        .map(function (n) {
          return (
            '<span class="inline-block border border-[#3C2A21]/90 bg-black/30 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/75 transition-[border-color] duration-300 group-hover:border-[#5c4033]">' +
            escapeHtml(n) +
            "</span>"
          );
        })
        .join(" ");

      card.innerHTML =
        '<h3 class="text-base font-semibold tracking-tight text-white sm:text-lg">' +
        escapeHtml(lot.origin) +
        "</h3>" +
        '<p class="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Origin</p>' +
        '<dl class="mt-8 space-y-4 text-sm">' +
        '<div class="flex flex-wrap justify-between gap-2 border-b border-[#3C2A21]/50 pb-3">' +
        "<dt class=\"text-white/45\">Roast date</dt>" +
        '<dd class="text-right font-medium text-white">' +
        escapeHtml(formatRoastDate(lot.roastDate)) +
        "</dd></div>" +
        '<div class="flex flex-wrap justify-between gap-2 border-b border-[#3C2A21]/50 pb-3">' +
        "<dt class=\"text-white/45\">SCA score</dt>" +
        '<dd class="text-right font-medium tabular-nums text-white">' +
        escapeHtml(String(lot.scaScore)) +
        "+</dd></div>" +
        "<div><dt class=\"text-white/45\">Flavor notes</dt>" +
        '<dd class="mt-2 flex flex-wrap gap-2">' +
        notes +
        "</dd></div></dl>";

      container.appendChild(card);
    });
  }

  function getSelectedFlavorFilters(root) {
    /** @type {FlavorNote[]} */
    var selected = [];
    root.querySelectorAll('input[name="flavor-note"]:checked').forEach(function (el) {
      selected.push(/** @type {HTMLInputElement} */ (el).value);
    });
    return selected;
  }

  function getSelectedPlan(root) {
    var checked = root.querySelector('input[name="concierge-plan"]:checked');
    if (!checked) return "rotational";
    return /** @type {ConciergePlan} */ (checked.value);
  }

  function updateMatrix(root) {
    var grid = root.getElementById("bean-matrix-grid");
    var status = root.getElementById("bean-matrix-status");
    if (!grid || !status) return;

    var plan = getSelectedPlan(root);
    var flavorFilters = getSelectedFlavorFilters(root);
    var filtered = filterBeanMatrix(BEAN_LOTS, { plan: plan, flavorFilters: flavorFilters });

    status.textContent =
      filtered.length +
      " lot" +
      (filtered.length === 1 ? "" : "s") +
      " · Plan: " +
      plan +
      (flavorFilters.length
        ? " · Notes: " + flavorFilters.join(", ")
        : " · All flavor notes");

    renderBeanCards(grid, filtered);
  }

  function updatePlanDescription(root) {
    var el = root.getElementById("plan-description");
    if (!el) return;
    var plan = getSelectedPlan(root);
    el.textContent = PLAN_COPY[plan] || "";
  }

  function updateMethodHint(root) {
    var methodEl = root.getElementById("brew-method");
    var hintEl = root.getElementById("brew-method-hint");
    var ratioEl = root.getElementById("brew-ratio");
    if (!methodEl || !hintEl) return;

    var method = /** @type {'v60' | 'aeropress'} */ (methodEl.value);
    var def = METHOD_DEFAULTS[method];
    if (def && ratioEl && document.activeElement !== ratioEl) {
      ratioEl.value = String(def.ratio);
    }
    hintEl.textContent = def ? def.hint : "";
  }

  function runBrewCalculator(root) {
    var coffeeEl = root.getElementById("brew-coffee-g");
    var ratioEl = root.getElementById("brew-ratio");
    var methodEl = root.getElementById("brew-method");
    var out = root.getElementById("brew-result");
    if (!coffeeEl || !ratioEl || !methodEl || !out) return;

    var coffeeG = parseFloat(coffeeEl.value);
    var ratio = parseFloat(ratioEl.value);
    var water = calculateBrewWater(coffeeG, ratio);

    if (water === null) {
      out.hidden = false;
      out.textContent = "Enter a positive coffee mass and ratio.";
      return;
    }

    var methodLabel = methodEl.value === "aeropress" ? "AeroPress" : "V60";
    var rounded = Math.round(water * 10) / 10;
    out.hidden = false;
    out.innerHTML =
      "<p class=\"font-medium text-white\">" +
      methodLabel +
      " · Target water</p>" +
      '<p class="mt-2 tabular-nums text-lg text-white">' +
      rounded +
      " g <span class=\"text-white/45\">(≈ ml)</span></p>" +
      '<p class="mt-2 text-xs text-white/50">' +
      coffeeG +
      " g coffee · 1:" +
      ratio +
      " — weigh, boil, commit.</p>";
  }

  function dismissLoadingOverlay(root) {
    var el = root.getElementById("bsc-loading");
    if (!el) return;
    el.classList.add("bsc-loading--done");
    el.setAttribute("aria-busy", "false");
    root.body.classList.remove("bsc-loading-active");
  }

  function init() {
    var root = document;
    var started = typeof performance !== "undefined" ? performance.now() : Date.now();
    var reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var minVisibleMs = reduceMotion ? 220 : 820;

    updatePlanDescription(root);
    updateMethodHint(root);
    updateMatrix(root);

    root.querySelectorAll('input[name="concierge-plan"]').forEach(function (radio) {
      radio.addEventListener("change", function () {
        updatePlanDescription(root);
        updateMatrix(root);
      });
    });

    root.querySelectorAll('input[name="flavor-note"]').forEach(function (cb) {
      cb.addEventListener("change", function () {
        updateMatrix(root);
      });
    });

    var methodEl = root.getElementById("brew-method");
    if (methodEl) {
      methodEl.addEventListener("change", function () {
        updateMethodHint(root);
        runBrewCalculator(root);
      });
    }

    var form = root.getElementById("brew-calculator-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        runBrewCalculator(root);
      });
    }

    ["brew-coffee-g", "brew-ratio"].forEach(function (id) {
      var el = root.getElementById(id);
      if (el) {
        el.addEventListener("input", function () {
          runBrewCalculator(root);
        });
      }
    });

    runBrewCalculator(root);
    document.documentElement.dataset.bscReady = "1";

    var now =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    var elapsed = now - started;
    var wait = Math.max(0, minVisibleMs - elapsed);
    window.setTimeout(function () {
      dismissLoadingOverlay(root);
    }, wait);
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }
})();
