export function migrationName(path) { return path.split("/").pop() ?? path; }
export function isMigrationFile(path) { return path.endsWith(".sql"); }
export function pendingMigrations(paths, applied) {
  const done = new Set(applied);
  return [...paths].filter((p) => p.endsWith(".sql") && !done.has(migrationName(p))).map((path) => ({ name: migrationName(path), path }));
}
