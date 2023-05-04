



let easedata2 = [{
    easetitle: "power1",
    easefunction: function (inputelement, left) {
        console.log("running power1")

        gsap.to(inputelement, { duration: 3, ease: "power1.out", left: left });
    }
},
{
    easetitle: "bounce",
    easefunction: function (inputelement, left) {
        console.log("running bounce")

        gsap.to(inputelement, { duration: 3, ease: "bounce.out", left: left });
    }
},

{
    easetitle: "steps",
    easefunction: function (inputelement, left) {
        console.log("running steps")

        gsap.to(inputelement, { duration: 3, ease: "steps(12)", left: left });
    }
},
{
    easetitle: "expo",
    easefunction: function (inputelement, left) {
        console.log("running expo")

        gsap.to(inputelement, { duration: 3, ease: "expo.out", left: left });
    }
},
{
    easetitle: "sine",
    easefunction: function (inputelement, left) {
        console.log("running sine")

        gsap.to(inputelement, { duration: 3, ease: "sine.out", left: left });
    }
}
]


let cardhtml = ``


// add cards to page
for (let index = 0; index < easedata2.length; index++) {

    document.getElementById("cardbox").innerHTML +=

        `<div class="card">
        <div class="card-header">${easedata2[index].easetitle}</div>
        <div class="card-body">
          <div class="row">
            <div class="col col-1">
              <button
              
                name="${index}"
                type="button"
                class="btn btn-primary runbutton"
              >
                Run
              </button>
            </div>
        
            <div class="col col-11">
              <div id="progressback0" class="progressback">
                <div  class="startsquare"></div>
                <div class="endsquare"></div>
                <div id="${index}" class="mainsquare"></div>
              </div>
            </div>
          </div>
        </div>
        </div>`;
}



// calculate progress bar's width
let myElement = document.querySelector(".progressback")
const elementStyles = getComputedStyle(myElement);
const myElementWidth = parseInt(elementStyles.width);
console.log(`The width of myElement is ${myElementWidth}`);

let destinationleft = myElementWidth - 140
console.log(destinationleft)







const elements = document.querySelectorAll('.runbutton');

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.addEventListener('click', (e) => {
        console.log(e.target.name)
        const inputelement = document.getElementById(e.target.name)


        easedata2[e.target.name].easefunction(inputelement, destinationleft)
    });
}






let runallbutton = document.getElementById("runallbutton").addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {

        easedata2[i].easefunction(document.getElementById(i), destinationleft)
    }
})




let resetbutton = document.getElementById("resetbutton").addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
        gsap.to(document.getElementById(i), { duration: 1, ease: "power1.out", left: 100 });
    }
})


