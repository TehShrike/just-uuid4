const test = require(`zora`)

const uuid = require(`./`)
const VALID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

test(`should create valid regexes`, t => {
	for (let i = 0; i < 100; i++) {
		t.ok(VALID_REGEX.test(uuid()))
	}
})
