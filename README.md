# Frontend Quiz

Frontend Quiz is a responsive single-page application that tests core frontend knowledge across HTML, CSS, JavaScript, and Accessibility. The project emphasizes clean UI design, accessible interactions, and a smooth user flow from quiz selection to results.

## Live Demo

https://ayokanmi-adejola.github.io/Frontend-Quiz/

## Key Highlights

- Multi-subject quiz experience with curated question sets.
- Step-by-step question flow with progress indication.
- Immediate visual feedback for correct and incorrect answers.
- Final results summary with replay support.
- Light and dark theme switching.
- Mobile-first, responsive layout for a consistent cross-device experience.

## Technology Stack

- React 19
- TypeScript
- Vite
- Chakra UI 3
- next-themes

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/Ayokanmi-Adejola/Frontend-Quiz.git
cd Frontend-Quiz
npm install
```

### Run in Development

```bash
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| npm run dev | Start the local development server. |
| npm run build | Run TypeScript checks and create a production build. |
| npm run preview | Preview the production build locally. |
| npm run lint | Run ESLint checks across the project. |

## Deployment

This repository is configured for GitHub Pages deployment through GitHub Actions.

- Production assets are generated in `dist`.
- Vite is configured with the correct repository base path.
- Workflow configuration is located at `.github/workflows/deploy.yml`.

## Project Structure

```text
src/
  components/   # Reusable UI and page-level components
  data/         # Quiz data and subject content
  hooks/        # Shared React hooks
  theme.ts      # Chakra UI system configuration
```

## Acknowledgement

This project was inspired by a Frontend Mentor challenge.
