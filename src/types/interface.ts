import { ReactNode } from "react"
import { Auth, Organization, User } from "."

export interface IAuthStore {
    getToken: () => string
    expirationDate: Date | null
    hasLogged: boolean
    saveSesion: Function
    logout: Function
    getHasLogged: Function
}

export interface IApiResponse {
    data: any
    status: number
}

export interface IAdminModal {
    children: ReactNode
    id: string
    title: string
    label: string | ReactNode
    css?: string | null
    atributes?: object
}

export interface INavigationItem {
    name: string
    href: string
    current: boolean
    //icon: IconDefinition
}

export interface AdminNavBarProps {
    navigation: Array<INavigationItem>
}

export interface IService<T> {
    create: (data: T) => Promise<IApiResponse>
    findAll: () => Promise<IApiResponse>
    findOne: (by: number) => Promise<IApiResponse>
    update: (by: number, data: T) => Promise<IApiResponse>
    remove: (by: number) => Promise<IApiResponse>
}

export interface Children {
    children: ReactNode
}

export interface IFetchApi {
    url: string,
    method: string,
    body?: any,
    access_token?: string
}

export interface DataRegister {
    organization: Organization,
    user: User,
    auth: Auth
}