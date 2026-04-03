# Modelo de Dados - SIAT (Firebase Firestore)

O banco de dados será o **Cloud Firestore** do Firebase, seguindo uma estrutura de coleções e documentos.

## Coleções Principais

### `usuarios` (Users)
- `uid`: ID único do Firebase Auth (document ID)
- `nome`: String
- `email`: String (único)
- `perfil`: Enum ("coordenador", "tecnico", "auxiliar")
- `data_criacao`: Timestamp

### `temporadas` (Seasons)
- `id`: Document ID
- `ano`: Number
- `nome`: String
- `ativa`: Boolean
- `data_inicio`: Timestamp
- `data_fim`: Timestamp

### `treinos` (Workouts)
- `id`: Document ID
- `temporada_id`: Reference (temporadas)
- `data`: Timestamp
- `tecnico_id`: Reference (usuarios)
- `descricao`: String
- `plan_pdf_url`: String (Firebase Storage)
- `status`: Enum ("planejado", "concluido")

### `atletas` (Athletes)
- `id`: Document ID
- `nome`: String
- `posicao`: String
- `data_nascimento`: Date
- `categoria`: String

### `avaliacoes` (Evaluations)
- `id`: Document ID
- `treino_id`: Reference (treinos)
- `atleta_id`: Reference (atletas)
- `nota`: Number
- `observacoes`: String
