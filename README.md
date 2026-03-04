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

1. **Clonar o repositório:** `git clone https://github.com/Guilherme-ber/Project-SIAT`
2. **Configurar o Back-end:** Criar `.env` com as chaves do Firebase Admin SDK.
3. **Configurar o Front-end:** Criar `.env` com as chaves do Firebase Client SDK.
4. **Instalar dependências:** `npm install` em ambas as pastas.

---

## ⚠️ Regras

- Todo desenvolvimento deve ser feito em **branches próprias**.
- É **proibido** realizar **commit direto** nas branches `production` e `development`.
- A branch `production` é usada para versionamento (lançar novas versões estáveis).
- O código deve seguir os padrões definidos neste repositório.
- Commits devem ser claros e objetivos.

### Regras de colaboração

O fluxo de trabalho segue o padrão:
1. Desenvolvimento individual em branches `dev_nome`
2. **Pull Request** da branch `dev_nome` para `development` seguindo os padrões estabelecidos
3. Após aprovação e testes, merge para `development`
4. Quando estável, merge de `development` para `production` (apenas para releases)

---

## 🔃 Padrões

### Padrão de cores
- Identity color: #0166ff
- Identity color (2) - mais escura: #0062f5
- Text color - mais suave: #6b7280
- Background color: #f6f7fc

### Padrão de código
- Utilizar comentários em **inglês** para explicar ou separar linhas de código
- Seguir convenções do ESLint configurado no projeto
- Manter consistência na nomenclatura de variáveis e funções

### Padrão de branches e commits

#### Branches
- `ShapeMeApp-v(NUMBER)` → versão atual da aplicação
- `production` → versão estável (produção)
- `development` → integração e testes
- `dev_nome` → desenvolvimento individual de cada desenvolvedor

#### Commits

Utilizar mensagens curtas e descritivas seguindo o padrão **Conventional Commits**:

- `feat:` nova funcionalidade  
- `fix:` correção de bug  
- `docs:` alterações na documentação  
- `style:` ajustes visuais ou formatação de código  
- `refactor:` refatoração de código sem alteração de funcionalidade
- `perf:` melhorias de performance
- `test:` adição ou correção de testes
- `chore:` tarefas de manutenção (atualização de dependências, configurações, etc.)

**Exemplos:**
```bash
git commit -m "feat: criação da página de alunos"
