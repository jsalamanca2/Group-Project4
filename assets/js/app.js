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
			 moodThumb.attr('data-caption', this.genre)  //Set the data-caption attribute to the name of the object
			 $('#moodRow').append(moodThumb);
			moodThumb.wrap("<div class='col s4 mood' id='"+this.moodName+"'>"); 
			 			//Append image to the page
			 
			 //Call moodClicked function when thumbnail is clicked
			 moodThumb.on('click', moodClicked() );
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
	 addMood('Dreamy', 'fantasy', 'assets/images/dream.jpg');
	 addMood('Kickass', 'action', 'assets/images/kickass.jpg');
	 addMood('Weird', 'scifi', 'assets/images/weird.jpg');
	 addMood('Smartypants', 'documentary', 'assets/images/smart.jpg');
	 addMood('Thriller', 'thriller', 'assets/images/thriller.jpg');
	 addMood('Nostalgic', 'classic', 'assets/images/nostalgic.jpg');
	 addMood('Horror', 'horror', 'assets/images/killer.png');
	 addMood('Dancey', 'musical', 'assets/images/dancey.jpg');
	 addMood('Drama', 'drama', 'assets/images/drama.jpg');
	 
	 //============= Victor's Turn :-) ============
	 function moodClicked() {
		 console.log("clicked " + $(this).attr('data-caption'));  //Alert the name of the iamge
		 
		 //========= Call API using the genre clicked ================
		
        }


});