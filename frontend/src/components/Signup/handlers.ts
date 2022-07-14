import { NavigateFunction } from "react-router-dom";
import { FormInputs } from "../../interfaces_types/interfaces";

export const handleOnChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormInputs: React.SetStateAction<FormInputs> | any
) => {
  setFormInputs((prevState: FormInputs): FormInputs => {
    return {
      ...prevState,
      [e.target.id]: e.target.value.toLowerCase(),
    };
  });
};

export const handleSubmit = async (
  e: any,
  name: string,
  password: string,
  formInputs: FormInputs,
  navigate: NavigateFunction
) => {
  e.preventDefault();
  const body ={
    name,
    password,
    ...formInputs
  }
  const response = await fetch(`${process.env.REACT_APP_API_URL}users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (response.status === 201) {
    navigate("/login");
  } else {
    console.log("please try again");
  }
};
