export function initializeKPI() {
    const KpiContainer = document.getElementById("KpiContainer");
  
    const KpiContainerValue = `
    <div class="kpi-section">
    <div>
      <div class="text-align">
        <h3>Our numbers</h3>
      </div>
    </div>
    <div class="flex_response kpi">
      <div class="metric_box">
        <div><span class="kpi-value">305</span></div>
        <div><p class="kpi-title">Renovations</p></div>
      </div>
      <div class="metric_box">
        <div><span class="kpi-value">8</span></div>
        <div><p class="kpi-title">Cities</p></div>
      </div>
      <div class="metric_box">
        <div><span class="kpi-value">116</span></div>
        <div><p class="kpi-title">Employers</p></div>
      </div>
      <div class="metric_box">
        <div><span class="kpi-value">97.3</span><span>%</span></div>
        <div><p class="kpi-title">Satisfaction</p></div>
      </div>
    </div>
  </div>
    `;
  
    KpiContainer.innerHTML = KpiContainerValue;
  }
  
  // Chame a função para criar o cabeçalho
  initializeKPI();
