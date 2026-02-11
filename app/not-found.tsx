import { HousePlusIcon, OctagonAlertIcon } from "lucide-react"

const NotFound = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center gap-5'>
            <div className="flex gap-3">
                <OctagonAlertIcon size={40} />
                <p className="text-3xl">Page not found</p>
            </div>

            <a href="/" className="btn-primary cursor-pointer">
                Go to Home
            </a>
        </div>
    )
}

export default NotFound