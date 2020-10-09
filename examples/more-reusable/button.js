const Button = ({ children, onClick, className, ...props }) => {   
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};