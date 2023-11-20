// header.js
export function createHeader() {
    const headerContainer = document.getElementById("headerContainer");
  
    const headerContentValue = `
      <div class="header">
        <img class="logo" src="/assets/img/RAFAELLO_GROUP_LOGO.svg" width="150px">
        <nav>
          <ul class="nav">
            <li class="item"><a href="#">Home</a></li>
            <li class="item"><a href="#">About</a></li>
            <li class="item"><a href="#">Resources</a></li>
            <li class="item"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div class="WhatsApp_btn">WhatsApp</div>
      </div>
    `;
  
    headerContainer.innerHTML = headerContentValue;
  }
  
  // Chame a função para criar o cabeçalho
  createHeader();
  