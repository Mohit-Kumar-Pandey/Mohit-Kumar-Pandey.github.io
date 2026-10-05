const navigation = document.querySelector("#tree-navigation");
const mainContent = document.querySelector("#main-content");
const breadcrumbLabel = document.querySelector("#breadcrumb-label");
const sidebar = document.querySelector("#sidebar");

function applySiteConfig() {
  document.documentElement.style.setProperty("--brand-color", siteConfig.accentColor || "#0d6efd");
  document.title = `${siteConfig.name} — Portfolio & Academics`;
  document.querySelector("#brand-link").textContent = siteConfig.name;
  document.querySelector("#sidebar-tagline").textContent = siteConfig.tagline;
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  return element;
}

function renderNavigation() {
  navigation.replaceChildren();
  portfolioData.forEach((category, categoryIndex) => {
    const categoryId = `category-${category.id}`;
    const wrapper = document.createElement("div");
    wrapper.className = "mb-1";

    const button = document.createElement("button");
    button.className = "category-toggle btn btn-sm w-100 text-start d-flex align-items-center gap-2 px-2 py-2";
    button.type = "button";
    button.dataset.bsToggle = "collapse";
    button.dataset.bsTarget = `#${categoryId}`;
    button.setAttribute("aria-controls", categoryId);
    button.setAttribute("aria-expanded", categoryIndex === 0 ? "true" : "false");
    button.append(
      createTextElement("i", `bi ${category.icon || "bi-folder"}`, ""),
      createTextElement("span", "", category.title),
      createTextElement("i", "bi bi-chevron-right ms-auto small", "")
    );

    const items = document.createElement("div");
    items.id = categoryId;
    items.className = `collapse${categoryIndex === 0 ? " show" : ""} ms-3`;
    category.items.forEach((item) => {
      const link = document.createElement("button");
      link.className = "sidebar-link btn btn-sm w-100 text-start px-3 py-2";
      link.type = "button";
      link.textContent = item.title;
      link.addEventListener("click", () => selectItem(category, item, link));
      items.append(link);
    });
    wrapper.append(button, items);
    navigation.append(wrapper);
  });
}

function selectItem(category, item, selectedLink) {
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.classList.remove("active");
    link.removeAttribute("aria-current");
  });
  selectedLink.classList.add("active");
  selectedLink.setAttribute("aria-current", "page");

  // Content is authored in the deployed data file, not accepted from visitors.
  mainContent.innerHTML = item.content;
  breadcrumbLabel.textContent = `${category.title} / ${item.title}`;
  mainContent.focus({ preventScroll: true });
  if (window.innerWidth < 992) bootstrap.Offcanvas.getOrCreateInstance(sidebar).hide();
}

function renderVisitorSummary() {
  const footer = document.querySelector(".visitor-footer");
  const container = document.querySelector("#visitor-table-body");
  const visibleVisitors = visitorData
    .filter((entry) => entry && Number.isFinite(Number(entry.visitors)) && Number(entry.visitors) > 0)
    .sort((left, right) => Number(right.visitors) - Number(left.visitors));
  container.replaceChildren();
  footer.classList.toggle("d-none", visibleVisitors.length === 0);

  visibleVisitors.slice(0, 9).forEach((entry) => {
    const item = document.createElement("span");
    item.title = `${entry.country}: ${Number(entry.visitors).toLocaleString()} visitors`;
    item.append(
      createTextElement("span", "country-flag", entry.flag || "🌐"),
      document.createTextNode(Number(entry.visitors).toLocaleString())
    );
    container.append(item);
  });

  const others = visibleVisitors.slice(9).reduce((total, entry) => total + Number(entry.visitors), 0);
  if (others > 0) {
    const item = document.createElement("span");
    item.title = `Other countries: ${others.toLocaleString()} visitors`;
    item.append(createTextElement("span", "country-flag", "🌐"), document.createTextNode(others.toLocaleString()));
    container.append(item);
  }
}

function selectInitialItem() {
  const category = portfolioData[0];
  const item = category?.items[0];
  const firstLink = navigation.querySelector(".sidebar-link");
  if (category && item && firstLink) selectItem(category, item, firstLink);
}

applySiteConfig();
renderNavigation();
renderVisitorSummary();
selectInitialItem();
