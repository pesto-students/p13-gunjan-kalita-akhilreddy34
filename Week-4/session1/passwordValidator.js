function isStrongPassword(password) {
  const containsAtLeastEightCharacters = password?.length >= 8;
  const isPasswordStringPresent = !password?.toLowerCase().includes("password");
  const isUpperCasePresent = /[A-Z]/.test(password);

  return (
    containsAtLeastEightCharacters &&
    isPasswordStringPresent &&
    isUpperCasePresent
  );
}

console.log(isStrongPassword("Qwerty123"));
