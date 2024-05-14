// document.querySelector(body).style.backgroundColor="black";

// window.addEventListener('DOMContentLoaded', () => {
//     const skills = document.querySelectorAll('.skill');

//     skills.forEach(skill => {
//         const level = skill.dataset.level;
//         const progress = skill.querySelector('::after');
//         progress.style.width = `${level}%`;
//     });
// });

// document.querySelectorAll('.circle_div', function(){
//     const hover=document.querySelectorAll('.circle_div').style("hover")
// })

// document.getElementById("Skills_scale").addEventListener("click", (event)=>{
//     event.defaultPrevent();

//     var skills=document.getElementById("languages");
//     if (skills.classList.contains(".hidden")){
//         skills.classList.remove(".hidden");
//         skills.classList.add(".visible");

//         scaleLanguages();
//     }
//     else{
//         skills.classList.remove(".visible");
//         skills.classList.add(".hidden");
//     }
// });


//     function scaleLanguages() {
//         var scales = {
//           'HTMLScale': 90,
//           'cssScale': 90,
//           'BootstrapScale': 20,
//           'jsScale': 20
//         };
    
//         for (var id in scales) {
//           if (scales.hasOwnProperty(id)) {
//             var span = document.getElementById(id);
//             var width = scales[id] + '%';
//             span.style.width = width;
//           }
//         }
//       }


    //   document.querySelectorAll('.Skills_scale').forEach(item => {
    //     item.addEventListener('click', event => {
    //         const languages = event.target.nextElementSibling;
    //         languages.classList.toggle('hidden');
    //         if (!languages.classList.contains('hidden')) {
    //             updateScaleValues(languages);
    //         }
    //     });
    // });
    
    // function updateScaleValues(languages) {
    //     const scales = languages.querySelectorAll('span[id$="Scale"]');
    //     scales.forEach(scale => {
    //         const percentage = parseInt(scale.innerText);
    //         scale.innerText = (percentage + 10) + '%'; // Increase the percentage by 10%
    //     });
    // }
    var buttons = document.querySelectorAll('.Skills_scale');

    // Loop through each button and add click event listener
    // buttons.forEach(function(button) {
    //   button.addEventListener('click', function() {

    //     console.log("Button clicked")
    //     var languagesDiv = this.nextElementSibling; // Get the next sibling, which is the languages div
        
    //     console.log("Languages div ")
    //     // Toggle the visibility of the languages div
    //     if (languagesDiv.style.display === 'none') {
    //       languagesDiv.style.display = 'block';
    //       countScales(languagesDiv);
    //     } else {
    //       languagesDiv.style.display = 'none';
    //     }
    //   });
    // });
  
    // // Function to count scales dynamically
    // function countScales(languagesDiv) {
    //   var scales = languagesDiv.querySelectorAll('span[id$="Scale"]');
    //   scales.forEach(function(scale) {
    //     var scalePercentage = parseInt(scale.textContent);
    //     var count = 0;
    //     var interval = setInterval(function() {
    //       if (count <= scalePercentage) {
    //         scale.textContent = count + '%';
    //         count++;
    //       } else {
    //         clearInterval(interval);
    //       }
    //     }, 10);
    //   });
    // }
 document.addEventListener('DOMContentLoaded', function(){
  var containerDiv=document.getElementById('container');

  setTimeout(function(){
    containerDiv.classList.add("show")}, 400);
  });

 
 

  
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function addAnimations() {
    var elements = document.querySelectorAll('.scale-up');
    elements.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  }
  
  window.addEventListener('load', addAnimations);
  window.addEventListener('scroll', addAnimations);