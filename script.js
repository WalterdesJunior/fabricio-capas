/* =========================================================
   CONFIGURAÇÃO — edite aqui os links da loja
   ========================================================= */
const CONFIG = {
  // Número do WhatsApp com DDI + DDD, só números. Ex.: 5586999999999
  whatsapp: "5588993368468",
  // Mensagem padrão ao abrir o WhatsApp
  whatsappMsg: "Olá, quero ser atendida pela melhor empresa de capas e acessórios.",
  // Link do perfil no Instagram
  instagram: "https://www.instagram.com/fabriciocapasteresina/",
  // Link de avaliação do Google (Perfil da Empresa > "Pedir avaliações")
  google: "https://search.google.com/local/writereview?placeid=ChIJxzayv6M3jgcRtLQ9Pt1HrgA",
  // Link da loja no Google Maps
  maps: "https://www.google.com/maps/search/?api=1&query=Fabr%C3%ADcio+Capas+e+Acess%C3%B3rios+Teresina+PI&query_place_id=ChIJxzayv6M3jgcRtLQ9Pt1HrgA",
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const tipo = el.dataset.link;
  if (tipo === "whatsapp") {
    const msg = el.dataset.msg || CONFIG.whatsappMsg;
    el.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  } else if (CONFIG[tipo]) {
    el.href = CONFIG[tipo];
  }
});

document.getElementById("ano").textContent = new Date().getFullYear();

// Animação de entrada das seções ao rolar
const alvos = document.querySelectorAll(".links .link, .cats, .promo, .section, .deal");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  alvos.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

// Botão flutuante aparece depois de rolar além dos links principais
const fab = document.querySelector(".fab");
const links = document.querySelector(".links");
const atualizaFab = () => fab.classList.toggle("is-on", links.getBoundingClientRect().bottom < 0);
addEventListener("scroll", atualizaFab, { passive: true });
atualizaFab();
