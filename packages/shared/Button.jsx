const Button = ({ children }) => {
  return (
    <>
      <button onClick={() => alert("button clicked")}>{children}</button>
    </>
  );
};

export default Button;
