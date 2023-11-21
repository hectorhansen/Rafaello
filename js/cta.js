function createCta() {
    const CtaConteiner = document.getElementById("CtaConteiner");
  
    const CtaConteinerValue = `
    <div class="cta_section">
    <div class="cta_footer"><h3 class="h3_cta">Ready to Transform Your Space?<br><br>Request a Quote on WhatsApp Now!</h3></div>
    <div class="btn_cta_footer">
    <a href="https://api.whatsapp.com/send?phone=14372622444&text=I%20would%20like%20a%20quote!">
      <button class="WhatsApp_btn">Request Quote on WhatsApp ></button>
      </a>
    </div>
  </div>
    `;
  
    CtaConteiner.innerHTML = CtaConteinerValue;
  }
  
  // Chame a função para criar o cabeçalho
  createCta();