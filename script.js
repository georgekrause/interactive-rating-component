document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const selectedRating = document.querySelector('.selected');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const rating = this.textContent;
        selectedRating.innerHTML = `You selected ${rating} out of 5`;
      });
    });
  });