
import { Outlet } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout/MainLayout"

export const PrivateRoutes = () => {

    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    )

}