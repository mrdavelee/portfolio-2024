import type { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { Input } from "./ui/input";

interface FormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export const Form = ({ ...restProps }: FormProps) => (


<div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
<div className="relative py-3 sm:max-w-4xl w-full sm:mx-auto">
    <div
        className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">

        <form {...restProps} >

            <Input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Name" id="user_name" name="user_name" required/>

            <Input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email" id="email" name="email" required/>

           

            <textarea
                    className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type your message here..." id="message" name="message" required ></textarea>

            <div className="flex justify-between">
                <Input
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" value="Send ➤"/>
                
            </div>

        </form>
    </div>
</div>
</div>
);