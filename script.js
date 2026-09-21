// SAEFFE WhatsApp contacts
// Three Malawi WhatsApp numbers are available for customer enquiries.
const SAEFFE_WHATSAPP_NUMBERS = {
  main: "265982916318",
  second: "265885744016",
  third: "265880872606"
};

function whatsappUrl(message, number = SAEFFE_WHATSAPP_NUMBERS.main){
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
}

const greeting = "Hello SAEFFE Enterprise, I would like to make an enquiry.";
document.getElementById("heroWhatsapp").href = whatsappUrl(greeting);
document.getElementById("whatsappLink").href = whatsappUrl(greeting, SAEFFE_WHATSAPP_NUMBERS.main);
document.getElementById("whatsappLink2").href = whatsappUrl(greeting, SAEFFE_WHATSAPP_NUMBERS.second);
document.getElementById("whatsappLink3").href = whatsappUrl(greeting, SAEFFE_WHATSAPP_NUMBERS.third);
document.getElementById("year").textContent = new Date().getFullYear();

function quote(product){
  window.open(whatsappUrl("Hello SAEFFE Enterprise. I am interested in: " + product + ". Please send me more information and a quotation."), "_blank");
}

document.getElementById("quoteForm").addEventListener("submit", function(e){
  e.preventDefault();
  const d = new FormData(e.target);
  const number = d.get("whatsapp") || SAEFFE_WHATSAPP_NUMBERS.main;
  const msg = `Hello SAEFFE Enterprise.

Name: ${d.get("name")}
Phone: ${d.get("phone")}
Service/Product: ${d.get("service")}
Message: ${d.get("message") || "No additional message."}`;
  window.open(whatsappUrl(msg, number), "_blank");
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("open");
}));
