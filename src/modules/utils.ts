function isValidString(text?: string) {
  if (text === undefined) {
    return false;
  }

  return text.trim().length > 0;
}

export { isValidString };
