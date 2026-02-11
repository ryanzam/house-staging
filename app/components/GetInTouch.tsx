import { MailIcon, PhoneCallIcon } from 'lucide-react'

const GetInTouch = () => {
    return (
        <div className='border-accent/50 border-y'>
            <div className='grid lg:grid-cols-[400px_1fr]'>
                <div className="bg-accent p-8 flex flex-col items-center justify-center gap-6">
                    <h3 className='text-white text-2xl lg:text-3xl font-extrabold'>Get in Touch</h3>
                    <div className='flex flex-col gap-3'>
                        <span className='flex items-center justify-start text-white gap-3'>
                            <PhoneCallIcon />
                            <p className='lg:text-xl'>737-332-0662</p>
                        </span>
                        <span className='flex items-center justify-start text-white gap-3'>
                            <MailIcon />
                            <p className='lg:text-xl'>realstatestagingpro@gmail.com</p>
                        </span>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <form action="#" className="py-10">
                        <div className='flex gap-5'>
                            <div>
                                <label className="block text-sm font-medium text-accent" htmlFor="name">Name*</label>
                                <input required className="input mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="name" type="text" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-accent" htmlFor="phone">Phone Number*</label>
                                <input required className="input mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="name" type="tel" placeholder="+1 730 332 9981" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-accent" htmlFor="email">Email</label>
                            <input required className="input mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="email" type="email" placeholder="john@gmail.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-accent" htmlFor="message">Message</label>

                            <textarea required className="input mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none" id="message" rows={5} placeholder="Your message"></textarea>
                        </div>

                        <button className="btn-outline" type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch