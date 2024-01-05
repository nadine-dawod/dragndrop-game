export const Elementone = ({ id, ref, className, style }) => {
  return (
    <div
      id={id}
      ref={ref}
      className={className}
      style={{ ...style, position: "relative" }}
    >
      <svg
        width="100"
        height="140"
        viewBox="0 0 100 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 0H0V140H100V0ZM24.9999 43.9998L25 44.0695V140H75V43.9995H74.9999C74.9997 30.7448 63.8069 19.9998 49.9999 19.9998C36.1927 19.9998 24.9999 30.7449 24.9999 43.9998Z"
          fill="#EACFC4"
        />
      </svg>
    </div>
  );
};
