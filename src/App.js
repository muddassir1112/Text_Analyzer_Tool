import { useEffect } from "react";
import "./App.css";
import Footer from "./component/Footer";
import TopBar from "./component/TopBar";
import { Analyser } from "./component/main/Analyser";
import introJs from "intro.js";

function App() {
  useEffect(() => {
    introJs()
      .setOptions({
        steps: [
          {
            title: "Welcome",
            intro: "Hello Everyone! 👋 Welcome to my Text Analyzer App!",
          },
          {
            element: ".container__title",
            title: "Text Analyzer App",
            intro: "This is the name of my awesome Text Analyzer App!",
          },
          {
            element: ".container__contact--links",
            title: "Social Links",
            intro: "Feel free to Connect me on Social Platforms!",
          },
          {
            element: ".container__text--information",
            title: "Information of your text",
            intro:
              "This section will display information such as total words, total characters, etc. from your entered text!",
          },
          {
            element: ".container__text",
            title: "Your text area",
            intro: "Please write your text to be analyzed!",
          },
          {
            element: ".container__reading--time",
            title: "Time Section",
            intro: "This section will display the average reading time!",
          },
          {
            element: ".container__longest--word",
            title: "Longest Word",
            intro:
              "This section will display the longest word from your entered text!",
          },
          {
            element: ".portfolio",
            title: "My Profile",
            intro: "To know more about me, please visit my Portfolio!",
          },
        ],
        showStepNumbers: true, // Show step numbers
        showBullets: true, // Show bullets for steps
        showProgress: true, // Show progress bar
        exitOnOverlayClick: false, // Prevent exiting on overlay click
        exitOnEsc: false, // Prevent exiting on ESC key press
        disableInteraction: true, // Disable interaction with the rest of the page during the tour
      })
      .setOptions({
        tooltipClass: "customTooltip",
      })
      .start();
  }, []);
  return (
    <>
      <div className="App">
        <TopBar />
        <Analyser />
        <Footer />
      </div>
    </>
  );
}

export default App;
