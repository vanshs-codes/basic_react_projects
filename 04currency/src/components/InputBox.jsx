import { useId } from "react";

function InputBox ({
    label = "From",
    amtDisabled = false,
    amount,
    onAmtChange,
    currDisabled = false,
    currOptions = [],
    curr,
    onCurrChange,
    className=""
}) {
    const amtId = useId();

    return (
        <div className={`bg-white flex gap-x-12 px-6 py-4 ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amtId} 
                className="text-black/40">
                    {label}
                </label>
                <input type="number" 
                step="any"
                id={amtId} 
                placeholder="amount" 
                className="text-black cursor-pointer"
                disabled={amtDisabled}
                value={amount}
                onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}/>
            </div>

            <div className="w-1/2">
                <p className="text-black/40 w-full">Currency Type</p>
                <select id="curr-type" 
                className="bg-gray-200 text-black cursor-pointer"
                disabled={currDisabled}
                value={curr}
                onChange={(e) => onCurrChange && onCurrChange(e.target.value)}>
                    {
                        currOptions.map((curr) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        )) 
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox;