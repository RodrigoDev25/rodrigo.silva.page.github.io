'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Site carregado com sucesso');

  loadProjects();
});

/* =======================
   CARREGAR PROJETOS
======================= */
function loadProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  // Dados locais (pode trocar para fetch futuramente)
  const projects = [
    {
      title: "Landing Page Responsiva",
      description: "Landing institucional moderna e otimizada.",
      image: "assets/projects/landing.jpg",
      demo: "#",
      repo: "https://github.com/RodrigoDev25/landing-page"
    },
    {
      title: "Dashboard Analítico",
      description: "Painel interativo com gráficos e filtros simples.",
      image: "assets/projects/dashboard.jpg",
      demo: "#",
      repo: "https://github.com/RodrigoDev25/dashboard"
    },
    {
      title: "Portfólio Interativo",
      description: "Galeria dinâmica de projetos com animações suaves.",
      image: "assets/projects/portfolio.jpg",
      demo: "#",
      repo: "https://github.com/RodrigoDev25/portfolio"
    }
  ];

  // Renderiza projetos
  container.innerHTML = projects.map(p => `
    <article class="project-card">
      <img src="${p.image}" alt="${p.title}">
      <div class="project-card__content">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-card__links">
          <a href="${p.demo}" target="_blank"><i class="fa-solid fa-eye"></i> Demo</a>
          <a href="${p.repo}" target="_blank"><i class="fa-brands fa-github"></i> Código</a>
        </div>
      </div>
    </article>
  `).join('');
}
