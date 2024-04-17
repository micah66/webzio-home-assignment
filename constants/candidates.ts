export const CANDIDATES = {
  trump: 'Trump',
  biden: 'Biden',
} as const;

export const QUERIES = {
  [CANDIDATES.trump]:
    'title:Trump AND (election OR polls) AND sentiment:(positive OR negative)AND language:english',
  [CANDIDATES.biden]:
    'title:Biden AND (election OR polls) AND sentiment:(positive OR negative)AND language:english',
} as const;
