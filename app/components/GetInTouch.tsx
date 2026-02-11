import { MailIcon, PhoneCallIcon } from 'lucide-react'
import ContactForm from './ContactForm'

const GetInTouch = () => {
    return (
        <div className='border-accent/50 border-y'>
            <div className='grid lg:grid-cols-[400px_1fr]'>
                <div className="bg-accent p-8 flex flex-col items-center justify-center space-y-6">
                    <h3 className='text-white text-2xl lg:text-3xl font-extrabold'>Get in Touch</h3>
                    <div className='flex flex-col gap-3'>
                        <a href='tel:+17373320662' className='flex items-center justify-start text-white gap-3'>
                            <PhoneCallIcon />
                            <p className='lg:text-xl'>737-332-0662</p>
                        </a>
                        <a href='mailto:realstatestagingpro@gmail.com' className='flex items-center justify-start text-white gap-3'>
                            <MailIcon />
                            <p className='lg:text-xl'>realstatestagingpro@gmail.com</p>
                        </a>
                    </div>
                </div>
                <div className='px-6 md:px-20 py-6'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch