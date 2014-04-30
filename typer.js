String.prototype.typeOut = function(output, speed) {

	this.characters = this.split('');

	/**
	 * The speed at which to run the timeouts
	 * @type {integer}
	 */
	this.speed = speed || 100;

	/**
	 * Where the text will be rendered to
	 * @type {HTMLElement}
	 */
	this.container = document.getElementById(output.replace('#', ''));

	/**
	 * The cursor element
	 * @type {HTMLElement}
	 */
	this.cursor = document.createElement('span');
	this.cursor.id = 'typeout-cursor';
	this.cursor.innerHTML = '&nbsp;';
	this.cursor.style.borderLeft = '2px solid #000';

	// Self referencing for closure
	var self = this;

	for (var index = 0; index < this.characters.length; index++) {

		// Replace new lines with BR element
		this.characters[index] = this.characters[index].replace(/\n/, '<br />');

		(function (index) {
			setTimeout(function () {

				// Check if cursor exists
				// If so then remove
				if (cursorExists()) {
					self.container.removeChild(self.cursor);
				}

				// Append the character to the container
				self.container.innerHTML += self.characters[index];

				// Add the cursor
				self.container.appendChild(self.cursor);

				// If we have reached the end, remove the cursor
				if (index == self.characters.length - 1) {
					self.container.removeChild(self.cursor);
				}
			}, self.speed * index);
		})(index);

	}	

	/** 
	 * Check if cursor exists in document
	 * @return {HTMLElement || Boolean}
	 */
	function cursorExists () {
		return document.getElementById('typeout-cursor');
	}

}