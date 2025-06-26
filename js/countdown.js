document.addEventListener("DOMContentLoaded", function () {
  const weddingDateNhaTrai = new Date("2025-01-05T12:00:00");
  const weddingDateNhaGai = new Date("2025-01-01T18:00:00");

  function updateCountdown(targetDate, elementId) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
  
    if (distance < 0) {
      document.getElementById(elementId).innerHTML = "Đã Đến Ngày!";
      return;
    }
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById(elementId).innerHTML = `
      <div class="count-item">
        <div class="font-l">${days}</div>
        <div class="font-sm">Ngày</div>
      </div>
      <div class="count-item">
        <div class="font-l">${hours}</div>
        <div class="font-sm">Giờ</div>
      </div>
      <div class="count-item">
        <div class="font-l">${minutes}</div>
        <div class="font-sm">Phút</div>
      </div>
      <div class="count-item">
        <div class="font-l">${seconds}</div>
        <div class="font-sm">Giây</div>
      </div>
    `;
  }

  setInterval(() => {
    updateCountdown(weddingDateNhaTrai, "timer-nha-trai");
    updateCountdown(weddingDateNhaGai, "timer-nha-gai");
  }, 1000);
});
