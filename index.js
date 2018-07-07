// based on https://stackoverflow.com/a/8809472/201789
module.exports = () => {
	let d = Date.now()
	return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, c => {
		const r = (d + Math.random() * 16) % 16 | 0
		d = Math.floor(d / 16)
		return (c == `x` ? r : (r & 0x3 | 0x8)).toString(16)
	})
}
