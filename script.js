// SAEFFE contact configuration
// Main WhatsApp number supplied for the website: 098 291 6318.
// Change this number below if another SAEFFE number should receive enquiries.
const SAEFFE_WHATSAPP = "265982916318";

function whatsappUrl(message){
  return "https://wa.me/" + SAEFFE_WHATSAPP + "?text=" + encodeURIComponent(message);
}
document.getElementById("heroWhatsapp").href = whatsappUrl("Hello SAEFFE Enterprise, I would like to make an enquiry.");
document.getElementById("whatsappLink").href = whatsappUrl("Hello SAEFFE Enterprise, I would like to make an enquiry.");
document.getElementById("year").textContent = new Date().getFullYear();

function quote(product){
  window.open(whatsappUrl("Hello SAEFFE Enterprise. I am interested in: " + product + ". Please send me more information and a quotation."), "_blank");
}
document.getElementById("quoteForm").addEventListener("submit", function(e){
  e.preventDefault();
  const d = new FormData(e.target);
  const msg = `Hello SAEFFE Enterprise.

Name: ${d.get("name")}
Phone: ${d.get("phone")}
Service/Product: ${d.get("service")}
Message: ${d.get("message") || "No additional message."}`;
  window.open(whatsappUrl(msg), "_blank");
});
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("open");
}));
