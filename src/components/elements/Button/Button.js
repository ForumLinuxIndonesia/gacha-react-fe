import React from "react";

function setVariant(variantName, outlined) {
	// Default color or primary color
	let bg = `bg-blue-500 hover:bg-blue-600 text-white ${outlined ? "outline outline-offset-4 outline-blue-500 hover:outline-blue-600" : ""}`;
	let text = "text-white";
	console.log(variantName);

	// Determine
	switch (variantName) {
		case "danger":
			bg = `bg-red-500 hover:bg-red-600 ${outlined ? "outline outline-offset-4 outline-red-500 hover:outline-red-600" : ""}`;
			break;
		case "warning":
			bg = `bg-orange-500 hover:bg-orange-600 ${outlined ? "outline outline-offset-4 outline-orange-500" : ""}`;
			break;
		case "info":
			bg = `bg-cyan-500 hover:bg-cyan-600 ${outlined ? "outline outline-offset-4 outline-cyan-500 hover:outline-cyan-600" : ""}`;
			break;
		case "success":
			bg = `bg-green-500 hover:bg-green-600 ${outlined ? "outline outline-offset-4 outline-green-500 hover:outline-green-600" : ""}`;
			break;
		case "indigo":
			bg = `bg-indigo-500 hover:bg-indigo-600 ${outlined ? "outline outline-offset-4 outline-indigo-500 hover:outline-indigo-600" : ""}`;
			break;
	}
	return `${bg} ${text}`;
}

/**
 *
 * @param {string} size
 * @returns
 */
function setSize(size) {
	let defaultSize = `px-3 py-1`;
	// Pick default padding if size doesn't specified
	if (!size) return defaultSize;
	// Determine padding based on size
	return size == "sm" ? defaultSize : size == "md" ? "px-4 py-2" : size == "lg" ? "px-6 py-3" : size == "xl" ? "px-8 py-4" : defaultSize;
}

function setRounded(rounded) {
	if (!rounded) return "rounded";
	return rounded.startsWith("rounded-") ? rounded : `rounded-${rounded}`;
}

/**
 * Button\
 * properties:
 * @label Button label
 * @onClick Call function / method if button clicked
 * @variant Button variant (danger, indigo, info, success, warning)
 * @size Button size (sm, md, lg, xl)
 * @outlined Button outlined (optional)
 * @rounded Button rounded
 * @className Your custom class
 */
const Button = React.memo(function Button(data) {
	let classList = `${setSize(data.size)} ${setVariant(data.variant, data.outlined)} ${setRounded(data.rounded)} ${data.className ? data.className : ""}`;
	return (
		<button className={classList}  onClick={data.onClick}>
			{data.label}
		</button>
	);
});

export default Button;
