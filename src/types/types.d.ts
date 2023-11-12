//import { IconDefinition } from '@fortawesome/fontawesome-common-export types'
export type Attendance = {
  attendanceId?: number
  date: Date
  late: number
  userScheduleUserScheduleId?: number
  usersChedule?: UserSchedule
  excuse?: Excuse
}

export type Auth = {
  authId?: number
  email: string
  password: string
  active?: boolean
  userUserId?: number
  user?: User
}

export type Based = {
  basedId?: number
  name: string
  perimeterLocations: string
  organizationId?: string
  organization?: Organization
  schedule?: Schedule[]
}

export type Excuse = {
  excuseId?: number
  status: number
  resolutionDate?: Date
  comment?: string
  details?: string
  attendanceAttendanceId?: number
  userUserId?: number
  attendance?: Attendance
  usser?: User
}

export type FacialData = {
  facialDataId?: number
  dara: string
  userUserId?: number
  user?: User
}

export type Organization = {
  organizationId?: number
  nit: string
  name: string
  based?: Based[]
  user?: User[]
}

export type Role = {
  roleId?: number
  role: string
  details?: string
  user?: User[]
}

export type Schedule = {
  scheduleId?: number;
  name: string;
  basedBasedId?: number
  based?: Based;
  usersChedule?: UserSchedule[]
  workDays?: Workdays[]
};

export type User = {
  userId?: number
  identify: string
  firstName: string
  lastName: string
  phoneNumber?: string
  roleRoleId?: number
  organizationId?: number
  auth?: Auth
  excuse?: Excuse[]
  facialData?: FacialData
  organization?: Organization
  role?: Role
  usersChedule?: UserSchedule[]
};

export type UserSchedule = {
  userScheduleId?: number
  scheduleScheduleId?: number
  userUserId?: number
  attendance?: Attendance[]
  schedule?: Schedule
  user?: User
}

export type Weekdays = {
  weekDaysId?: number
  day: string,
  workDays?: Workdays[]
}

export type Workdays = {
  workDaysId?: number
  startTime: string
  endTime: string
  weekDaysWeekDaysId?: number
  scheduleScheduleId?: number
  schedule?: Schedule
  weekDays?: Weekdays
}