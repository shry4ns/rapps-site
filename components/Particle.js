import React from "react";
import Particles from "react-particles-js";

export default class Particle extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 35,
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.4,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 2,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 10,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 0.3,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "onresize": {
                  "enable": "true",
                  "density_auto": true,
                  "density_area": 600
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 200,
                  "line_linked": {
                    "opacity": 0.5
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 3
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%"
          }}
        />
      </div>
    )
  }
}
