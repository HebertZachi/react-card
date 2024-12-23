import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'src/css/index.css';
import { App, Card } from 'src/App.tsx';

const defaultCard: Card = {
  photo: "src/assets/profile.png",
  userName: "Hebert Zachi",
  description: "Desenvolvo soluções para negócios, ajudando a reduzir custos, melhorar a infraestrutura de negócios e inovar no mercado.",
  skills: [
    { name: "HTML+CSS", icon: "💪", color: "#f39c12" },
    { name: "JavaScript", icon: "💪", color: "#f1c40f" },
    { name: "Web Design", icon: "💪", color: "#e74c3c" },
    { name: "React", icon: "💪", color: "#3498db" },
    { name: "Git and GitHub", icon: "👍", color: "#2ecc71" }, 
    { name: "Svelte", icon: "👶", color: "#e67e22" },
  ],
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App card={defaultCard}/>
  </StrictMode>
);
