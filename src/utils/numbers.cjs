export const round = (num, decimal = 2) => {
	return +(Math.round(num + `e+${decimal}`) + `e-${decimal}`);
};

export const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
