# IMAGINARIUM

A drag and drop building game to spark your imagination.
Become the Architect of your own imaginary world.

Built with React Vite.

## Features

- Drag and drop using use-gesture
- Create account functionality (details stored in json-server)
- Login authentication using global state (React Context)
- userId and position of dragged elements saved in localStorage
- Global state updating userId from localStorage as long as the user id logged in (to avoid state being lost on refresh)
- Logout function clearing global state + userId from localStorage
- Reset button in game to return all elements to their respective starting position
- Axios
- React routes
    - Private routes (require login) together with useParams hook
- React hooks
    - useContect
    - useState
    - useParams
    - useEffect
    - useNavigate

### This game was built by

- Diana Undén [@Vardagsbruket](https://www.github.com/Vardagsbruket)
- Saskia van der Zanden [@SaskiaVdZ](https://github.com/SaskiaVdZ)
- Maria Kim [@MariaKim1](https://github.com/MariaKim1)
- Nadine Dawod [@nadine-dawod](https://github.com/nadine-dawod)
- Mo Wei Wu [@momowo2023](https://github.com/momowo2023)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Vardagsbruket/sundsgarden_game_dragndrop.git
```

Go to the project directory

```bash
  cd sundsgarden_game_dragndrop.git
```

Install dependencies

```bash
  npm install
  npm install json-server
  npm install react-router-dom
  npm install use-gesture/react
```

Start the server

```bash
  npm run dev
```

## Documentation

This game was built as the final front end project for the course tech for women at Sundsgården. The assignment was to build some kind of game using React.

We started of by deciding on a functionality and coming up with a design idea. Then we sketched up the general user flow and set up the basic project structure. After that we divided the different features among the members of the team to get started with the logic. 

The team hade weekly checkin meetings and communicated continously on slack and Github projects.


