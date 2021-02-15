// Objects
let triangleLarge1, triangleLarge2, triangleMiddle1, triangleSmall1, triangleSmall2, rectangle1, parallelogram1, parallelogram2;

// Config
const letterSize = 18;
const bgColor = 5;
let letterInput;
var animateLetters = [];
var kerning = 0;
var kerningArray = [];
var sum = 0;
var kerningSumArray = [];
var ultrashortLetters = ["I"];
var shortLetters = ["G", "L", "P", "Y"];
var shortnormalLetters = ["F", "J", "T"];
var normalLetters = ["A", "B", "C", "D", "E", "H", "K", "O", "Q", "U", "V", "W", "R", "N"];
var mediumLetters = ["S"];
var mediumlongLetters = ["X"];
var longLetters = ["M", "Z"];
var keysPressed = "";
var isEasterEgg = false;
console.log(kerning);


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255);
  angleMode(DEGREES); // Es wird nach Gradzahl rotiert und nicht nach 2*pi...
}

function keyPressed() {

  // Ein neues Objekt wird konstruiert, siehe objects.js
  triangleLarge1 = new MyTriangleL();
  triangleLarge2 = new MyTriangleL();
  triangleMiddle1 = new MyTriangleM();
  triangleSmall1 = new MyTriangleS();
  triangleSmall2 = new MyTriangleS();
  rectangle1 = new MyRect();
  parallelogram1 = new MyQuad1();
  parallelogram2 = new MyQuad2();


  if (key == 'Backspace') {
    animateLetters.pop(); //splice(-1, 1) löscht den Inhalt des Arrays bei Index -1 also am Ende des Arrays
    animateLetters = animateLetters.filter(value => Object.keys(value).length !== 0);
    //filter() erstellt ein neues Array mit allen Elementen, die den von der bereitgestellten Funktion implementierten Test bestehen.
    kerningArray.pop();
    kerningSumArray.pop();

    if (kerningArray.length == 0) {

      kerning = 0;
    }


    keysPressed = keysPressed.slice(0, -1);
    if (isEasterEgg) {
      location.reload();
    }
  }

  if (keyCode === ' ') {
    kerning = 4 * letterSize + letterSize;
    kerningArray.push(kerning);
    console.log(kerning);
  }

  var aniLetter = {};
  var currentKey;

  if (key !== 'Backspace') {
    currentKey = key.toUpperCase();
    keysPressed = keysPressed += key;
    // console.log(6);
  }


  if (letters[currentKey]) {
    var hasPara1, hasPara2;
    if (letters[currentKey].parallelogram1) {
      hasPara1 = true;
    } else {
      hasPara1 = false;
    }
    if (letters[currentKey].parallelogram2) {
      hasPara2 = true;
    } else {
      hasPara2 = false;
    }
    aniLetter.name = currentKey;
    if (hasPara1) {
      aniLetter.triangleLarge1 = Object.assign({}, letters.tangram1.triangleLarge1);
      aniLetter.triangleLarge2 = Object.assign({}, letters.tangram1.triangleLarge2);
      aniLetter.triangleMiddle1 = Object.assign({}, letters.tangram1.triangleMiddle1);
      aniLetter.triangleSmall1 = Object.assign({}, letters.tangram1.triangleSmall1);
      aniLetter.triangleSmall2 = Object.assign({}, letters.tangram1.triangleSmall2);
      aniLetter.rectangle1 = Object.assign({}, letters.tangram1.rectangle1);
      aniLetter.parallelogram1 = Object.assign({}, letters.tangram1.parallelogram1);
    }
    if (hasPara2) {
      aniLetter.triangleLarge1 = Object.assign({}, letters.tangram2.triangleLarge1);
      aniLetter.triangleLarge2 = Object.assign({}, letters.tangram2.triangleLarge2);
      aniLetter.triangleMiddle1 = Object.assign({}, letters.tangram2.triangleMiddle1);
      aniLetter.triangleSmall1 = Object.assign({}, letters.tangram2.triangleSmall1);
      aniLetter.triangleSmall2 = Object.assign({}, letters.tangram2.triangleSmall2);
      aniLetter.rectangle1 = Object.assign({}, letters.tangram2.rectangle1);
      aniLetter.parallelogram2 = Object.assign({}, letters.tangram2.parallelogram2);
    }

    //Die Methode Object.assign() kopiert die Werte aller aufzählbaren,
    // eigenen Eigenschaften von einem Quellobjekt in ein Zielobjekt.
    // Es wird das Zielobjekt zurückgegeben.
    function gsapAnimation() {
      var duration = 0.3;
      // var type = letters[currentKey].triangleLarge1.r / 45;
      gsap.to(aniLetter.triangleLarge1, {
        x: letters[currentKey].triangleLarge1.x,
        duration: duration
      });
      gsap.to(aniLetter.triangleLarge1, {
        y: letters[currentKey].triangleLarge1.y,
        delay: duration,
        duration: duration
      });
      gsap.to(aniLetter.triangleLarge1, {
        r: letters[currentKey].triangleLarge1.r,
        ease: SteppedEase.config(letters[currentKey].triangleLarge1.r / 45),
        delay: duration * 2,
        duration: duration * 2
      });
      //_________________________________________________
      gsap.to(aniLetter.triangleLarge2, {
        x: letters[currentKey].triangleLarge2.x,
        duration: duration
      });
      gsap.to(aniLetter.triangleLarge2, {
        y: letters[currentKey].triangleLarge2.y,
        delay: duration,
        duration: duration
      });
      gsap.to(aniLetter.triangleLarge2, {
        r: letters[currentKey].triangleLarge2.r,
        ease: SteppedEase.config(letters[currentKey].triangleLarge2.r / 45),
        delay: duration * 2,
        duration: duration * 2
      });
      //_________________________________________________
      gsap.to(aniLetter.triangleMiddle1, {
        x: letters[currentKey].triangleMiddle1.x,
        duration: duration
      });
      gsap.to(aniLetter.triangleMiddle1, {
        y: letters[currentKey].triangleMiddle1.y,
        delay: duration,
        duration: duration
      });
      gsap.to(aniLetter.triangleMiddle1, {
        r: letters[currentKey].triangleMiddle1.r,
        delay: duration * 2,
        duration: duration
      });
      //_________________________________________________
      gsap.to(aniLetter.triangleSmall1, {
        x: letters[currentKey].triangleSmall1.x,
        duration: duration
      });
      gsap.to(aniLetter.triangleSmall1, {
        y: letters[currentKey].triangleSmall1.y,
        delay: duration,
        duration: duration
      });
      gsap.to(aniLetter.triangleSmall1, {
        r: letters[currentKey].triangleSmall1.r,
        delay: duration * 2,
        duration: duration
      });
      //_________________________________________________
      gsap.to(aniLetter.triangleSmall2, {
        x: letters[currentKey].triangleSmall2.x,
        duration: duration
      });
      gsap.to(aniLetter.triangleSmall2, {
        y: letters[currentKey].triangleSmall2.y,
        delay: duration,
        duration: duration
      });
      gsap.to(aniLetter.triangleSmall2, {
        r: letters[currentKey].triangleSmall2.r,
        delay: duration * 2,
        duration: duration
      });
      //_________________________________________________
      gsap.to(aniLetter.rectangle1, {
        x: letters[currentKey].rectangle1.x,
        duration: duration
      });
      gsap.to(aniLetter.rectangle1, {
        y: letters[currentKey].rectangle1.y,
        delay: duration,
        duration: duration
      });
      gsap.to(aniLetter.rectangle1, {
        r: letters[currentKey].rectangle1.r,
        delay: duration * 2,
        duration: duration
      });
      //_________________________________________________
      if (hasPara1) {
        gsap.to(aniLetter.parallelogram1, {
          x: letters[currentKey].parallelogram1.x,
          duration: duration
        });
        gsap.to(aniLetter.parallelogram1, {
          y: letters[currentKey].parallelogram1.y,
          delay: duration,
          duration: duration
        });
        gsap.to(aniLetter.parallelogram1, {
          r: letters[currentKey].parallelogram1.r,
          delay: duration * 2,
          duration: duration
        });
      }
      //_________________________________________________
      if (hasPara2) {
        gsap.to(aniLetter.parallelogram2, {
          x: letters[currentKey].parallelogram2.x,
          duration: duration
        });
        gsap.to(aniLetter.parallelogram2, {
          y: letters[currentKey].parallelogram2.y,
          delay: duration,
          duration: duration
        });
        gsap.to(aniLetter.parallelogram2, {
          r: letters[currentKey].parallelogram2.r,
          delay: duration * 2,
          duration: duration
        });
      }
    }

    if ($(".toggle-nav .toggle-item[data=speed]").hasClass('active')) {
      gsapAnimation();
    } else if ($(".toggle-nav .toggle-item[data=tangram]").hasClass('active')) {
      setTimeout(function() {
        gsapAnimation();
      }, 2000);
    } else if ($(".toggle-nav .toggle-item[data=easter-egg]").hasClass('active')) {

    }

    for (let i = 0; i < animateLetters.length; i++) {
      var zeichenabstand = 2;
      if (ultrashortLetters.includes(animateLetters[i].name)) {
        kerning = 2 * letterSize + letterSize * zeichenabstand;
      } else if (shortLetters.includes(animateLetters[i].name)) {
        kerning = 2.9 * letterSize + letterSize * zeichenabstand;
      } else if (shortnormalLetters.includes(animateLetters[i].name)) {
        kerning = 3.4 * letterSize + letterSize * zeichenabstand;
      } else if (normalLetters.includes(animateLetters[i].name)) {
        kerning = 4 * letterSize + letterSize * zeichenabstand;
      } else if (mediumLetters.includes(animateLetters[i].name)) {
        kerning = 4.8 * letterSize + letterSize * zeichenabstand;
      } else if (mediumlongLetters.includes(animateLetters[i].name)) {
        kerning = 5.7 * letterSize + letterSize * zeichenabstand;
      } else if (longLetters.includes(animateLetters[i].name)) {
        kerning = 6.1 * letterSize + letterSize * zeichenabstand;
      }
    }

    kerningArray.push(kerning);

    sum = kerningArray.reduce(getSum);
    kerningSumArray.push(sum);



    animateLetters.push(aniLetter); //Die push() Methode fügt ein oder mehr Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.
  }
}

