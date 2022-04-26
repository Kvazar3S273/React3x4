import * as Yup from 'yup';

const validationFields = () => {
    return Yup.object({
      email: Yup.string()
        .email("Не коректно вказана пошта")
        .required("Вкажіть пошту"),
      password: Yup.string()
        .required("Введіть пароль")
        .min(5, "Пароль не може бути коротшим за 5 символів")
        .matches(/[a-zA-Z]/, "Пароль повинен містити латинські символи"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Не співпадає з введеним паролем")
        .required("Потрібно підтвердити пароль")
    });
}
export default validationFields;