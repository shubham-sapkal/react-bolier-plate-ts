import { FC, PropsWithChildren } from "react"


interface IMainLayoutProps extends PropsWithChildren {}


export const MainLayout: FC<IMainLayoutProps> = ({ children }) => {

    return (
        <> {children} </>
    )

}