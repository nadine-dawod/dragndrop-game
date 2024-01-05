export const Elementfive = ({ id, ref, className, style }) => {
  return (
    <div
      id={id}
      ref={ref}
      className={className}
      style={{ ...style, position: "relative" }}
    >
      {" "}
      <svg
        width="36"
        height="75"
        viewBox="0 0 36 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 0L35.3205 75H0.679443L18 0Z"
          fill="#9CE5CA"
        />
      </svg>
    </div>
  );
};
