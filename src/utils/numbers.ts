export const round = (num: number, decimal: number = 2): number => {
	return +(Math.round(parseInt(num + `e+${decimal}`)) + `e-${decimal}`);
};

// export const decimalRound = (num: number, decimal: number = 2): number => {
// 	const precision = Math.pow(10, decimal);
// 	return Math.round((num + Number.EPSILON) * precision) / precision;
// };
