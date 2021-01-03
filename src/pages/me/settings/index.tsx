const Index = () => {
  const toggleTheme = () => {
    console.log('sdfsf');
    document.body.classList.toggle('theme-dark');
  };
  return (
    <div>
      <h1>Settings</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Index;
