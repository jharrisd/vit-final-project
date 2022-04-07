// NOTES: rather than change all code at once, create id's for the img, header, and p tags, and just change the content of those to make the js easier to understand and manipulate


// Original Code (Blocky and messy but simple commands)

// var webCode = '<img src="./images/stock_website.jpg" alt="example website image"> <h3>Web Development</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac fermentum elit. Praesent sed ipsum a ex dignissim vehicula. Vivamus ultricies facilisis metus. Donec mi risus, pharetra vulputate vestibulum cursus, faucibus eget neque. Ut sed vulputate enim, ut cursus erat. Curabitur tempor, nibh quis mollis finibus, nibh libero blandit turpis, vel egestas metus nunc vel eros. Nullam euismod lectus molestie purus accumsan accumsan.</p>'

// var photoCode = '<img src="./images/photography.png" alt="example photography image"> <h3>Photography and Photo Editing</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac fermentum elit. Praesent sed ipsum a ex dignissim vehicula. Vivamus ultricies facilisis metus. Donec mi risus, pharetra vulputate vestibulum cursus, faucibus eget neque. Ut sed vulputate enim, ut cursus erat. Curabitur tempor, nibh quis mollis finibus, nibh libero blandit turpis, vel egestas metus nunc vel eros. Nullam euismod lectus molestie purus accumsan accumsan.</p>'

// var adCode = '<img src="./images/stock_canva.jpg" alt="example advertisement"> <h3>Advertisements</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac fermentum elit. Praesent sed ipsum a ex dignissim vehicula. Vivamus ultricies facilisis metus. Donec mi risus, pharetra vulputate vestibulum cursus, faucibus eget neque. Ut sed vulputate enim, ut cursus erat. Curabitur tempor, nibh quis mollis finibus, nibh libero blandit turpis, vel egestas metus nunc vel eros. Nullam euismod lectus molestie purus accumsan accumsan.</p>'

// function webContent() {
//     console.log("Web Content")
//     document.getElementById("detail_section").innerHTML = webCode;
// }

// function photoContent() {
//     console.log("Photo Content")
//     document.getElementById("detail_section").innerHTML = photoCode;
// }

// function adContent() {
//     console.log("Ad Content")
//     document.getElementById("detail_section").innerHTML = adCode;
// }


lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac fermentum elit. Praesent sed ipsum a ex dignissim vehicula. Vivamus ultricies facilisis metus. Donec mi risus, pharetra vulputate vestibulum cursus, faucibus eget neque. Ut sed vulputate enim, ut cursus erat. Curabitur tempor, nibh quis mollis finibus, nibh libero blandit turpis, vel egestas metus nunc vel eros. Nullam euismod lectus molestie purus accumsan accumsan."


function changeContent(e) {

    console.log(e.target.id);
    const clickedElement = e.target.id;
    const targetElement = document.getElementById('detail_section');
    var newCode = targetElement.innerHTML

    if (clickedElement === 'web') {
        newCode = createDynamicCode('./images/stock_website.jpg', 'example website', 'Web Design', lorem)
    } else if (clickedElement === 'photo') {
        newCode = createDynamicCode('./images/photography.png', 'example photography', 'Photography and Photo Editing', lorem)
    }
    else if (clickedElement === 'ad') {
        newCode = createDynamicCode('./images/stock_canva.jpg', 'example advertisement', 'Advertisements', lorem)
    }

    targetElement.innerHTML = newCode
}

function createDynamicCode(imgSrc, imgAlt, h3Text, pText) {
    return `<img src="${imgSrc}" alt="${imgAlt}"> <h3>${h3Text}</h3> <p>${pText}</p>`
}