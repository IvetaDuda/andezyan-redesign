let isScrolling = false;

export const handleScroll = (e) => {
  if (isScrolling) return;

  if (typeof window !== 'undefined' && e.target instanceof Element) {
    const href = e.target.getAttribute('href');

    if (!href) {
      return;
    }

    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);

    if (elem) {
      e.preventDefault();
      isScrolling = true;
      elem.scrollIntoView({
        behavior: 'smooth',
      });

      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Додайте час затримки у мілісекундах

      document.removeEventListener('scroll', handleScroll);

      setTimeout(() => {
        document.addEventListener('scroll', handleScroll, { passive: true });
      }, 1000); // Додайте час затримки у мілісекундах
    }
  }
};
