Node.prototype.typeOut = function() {

	if (typeof arguments[0] === 'string') {
		var string = arguments[0];
		var speed = arguments[1];
	} else {
		var string = this.innerText;
		var speed = arguments[0];
	}

	this.characters = string.split('');

	/**
	 * The speed at which to run the timeouts
	 * @type {integer}
	 */
	this.speed = speed || 100;

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

	this.innerText = '';

	self.appendChild(self.cursor);

	for (var index = 0; index < this.characters.length; index++) {

		// Replace new lines with BR element
		this.characters[index] = this.characters[index].replace(/\n/, '<br />');

		(function (index) {
			setTimeout(function () {

				self.removeChild(self.cursor);

				// Append the character to the container
				self.innerHTML += self.characters[index];

				// Add the cursor
				self.appendChild(self.cursor);

				// If we have reached the end, remove the cursor
				if (index == self.characters.length - 1) {
					self.removeChild(self.cursor);
				}
			}, self.speed * index);
		})(index);

	}

}