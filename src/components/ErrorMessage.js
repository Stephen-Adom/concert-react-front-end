import React from "react";

const ErrorMessage = ({ error, field }) => {
	const errorMessage = () => {
		if (error && error[field]) {
			return (
				<p className="mt-2 text-sm text-left text-red-600 dark:text-red-500">
					{error[field].message}
				</p>
			);
		}
	};
	return errorMessage();
};

export default ErrorMessage;
