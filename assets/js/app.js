 $(document).ready(function(){
	 
	 //Global variables
	 var moods = [];
	 
	 // Mood object function that holds the properties of each mood
	 // =========================================================
	 
	 function Mood (moodName, genre, thumbnail) {
		 this.moodName = moodName;
		 this.genre = genre;
		 this.thumbnail = thumbnail;
		 		 
		 //Method to display a mood's thumbnail
		 this.displayMood = function() {
			 var moodThumb = $('<img>');
			 moodThumb.attr('src',this.thumbnail);
			 moodThumb.attr('data-caption', this.moodName)
			 moodThumb.addClass('mood');
			 $('.moodThumbs').append(moodThumb);
			 
			 //Call moodClicked function when thumbnail is clicked
			 moodThumb.on('click', moodClicked);
		 }
	 }
	 
	 //=============Add Mood Objects function========================
	 function addMood(moodName, genre, thumbnail) {
		 moods[moods.length] = new Mood();
		 moods[moods.length-1].moodName = moodName;
		 moods[moods.length-1].genre = genre;
		 moods[moods.length-1].thumbnail = thumbnail;
		 moods[moods.length - 1].displayMood();
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
		 alert("clicked " + $(this).attr('data-caption'));
		 
	 }


});