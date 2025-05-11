function shuffle_indexes(array){
	let currentIndex = array.length,  randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  
	return array;
}

function load_images(){
	var choice = Math.floor(Math.random()*3) + 1; //choose pack of imgs randomly

	var sources1 = ["images/puzzle1/img1-1.jpg",
	 				"images/puzzle1/img1-2.jpg",
	 				"images/puzzle1/img1-3.jpg",
	 				"images/puzzle1/img1-4.jpg",
	 				"images/puzzle1/img1-5.jpg",
	 				"images/puzzle1/img1-6.jpg",
	 				"images/puzzle1/img1-7.jpg",
	 				"images/puzzle1/img1-8.jpg",
	 				"images/puzzle1/img1-9.jpg",
	 				"images/puzzle1/img1-10.jpg",
	 				"images/puzzle1/img1-11.jpg",
	 				"images/puzzle1/img1-12.jpg"];

	var sources2 = ["images/puzzle2/img2-1.jpg",
	 				"images/puzzle2/img2-2.jpg",
	 				"images/puzzle2/img2-3.jpg",
	 				"images/puzzle2/img2-4.jpg",
	 				"images/puzzle2/img2-5.jpg",
	 				"images/puzzle2/img2-6.jpg",
	 				"images/puzzle2/img2-7.jpg",
	 				"images/puzzle2/img2-8.jpg",
	 				"images/puzzle2/img2-9.jpg",
	 				"images/puzzle2/img2-10.jpg",
	 				"images/puzzle2/img2-11.jpg",
	 				"images/puzzle2/img2-12.jpg"];

	var sources3 = ["images/puzzle3/img3-1.jpg",
	 				"images/puzzle3/img3-2.jpg",
	 				"images/puzzle3/img3-3.jpg",
	 				"images/puzzle3/img3-4.jpg",
	 				"images/puzzle3/img3-5.jpg",
	 				"images/puzzle3/img3-6.jpg",
	 				"images/puzzle3/img3-7.jpg",
	 				"images/puzzle3/img3-8.jpg",
	 				"images/puzzle3/img3-9.jpg",
	 				"images/puzzle3/img3-10.jpg",
	 				"images/puzzle3/img3-11.jpg",
	 				"images/puzzle3/img3-12.jpg"];

	var src_indexes = [0,1,2,3,4,5,6,7,8,9,10,11];
	src_indexes = shuffle_indexes(src_indexes);


	if (choice === 1){
		document.getElementById("img1").src = sources1[src_indexes[0]];
		document.getElementById("img3").src = sources1[src_indexes[1]];
		document.getElementById("img4").src = sources1[src_indexes[2]];
		document.getElementById("img2").src = sources1[src_indexes[3]];
		document.getElementById("img5").src = sources1[src_indexes[4]];
		document.getElementById("img6").src = sources1[src_indexes[5]];
		document.getElementById("img7").src = sources1[src_indexes[6]];
		document.getElementById("img8").src = sources1[src_indexes[7]];
		document.getElementById("img9").src = sources1[src_indexes[8]];
		document.getElementById("img10").src = sources1[src_indexes[9]];
		document.getElementById("img11").src = sources1[src_indexes[10]];
		document.getElementById("img12").src = sources1[src_indexes[11]];
	}
	else if (choice == 2){
		document.getElementById("img1").src = sources2[src_indexes[0]];
		document.getElementById("img2").src = sources2[src_indexes[1]];
		document.getElementById("img3").src = sources2[src_indexes[2]];
		document.getElementById("img4").src = sources2[src_indexes[3]];
		document.getElementById("img5").src = sources2[src_indexes[4]];
		document.getElementById("img6").src = sources2[src_indexes[5]];
		document.getElementById("img7").src = sources2[src_indexes[6]];
		document.getElementById("img8").src = sources2[src_indexes[7]];
		document.getElementById("img9").src = sources2[src_indexes[8]];
		document.getElementById("img10").src = sources2[src_indexes[9]];
		document.getElementById("img11").src = sources2[src_indexes[10]];
		document.getElementById("img12").src = sources2[src_indexes[11]];
	}
	else if (choice == 3){
		document.getElementById("img1").src = sources3[src_indexes[0]];
		document.getElementById("img2").src = sources3[src_indexes[1]];
		document.getElementById("img3").src = sources3[src_indexes[2]];
		document.getElementById("img4").src = sources3[src_indexes[3]];
		document.getElementById("img5").src = sources3[src_indexes[4]];
		document.getElementById("img6").src = sources3[src_indexes[5]];
		document.getElementById("img7").src = sources3[src_indexes[6]];
		document.getElementById("img8").src = sources3[src_indexes[7]];
		document.getElementById("img9").src = sources3[src_indexes[8]];
		document.getElementById("img10").src = sources3[src_indexes[9]];
		document.getElementById("img11").src = sources3[src_indexes[10]];
		document.getElementById("img12").src = sources3[src_indexes[11]];
	}

	// Reset the position of the puzzle pieces
	let position = 0;
	for (let i = 1; i <= 12; i++) {
		let img = document.getElementById("img" + i);
		img.style.left = position + "px";
		img.style.top = "0px";
		position += 10; // Adjust spacing between pieces
	}
}

function grabber(event) {

	// Set the global variable for the element to be moved
	theElement = event.currentTarget;
 
	// Determine the position of the word to be grabbed, first removing the units from left and top
	posX = parseInt(theElement.style.left);
	posY = parseInt(theElement.style.top);
 
	// Compute the difference between where it is and where the mouse click occurred
	diffX = event.clientX - posX;
	diffY = event.clientY - posY;
	
	event.preventDefault();

	// Now register the event handlers for moving and dropping the word
	document.addEventListener("mousemove", mover, true);
	document.addEventListener("mouseup", dropper, true);
 
 }
 
 // The event handler function for moving the word
 function mover(event) {
	// Compute the new position, add the units, and move the word
	theElement.style.left = (event.clientX - diffX) + "px";
	theElement.style.top = (event.clientY - diffY) + "px";
 }
 
 // The event handler function for dropping the word
 function dropper(event) {
	// Unregister the event handlers for mouseup and mousemove
	document.removeEventListener("mouseup", dropper, true);
	document.removeEventListener("mousemove", mover, true);
}

