import { ReactNode } from "react";
//import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export type Organization = {
  id?: number;
  nit: string;
  name: string;
};

export type Role = {
  id?: number;
  role: string;
  details: string;
};

export type User = {
  id?: number;
  identify: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  organization?: Organization;
  role?: Role;
};

export type Auth = {
  id?: number;
  email: string;
  password: string;
  active?: boolean;
  user?: User;
};

export type FaceID = {
  id?: number;
  dara: any;
  user?: User;
};

export type Based = {
  id?: number;
  name: string;
  location: string;
  organization?: Organization;
};

export type Schedule = {
  id?: number;
  name: string;
  based: Based;
};

export type UserSchedule = {
  id?: number;
  schedule?: Schedule;
  user?: User;
};

export type Attendance = {
  id?: number;
  userSchedule?: UserSchedule;
  date: Date;
  late: number;
};

export type Weekdays = {
  id?: number;
  day: string;
};

export type Workdays = {
  id?: number;
  weekdays?: Weekdays;
  schedule?: Schedule;
  startTime: string;
  endTime: string;
};

export interface IAuthStore {
  access_token: string | null;
  expirationDate: Date | null;
  hasLogged: boolean;
  login: Function;
  logout: Function;
  getHasLogged: Function;
}

export interface IApiResponse {
  data: any;
  error?: string[];
  statusCode: number;
}

export type Children = {
  children: ReactNode;
};

export interface IAdminModal {
  children: ReactNode;
  id: string;
  title: string;
  label: string | ReactNode;
  css?: string | null;
  atributes?: object;
}

export interface INavigationItem {
  name: string;
  href: string;
  current: boolean;
  //icon: IconDefinition
}

export interface AdminNavBarProps {
  navigation: Array<INavigationItem>;
}
interface IVerSede {
  id: number;
}
