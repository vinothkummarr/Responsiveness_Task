let cardArea = document.getElementById("cardArea");
for (i = 0; i < 6; i++) {
    let card = document.createElement('div')
    card.className= 'card'
    card.innerHTML += `
    <div class="cardName" style="background-color: ${getRandomColor()}">
                <h1>ScreenShot Of Project</h1>
            </div>
            <div style="margin: 5px 20px;">
            <div class="projName">
                <h2>Project Name</h2>
                <div  class="iconn">
                <i class="devicon-github-original-wordmark colored"></i>
                <i class="devicon-linkedin-plain"></i>
            </div>
            </div></div>
            <h4 style="margin: 5px 20px; font-weight: 100;">Short description of Project.. Just a Couple of Projects wil do..</h4>

    `
    cardArea.appendChild(card)
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
