"use client";

import { useState, useRef } from "react"
import Image from "next/image";
import { User, UserSchema } from "@/types/userSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "@/actions/firebaseActions";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import IeeeDayLogo2025 from "../../public/logos/ieee-day-logo-2025.png"

gsap.registerPlugin(ScrollTrigger);

const fields = [
    {
        "id": 1,
        "field_name": "full_name",
        "type": "text",
        "optional": false,
        "label": "Full Name"
    },
    {
        "id": 2,
        "field_name": "email",
        "type": "email",
        "optional": false,
        "label": "Email Address"
    },
    {
        "id": 3,
        "field_name": "password",
        "type": "password",
        "optional": false,
        "label": "Password"
    },
    {
        "id": 4,
        "field_name": "phone_number",
        "type": "tel",
        "optional": true,
        "label": "Phone Number"
    },
    {
        "id": 5,
        "field_name": "food_preference",
        "type": "select",
        "optional": false,
        "label": "Food Preference",
        "options": ["Vegetarian", "Non-vegetarian"]
    },
    {
        "id": 6,
        "field_name": "gender",
        "type": "select",
        "optional": false,
        "label": "Gender",
        "options": ["Male", "Female"]
    },
    {
        "id": 7,
        "field_name": "nic",
        "type": "text",
        "optional": false,
        "label": "NIC Number"
    },
    {
        "id": 8,
        "field_name": "university_name",
        "type": "select",
        "optional": false,
        "label": "University Name",
        "options": [
            "University of Peradeniya",
            "University of Moratuwa",
            "University of Colombo School of Computing",
            "Sri Lanka Institute of Information Technology",
            "University of Ruhuna",
            "Uva Wellassa University",
            "Informatics Institute of Technology",
            "Wayamba University of Sri Lanka",
            "General Sir John Kotelawala Defence University",
            "Sabaragamuwa University of Sri Lanka",
            "Open University of Sri Lanka",
            "University of Kelaniya",
            "University of Sri Jayewardenepura",
            "Sri Lanka Technological Campus",
            "Rajarata University of Sri Lanka",
            "University of Vavuniya",
            "University of Vocational Technology",
            "University of Jaffna",
            "South Eastern University of Sri Lanka",
            "National Institute of Business Management",
            "National School of Business Management",
            "CINEC Campus"
        ]
    },
    {
        "id": 9,
        "field_name": "ieee_membership_id",
        "type": "text",
        "optional": true,
        "label": "IEEE Membership ID"
    },
    {
        "id": 10,
        "field_name": "preferred_track_based_session",
        "type": "select",
        "optional": false,
        "label": "Preferred Track Session",
        "options": ["Quantum Computing", "Data Science & Analytics with AI", "AI & Robotics in Industry 4.0", "AI in Cybersecurity", "AI in Cloud Computing"]
    },
    {
        "id": 11,
        "field_name": "github_profile",
        "type": "url",
        "optional": true,
        "label": "GitHub Profile URL"
    },
    {
        "id": 12,
        "field_name": "linkedin_profile",
        "type": "url",
        "optional": true,
        "label": "LinkedIn Profile URL"
    }
];

