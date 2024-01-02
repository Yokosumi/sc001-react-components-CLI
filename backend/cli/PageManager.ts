import * as tools from "./tools";

export class PageManager {
	private idCode = "";
	private fileName = "";

	constructor(idCode: string) {
		if (!idCode) {
			throw new Error("invalid idCode");
		}

		this.idCode = tools.capitalizeFirstCharacter(idCode);
		this.fileName = `Page${idCode}.tsx}`;
	}

	public createPage() {
		tools.createFile(
			/*html*/ `src/pages/${this.fileName}`,
			/*html*/ `
        export const Page${this.idCode} = () => {
            return (
                <p>This is the ${this.idCode} page </p>
            )
        }`
		);
	}
}
