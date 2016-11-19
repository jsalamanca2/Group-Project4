 $(document).ready(function(){
	 
	 //Global variables
	 var moods = [];
	 
	 // Mood object function that holds the properties of each mood
	 // =========================================================
	 
	 function Mood (name, genRe, thumbURL) {
		 this.moodName = name;							    //this.moodName sets the moodName within this function to the argument
		 this.genre = genRe;
		 this.thumbnail = thumbURL;
		 		 
		 //Method to display a mood's thumbnail
		 this.displayMood = function() {
			 var moodThumb = $('<img>');					//Create the a new image object
			 moodThumb.attr('src',this.thumbnail);			//Set the src attribute of the image to the thumbnail URL
			 moodThumb.attr('data-caption', this.moodName)  //Set the data-caption attribute to the name of the object
			 moodThumb.addClass('mood');					//Add the class 'mood' to the image 
			 $('.moodThumbs').append(moodThumb);			//Append image to the page
			 
			 //Call moodClicked function when thumbnail is clicked
			 moodThumb.on('click', moodClicked);
		 }
	 }
	 
	 //=============Add Mood Objects function========================
	 function addMood(moodName, genre, thumbnail) {
		 moods[moods.length] = new Mood();					//Assign a new Mood object to the end of the moods array
		 moods[moods.length-1].moodName = moodName;			//Set the properties of the new Mood object as follows
		 moods[moods.length-1].genre = genre;
		 moods[moods.length-1].thumbnail = thumbnail;
		 moods[moods.length - 1].displayMood();				//Call the displayMood method to show the thumbnail image of the object
	 }
	 
	 
	 //==============Please Add and displaying moods here=============
	 addMood('happy', 'comedy', 'assets/images/happy.jpg');
	 addMood('adventure', 'adventure', 'assets/images/adventurous.jpg');
	 addMood('Giddy', 'animated', 'assets/images/animated.jpg');
	 addMood('Dreamy', 'comedy', 'assets/images/dream.jpg');
	 addMood('Kickass', 'comedy', 'assets/images/kickass.jpg');
	 addMood('Wierd', 'comedy', 'assets/images/weird.jpg');
	 addMood('Smartypants', 'comedy', 'assets/images/smart.jpg');
	 addMood('Thriller', 'comedy', 'assets/images/thriller.jpg');
	 addMood('Nostalgic', 'comedy', 'assets/images/nostalgic.jpg');
	 addMood('Horror', 'comedy', 'assets/images/killer.png');
	 addMood('Dancey', 'comedy', 'assets/images/dancey.jpg');
	 addMood('Drama', 'comedy', 'assets/images/drama.jpg');
	 
	 //============= Victor's Turn :-) ============
	 function moodClicked() {
		 $('.moodThumbs').hide();							//Hide all the thumbnails
		 alert("clicked " + $(this).attr('data-caption'));  //Alert the name of the iamge
		 
		 //========= Call API using the genre clicked ================
		 
	 }


});