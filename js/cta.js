export function createCta() {
    const CtaConteiner = document.getElementById("CtaConteiner");
  
    const CtaConteinerValue = `
    <div class="cta_section">
    <div class="cta_footer"><h3 class="h3_cta">Ready to Transform Your Space?<br><br>Request a Quote on WhatsApp Now!</h3></div>
    <div class="btn_cta_footer">
      <button class="WhatsApp_btn">Request Quote on WhatsApp ></button>
    </div>
  </div>
    `;
  
    CtaConteiner.innerHTML = CtaConteinerValue;
  }
  
  // Chame a função para criar o cabeçalho
  createCta();