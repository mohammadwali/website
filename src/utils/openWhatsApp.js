export default function openWhatsApp(to, text) {
  window.open(
    `whatsapp://send/?phone=${to}&text=${encodeURIComponent(text)}`,
    "_self",
    "",
    true
  );
}
