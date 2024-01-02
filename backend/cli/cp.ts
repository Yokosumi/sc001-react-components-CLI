import * as tools from "./tools";

const pageIdCode = tools.getArgument(0); // returns index 2 of process.argv
// const option = tools.getArgument(1); // returns index 3 of process.argv

const pageFileName = `Page${pageIdCode}.tsx`;
const pathAndFileName = `./src/pages/${pageFileName}`;

console.log(`Creating ${pageFileName}...`);

tools.createFile(
	pathAndFileName,
	`
export const ${pageIdCode} = () => {
	return (
		<p>This is the ${pageIdCode.toLowerCase()} page.</p>
	)
}`
);
