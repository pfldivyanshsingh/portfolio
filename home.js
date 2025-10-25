 <script>
document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.fade-in');

  // If nothing found, bail early (helps debugging)
  if (!skillCards.length) {
    console.warn('No elements with .fade-in found.');
    return;
  }

  // If browser supports IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // trigger a little before fully in view
      threshold: 0.12 // 12% visible triggers the animation
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target); // stop observing once shown
        }
      });
    }, observerOptions);

    skillCards.forEach(card => observer.observe(card));
  } else {
    // Fallback for very old browsers: just reveal immediately
    skillCards.forEach(card => card.classList.add('show'));
  }
});
</script>