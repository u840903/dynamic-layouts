import {ReactNode} from "react";

export const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <header>Global Layout</header>
            {children}
            <style jsx>{`
              div {
                padding: 30px;
                background: lightblue;
              }
            `}</style>
        </div>
    );
}