export const PostStatus = Object.freeze({
	DRAFT: 'DRAFT',
	PUBLISHED: 'PUBLISHED',
	UNPUBLISHED: 'UNPUBLISHED',
	[Symbol.iterator]: function*() {
		for (let member of this)
			if (this.hasOwnProperty(member)) yield this[member]
	}
})

export class Post {
	constructor(raw_post) {
		this.id = raw_post.id || -1
		this.author = raw_post.author || 'anonymous'
		this.status = raw_post.status || PostStatus.DRAFT

		this.trip = raw_post.trip || ''

		this.title = raw_post.title || ''
		this.content = raw_post.content || ''
		this.date = new Date(raw_post.date || Date.now())

		this.images = raw_post.images || []
		this.points = raw_post.points || []
	}

	/**
	 * Converts a geo uri to an array with two float values
	 * @return {Array} [lat, long]
	 */
	get coords() {
		return this.points.map(point => [point.latitude, point.longitude])
	}

	getDayRelativeTo(date) {
		const initialDay = date.getTime()
		const currentDay = this.date.getTime()

		return Math.floor((currentDay - initialDay) / (1000 * 3600 * 24)) + 1
	}
}

export default {
	PostStatus,
	Post
}
