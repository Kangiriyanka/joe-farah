const observerOptions = {
  rootMargin: "0px",
  threshold:0 
};

const tocLinks = document.querySelectorAll('.toc-item a');
const headings = document.querySelectorAll('h2, h3');
// Id of the header (simply the title name) -> HTMLAnchorElement 
const linkMap = {};
tocLinks.forEach(link => {
  const href = link.getAttribute('href');
  // ?. is safer 
  if (href?.startsWith('#')) {
    linkMap[href.slice(1)] = link;
  }
});

let visibleHeadings = new Set();


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;

    if (!id) return;

    // Add entries to the set if they are visible
    if (entry.isIntersecting) {
      visibleHeadings.add(entry.target);
    } else {
      visibleHeadings.delete(entry.target);
    }
  });
 
  if (visibleHeadings.size > 0) {
 
    // Create a shallow copy of the visibleHeadings set (works for both Sets and Arrays)
    // The closest visible heading to the top of the viewport has a smaller top value
    // It becomes the activeLink

    const sorted = [...visibleHeadings].sort(
      (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
    );
    const topHeading = sorted[0];
    const topId = topHeading.id;
    const activeLink = linkMap[topId];

    // Remove the active class for every non-active link
    tocLinks.forEach(link => link.classList.remove('active'));
    // Add the active class to the active link if there is one.
    if (activeLink) activeLink.classList.add('active');
  }
}, observerOptions);

headings.forEach(heading => observer.observe(heading));

tocLinks.forEach(link => {
  link.addEventListener('click', () => {
    tocLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});