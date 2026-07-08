document.querySelectorAll('.show-info').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.parentElement.querySelector('.card-title').textContent;
    alert(`${name} egy híres képregényhős!`);
  });
});

document.getElementById('meglepetesGomb')?.addEventListener('click', () => {
  alert('🎉 Meglepetés! Köszi, hogy megnézted a galériát!');
});
