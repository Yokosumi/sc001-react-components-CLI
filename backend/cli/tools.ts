import fs from "fs";

export const createFile = (pathAndFile: string, content: string) => {
	fs.writeFileSync(pathAndFile, content.trim());
};

export const getArgument = (index = 0) => {
	return process.argv[index + 2];
};
