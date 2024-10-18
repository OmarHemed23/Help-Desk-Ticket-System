import FileInput from "../../components/form/FileInput";
import Label from "../../components/form/Label";
import TextInput from "../../components/form/TextInput";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function NewTicketPage() {
    const priorityOptions = [
        { value: "Low", label: "Low"},
        { value: "Medium", label: "Medium"},
        { value: "High", label: "High"}
    ]; 

    const categoryOptions = [
        { value: "Hardware", label: "Hardware"},
        { value: "Software", label: "Software"},
        { value: "Network", label: "Network"},
        { value: "Security", label: "Security"},
        { value: "Other", label: "Other"},
    ];

    return (
        <section className="p-4 gap-6 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="py-8 px-6 mx-auto max-w-2xl lg:py-16">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Submit a New Help Desk Ticket</h2>
                    <form>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <Label value="Ticket Title" className="text-gray-900 dark:text-white" />
                                <TextInput 
                                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                                    type="text" 
                                    placeholder="Enter the issue title" 
                                    required 
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <Label value="Issue Description" className="text-gray-900 dark:text-white" />
                                <textarea 
                                    id="issue-description"
                                    rows="5"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="Provide a detailed description of the issue"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <Label value="Priority" className="text-gray-900 dark:text-white"/>
                                <select 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    {priorityOptions.map((priorityOption) => (
                                        <option key={priorityOption.value} value={priorityOption.value}>
                                            {priorityOption.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <Label value="Category" className="text-gray-900 dark:text-white" />
                                <select 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    {categoryOptions.map((categoryOption) => (
                                        <option key={categoryOption.value} value={categoryOption.value}>
                                            {categoryOption.label}
                                        </option>
                                    ))}  
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <Label value="Department" className="text-gray-900 dark:text-white" />
                                <TextInput 
                                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    type="text" 
                                    placeholder="IT, HR, Finance..." />
                            </div>
                            <div className="sm:col-span-2">
                                <Label value="Attach Files (Optional)" />
                                <FileInput />
                            </div>
                            <div className="sm:col-span-2">
                                <PrimaryButton type="submit" className="px-5 py-2.5">
                                    Submit Ticket
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

