const InputRow = ({ input, msg = false, error }) => {
    return (
        <div className={`flex-grow relative my-2 lg:my-4 p-2`}>
            <label
                htmlFor={input.id}
                className={``}
            >
                {
                    input.name.toUpperCase().slice(0, 1) + input.name.slice(1)
                }
            </label>
            {
                !msg && (
                    <input
                        {...input}
                        className={`p-2 w-full mt-2 border-2 border-red_primary outline-none shadow-md rounded-md bg-transparent ${error[input.name] ? "border-red-400" : ""}`}
                    />
                ) || (
                    <textarea
                        {...input}
                        className={`p-2 w-full mt-2 border-2 border-red_primary outline-none shadow-md rounded-md bg-transparent ${error[input.name] ? "border-red-400" : ""}`}>
                    </textarea>
                )
            }
            <p className="text-xs mt-1 pl-2 text-red-400">
                {error[input.name]}
            </p>
        </div>
    );
}


export default InputRow;
