import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1 className="about-title">About this game</h1>
      <div className="about-text">
          <p>        
            Imaginarium is not a game in the conventional sense; 
            you can't win and you don't get a score.
          </p>
          <p>
            The satisfaction of the game comes from the esthetically pleasing buildings you create by
            dragging the different elements onto a canvas.
            Imaginarium is a meditative, calming and satisfying escape into a dream world!
          </p>
          <p>
            This game is built as part of our course in JavaScript at Sundsgården Folkhögskola in the fall of 2023.
            Click on the names in the footer to check out the creators' GitHub accounts.
          </p>
      </div>
    </div>
  );
};
