export function createOurjobs() {
    const OurjobsConteiner = document.getElementById("OurjobsConteiner");
  
    const OurjobsConteinerValue = `
    <div class="our_job">
    <h3>Our Jobs</h3>
    <div class="cards_space">
      <div class='card card1'>
        <p class="card_titlle">Titulo</p>
        <p class="card_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus saepe error, repudiandae voluptatem voluptas.</p>
      </div>
      <div class='card card2'>
        <p class="card_titlle">Titulo</p>
        <p class="card_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus saepe error, repudiandae voluptatem voluptas.</p>
      </div>
      <div class='card card3'>
        <p class="card_titlle">Titulo</p>
        <p class="card_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatibus saepe error, repudiandae voluptatem voluptas.</p>
      </div>
    </div>
  </div>
    `;
  
    OurjobsConteiner.innerHTML = OurjobsConteinerValue;
  }
  
  // Chame a função para criar o cabeçalho
  createOurjobs();