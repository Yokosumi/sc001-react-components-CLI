import fs from "fs";

export const createFile = (pathAndFile: string, content: string) => {
	fs.writeFileSync(pathAndFile, content.trim());
};

export const getArgument = (index = 0) => {
	return process.argv[index + 2];
};

// capitalizes the first character of a string and returns it
export const capitalizeFirstCharacter = (text: string) => {
	return text[0].toUpperCase() + text.slice(1);
};

export const readContentFromFile = (pathAndFileName: string) => {
	return fs.readFileSync(pathAndFileName, { encoding: "utf8", flag: "r" });
};

export const convertStringBlockToLines = (stringBlock: string) => {
	const lines = stringBlock.split("\n");
	return lines;
};
