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
	constructor({
		id = -1,
		author = 'anonymous',
		status = PostStatus.DRAFT,
		trip = '',
		title = '',
		content = '',
		date = new Date(Date.now()),
		images = [],
		points = []
	}) {
		this.id = id
		this.author = author
		this.status = status

		this.trip = trip

		this.title = title
		this.content = content
		this.date = date

		this.images = images
		this.points = points
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
