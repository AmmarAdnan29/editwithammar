function redirectToWhatsApp(event) {
  event.preventDefault();
  const phoneNumber = '923708331751';
  const message = encodeURIComponent('Hi! I just placed an order on your website.');
  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
}
