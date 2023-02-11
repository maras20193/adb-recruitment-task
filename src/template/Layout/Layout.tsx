type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <nav>nAV</nav>
    <div>{children}</div>
    <footer>FOTTER</footer>
  </div>
);
