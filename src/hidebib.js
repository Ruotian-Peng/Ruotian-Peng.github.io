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

function togglefig(paperid) {
  var paper = document.getElementById(paperid);
  if (!paper) return;

  var figures = paper.getElementsByClassName("paper-figure");
  if (figures.length > 0) {
    var current = window.getComputedStyle(figures[0]).display;
    figures[0].style.display = current === "none" ? "block" : "none";
  }
}
