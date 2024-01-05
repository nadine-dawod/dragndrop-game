export const Elementfour = ({ id, ref, className, style }) => {
  return (
    <div
      id={id}
      ref={ref}
      className={className}
      style={{ ...style, position: "relative" }}
    >
      <svg
        width="300"
        height="10"
        viewBox="0 0 300 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H300V10H0V0Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
