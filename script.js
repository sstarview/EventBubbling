function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

window.addEventListener("mouseup", function (event) {
    var myNav = document.getElementById("mySidenav");
    if (event.target != myNav && event.target.parentNode != myNav) {
        document.getElementById("mySidenav").style.width = "0";
    }
});

// 1. bubbling with bug

var spanElements = document.getElementsByTagName("span");
for (var i = 0; i < spanElements.length; i++) {
    spanElements[i].onclick = function () {
        this.style.borderColor = "red";
        alert(this.getAttribute("id") + " border color changed");
    }
}
//.........................................

// // 2. bubbling-fix with stop propogation (wrong method) because
// //    it should be used as intent to cancel. Not to stop unwanted
// //    event handler registered higher up in the DOM.

// var spanElements = document.getElementsByTagName("span");
// for (var i = 0; i < spanElements.length; i++) {
//     spanElements[i].onclick = function (event) {
//         if (event.stopPropagation) {
//             event.stopPropagation();
//         }
//         this.style.borderColor = "red";
//         alert(this.getAttribute("id") + " border color changed");
//     }
// }

//.............................................


// checked the cancelable property (work with 1)

// var spanElements = document.getElementById("Span2")
// spanElements.onclick = function (event) {
//     var x = event.cancelable;
//     document.getElementById("demo").innerHTML = x;
// }

//.....................................................


// // Tried various method to stop bubbling by plain javascript
// // which could easily be done with "default prevented" property 
// // with jQuery.

// var spanElements = document.getElementsByTagName("span");
// for (var i = 0; i < spanElements.length; i++) {

//     spanElements[i].onclick = function (event) {

//         // if (event.cancelable) {
//         //     event.preventDefault();
//         // }

//         this.style.borderColor = "red";
//         alert(this.getAttribute("id") + " border color changed");
//         for (var j = i + 1; j < spanElements.length; j++) {
//             event.preventDefault();
//         }

//     }
// }

//.........................................................


// var spanElements = document.getElementsByTagName("span");
// var i = 0;
// while (i < spanElements.length) {
//     spanElements[i].onclick = function (event) {
//         this.style.borderColor = "red";
//         alert(this.getAttribute("id") + " border color changed");

//     }
//     i++;
// // event.preventDefault();
// }
