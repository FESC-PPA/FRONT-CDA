import { ReactNode } from "react"

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