import React, { memo } from "react";

/**
 *
 * @param {string} variantName
 * @returns
 */
function setVariant(variantName) {
	if (!variantName) variantName = "primary";
	let bg;
	let text = "text-white";
	// Determine
	switch (variantName) {
		case "outline-danger":
		case "primary":
			bg = `bg-primary hover:bg-blue-600 ${variantName.startsWith("outline-") ? "outline outline-offset-4 outline-primary hover:outline-primary" : ""}`;
			break;
		case "danger":
			bg = `bg-red-500 hover:bg-red-600 ${variantName.startsWith("outline-") ? "outline outline-offset-4 outline-red-500 hover:outline-red-600" : ""}`;
			break;
		case "outline-warning":
		case "warning":
			bg = `bg-orange-500 hover:bg-orange-600 ${variantName.startsWith("outline-") ? "outline outline-offset-4 outline-orange-500" : ""}`;
			break;
		case "outline-info":
		case "info":
			bg = `bg-cyan-500 hover:bg-cyan-600 ${variantName.startsWith("outline-") ? "outline outline-offset-4 outline-cyan-500 hover:outline-cyan-600" : ""}`;
			break;
		case "outline-success":
		case "success":
			bg = `bg-green-500 hover:bg-green-600 ${variantName.startsWith("outline-") ? "outline outline-offset-4 outline-green-500 hover:outline-green-600" : ""}`;
			break;
		case "outline-indigo":
		case "indigo":
			bg = `bg-indigo-500 hover:bg-indigo-600 ${variantName.startsWith("outline-") ? "outline outline-offset-4 outline-indigo-500 hover:outline-indigo-600" : ""}`;
			break;
		default:
			// Default color or primary color
			bg = `bg-blue-500 hover:bg-blue-600 text-white ${variantName.startsWith("outline-") ? "outline outline-offset-4 outline-blue-500 hover:outline-blue-600" : ""}`;
			text = "text-white";
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
	return size === "sm" ? defaultSize : size === "md" ? "px-4 py-2" : size === "lg" ? "px-6 py-3" : size === "xl" ? "px-8 py-4" : defaultSize;
}

/**
 *
 * @param {string} rounded
 * @returns
 */
function setRounded(rounded) {
	if (!rounded) return "rounded";
	return rounded.startsWith("rounded-") ? rounded : `rounded-${rounded}`;
}

/**
 * Button\
 * properties:
 * @label Button label
 * @onClick Call function / method if button clicked
 * @variant Button variant (danger, indigo, outline-danger, outline-indigo, etc)
 * @size Button size (sm, md, lg, xl)
 * @rounded Button rounded
 * @icon Button icon [optional]
 * @iconAlignment Alignment of icon (left, right) [optional]
 * @className Your custom class
 */
const Button = memo(function Button(data) {
	// Formatted Classes
	let classList = `flex items-center gap-2 ${data.iconAlignment === "right" ? "flex-row-reverse" : "flex-row"} ${setSize(data.size)} ${setVariant(
		data.variant, data.outlined
	)} ${setRounded(data.rounded)} ${data.className ? data.className : ""}
	`;

	return (
		<button className={classList.trim()} onClick={data.onClick}>
			{data.icon} {data.label}
		</button>
	);
});

export default Button;
