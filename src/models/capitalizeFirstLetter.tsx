export function capitalizeFirstLetter(text?: string | null): string {
    if (!text || typeof text !== 'string') return '';
    const trimmed = text.trimStart();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }