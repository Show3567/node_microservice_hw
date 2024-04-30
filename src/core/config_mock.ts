const mock_config = {
	name: "config",
	discription: "config",
};

export const getConfig = () => {
	return new Promise((resolve, reject) => {
		resolve(mock_config);
	});
};
