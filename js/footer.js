export function createFooter() {
    const footerContainer = document.getElementById("footerContainer");
  
    const footerContainerValue = `
    <div class="footer">
    <img src="/assets/img/RAFAELLO_GROUP_LOGO.svg" width="150px">
    <nav >
      <ul class="nav">
        <li class="item"><a href="#">Home</a></li>
        <li class="item"><a href="#">About</a></li>
        <li class="item"><a href="#">Resourses</a></li>
        <li class="item"><a href="#">Pricing</a></li>
        <li class="item"><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="WhatsApp_btn">WhatsApp</div>
    </div>
    `;
  
    footerContainer.innerHTML = footerContainerValue;
  }
  
  // Chame a função para criar o cabeçalho
  createFooter();



