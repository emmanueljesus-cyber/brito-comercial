<script setup lang="ts">
// Página "Quem Somos" — breve texto institucional sobre a Brito Comercial
const WA_P1 = '5573981019260'
const WA_P2 = '5573982361945'
</script>

<template>
  <div class="quem-somos">
    <!-- Banner -->
    <div class="quem-somos__banner">
      <div class="quem-somos__banner-inner">
        <h1 class="quem-somos__title">Quem Somos</h1>
        <p class="quem-somos__breadcrumb">
          <a href="/#/" class="quem-somos__breadcrumb-link">Início</a>
          <span> › </span>
          <span>Quem Somos</span>
        </p>
      </div>
    </div>

    <!-- Conteúdo -->
    <div class="quem-somos__container">
      <div class="quem-somos__content">

        <!-- Sobre nós -->
        <section class="qs-section">
          <h2 class="qs-section__title">Nossa História</h2>
          <p class="qs-section__text">
            A <strong>Brito Comercial LTDA</strong> é uma empresa baiana fundada em 2015 e especializada no comércio atacadista de material de construção. Localizada na Rua Francolino Gonçalves dos Santos, Nº 123 A, Centro — Itajuípe-BA, atendemos clientes em toda a região com agilidade e comprometimento.
          </p>
          <p class="qs-section__text">
            Nossa trajetória é marcada pelo relacionamento de confiança com fornecedores e clientes. Trabalhamos com marcas renomadas e um mix diversificado de produtos, garantindo que você encontre tudo que precisa em um só lugar, com qualidade e ótimos preços.
          </p>
        </section>

        <!-- Missão, Visão, Valores -->
        <section class="qs-cards">
          <div class="qs-card">
            <div class="qs-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 class="qs-card__title">Missão</h3>
            <p class="qs-card__text">
              Oferecer produtos de qualidade com atendimento humanizado, facilitando a vida de quem constrói, reforma ou equipa seu lar.
            </p>
          </div>

          <div class="qs-card">
            <div class="qs-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <h3 class="qs-card__title">Visão</h3>
            <p class="qs-card__text">
              Ser referência no comércio regional de materiais de construção e utilidades domésticas, reconhecida pela excelência no atendimento e variedade de produtos.
            </p>
          </div>

          <div class="qs-card">
            <div class="qs-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3 class="qs-card__title">Valores</h3>
            <p class="qs-card__text">
              Honestidade, respeito ao cliente, parceria com fornecedores, compromisso com a qualidade e valorização das pessoas que fazem parte do nosso time.
            </p>
          </div>
        </section>

        <!-- CTA -->
        <section class="qs-cta">
          <h2 class="qs-cta__title">Fale com a gente!</h2>
          <p class="qs-cta__text">
            Tem alguma dúvida ou quer fazer um orçamento? Estamos prontos para te atender pelo WhatsApp.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <!-- <a
              :href="`https://wa.me/${WA_P2}?text=${encodeURIComponent('Olá! Gostaria de mais informações.')}`"
              target="_blank"
              rel="noopener noreferrer"
              class="qs-cta__btn"
            >
              <svg viewBox="0 0 448 512" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Vendas 1 (73) 9 8236-1945
            </a> -->
            <a
              :href="`https://wa.me/${WA_P1}?text=${encodeURIComponent('Olá! Gostaria de mais informações.')}`"
              target="_blank"
              rel="noopener noreferrer"
              class="qs-cta__btn"
            >
              <svg viewBox="0 0 448 512" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              (73) 9 8101-9260
            </a>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Banner ─────────────────────────────────────────────── */
.quem-somos__banner {
  background: linear-gradient(135deg, #0d2137 0%, #1e3a5f 100%);
  padding: 2.5rem 1rem;
  text-align: center;
}
.quem-somos__banner-inner { max-width: 1200px; margin: 0 auto; }
.quem-somos__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 0.5rem;
}
.quem-somos__breadcrumb {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.6);
  margin: 0;
}
.quem-somos__breadcrumb-link {
  color: #f5a623;
  text-decoration: none;
}
.quem-somos__breadcrumb-link:hover { text-decoration: underline; }

/* ── Conteúdo ───────────────────────────────────────────── */
.quem-somos__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}
.quem-somos__content { display: flex; flex-direction: column; gap: 3rem; }

/* ── Seção texto ────────────────────────────────────────── */
.qs-section__title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a5f;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #f5a623;
  display: inline-block;
}
.qs-section__text {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.8;
  margin: 0 0 1rem;
  max-width: 780px;
}

/* ── Cards MVV ──────────────────────────────────────────── */
.qs-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.qs-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  transition: box-shadow 0.2s, transform 0.2s;
}
.qs-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.1);
  transform: translateY(-4px);
}
.qs-card__icon { color: #1e3a5f; }
.qs-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a5f;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0;
}
.qs-card__text {
  font-size: 0.88rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
}

/* ── CTA ────────────────────────────────────────────────── */
.qs-cta {
  background: linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%);
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;
  color: #fff;
}
.qs-cta__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}
.qs-cta__text {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.8);
  margin: 0 0 1.5rem;
}
.qs-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #25d366;
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  transition: background 0.2s, transform 0.2s;
}
.qs-cta__btn:hover { background: #1da755; transform: translateY(-2px); }
</style>
