const TRIANGLE_SIZE = 50;

const App = () => {
  const cols = Math.ceil(window.innerWidth / TRIANGLE_SIZE);
  const rows = Math.ceil(window.innerHeight / (TRIANGLE_SIZE * Math.sqrt(3)));

  const trianglePositions = [...Array(cols).keys()]
    .map((r) => [...Array(rows).keys()].map((c) => [r, c]))
    .flat(1);
  //console.log(trianglePositions);
  return (
    <>
      {trianglePositions.map(([x, y]) => (
        <div className={`triangle--${x}-${y}`} key={`${x}${y}`}></div>
      ))}
      <div className="header">
        <div>
          <h1>Jack Sullivan</h1>
          <p>Computer Science BS/MS at Worcester Polytechnic Institute</p>
          <p>
            <a href="https://github.com/jhsul" target="_blank">
              GitHub
            </a>
            {" | "}
            <a href="https://google.com" target="_blank">
              LinkedIn
            </a>
            {" | "}
            <a href="https://google.com" target="_blank">
              Resume
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

/*
<div className="door">
        <div className="content-1">
          <h1>Full Stack Development</h1>
          <p>
            I make cool webapps. React, express, Typescript, THREE.js.
            Interested in WebXR and WebGPU
          </p>
        </div>
      </div>
<div className="content-2">
          <h1>Mathematics</h1>
          <p>
            I make cool webapps. React, express, Typescript, THREE.js.
            Interested in WebXR and WebGPU
          </p>
        </div>
*/
export default App;
