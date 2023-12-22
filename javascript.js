


const text = `function getMotivation_(){\nstartCoding_()_;\ngetAwesome_()_;\n}\nif_(_feelings  ==  "lowMood"_)\ngetMotivation_()_;`

// Function to display text letter by letter with different colors for each word
function typeTextWithColors(element, text, speed) {
  var lines = text.split('\n');
  let lineIndex = 0,
      segmentIndex = 0,
      wordIndex = 0,
      segmentLetterIndex = 0,
      wordLetterIndex = 0,
      colorIndex = 0;

 

  function type() {
    // Get the current line
    var currentLine = lines[lineIndex];

    // Get the current text content
    var currentText = element.innerHTML;

    // Split the line into segments
    var segments = currentLine.split(/\s+/);

    

    // var cc = segments.map(el => {
    //   return el.split(/\_+/);   // /[ \n]+/
    // });
    // console.log(cc);

    // Get the current segment
    var currentSegment = segments[segmentIndex];


    let words = currentSegment.split(/\_+/); 
    console.log(words);

    let curWord = words[wordIndex];

    let sColor = colorList[colorIndex];



    // Move to the next letter
    segmentLetterIndex++;


    if(wordLetterIndex < curWord.length){ 
      console.log(wordLetterIndex)
      
    // Apply a different color to each letter of the current word
    var coloredLetter = '<span style="color: ' + sColor + ';">' + curWord[wordLetterIndex] + '</span>';

// Add the colored letter to the text content
element.innerHTML = currentText + coloredLetter;

      wordLetterIndex++;
      
    }
    else{
      wordIndex++;
      colorIndex++;
      wordLetterIndex=0
    }      
    

    // Check if there are more letters in the current word
    if (segmentLetterIndex < currentSegment.length) {
      // Call the function recursively after a delay
      setTimeout(type, speed);
      
    } else {
      // Move to the next word
      segmentIndex++;
      colorIndex++;
      segmentLetterIndex = 0;

      wordLetterIndex=0;
      wordIndex=0

      // sColor = thisColors[Math.floor(Math.random() * 4)]

      // Check if there are more segments in the current line
      if (segmentIndex < segments.length) {
        // Add a space between segments
        element.innerHTML += ' ';
        // Call the function recursively after a delay
        setTimeout(type, speed);
      } else {
        // Move to the next line
        lineIndex++;
        segmentIndex = 0;

        // Check if there are more lines to type
        if (lineIndex < lines.length) {
          // Add a line break
          element.innerHTML += '<br>';
          // Call the function recursively after a delay
          setTimeout(type, speed);
        }
      }
    }
  }

  // Start typing
  type();
}

// Function to generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

    // function getMotivation(){
    //   startCoding();
    //   getAwesome();
    //   }
    //   if(feelings == "lowMood")
    //   getMotivation();
  
const colorList= ['#117dd4', '#ffffff', '#ffff00', '#ffffff', ' #8812c7' ,'#ffffff','#ffffff',  '#8812c7' , '#ffffff', '#ffff00' ,'#117dd4', '#ffff00', '#ffffff', '#ffffff',' #ffa500',  '#ffff00',  '#ffffff', '#ffff00', '#ffffff'];
 
// Get the target element
const motivationEl = document.getElementById('motivation');

console.log(motivationEl);

// Call the function to display text letter by letter with different colors for each word
typeTextWithColors(motivationEl, text, 50);