
import { Outlet } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout/MainLayout"
import { FC } from "react"

export const PrivateRoutes: FC = () => {

    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    )

}