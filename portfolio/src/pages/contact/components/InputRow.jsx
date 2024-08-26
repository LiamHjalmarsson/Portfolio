const InputRow = ({ label, msg = false, error, ...props }) => {
    return (
        <div className="flex-grow relative my-2 lg:my-4 p-2">
            <label htmlFor={props.id} className="">
                {label}
            </label>
            {
                !msg ? (
                    <input
                        {...props}
                        className={`p-2 w-full mt-2 border-2 border-red_primary outline-none shadow-md rounded-md bg-transparent ${error[props.name] ? "border-red-400" : ""}`}
                    />
                ) : (
                    <textarea
                        {...props}
                        className={`p-2 w-full mt-2 border-2 border-red_primary outline-none shadow-md rounded-md bg-transparent ${error[props.name] ? "border-red-400" : ""}`}
                    />
                )
            }
            {error[props.name] && (
                <p className="text-xs mt-1 pl-2 text-red-400">
                    {error[props.name]}
                </p>
            )}
        </div>
    );
}


export default InputRow;
