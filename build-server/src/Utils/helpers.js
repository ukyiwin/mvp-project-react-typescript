"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateLogin(email, password) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0,
        password: password.length === 0,
    };
}
exports.validateLogin = validateLogin;
function validateSignup(email, password, username, confirmPassword, firstname, lastname, gender, userType) {
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
exports.validateSignup = validateSignup;
function validateProfile(photo, country, institution, department) {
    // true means invalid, so our conditions got reversed
    return {
        photo: photo.length === 0,
        country: country.length === 0,
        institution: institution.length === 0,
        department: department.length === 0,
    };
}
exports.validateProfile = validateProfile;
//# sourceMappingURL=helpers.js.map