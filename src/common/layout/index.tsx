import "./styles.scss";

interface layoutProp {
  children?: React.ReactNode;
}

function Layout({ children }: layoutProp) {
  return <div className="layout">{children}</div>;
}
export default Layout;
