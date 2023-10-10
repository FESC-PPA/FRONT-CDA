import { ReactNode } from "react"
//import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export type LoginData = {
    email: string
    password: string
}

export type ApiResponse = {
    message: string
    data: Array<any> | object | null
    error: string | null
    statusCode: number
}

export type Children = {
    children: ReactNode
}

export interface NavigationItem {
  name: string
  href: string
  current: boolean
  //icon: IconDefinition
}

export interface AdminNavBarProps {
  navigation: NavigationItem[]
}