export function validateLogin(email: string, password: string) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0,
  };
}

export function validateSignup(email: string, password: string, username: string, confirmPassword: string,
                               firstname: string, lastname: string, gender: string,
                               userType: string,
) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    username: username.length === 0,
    password: password.length === 0,
    confirmPassword: confirmPassword.length === 0 && confirmPassword !== password,
    lastname: lastname.length === 0,
    gender: gender.length === 0,
    userType: userType.length === 0,
    firstname: firstname.length === 0,
  };
}

export function validateProfile(photo: string, country: string, institution: string, department: string) {
  // true means invalid, so our conditions got reversed
  return {
    photo: photo.length === 0,
    country: country.length === 0,
    institution: institution.length === 0,
    department: department.length === 0,
  };
}