const Register = () => {
    const containerFormRef = useRef<HTMLFormElement>(null);
    const passportRef = useRef<HTMLDivElement>(null);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<User>({
        resolver: zodResolver(UserSchema),
        mode: "onChange",
        defaultValues: {
            full_name: "",
            email: "",
            password: "",
            phone_number: "",
            food_preference: undefined,
            gender: undefined,
            nic: "",
            university_name: "",
            ieee_membership_id: "",
            preferred_track_based_session: undefined,
            github_profile: "",
            linkedin_profile: "",
        }
    })

    const watchedValues = watch();

    const onSubmit: SubmitHandler<User> = async (data) => {
        setIsSubmitting(true);
        setSubmitMessage({ type: null, message: '' });

        try {
            console.log(data);
            const result = await createUser(data);
            if (result) {
                setSubmitMessage({ type: 'success', message: 'Registration successful! Use the credentials to login to the platform.' });
            } else {
                setSubmitMessage({ type: 'error', message: 'Registration failed. Please try again.' });
            }
        } catch (error: any) {
            setSubmitMessage({ type: 'error', message: error.message || 'An error occurred during registration.' });
        } finally {
            setIsSubmitting(false);
        }
    }

    const renderFormField = (field: any) => {
        const fieldName = field.field_name as keyof User;
        const error = errors[fieldName];
        const isRequired = !field.optional;
        const fieldValue = watchedValues[fieldName];
        const hasValue = fieldValue && (typeof fieldValue === 'string' ? fieldValue.trim() !== '' : true);
        const isValid = !error && hasValue;

        if (field.type === 'select') {
            return (
                <div className="w-64 h-40" key={field.id}>
                    <label className="text-lg flex flex-col h-full">
                        <div className="mb-1 flex items-center justify-between">
                            <div>
                                {field.label}
                                {isRequired && <span className="text-red-400 ml-1">*</span>}
                            </div>
                        </div>
                        <select
                            {...register(fieldName)}
                            className={`bg-white/10 ${error ? 'bg-red-400/50' : hasValue && isValid ? 'bg-teal-400/50' : 'bg-white/10'} p-2 mt-1 focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-400' : 'focus:ring-blue-400'} transition-all duration-200 text-base w-full`}
                        >
                            <option value="" className="bg-gray-800">Select {field.label}</option>
                            {field.options?.map((option: string) => (
                                <option key={option} value={option} className="bg-gray-800">
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="flex-1 mt-1 w-full overflow-hidden flex items-start">
                            {error && (
                                <span className="text-red-400 text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <span className="truncate">{error.message}</span>
                                </span>
                            )}
                        </div>
                    </label>
                </div>
            );
        }

        return (
            <div className="w-64 h-40" key={field.id}>
                <label className="text-lg flex flex-col h-full">
                    <div className="mb-1 flex items-center justify-between">
                        <div>
                            {field.label}
                            {isRequired && <span className="text-red-400 ml-1">*</span>}
                        </div>
                    </div>
                    <input
                        type={field.type}
                        {...register(fieldName)}
                        className={`${error ? 'bg-red-400/10' : hasValue && isValid ? 'bg-teal-400/10' : 'bg-white/10'} p-2 mt-1 focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-400' : 'focus:ring-teal-400'} transition-all duration-200 text-base w-full`}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                    <div className="flex-1 mt-1 w-full overflow-hidden flex items-start">
                        {error && (
                            <span className="text-red-400 text-sm flex items-center">
                                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span className="truncate">{error.message}</span>
                            </span>
                        )}

                        {fieldName === 'password' && !error && (
                            <div className="text-white text-sm">
                                Must contain at least 8 characters, one uppercase, one lowercase, and one number
                            </div>
                        )}
                        {fieldName === 'ieee_membership_id' && !error && (
                            <div className="text-white text-sm">
                                8-10 digit IEEE membership number (optional)
                            </div>
                        )}
                        {fieldName === 'nic' && !error && (
                            <div className="text-white text-sm">
                                Format: 123456789V or 123456789012
                            </div>
                        )}
                    </div>
                </label>
            </div>
        );
    };

    useGSAP(() => {
        if (containerFormRef.current) {
            const allLabels = containerFormRef.current.querySelectorAll('label');
            const columns = containerFormRef.current.querySelectorAll('.flex-1');

            gsap.set(allLabels, { x: -50, opacity: 0 });

            columns.forEach((column, columnIndex) => {
                const columnLabels = column.querySelectorAll('label');
                gsap.to(columnLabels, {
                    x: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                    stagger: 0.10,
                    delay: columnIndex * 0.1,
                    scrollTrigger: {
                        trigger: containerFormRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }
    });

    const { full_name, email, gender, university_name, phone_number, food_preference, ieee_membership_id, preferred_track_based_session } = watchedValues;

    const Passport = () => (
        <div ref={passportRef} className="bg-white/5 text-white backdrop-blur-lg h-full w-full flex flex-col justify-between p-6">
            <div className="flex flex-col items-center mb-4">
                <Image
                    src={IeeeDayLogo2025}
                    width={400}
                    height={100}
                    alt="Secondary IEEE Day Logo"
                />
                <div className="text-lg">Event Passport</div>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-center">
                <div className="bg-white/10 p-4">
                    <div className="text-sm uppercase tracking-wide">Full Name</div>
                    <div className="text-xl font-semibold">
                        {full_name || 'Your Name Here'}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide">Email</div>
                        <div className="text-sm truncate">
                            {email || 'email@example.com'}
                        </div>
                    </div>
                    <div className="bg-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide">Gender</div>
                        <div className="text-sm">
                            {gender || 'Not specified'}
                        </div>
                    </div>
                </div>

                <div className="bg-white/10 p-3">
                    <div className="text-xs uppercase tracking-wide">University</div>
                    <div className="text-sm">
                        {university_name || 'Your University'}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide">Phone Number</div>
                        <div className="text-sm">
                            {phone_number || '+94 XX XXX XXXX'}
                        </div>
                    </div>
                    <div className="bg-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide">Food Preference</div>
                        <div className="text-sm">
                            {food_preference || 'Not selected'}
                        </div>
                    </div>
                </div>

                <div className="bg-white/10 p-3">
                    <div className="text-xs uppercase tracking-wide">IEEE Member ID</div>
                    <div className="text-sm">
                        {ieee_membership_id || 'XXXXXXXX (Optional)'}
                    </div>
                </div>

                <div className="bg-white/10 p-3">
                    <div className="text-xs uppercase tracking-wide">Preferred Track</div>
                    <div className="text-sm">
                        {preferred_track_based_session || 'Track not selected'}
                    </div>
                </div>
            </div>
        </div>
    );


    return (
        <section id="register" className="relative z-50 mb-20 sm:mb-20 md:mb-40 text-white text-center sm:text-center md:text-left">
            <div className="text-3xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 md:mb-4">Register</div>
            <div className="md:max-w-3xl text-lg sm:text-lg md:text-xl mb-4 sm:mb-4 md:mb-4">
                <div>
                    Just fill the below fields with your details,
                </div>
                <div>
                    So we know how to contact you.
                </div>
            </div>
            <div className="flex items-start justify-center gap-8">
                <div className="bg-white/5 text-white backdrop-blur-lg flex flex-col p-6">
                    <form onSubmit={handleSubmit(onSubmit)} ref={containerFormRef} className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex-1">
                                {fields.slice(0, 4).map((field) => renderFormField(field))}
                            </div>
                            <div className="flex-1">
                                {fields.slice(4, 8).map((field) => renderFormField(field))}
                            </div>
                            <div className="flex-1">
                                {fields.slice(8).map((field) => renderFormField(field))}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="absolute right-0 -bottom-16 bg-teal-400/20 hover:bg-teal-400/40 disabled:bg-teal-400/5 disabled:cursor-not-allowed transition-colors duration-200 p-3 text-lg w-40 flex items-center justify-center"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            ) : (
                                "Register"
                            )}
                        </button>
                    </form>
                    {submitMessage.type && (
                        <div className={`absolute bottom-0 sm:bottom-0 md:bottom-4 left-1/2 -translate-x-1/2 text-center p-1 sm:p-1 md:p-2 ${submitMessage.type === 'success'
                            ? 'bg-teal-500/20'
                            : 'bg-red-500/20'
                            }`}>
                            {submitMessage.message}
                        </div>
                    )}
                </div>
                <div className="hidden sm:hidden md:block items-center justify-center">
                    <div className="h-[700px] w-full flex">
                        <Passport />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register