import * as yup from "yup"

const registerSchema = yup
.object({
    userName: yup.string()
    .required("Username is required")
    .min(6,"Username must be at least 6 characters")
    .max(15, "Username must be less than 15 characters"),

    email: yup.string().required("Email is required").email("Invalid email format"),

    password: yup.string().required("Password is required").min(6,"Password must be at least 6 characters"),
})
.required()

const loginSchema = yup
    .object({
        email: yup.string().required("Email is required").email("Invalid email format"),
        password: yup.string().required("Password is required").min(6,"Password must be at least 6 characters"),
    })
    .required()

export{registerSchema, loginSchema}