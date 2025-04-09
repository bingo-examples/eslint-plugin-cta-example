import { createRule } from "../utils.js";

export const rule = createRule({
	create(context) {
		return {
			TSEnumDeclaration(node) {
				context.report({
					messageId: "enum",
					node,
				});
			},
		};
	},
	defaultOptions: [],
	meta: {
		docs: {
			description: "Avoid using TypeScript's enums.",
		},
		messages: {
			enum: "This enum will not be allowed under TypeScript's --erasableSyntaxOnly.",
		},
		schema: [],
		type: "problem",
	},
	name: "enums",
});
