const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <p>All right`s reserved {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
