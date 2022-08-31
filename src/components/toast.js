import { toast } from "react-toastify";

export const notify = (type, text) => {
    if (type === "error") {
        toast.error(text)
    } else {
        toast.success(text)
    }
}