function getSum(total, num) {
  return total + num;
}

function draw() {
  background(bgColor); //Helligkeit vom Hintergrund 0 = Schwarz 100 = Weiß

  if ($(".toggle-nav .toggle-item[data=speed]").hasClass('active') || $(".toggle-nav .toggle-item[data=tangram]").hasClass('active')) {
    for (let i = 0; i < animateLetters.length; i++) {
      createLetter(animateLetters[i], width / 2 + kerningSumArray[i], height / 2, letterSize);
    }
  } else {
    for (let x = 0; x < Object.keys(eastereggs).length; x++) {
      keyObject = Object.keys(eastereggs)[x];
      if (keyObject == keysPressed.toLowerCase()) {
        isEasterEgg = true;
        createLetter(eastereggs[keysPressed.toLowerCase()], width / 2, height / 2, letterSize);
      }
    }
    if (isEasterEgg == false) {
      for (let i = 0; i < keysPressed.length; i++) {
        createLetter(letters["tangram1"], width / 2 + kerningSumArray[i], height / 2, letterSize);
      }
    }
  }
}


// create letter with objects
function createLetter(letter, tX, tY, g) {
  for (let i = 0; i < animateLetters.length; i++) {

    tX = tX - kerningArray[kerningArray.length - 1] / 2; //(2 * letterSize + (i + 1))

  }
  triangleLarge1.display(letter.triangleLarge1.r, letter.triangleLarge1.x, letter.triangleLarge1.y, tX, tY, g); //hier wird die displayfunktion aus der klasse MyTriangleL aufgerufen
  triangleLarge2.display(letter.triangleLarge2.r, letter.triangleLarge2.x, letter.triangleLarge2.y, tX, tY, g); //(r,x,y,tX,tY,g) also (rotation,x-Shape-Verschiebung,y-Shape-Verschiebung,Buchstabe x-Pos, Buchstabe y-Pos, größe)
  triangleMiddle1.display(letter.triangleMiddle1.r, letter.triangleMiddle1.x, letter.triangleMiddle1.y, tX, tY, g);
  triangleSmall1.display(letter.triangleSmall1.r, letter.triangleSmall1.x, letter.triangleSmall1.y, tX, tY, g);
  triangleSmall2.display(letter.triangleSmall2.r, letter.triangleSmall2.x, letter.triangleSmall2.y, tX, tY, g);
  rectangle1.display(letter.rectangle1.r, letter.rectangle1.x, letter.rectangle1.y, tX, tY, g); //hier wird die displayfunktion aus der klasse MyRect aufgerufen
  if (letter.parallelogram1) { // && letter == 'a'|'b'|'c'|'f'|'i'
    parallelogram1.display(letter.parallelogram1.r, letter.parallelogram1.x, letter.parallelogram1.y, tX, tY, g);
  }
  if (letter.parallelogram2) {
    parallelogram2.display(letter.parallelogram2.r, letter.parallelogram2.x, letter.parallelogram2.y, tX, tY, g);
  }
}