import fs from "fs";
import path from "path";

const mock_config = {
	db: "mongodb://0.0.0.0:27017/todos",
};

const createLocalFile = (fileName: string, content: string): void => {
	const filePath = path.join(__dirname, "./", `${fileName}.json`);

	if (!fs.existsSync(path.dirname(filePath))) {
		console.log(filePath);
		fs.mkdirSync(path.dirname(filePath));
	}
	fs.writeFileSync(filePath, content, "utf8");
};
export const getConfigData = () => {
	const rawData = fs.readFileSync(
		path.join(__dirname, "./", "config.json"),
		"utf8"
	);
	return JSON.parse(rawData);
};

export const createConfig = () => {
	return new Promise((resolve) => {
		resolve(mock_config);
	}).then((data) => {
		createLocalFile("config", JSON.stringify(data));
		return data;
	});
};
