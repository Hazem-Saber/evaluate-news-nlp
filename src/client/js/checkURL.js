function checkForURL(value) {
  let regexp = /^(http|https):\/\/[^ "]+$/;
  return regexp.test(value);
}

export { checkForURL }