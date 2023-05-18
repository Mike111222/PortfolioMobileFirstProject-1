const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}));

// Get the header
const header = document.getElementById('myheader');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
window.onscroll = myFunction();

const myProjects = [
  {
    id: 'proj1',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj2',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj3',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj4',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj5',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  },
  {
    id: 'proj6',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
    featuredImage: './images/Img Placeholder-2',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    linkLive: 'https://Mike111222.github.io/MyPortfolio/',
    linkSource: 'https://github.com/Mike111222/MyPortfolio/',
  }
];

const projectsContainer = document.getElementById('projects-container');

myProjects.map((card) => {
  projectsContainer.innerHTML += `
    <div id="${card.id}" class="project-card">
      <h2 class="work-subheading projecttitle">${card.name}</h2>
      <p class="work-specs projectdetails">${card.description}</p>
      <div class="for-flex projectflex2">
        <ul>
          <li class="flex-items item1">${card.technologies[0]}</li>
          <li class="flex-items item2">${card.technologies[1]}</li>
          <li class="flex-items item3">${card.technologies[2]}</li>
        </ul>
    </div>
      <button type="button" id="myBtn" class="work-btn projbtn on-mobile">See Project</button>
    </div>
    <!-- The Modal -->
    <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
    <div class="modal-header">
    <span class="close">&times;</span>
    <h2>Modal Header</h2>
       </div>
    <div class="modal-body">
    <p>Some text in the Modal Body</p>
    <p>Some other text...</p>
    </div>
    <div class="modal-footer">
    <h3>Modal Footer</h3>
    </div>
    </div>

</div>
    `;
  return ('');
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// const allProjects = [
//   {
//     id: 'myworks',
//     name: 'My Recent Works',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     featuredImage: '.images/myworks-desktop.png',
//     technologies: ['HTML', 'BootStrap', 'Ruby'],
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj1',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj2',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj3',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj4',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj5',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   },
//   {
//     id: 'proj6',
//     name: 'Professional Art Printing Data',
//     description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standards.',
//     featuredImage: './images/Img Placeholder-2',
//     technologies: ['HTML', 'CSS', 'BootStrap'],
//     seeProject: 'See Project',
//     linkLive: '<a href="https://Mike111222.github.io/MyPortfolio/" target="blank">See Live</a>',
//     linkSource: '<a href="https://github.com/Mike111222/MyPortfolio/" target="blank">See Source</a>',
//   }
// ];

//pop-up section code
// const seeProject = document.querySelectorAll('.work-btn');
// const popMenu = document.querySelector('seePopup');

// seeProject.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     document.body.classList.toggle('no-scroll');
//     popMenu.classList.add('act');
//     popMenu.innerHTML = `
//       <section id="popup" class="popup">
//       <div id="popup-title">
//       <h3 class="popup-heading forflex">${allProjects[index].name}</h3>
//       <span class="close-btn">&times</span>
//       <div class="forflex">
//       <li class="flex-item">${allProjects[index].technologies[0]}</li>
//       <li class="flex-item">${allProjects[index].technologies[1]}</li>
//       <li class="flex-item">${allProjects[index].technologies[2]}</li>
//       </div>
//       </div>
//       <div class="popup-card">
//       <div class="popup-image"><img src="${allProjects[index].featuredImage}" alt="something">
//       </div>
//       <div class="forflex">
//       <p class="popup-details">${allProjects[index].description}
//       </p>
//       <div class="forflex popup-textbtn">
//       <button id="see-source"
//       class="work-btn">${allProjects[index].linkSource}
//       <img src="./images/Illustration.png" alt="source code">
//       </button>
//       </div>
//       </div>
//       </div>
//       </section>
//       `;

//   })
// });