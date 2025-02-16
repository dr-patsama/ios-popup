document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('overlay');
  const closeButton = document.getElementById('closeButton');

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isIOS) {
    overlay.style.display = 'flex';
  }

  closeButton.addEventListener('click', function() {
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
      overlay.style.display = 'none';
    }
  });
});
