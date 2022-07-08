import { NavigateFunction } from "react-router-dom";
import { FormInputs } from "../../interfaces_types/interfaces";

export const handleOnChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormInputs: React.SetStateAction<FormInputs> | any
) => {
  setFormInputs((prevState: FormInputs): FormInputs => {
    return {
      ...prevState,
      [e.target.id]: e.target.value,
    };
  });
};

export const handleSubmit = async (
  e: any,
  formInputs: FormInputs,
  navigate: NavigateFunction
) => {
  e.preventDefault();
  const response = await fetch("http://localhost:3001/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formInputs),
  });

  if (response.status === 201) {
    navigate("/login");
  } else {
    console.log("please try again");
  }
};
