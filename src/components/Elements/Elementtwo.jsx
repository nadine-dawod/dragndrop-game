import { useDraggable } from "@dnd-kit/core";


export const Elementtwo = ({id, ref, className, style}) => {

    return (
      <div id={id} ref={ref} className={className} style={style}>
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
          d="M100 46.46C100 46.6669 99.9985 46.8735 99.9956 47.0798H99.9998L99.9998 140H0L0 47.0798H0.00458523C0.00168356 46.8735 0.000228222 46.6669 0.000228222 46.46C0.000228222 20.8009 22.3859 0 50.0001 0C77.6143 0 100 20.8009 100 46.46ZM83.3335 51.6913C83.3335 51.8522 83.3325 52.0128 83.3306 52.1732H83.3338L83.3338 124.444L16.6672 124.444L16.6672 52.1732H16.6699C16.6679 52.0128 16.667 51.8522 16.667 51.6913C16.667 31.7342 31.5908 15.5557 50.0002 15.5557C68.4097 15.5557 83.3335 31.7342 83.3335 51.6913Z" 
          fill="white"
        />
        </svg>
      </div>
    );
  };