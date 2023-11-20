export function createFooter() {
    const footerContainer = document.getElementById("footerContainer");
  
    const footerContainerValue = `
    <div class="footer">
    <img src="/assets/img/RAFAELLO_GROUP_LOGO.svg" width="150px">
    <nav >
      <ul class="nav">
      <li class="item"><a href="./index.html">Home</a></li>
      <li class="item"><a href="./about.html">About</a></li>
      <li class="item"><a href="./resources.html">Resources</a></li>
      <li class="item"><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>
    <div class="WhatsApp_btn"><a href="https://api.whatsapp.com/send?phone=14372622444&text=I%20would%20like%20a%20quote!">WhatsApp</a></div>
    </div>
    `;
  
    footerContainer.innerHTML = footerContainerValue;
  }
  
  // Chame a função para criar o cabeçalho
  createFooter();



