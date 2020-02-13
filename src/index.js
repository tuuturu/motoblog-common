import { default as post_module } from '~/models/post'

console.log(post_module)

export default () => ({
	models: {
		...post_module
	}
})
