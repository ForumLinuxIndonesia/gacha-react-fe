import React from "react";

const Button = ({
    sm,
    md,
    lg,
    xl,
    roundedFull,
    roundedLg,
    roundedNone,
    roundedSm,
    roundedMd,
    label,
    color = "primary",
    secondary,
    gray,
    dark,
    warning,
    danger,
    success,
    info,
    outline,
    type
}) => {
    return (
        <>
            <button
                type={`${type}`}
                className={`${(sm && "px-3 py-1") || (md && "px-4 py-2") || (lg && "px-6 py-3") || (xl && "px-8 py-4")} inline-flex items-center justify-center text-center text-base ${outline
                    ? `bg-none hover:bg-${color} text-white  `
                    : `bg-${color} text-white `
                    } hover:bg-opacity-90 font-normal ${(roundedLg && "rounded-lg") ||
                    (roundedFull && "rounded-full") ||
                    (roundedSm && "rounded-sm") ||
                    (roundedNone && "rounded-none") ||
                    (roundedMd && "rounded-md")
                    } border ${(danger &&
                        outline &&
                        `border-red-500 hover:border-red-900 bg-red-500 hover:border-opacity-500 text-white`) ||
                    (warning &&
                        outline &&
                        `border-orange-500 hover:border-orange-500 bg-orange-500 hover:border-opacity-90 text-white`) ||
                    (success &&
                        outline &&
                        `border-green-500 hover:border-green-500 bg-green-500 hover:border-opacity-90 text-white`) ||
                    (info &&
                        outline &&
                        `border-cyan-500 hover:border-cyan-500 bg-cyan-500 hover:border-opacity-90 text-white`) ||
                    (dark &&
                        outline &&
                        `border-gray-900 hover:border-gray-900 bg-gray-900 hover:border-opacity-90 text-white`) ||
                    (secondary &&
                        outline &&
                        `border-gray-500 hover:border-gray-500 bg-gray-500 hover:border-opacity-90 text-gray-500`) ||
                    (gray &&
                        outline &&
                        `border-body-color hover:border-body-color hover:border-opacity-90 text-body-color`)
                    }`}
            >
                {label}
            </button>
        </>
    );
};

export default Button;