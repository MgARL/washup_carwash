import { NavigateFunction } from "react-router-dom";
import { UserInfo } from "../../interfaces_types/interfaces";

export const handleOnChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setUserInfo: React.SetStateAction<UserInfo> | any
) => {
  setUserInfo((prevState: UserInfo): UserInfo => {
    return {
      ...prevState,
      [e.target.id]: e.target.value,
    };
  });
};

export const handleSubmit = async (
  e: any,
  userInfo: UserInfo,
  setLoading: React.SetStateAction<boolean> | any,
  setSaved: React.SetStateAction<boolean> | any,
  navigate: NavigateFunction
) => {
  e.preventDefault();
  setLoading(true);
  const response = await fetch(`${process.env.REACT_APP_API_URL}users/update`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  setLoading(false)
  if (response.status === 204) {
    setSaved(true)
    setTimeout(()=> setSaved(false), 4000)
  } else {
    navigate("/login");
  }
};
