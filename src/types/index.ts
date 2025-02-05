import { ReactNode } from "react"

export type TIcon = {
    icon: ReactNode,
    className?: string
}

export type TMenuButton = {
    name: string,
    icon?: ReactNode,
    index?: number,
    hasSubItems?: boolean,
    subMenuHeight?: number,
    onClick?: (index: number, subMenuHeight: number) => void
}

export type TMenuItem = {
    name:string,
    index:number,
    activeSubMenu:number|null,
    subItems?:string[],
    onClick?: (index: number, subMenuHeight: number) => void
}