import { useForm } from "react-hook-form";

type RegisterFormData = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
};

const Register = () => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();

    const onSubmit = handleSubmit((data) => console.log(data))
    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold ">Create an Account</h2>
            <div className="flex flex-col md:flex-row  gap-5">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input
                        className="border rounded w-full py-1 px-2 font-normal"
                        {...register("firstName", { required: "This field is required" })}
                    ></input>
                    {errors.firstName && (
                        <span className="font-normal text-red-400 ">{errors.firstName.message}</span>
                    )}
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input
                        className="border rounded w-full py-1 px-2 font-normal"
                        {...register("lastName", { required: "This field is required" })}
                    ></input>
                    {errors.lastName && (
                        <span className="font-normal text-red-400 ">{errors.lastName.message}</span>
                    )}
                </label>
            </div>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Email
                <input
                    type="email"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("email", { required: "This field is required" })}
                ></input>
                {errors.email && (
                    <span className="font-normal text-red-400 ">{errors.email.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Password
                <input
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 8,
                            message: "Password must contain atleast 8 characters",
                        },
                    })}
                ></input>
                {errors.password && (
                    <span className="font-normal text-red-400 ">{errors.password.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Confirm Password
                <input
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("confirmPassword", {
                        validate: (val) => {
                            if (!val) return "This field is required";
                            else if (val !== watch("password"))
                                return "Passwords do not match";
                        },
                    })}
                ></input>
                {errors.confirmPassword && (
                    <span className="font-normal text-red-400 ">{errors.confirmPassword.message}</span>
                )}
            </label>
            <span>
                <button
                    type="submit"
                    className="border border-black bg-black text-white font-bold items-center hover:text-black hover:bg-white hover:border-red-600 rounded-sm p-2"
                >
                    Create Account
                </button>
            </span>
        </form>
    );
};
export default Register;
