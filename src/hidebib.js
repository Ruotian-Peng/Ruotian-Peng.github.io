function togglebib(paperid) {
  var paper = document.getElementById(paperid);
  if (!paper) return;

  var bib = paper.getElementsByTagName("pre");
  if (bib.length > 0) {
    var current = window.getComputedStyle(bib[0]).display;
    bib[0].style.display = current === "none" ? "block" : "none";
  }
}

function hideallbibs() {
  var papers = document.getElementsByClassName("paper");
  for (var i = 0; i < papers.length; i += 1) {
    var bib = papers[i].getElementsByTagName("pre");
    if (bib.length > 0) {
      bib[0].style.display = "none";
    }
  }
}

function showPublicationView(viewId) {
  var views = document.getElementsByClassName("publication-view");
  var tabs = document.getElementsByClassName("publication-tab");

  for (var i = 0; i < views.length; i += 1) {
    views[i].classList.toggle("active", views[i].id === viewId);
  }

  for (var j = 0; j < tabs.length; j += 1) {
    var isSelected = tabs[j].getAttribute("aria-controls") === viewId;
    tabs[j].setAttribute("aria-selected", isSelected ? "true" : "false");
  }
}

function showViewForHash() {
  var targetId = window.location.hash.slice(1);
  var target = targetId ? document.getElementById(targetId) : null;

  if (target && target.closest("#all-papers")) {
    showPublicationView("all-papers");
  } else if (target && target.closest("#selected-papers")) {
    showPublicationView("selected-papers");
  }
}

function initializePage() {
  hideallbibs();
  showPublicationView("selected-papers");
  showViewForHash();
}

window.addEventListener("hashchange", showViewForHash);

function togglefig(paperid) {
  var paper = document.getElementById(paperid);
  if (!paper) return;

  var figures = paper.getElementsByClassName("paper-figure");
  if (figures.length > 0) {
    var current = window.getComputedStyle(figures[0]).display;
    figures[0].style.display = current === "none" ? "block" : "none";
  }
}
