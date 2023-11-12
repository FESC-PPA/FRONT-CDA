import { BASED_ENDPOINT, SCHEDULE_ENDPOINT, WEEKDAYS_ENDPOINT } from "../constants"
import { Based, Schedule, Weekdays, Workdays } from "../types"
import { useService } from "."

export const useBasedService = () => useService<Based>(BASED_ENDPOINT)
export const useWeekDaysService = () => useService<Weekdays>(WEEKDAYS_ENDPOINT)
export const useWorkDaysService = () => useService<Workdays>(WEEKDAYS_ENDPOINT)
export const useScheduleService = () => useService<Schedule>(SCHEDULE_ENDPOINT)

//export { useBasedService, useWeekDaysService, useWorkDaysService, useScheduleService }