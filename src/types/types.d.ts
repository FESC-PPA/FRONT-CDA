import { ReactNode } from "react";
//import { IconDefinition } from '@fortawesome/fontawesome-common-types'

type Organization = {
  id?: number;
  nit: string;
  name: string;
};

type Role = {
  id?: number;
  role: string;
  details: string;
};

type User = {
  id?: number;
  identify: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  organization?: Organization;
  role?: Role;
};

type Auth = {
  id?: number;
  email: string;
  password: string;
  active?: boolean;
  user?: User;
};

type FaceID = {
  id?: number;
  dara: any;
  user?: User;
};

type Based = {
  basedId?: number
  name: string
  perimeterLocations: string
  organizationId?: string
  organization?: Organization
};

type Schedule = {
  id?: number;
  name: string;
  basedId?: number
  based?: Based;
  workdays?: Workdays[]
};

type UserSchedule = {
  id?: number;
  schedule?: Schedule;
  user?: User;
};

type Attendance = {
  id?: number;
  userSchedule?: UserSchedule;
  date: Date;
  late: number;
};

type Weekdays = {
  weekDaysId?: number;
  day: string;
};

type Workdays = {
  workDaysId?: number;
  weekdays?: Weekdays;
  schedule?: Schedule;
  startTime: string;
  endTime: string;
};

interface IAuthStore {
  getToken: () => string;
  expirationDate: Date | null;
  hasLogged: boolean;
  saveSesion: Function;
  logout: Function;
  getHasLogged: Function;
}

interface IApiResponse {
  data: any;
  status: number;
}

type Children = {
  children: ReactNode;
};

interface IAdminModal {
  children: ReactNode;
  id: string;
  title: string;
  label: string | ReactNode;
  css?: string | null;
  atributes?: object;
}

interface INavigationItem {
  name: string;
  href: string;
  current: boolean;
  //icon: IconDefinition
}

interface AdminNavBarProps {
  navigation: Array<INavigationItem>;
}

interface IService<T> {
  create: (data: T) => Promise<IApiResponse>
  findAll: () => Promise<IApiResponse>
  findOne: (by: number) => Promise<IApiResponse>
  update: (by: number, data: T) => Promise<IApiResponse>
  remove: (by: number) => Promise<IApiResponse>
}

type IFetchApi = {
  url: string,
  method: string,
  body?: any,
  access_token?: string
}

type DataRegister = {
  organization: Organization,
  user: User,
  auth: Auth
}