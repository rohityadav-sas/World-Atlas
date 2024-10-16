import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useSubmit } from "react-router-dom";

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submit = useSubmit();

    const onSubmit = (data) => {
        submit(data, {
            method: 'POST',
            action: '/contact',
            encType: 'application/json',
        });
    };

    return (
        <div className="bg-gray-900 flex items-center justify-center p-4 w-full flex-grow overflow-hidden">
            <div className="max-w-96 w-full bg-gray-800 px-8 py-7 rounded-xl shadow-lg flex-grow h-fit">
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-extrabold text-white">Contact Us</h2>
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
