export const Layout = ({children}) => {
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