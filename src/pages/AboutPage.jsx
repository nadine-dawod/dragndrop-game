

export const AboutPage = () => {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h2>About this game</h2>
      <div
        style={{
        width: "25rem"
        }}>
          <p>        
            Imaginarium is not a game in the conventional sense; 
            you can't win and you don't get a score!
          </p>
          <p>
            The satisfaction of the game come from the esthetically pleasing buildings you create by
            dragging the different elements together on a canvas.
            Imaginarium is a meditative, calming and satisfying escape into a dream world!
          </p>
          <p>
            This game is built as part of our course in JavaScript from Sundsgården in the winter of 2023.
            Click on the names in the footer to check out the creators GitHub accounts.
          </p>
          </div>
      </div>
  );
};
