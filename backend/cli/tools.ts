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
