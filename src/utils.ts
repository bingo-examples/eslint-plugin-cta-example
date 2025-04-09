import { ESLintUtils } from "@typescript-eslint/utils";

export const createRule = ESLintUtils.RuleCreator(
	(name) =>
		`https://github.com/bingo-examples/eslint-plugin-cta-example/blob/main/docs/rules/${name}.md`,
);
