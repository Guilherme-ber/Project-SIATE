# Projeto SIAT - UFJF

## 📘 Sobre o projeto

O **SIAT** é um sistema web desenvolvido para centralizar a gestão administrativa e técnica do projeto de **Basquete da UFJF**. O foco principal da aplicação é digitalizar a rotina da comissão técnica, permitindo o planejamento, registro e avaliação de treinos de forma organizada e eficiente.

Diferente de sistemas convencionais de clubes, o SIAT é uma ferramenta exclusiva para a **Comissão Técnica (Coordenadores, Técnicos e Auxiliares)**. O sistema elimina a necessidade de papéis e planilhas manuais, automatizando cálculos de desempenho e garantindo que o histórico das temporadas seja preservado com segurança e integridade.

---

## 🌐 Tecnologias

### Front-end

| Tecnologia | Uso no projeto |
| --- | --- |
| **Next.js** | Interface declarativa e componentizada. |
| **Vite** | Tooling para um desenvolvimento rápido e otimizado. |
| **React Router DOM** | Navegação entre os painéis de Coordenador e Técnico. |
| **Firebase SDK** | Autenticação de usuários e persistência em tempo real. |
| **jsPDF / AutoTable** | Geração dos relatórios e planejamentos de treino em formato PDF. |

### Back-end

| Tecnologia | Uso no projeto |
| --- | --- |
| **Node.js** | Runtime principal para a lógica de servidor. |
| **Express** | Criação de rotas para processamento de relatórios e automações. |
| **Firebase Admin** | Manipulação de permissões e gestão de usuários (Coordenador/Técnico). |
| **Helmet / CORS** | Camadas de segurança e controle de acesso à API. |
| **Validator** | Garantia de integridade nos dados de cadastro das temporadas. |

---

## ▶️ Como rodar localmente

*(Mantive a estrutura padrão que você utiliza, bastando trocar os nomes dos repositórios quando você os criar)*

1. **Clonar o repositório:** `git clone https://github.com/Guilherme-ber/Project-SIAT`
2. **Configurar o Back-end:** Criar `.env` com as chaves do Firebase Admin SDK.
3. **Configurar o Front-end:** Criar `.env` com as chaves do Firebase Client SDK.
4. **Instalar dependências:** `npm install` em ambas as pastas.

---

## 🔃 Padrões de Desenvolvimento

Seguimos o padrão **Conventional Commits** e fluxo de **GitFlow** simplificado:

* `feat`: Novas funcionalidades (ex: cadastro de turmas).
* `fix`: Correção de bugs nos cálculos das colunas N, O, P, Q.
* `docs`: Atualizações na documentação técnica.
* `style`: Ajustes na interface responsiva.
