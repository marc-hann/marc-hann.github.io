import type { Project } from './projects';

/** Whether a project's art has a light or a dark background, so text placed on it can pick ink or paper. */
export type ArtTone = 'light' | 'dark';

type Ground = 'red' | 'yellow' | 'blue' | 'ink';

const illustrationGrounds: Record<NonNullable<Project['data']['illustration']>, Ground> = {
  'questionnaire-engine': 'yellow',
  'clinical-questionnaires': 'blue',
  'hr-platform': 'red',
  'tenant-app': 'yellow',
  'prime-mvp': 'ink',
  'genomic-upload': 'red',
  'variant-model': 'yellow',
  'design-system': 'blue',
  'prime-ui': 'red',
  myhedera: 'blue',
  'lab-prep': 'ink',
};

const posterGrounds: Record<1 | 2 | 3 | 4, Ground> = { 1: 'red', 2: 'blue', 3: 'yellow', 4: 'yellow' };

const groundColors: Record<Ground, string> = {
  red: 'var(--c1)',
  yellow: 'var(--c2)',
  blue: 'var(--c3)',
  ink: 'var(--ink)',
};

const ground = (project: Project): Ground =>
  project.data.illustration ? illustrationGrounds[project.data.illustration] : posterGrounds[project.data.poster];

/** Background colour of the art `ProjectArt` draws for a project, as a CSS value. */
export const artBackground = (project: Project): string => groundColors[ground(project)];

/** Tone of the art `ProjectArt` draws for a project: its illustration, or the fallback poster. */
export function artTone(project: Project): ArtTone {
  const g = ground(project);
  return g === 'blue' || g === 'ink' ? 'dark' : 'light';
}
