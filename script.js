'use strict';

let data = [
  {
    title: "Simple JavaScript Quiz",
    description: "This project is a simple trivia game in the browser using Javascript, HTML, and CSS",
    image_path: "images/simpleJavascriptQuiz.png"
  },
  {
    title: "Phaser Game",
    description: "This project is a game using the Phaser Javascript Library",
    image_path: "images/phaserGame.png"
  },
  {
    title: "Map App",
    description: "This project is a mobile app using the Google Maps API and geolocation",
    image_path: "images/mapApp.png"
  },
  {
    title: "jQuery Plugin Site",
    description: "This project showcases a few jQuery plugins on an HTML page styles with CSS",
    image_path: "images/jQuerypluginSite.png"
  },
  {
    title: "Drap and Drop Quiz",
    description: "This project uses jQuery plugins to make and interactive quiz game with a drag and drop format",
    image_path: "images/draganddrop.png"
  },
  {
    title: "D3 Library Graph",
    description: "This project uses the D3.js library to visualize JSON date on a graph",
    image_path: "images/D3dataVisualization.png"
  },
  {
    title: "Date Visualization",
    description: "This project uses the canvas element to visulaize JSON data on a graph.",
    image_path: "images/cavasDataVisualization.png"
  }
];


function ProjectList(props) {
  // return output for the component 
  return (
    <div>
      <h1>Project Portfolio</h1>

      <ol>
        {
          // use map() method to loop thru the array of object vals saved in data variable
          props.list.map(
            (item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                <br />
                <p>{item.description}</p>
                <br />
                <img src={item.image_path} alt={'Screenshot of ' + item.title} />
              </li>
            )
          )
        }
      </ol>
    </div>
  );
}

// call react createRoot() and then render() to output a component into an existing html element
const root = ReactDOM.createRoot(document.getElementById('myApp'));
root.render(
  <ProjectList list={data} />
);





