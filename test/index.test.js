import test from "ava"

import * as fs from "node:fs"
import { resolve } from "node:path"

import { parser } from "../index.js"

const margin = 20

function validate(t, input) {
	const tree = parser.parse(input)
	const cursor = tree.cursor()
	do {
		if (cursor.node.type.isError) {
			const { from, to } = cursor
			const value = JSON.stringify(input.slice(from, to))
			console.error(
				input.slice(
					Math.max(0, from - margin),
					Math.min(to + margin, input.length)
				)
			)
			t.fail(`error from ${from} to ${to}: ${value}`)
		}
	} while (cursor.next())

	t.pass()
}

test("example.taslx", (t) => {
	const input = fs.readFileSync(resolve("test", "example.taslx"), "utf-8")
	validate(t, input)
})

test("graph-to-dataset.taslx", (t) => {
	const input = fs.readFileSync(
		resolve("test", "graph-to-dataset.taslx"),
		"utf-8"
	)
	validate(t, input)
})

test("dataset-to-graph.taslx", (t) => {
	const input = fs.readFileSync(
		resolve("test", "dataset-to-graph.taslx"),
		"utf-8"
	)
	validate(t, input)
})
