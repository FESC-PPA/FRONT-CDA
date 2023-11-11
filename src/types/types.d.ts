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
  phoneNumber: string;
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
  based: Based;
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
  id?: number;
  day: string;
};

type Workdays = {
  id?: number;
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

interface IService {
  create: (data) => Promise<IApiResponse>
  findAll: () => Promise<IApiResponse>
  findOne: (by) => Promise<IApiResponse>
  update: (data) => Promise<IApiResponse>
  remove: (by) => Promise<IApiResponse>
}