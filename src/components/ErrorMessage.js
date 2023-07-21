import React from "react";
import { ErrorMessageProp } from "../model/model.types";

const ErrorMessage = ({ error, field }) => {
	const errorMessage = () => {
		if (error && Object.keys(error).length && error[field]) {
			return (
				<p role="alert" className="mt-2 text-sm text-left text-red-600 dark:text-red-500">
					{error[field].message}
				</p>
			);
		}
		return null;
	};
	return errorMessage();
};

ErrorMessage.propTypes = ErrorMessageProp;

export default ErrorMessage;
