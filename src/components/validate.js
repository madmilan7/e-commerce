export const validate = (data, type) => {
    const errors = {};

    if (!data.email) {
        errors.email = "E-mail required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "E-mail address is invalid"
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Password required"
    } else if (data.password.length < 6) {
        errors.password = "Password must be 6 characters or more"
    } else {
        delete errors.password
    }

    if (data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "Accept our ruls"
    }

    if (type === "signup") {
        if (!data.name.trim()) {
            errors.name = "Username required"
        } else {
            delete errors.name
        }

        if (data.confirmPass !== data.password) {
            errors.confirmPass = "Confirm password"
        } else {
            delete errors.confirmPass
        }
    }

    return errors;
}