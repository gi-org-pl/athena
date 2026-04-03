export const getInitials = (name: string) => {
  const cleanName = name.trim();
  if (!cleanName) return "";

  const parts = cleanName.split(/\s+/).filter(Boolean);
  const firstInitial = Array.from(parts[0])[0];
  const lastInitial =
    parts.length > 1 ? Array.from(parts[parts.length - 1])[0] : "";

  return (firstInitial + lastInitial).toUpperCase();
};
