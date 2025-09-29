let clicks = 0;
document.getElementById('btnClick').addEventListener('click', () => {
  clicks++;
  document.getElementById('clicks').textContent = clicks;
});
