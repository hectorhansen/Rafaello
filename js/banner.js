function createBanner() {
  if (window.location.pathname === '/index.html' || window.location.pathname === '/') {  
  const BannerContainer = document.getElementById("BannerContainer");
  
    const BannerContainerValue = `
    <div class="banner">
    <div class="tittlebanner"><h1>In the realm of hard hats and steel,<br>We turn dreams into structures.</h1></div>
    <div class="subtittle"><h2>Where We Redefine Spaces Through Innovative Structural Solutions and Unparalleled Design Excellence.</h2></div>
    <div class="banner_cta">
      <a href="https://api.whatsapp.com/send?phone=14372622444&text=I%20would%20like%20a%20quote!">
      <button class="cta_banner">Get in Touch with Us Today ></button>
      </a>
    </div>
  </div>
    `;
  
    BannerContainer.innerHTML = BannerContainerValue;
  }
}
  
  // Chame a função para criar o cabeçalho
  createBanner();