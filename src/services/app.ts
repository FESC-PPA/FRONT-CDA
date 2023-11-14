import { BASED_ENDPOINT, EXCUSE_ENDPOINT, FACIAL_DATA_ENDPOINT, ORGANIZATION_ENDPOINT, SCHEDULE_ENDPOINT, USER_ENDPOINT, USER_SCHEDULE_ENDPOINT, WEEKDAYS_ENDPOINT } from "../constants"
import { Based, Excuse, FacialData, Organization, Schedule, User, UserSchedule, Weekdays, Workdays } from "../types"
import { useService } from "."

export const useBasedService = () => useService<Based>(BASED_ENDPOINT)
export const useExcuseService = () => useService<Excuse>(EXCUSE_ENDPOINT)
export const useFacialDataService = () => useService<FacialData>(FACIAL_DATA_ENDPOINT)
export const useScheduleService = () => useService<Schedule>(SCHEDULE_ENDPOINT)
export const userOrganizationService = () => useService<Organization>(ORGANIZATION_ENDPOINT)
export const useUserService = () => useService<User>(USER_ENDPOINT)
export const useUserScheduleService = () => useService<UserSchedule>(USER_SCHEDULE_ENDPOINT)
export const useWeekDaysService = () => useService<Weekdays>(WEEKDAYS_ENDPOINT)
export const useWorkDaysService = () => useService<Workdays>(WEEKDAYS_ENDPOINT)

//export { useBasedService, useWeekDaysService, useWorkDaysService, useScheduleService }