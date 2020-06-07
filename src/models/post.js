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
		Object.assign(this, {
			id: -1,
			author: 'anonymous',
			trip: '',
			status: PostStatus.DRAFT,
			title: '',
			content: '',
			date: new Date(Date.now()),
			points: [],
			images: [],
			distance: 0,
		}, raw_post)
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
