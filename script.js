const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-nav');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#contact-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const subject = encodeURIComponent('Pedido de reunião — Cliniq Agency');
  const body = encodeURIComponent(`Nome: ${fields.get('name')}\nClínica: ${fields.get('clinic')}\nEmail: ${fields.get('email')}\nInteresse: ${fields.get('interest')}\n\nGostaria de agendar uma reunião para conhecer as soluções da Cliniq Agency.`);
  // IMPORTANTE: substituir o endereço abaixo pelo email comercial real antes de publicar.
  const email = 'contacto@SEU-DOMINIO.pt';
  if (email.includes('SEU-DOMINIO')) {
    document.querySelector('#form-status').textContent = 'O formulário está em modo de demonstração. Configure o email comercial em script.js antes de publicar.';
    return;
  }
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
