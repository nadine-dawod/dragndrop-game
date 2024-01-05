export const Elementsix = ({ id, ref, className, style }) => {
  return (
    <div
      id={id}
      ref={ref}
      className={className}
      style={{ ...style, position: "relative" }}
    >
      {" "}
      <svg
        id="Six"
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140 0H130V10L130 10.0004V10H120V19.9996H110V29.9996H110.001L110 30.0003V29.9998H100V39.9998H100.001L100 40.0002V40H90.0001V49.9995H80.0001V59.9995H80.0008L80.0005 59.9999H80.0004H79.9999V59.9997H69.9999V69.9997H70.0005V69.9998V69.9999L70.0003 70L70.0002 70.0001L70.0003 69.9999H60.0003L60.0002 70.0001V80.0001L60 80.0003H50V89.9999H40.0004V99.9999L40.0004 100H30.0004V110L30.0002 110H20.0002V120H10.0003V130L10.0006 130V140L30.0002 120L40.0004 110L50.0004 99.9999L60 90.0003L70.0002 80.0001L70.0003 80L80.0005 69.9999L140 10V0ZM90.0001 50.0002L90.0003 50H90.0001V50.0002ZM9.99999 130H0V140H9.99999V130Z"
          fill="#D9D9D9"
        />
      </svg>
    </div>
  );
};
