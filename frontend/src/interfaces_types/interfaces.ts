import { Dispatch, SetStateAction } from "react";

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

export interface GlobalContextInterface {
  setLoggedIn?: Dispatch<SetStateAction<boolean>>;
  selectedServices?: any;
  setSelectedServices?: Dispatch<SetStateAction<any>>;
  selectedVehicles?: any;
  setSelectedVehicles?: Dispatch<SetStateAction<any>>;
  date: Date | null;
  setDate?: Dispatch<SetStateAction<Date | null>>;
  time?: string;
  setTime?: Dispatch<SetStateAction<string>>;
}

export interface AppointmentBody {
  date: string | undefined;
  time: string | undefined;
  service_ids: [string];
  vehicle_ids: [string];
}
