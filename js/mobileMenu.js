const icon = document.querySelector(".icon");
const nav = document.querySelector(".nav");
const body = document.querySelector('body');

const iconMenu = "assets/icon/menu hamburger/icons8-menu.svg";
const iconClose = "assets/icon/menu hamburger/icons8-close.svg";

icon.addEventListener('click',(e)=>{
  e.stopPropagation();
  nav.classList.toggle('open');

  if(nav.classList.contains('open')){
    icon.src = iconClose;
    body.classList.add('escurecer');
  }else{
    icon.src = iconMenu;
    body.classList.remove('escurecer');
  }

});

document.addEventListener('click', ()=>{
  nav.classList.remove('open');
  icon.src = iconMenu; //actualiza o menu quando fechado
  body.classList.remove('escurecer');
})


// ---Formulario---

document.addEventListener('DOMContentLoaded', () => {

  const form   = document.getElementById('contact-form');
  const button = form.querySelector('button');
  const status = document.createElement('p');
  status.style.marginTop = '1rem';
  form.appendChild(status);


  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Submit acionado!');

    // Desabilita para evitar clique duplo
    button.disabled = true;
    status.textContent = 'Enviando...';

    const templateParams = {
      from_name:  form.nome.value,
      reply_to:   form.email.value,
      message:    form.mensagem.value
    };

    try {
      const response = await emailjs.send(
        'service_jez1x72',    // ex.: service_gmail
        'template_tywip9q',   // ex.: template_contato
        templateParams
      );
      console.log('SUCESSO!', response.status, response.text);
      status.textContent = 'Mensagem enviada com sucesso ✅';
      form.reset();
    } catch (err) {
    console.error('FALHA…', err);   // já existia
    //alert('Erro ao enviar: ' + JSON.stringify(err)); // ADICIONE ISTO
}
finally {
      button.disabled = false;
    }
  });
});



