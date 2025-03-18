function loadSection(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => document.getElementById(id).innerHTML = data);
  }

  loadSection("home-container", "sections/home.html");
  loadSection("about-container", "sections/about.html");
  loadSection("skills-container", "sections/skills.html");
  loadSection("portfolio-container", "sections/portfolio.html");
  