import Modal from "../ui/Modal";
import CloseButton from "../ui/CloseButton";
import Label from "./Label";
import TextInput from "./TextInput";
import PrimaryButton from "../ui/PrimaryButton";
import FileInput from "./FileInput";

export default function NewTicketModalForm({ showNewTicketModal, closeNewTicketModal }) {
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
        <Modal show={showNewTicketModal} onClose={closeNewTicketModal}>
            <div className="flex items-center justify-center">
                <div className="w-full max-h-[420px] md:max-h-[580px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
                    <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 shadow-sm">
                        <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                                Create New Ticket
                            </h3>
                            <CloseButton onClick={closeNewTicketModal} />
                        </div>
                    </div>
                    <div className="px-6 lg:py-5 py-4 overflow-y-auto">
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
                                        placeholder="IT, HR, Finance..." 
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <Label value="Attach Files (Optional)" />
                                    <FileInput />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sticky bottom-0 z-10 bg-white dark:bg-gray-900 p-4 shadow-sm">
                        <PrimaryButton type="submit" className="w-full py-2.5">
                            Submit Ticket
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </Modal>
    );
}