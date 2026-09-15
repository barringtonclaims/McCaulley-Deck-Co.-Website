// Read only explicit campaign tags, never arbitrary query parameters or referrer URLs.
export function leadAttribution(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const fields: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign"] as const) {
    const value = params.get(key)?.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 120);
    if (value) fields[key] = value;
  }
  return fields;
}
