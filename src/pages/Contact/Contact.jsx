import { useForm } from "react-hook-form";
import Input from "../../components/Input";

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
    };

    return (
        <div className="bg-gray-900 flex sm:items-center justify-center p-4 w-full h-full overflow-auto">
            <div className="max-w-lg w-full bg-gray-800 px-8 py-7 rounded-xl shadow-lg flex-grow h-fit">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white">Contact Us</h2>
                    <p className="mt-2 text-xs md:text-sm text-gray-400">We'd love to hear from you!</p>
                </div>
                <form className="mt-2 text-sm space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <Input
                                label="Name"
                                id="name"
                                register={register}
                                validation={{ required: "Name is required" }}
                                errors={errors.name}
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <Input
                                label="Email"
                                id="email"
                                register={register}
                                errors={errors.email}
                                validation={{
                                    required: "Email is required",
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" }
                                }}
                                type="email"
                                placeholder="your@gmail.com"
                            />
                        </div>
                        <div>
                            <Input
                                label="Subject"
                                id="subject"
                                register={register}
                                errors={errors.subject}
                                validation={{ required: "Subject is required" }}
                                type="text"
                                placeholder="Subject"
                            />
                        </div>
                        <div className="flex gap-1 flex-col">
                            <label htmlFor="message" className="text-md font-bold">Message</label>
                            <textarea className="bg-gray-700 p-2 rounded-lg text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 w-full"
                                label="Message"
                                id="message"
                                {...register("message", { required: "Message is required" })}
                                placeholder="Your message here..."
                                rows={4}
                            />
                            {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white py-3 rounded-lg"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
