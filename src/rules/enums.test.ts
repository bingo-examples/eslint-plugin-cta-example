import { rule } from "./enums.js";
import { ruleTester } from "./ruleTester.js";

ruleTester.run("enums", rule, {
	invalid: [
		{
			code: `enum Values {}`,
			errors: [
				{
					column: 1,
					endColumn: 15,
					endLine: 1,
					line: 1,
					messageId: "enum",
				},
			],
		},
	],
	valid: [`const Values = {};`, `const Values = {} as const;`],
});
