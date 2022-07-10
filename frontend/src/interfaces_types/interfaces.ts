export interface FormInputs {
  name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface UserInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface SchedulingParams {
  title: string;
  content: string;
  next: string;
}
