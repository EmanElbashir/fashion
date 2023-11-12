  

  const images = document.querySelectorAll('[data-srchover]');
  
  images.forEach((image) => {
    image.dataset.originalSrc = image.src;
  
    image.addEventListener('mouseenter', () => {
      image.src = image.dataset.srchover;
    });
  
    image.addEventListener('mouseleave', () => {
      image.src = image.dataset.originalSrc;
    });
  });
  
  








  document.addEventListener('DOMContentLoaded', function () {
    const animatedImage = document.querySelector('.scrol');
    const screenWidth = window.innerWidth;
    const halfwayPoint = screenWidth / 2;

    function animate() {
      // Move from right to left
      animatedImage.style.transform = 'translateX(-10%)';

      // Scale at the halfway point
      setTimeout(() => {
        animatedImage.style.transform = 'translateX(-50%) scale(1.5)';
        animatedImage.style.width = '50%';
      }, 1000); // Adjust the delay based on your preference

      // Continue moving
      setTimeout(() => {
        animatedImage.style.transform = 'translateX(-100%)';
      }, 2000); // Adjust the delay based on your preference
    }

    animate();
  });
  
  
  
  




