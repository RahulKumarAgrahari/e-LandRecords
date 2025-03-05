import { useState } from "react";

export default () => {
    const [formData, setFormData] = useState({
        ownerName: "",
        landAddress: "",
        plotNumber: "",
        size: "",
        registrationDate: "",
    });
    const [generatedOTP, setGenerateOTP] = useState("")
    const [enteredOTP, setEnteredOTP] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const generateOTP = () => {
        const otp = Math.floor((Math.random() * 10000) / 1)
        setGenerateOTP(() => otp)
        alert(otp)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form Data Submitted:", formData);
        const localVal = localStorage.getItem('regiserred-land-record')
        let regisetedLands = localVal ? JSON.parse(localVal) : []
        regisetedLands.push(formData)
        localStorage.setItem('regiserred-land-record',JSON.stringify(regisetedLands))
    };
    return (
        <>
            <div className="max-w-4xl mx-auto p-4">
                <h2 className="text-3xl font-bold text-center mb-6">Land Registration Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                            Owner's Name
                        </label>
                        <input
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="landAddress" className="block text-sm font-medium text-gray-700">
                            Land Address
                        </label>
                        <input
                            type="text"
                            id="landAddress"
                            name="landAddress"
                            value={formData.landAddress}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="plotNumber" className="block text-sm font-medium text-gray-700">
                            Plot Number
                        </label>
                        <input
                            type="text"
                            id="plotNumber"
                            name="plotNumber"
                            value={formData.plotNumber}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                            Land Size (in acres)
                        </label>
                        <input
                            type="number"
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700">
                            Registration Date
                        </label>
                        <input
                            type="date"
                            id="registrationDate"
                            name="registrationDate"
                            value={formData.registrationDate}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>

                    <div className="flex justify-center mt-4 gap-2">
                        <button
                            type="button"
                            onClick={() => generateOTP()}
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Send OTP
                        </button>
                        <input
                            value={enteredOTP}
                            onChange={(e) => setEnteredOTP(e.target.value)}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-md w-min-[150px] w-max-[200px]"
                        />
                        {enteredOTP == generatedOTP && generatedOTP && <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Register Land
                        </button>}
                    </div>
                </form>
            </div>
        </>
    )
}