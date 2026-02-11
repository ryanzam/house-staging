import { HousePlusIcon, Loader2Icon } from "lucide-react"

const Loading = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className="flex gap-5">
                <Loader2Icon color="#a97a57" size={100} className="animate-spin" />
            </div>
        </div>
    )
}

export default Loading