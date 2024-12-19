let data = {};
const leetcodeData = async () => {
	const leetData = await fetch('https://leetcode-stats-api.herokuapp.com/mainak-2004');
	const data = await leetData.json();
	console.log(data);
};
leetcodeData();
export default data;
