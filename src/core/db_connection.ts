import mongoose from "mongoose";
import { getConfigData } from "../config/config_mock";

export const connectToMongodb = () => {
	const db = getConfigData().db;
	console.log(db);
	mongoose
		.connect(db)
		.then((_) => {
			console.log(`Connected to ${db}...`);
		})
		.catch(console.log);
};
