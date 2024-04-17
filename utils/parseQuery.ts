export function parseQuery(query: string) {
  return query.replaceAll(':', '%3A').replaceAll(' ', '%20');
}
