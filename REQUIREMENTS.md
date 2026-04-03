# Documentação de Requisitos e Regras de Negócio - SIATE

O SIATE (Sistema Integrado de Acompanhamento Técnico) é uma ferramenta desenvolvida para centralizar a gestão administrativa e técnica do projeto de Basquete da UFJF.

## 🎯 Objetivos

- Digitalizar a rotina da comissão técnica.
- Eliminar o uso de papéis e planilhas manuais.
- Automatizar cálculos de desempenho.
- Preservar o histórico das temporadas com segurança.

## 👤 Perfis de Usuário

1.  **Coordenador**: Possui visão macro do projeto, faz a gestão de temporadas e usuários.
2.  **Técnico**: Responsável pelo planejamento e execução dos treinos, além da avaliação dos atletas.
3.  **Auxiliar**: Apoia o técnico no registro de dados durante as atividades.

## 🛠 Requisitos Funcionais (RFs)

- **RF01 - Autenticação**: O sistema deve permitir login via e-mail e senha (Firebase Auth).
- **RF02 - Gestão de Temporadas**: O Coordenador deve poder criar, editar e encerrar temporadas.
- **RF03 - Planejamento de Treino**: O Técnico deve poder criar planos de treino detalhados.
- **RF04 - Registro de Atividades**: O sistema deve permitir o registro em tempo real das atividades realizadas no treino.
- **RF05 - Relatórios**: O sistema deve gerar relatórios em PDF das atividades e desempenho.
- **RF06 - Dashboard**: Exibição de métricas e notificações importantes na tela inicial.

## 📏 Regras de Negócio (RNs)

- **RN01 - Acesso Restrito**: Apenas usuários autenticados da comissão técnica podem acessar o sistema.
- **RN02 - Hierarquia de Permissões**: Somente o Coordenador pode criar novos usuários no sistema.
- **RN03 - Histórico Imutável**: Uma vez encerrada a temporada, os dados de treinos não podem ser alterados.
- **RN04 - Padronização de Treinos**: Todos os planos de treino devem seguir o modelo oficial definido pela coordenação.
