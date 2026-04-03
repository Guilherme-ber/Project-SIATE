# Arquitetura do Sistema - SIAT

## Stack Tecnológica
- **Front-end**: Next.js (App Router), Tailwind CSS
- **Back-end/Infra**: Firebase (Authentication, Firestore)
- **Linguagem**: JavaScript

## Estrutura de Pastas Sugerida
```bash
src/
  app/              # Rotas e Páginas (App Router)
  components/       # Componentes React reutilizáveis
  lib/              # Configurações de bibliotecas (Firebase, etc)
  hooks/            # Custom Hooks
  services/         # Chamadas de API e interações com Firestore
  utils/            # Funções utilitárias
  assets/           # Imagens, fontes e estilos globais
docs/               # Documentação do projeto
public/             # Arquivos estáticos
```

## Fluxo de Autenticação
O sistema utilizará o **Firebase Auth** para gerenciar o acesso. Ao logar, o sistema deve verificar o perfil do usuário no Firestore para redirecionar ao dashboard correspondente (Coordenador ou Técnico).
