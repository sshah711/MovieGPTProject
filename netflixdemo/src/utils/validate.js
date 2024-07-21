export const checkValidData = (email, password) => {

    const isEmail = /^([A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,})$/.test(email);
    const ispass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmail) return "email is not valid";
    if (!ispass) return "password is not valid";

    return null;
}