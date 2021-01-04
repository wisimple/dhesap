const NavigationTop: React.FC = ({ children }) => {
  return (
    <nav className='nav-fixed nav-fixed--top'>
      <>{children}</>
    </nav>
  );
};

export default NavigationTop;
