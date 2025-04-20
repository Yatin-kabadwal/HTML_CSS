document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.project');
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (position < screenHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  });
  