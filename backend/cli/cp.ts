import * as tools from "./tools";
import { PageManager } from "./PageManager";

const pageIdCode = tools.getArgument(0);

try {
	const pageManager = new PageManager(pageIdCode);
	pageManager.createPage();
} catch (e) {
	console.log(
		`
    Please specify a page name in pascal notation.
    e.g. "npm run cp QuarterlyReports"
    `.trim()
	);
}
