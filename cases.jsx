// Case data — concise, contribution-focused, no client names
const CASES = [
  {
    id: "redes-sociais",
    index: "01",
    year: "2024 — Presente",
    title: "Painel de Redes Sociais",
    kind: "Dashboard executivo",
    summary:
      "Construí o pipeline analítico e o dashboard mensal de desempenho em sete plataformas digitais, com indicadores de alcance, eficiência de mídia paga e crescimento de audiência.",
    stack: ["Python", "Power BI", "DAX", "Power Query / M", "APIs"],
    metrics: [
      { label: "Plataformas", value: "7", sub: "monitoradas" },
      { label: "Indicadores", value: "IBT · ICS · CPM", sub: "modelados em DAX" },
      { label: "Frequência", value: "Mensal", sub: "ciclo de entrega" },
      { label: "Stack", value: "Python + BI", sub: "ponta a ponta" },
    ],
    sections: [
      {
        h: "Minha contribuição",
        list: [
          "Desenho dos indicadores (IBT, ICS, CPM, eficiência por R$)",
          "Pipeline de coleta, limpeza e classificação em Python",
          "Modelo unificado e medidas DAX no Power BI",
          "Relatório executivo mensal e governança das fontes",
        ],
      },
    ],
  },
  {
    id: "exposicao-midia",
    index: "02",
    year: "2023 — Presente",
    title: "Exposição na Mídia · Valoração",
    kind: "Dashboard executivo",
    summary:
      "Painel que traduz presença na imprensa em equivalente publicitário, com recortes por tema, veículo, pesquisador e tipo de mídia, e acompanhamento da meta anual.",
    stack: ["Python", "Power BI", "DAX"],
    metrics: [
      { label: "Série", value: "2018→", sub: "8+ anos" },
      { label: "Recortes", value: "Tema · Mídia", sub: "Pesquisador · Veículo" },
      { label: "Frequência", value: "Mensal", sub: "ciclo de entrega" },
      { label: "Stack", value: "Python + BI", sub: "ponta a ponta" },
    ],
    sections: [
      {
        h: "Minha contribuição",
        list: [
          "Categorização automatizada de matérias por tema (palavras-chave)",
          "Agregações mensais e séries históricas em Python",
          "Modelagem e medidas DAX no Power BI; meta proporcional",
          "Automação reduziu a geração do relatório de 3 dias para ~1 hora",
        ],
      },
    ],
  },
  {
    id: "crimes-manaus",
    index: "03",
    year: "2024",
    title: "Crimes Ambientais em Manaus",
    kind: "Dashboard analítico · Pesquisa",
    summary:
      "Dashboard interativo desenvolvido para apoiar pesquisa acadêmica sobre crimes ambientais no contexto da pandemia, com filtros e análises por período e localização.",
    stack: ["Power BI", "DAX", "Power Query"],
    metrics: [
      { label: "Painéis", value: "3", sub: "interativos" },
      { label: "Recortes", value: "5", sub: "tipos de análise" },
      { label: "Escopo", value: "Municipal", sub: "Manaus / AM" },
      { label: "Período", value: "Pandemia", sub: "COVID-19" },
    ],
    sections: [
      {
        h: "Minha contribuição",
        list: [
          "Modelagem dos dados e desenho dos KPIs",
          "Construção dos três painéis interativos (distribuição espacial, ocorrências, taxas e período)",
          "Filtros temporais e cruzamentos para análise exploratória",
        ],
      },
    ],
  },
  {
    id: "leptospirose-rj",
    index: "04",
    year: "2023",
    title: "Leptospirose × Precipitação",
    kind: "Dashboard analítico · Pesquisa",
    summary:
      "Painel sobre a relação entre casos de leptospirose e precipitação pluviométrica, com correlação, análise temporal e projeção até 2025.",
    stack: ["Power BI", "DAX", "Análise temporal"],
    metrics: [
      { label: "Série", value: "2010—25", sub: "com projeção" },
      { label: "Painéis", value: "6", sub: "interativos" },
      { label: "Variáveis", value: "Saúde × Clima", sub: "duas fontes" },
      { label: "Foco", value: "Surtos", sub: "resposta rápida" },
    ],
    sections: [
      {
        h: "Minha contribuição",
        list: [
          "Modelagem estatística da relação chuva × casos (correlação e lags)",
          "Construção dos seis painéis interativos no Power BI",
          "Análise temporal e projeção dos casos até 2025",
        ],
      },
    ],
  },
  {
    id: "icc-biomedica",
    index: "05",
    year: "2025",
    title: "Concordância inter/intra-avaliador",
    kind: "Relatório estatístico · Confiabilidade",
    summary:
      "Avaliação da consistência de medições anatômicas em 5 regiões craniofaciais para estabelecer a confiabilidade do instrumento antes da análise caso-controle.",
    stack: ["R", "ICC", "Análise de confiabilidade"],
    metrics: [
      { label: "Regiões", value: "5", sub: "craniofaciais" },
      { label: "Pacientes", value: "15", sub: "por região" },
      { label: "Avaliadores", value: "2", sub: "× 2 tempos" },
      { label: "Método", value: "ICC", sub: "(2,1) e (3,1)" },
    ],
    sections: [
      {
        h: "Minha contribuição",
        list: [
          "Desenho do plano de análise e verificação das suposições estatísticas",
          "Cálculo dos ICC com intervalo de confiança por região e par avaliador/tempo",
          "Relatório técnico com interpretação e recomendações de uso",
        ],
      },
    ],
  },
  {
    id: "anestesia-vet",
    index: "06",
    year: "2025",
    title: "Anestesia intravenosa total",
    kind: "Análise estatística · Estudo pareado",
    summary:
      "Análise comparativa de protocolos de medicação pré-anestésica e da resposta cardiovascular ao longo de procedimentos com medidas repetidas.",
    stack: ["R", "Wilcoxon", "Kruskal–Wallis", "Spearman"],
    metrics: [
      { label: "Animais", value: "12", sub: "medidas repetidas" },
      { label: "Wilcoxon", value: "p = 0,0047", sub: "diferença significativa" },
      { label: "ρ Spearman", value: "0,96", sub: "anestesia × cirurgia" },
      { label: "Abordagem", value: "Não-paramétrica", sub: "amostras pequenas" },
    ],
    sections: [
      {
        h: "Minha contribuição",
        list: [
          "Plano de análise para variáveis ordinais e medidas repetidas",
          "Aplicação de testes não-paramétricos (Wilcoxon, sinais, Kruskal–Wallis, Spearman)",
          "Visualizações exploratórias e relatório de resultados",
        ],
      },
    ],
  },
];

window.CASES = CASES;
