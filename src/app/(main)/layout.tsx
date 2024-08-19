import { FC, PropsWithChildren } from "react";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    return <>
        
        <h1>
            HEADER MAIN
        </h1>
        {children}
        <h1>
            FOOTER MAIN
        </h1>
    </>;
};

export default DashboardLayout;