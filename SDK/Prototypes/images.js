
export default {
		/**
		 * Get image URL for given size
		 * @memberof WhipSdk.AsyncImage
		 * @instance
		 * @param {Number} targetWidth required image width
		 * @param {Number} targetHeight required image height
		 * @returns {String} url of image
		 */
		imageWithSize: function (targetWidth, targetHeight) {

			var count = this.images.length;

			if (!count)
				return null;

			var urlString;
			var image;

			if (this.images.length == 1) {
				image = this.images[0];
				urlString = image.url;
			}
			else {
				for (var index in this.images) {
					image = this.images[index];
					var height = image.height;

					if (targetHeight <= height) {
						urlString = image.url;
						break;
					}
				}

				if (!urlString) {
					image = this.images[this.images.length - 1];
					urlString = image.url;
				}
			}

			return urlString;
		},

		/**
		 * Get closest image URL for given size
		 * @memberof WhipSdk.AsyncImage
		 * @instance
		 * @param {Number} targetWidth required image width
		 * @param {Number} targetHeight required image height
		 * @returns {String} url of image
		 */
		getClosestImage: function (targetWidth, targetHeight,type) {
			var closestScore = null,
				closestIndex = null,
				score, image;


			for (var i = 0, l = this.images.length; i < l; i++) {
				image = this.images[i];
				score = Math.abs(image.width - targetWidth) + Math.abs(image.height - targetHeight);
				if ((closestScore === null || score < closestScore || score === 0) && type ? image.type === type : true ) {
					closestScore = score;
					closestIndex = i;
				}
			}

			return this.images[closestIndex].url;
		},

		getArray: function() {
			var arr = [];
			for (var image,i=0,l=this.images.length;i<l;i++) {
				image = this.images[i];
				arr.push({
					url: image.url,
					"width": image.width,
					"height": image.height,
					"type": image.type
				});
			}
			return arr;
		}
	};
