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
        "options": ["Male", "Female", "Prefer not to say"]
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
    
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = fields.length;

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const {
        register,
        handleSubmit,
        watch,
        trigger,
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

    const handleNext = async () => {
        const currentField = fields[currentStep];
        const fieldName = currentField.field_name as keyof User;
        
        // Trigger validation for current field
        const isCurrentFieldValid = await trigger(fieldName);
        
        if (isCurrentFieldValid && currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderFormField = (field: any, isMobile: boolean = false) => {
        const fieldName = field.field_name as keyof User;
        const error = errors[fieldName];
        const isRequired = !field.optional;
        const fieldValue = watchedValues[fieldName];
        const hasValue = fieldValue && (typeof fieldValue === 'string' ? fieldValue.trim() !== '' : true);
        const isValid = !error && hasValue;

        const baseClasses = isMobile 
            ? "w-full h-auto" 
            : "w-64 h-40";

        if (field.type === 'select') {
            return (
                <div className={baseClasses} key={field.id}>
                    <label className={`text-lg flex flex-col ${isMobile ? 'h-auto' : 'h-full'}`}>
                        <div className="mb-1 flex items-center justify-between">
                            <div>
                                {field.label}
                                {isRequired && <span className="text-red-400 ml-1">*</span>}
                            </div>
                        </div>
                        <select
                            {...register(fieldName)}
                            className={`bg-white/10 ${error ? 'bg-red-400/50' : hasValue && isValid ? 'bg-teal-400/50' : 'bg-white/10'} p-2 mt-1 focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-400' : 'focus:ring-blue-400'} transition-all duration-200 text-base w-full ${isMobile ? 'text-sm' : ''}`}
                        >
                            <option value="" className="bg-gray-800">Select {field.label}</option>
                            {field.options?.map((option: string) => (
                                <option key={option} value={option} className="bg-gray-800">
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className={`${isMobile ? 'mt-1' : 'flex-1 mt-1'} w-full overflow-hidden flex items-start`}>
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
            <div className={baseClasses} key={field.id}>
                <label className={`text-lg flex flex-col ${isMobile ? 'h-auto' : 'h-full'}`}>
                    <div className="mb-1 flex items-center justify-between">
                        <div>
                            {field.label}
                            {isRequired && <span className="text-red-400 ml-1">*</span>}
                        </div>
                    </div>
                    <input
                        type={field.type}
                        {...register(fieldName)}
                        className={`${error ? 'bg-red-400/10' : hasValue && isValid ? 'bg-teal-400/10' : 'bg-white/10'} p-2 mt-1 focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-400' : 'focus:ring-teal-400'} transition-all duration-200 text-base w-full ${isMobile ? 'text-sm' : ''}`}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                    <div className={`${isMobile ? 'mt-1' : 'flex-1 mt-1'} w-full overflow-hidden flex items-start`}>
                        {error && (
                            <span className="text-red-400 text-sm flex items-center">
                                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span className="truncate">{error.message}</span>
                            </span>
                        )}

                        {!error && isMobile && (
                            <>
                                {fieldName === 'password' && (
                                    <div className="text-white/70 text-xs">
                                        Must contain at least 8 characters, one uppercase, one lowercase, and one number
                                    </div>
                                )}
                                {fieldName === 'ieee_membership_id' && (
                                    <div className="text-white/70 text-xs">
                                        8-10 digit IEEE membership number (optional)
                                    </div>
                                )}
                                {fieldName === 'nic' && (
                                    <div className="text-white/70 text-xs">
                                        Format: 123456789V or 123456789012
                                    </div>
                                )}
                            </>
                        )}

                        {!error && !isMobile && (
                            <>
                                {fieldName === 'password' && (
                                    <div className="text-white text-sm">
                                        Must contain at least 8 characters, one uppercase, one lowercase, and one number
                                    </div>
                                )}
                                {fieldName === 'ieee_membership_id' && (
                                    <div className="text-white text-sm">
                                        8-10 digit IEEE membership number (optional)
                                    </div>
                                )}
                                {fieldName === 'nic' && (
                                    <div className="text-white text-sm">
                                        Format: 123456789V or 123456789012
                                    </div>
                                )}
                            </>
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

    const Passport = ({ isMobile = false }) => (
        <div ref={passportRef} className={`bg-white/5 text-white backdrop-blur-lg h-full w-full flex flex-col justify-between ${isMobile ? 'p-3' : 'p-6'}`}>
            <div className={`flex flex-col items-center ${isMobile ? 'mb-2' : 'mb-4'}`}>
                <Image
                    src={IeeeDayLogo2025}
                    width={isMobile ? 200 : 400}
                    height={isMobile ? 50 : 100}
                    alt="Secondary IEEE Day Logo"
                />
                <div className={`${isMobile ? 'text-sm' : 'text-lg'}`}>Event Passport</div>
            </div>

            <div className={`${isMobile ? 'space-y-2' : 'space-y-4'} flex-1 flex flex-col justify-center`}>
                <div className={`bg-white/10 ${isMobile ? 'p-2' : 'p-4'}`}>
                    <div className={`${isMobile ? 'text-xs' : 'text-sm'} uppercase tracking-wide`}>Full Name</div>
                    <div className={`${isMobile ? 'text-sm' : 'text-xl'} font-semibold`}>
                        {full_name || 'Your Name Here'}
                    </div>
                </div>

                <div className={`grid grid-cols-2 ${isMobile ? 'gap-2' : 'gap-4'}`}>
                    <div className={`bg-white/10 ${isMobile ? 'p-2' : 'p-3'}`}>
                        <div className="text-xs uppercase tracking-wide">Email</div>
                        <div className={`${isMobile ? 'text-xs' : 'text-sm'} truncate`}>
                            {email || 'email@example.com'}
                        </div>
                    </div>
                    <div className={`bg-white/10 ${isMobile ? 'p-2' : 'p-3'}`}>
                        <div className="text-xs uppercase tracking-wide">Gender</div>
                        <div className={`${isMobile ? 'text-xs' : 'text-sm'}`}>
                            {gender || 'Not specified'}
                        </div>
                    </div>
                </div>

                <div className={`bg-white/10 ${isMobile ? 'p-2' : 'p-3'}`}>
                    <div className="text-xs uppercase tracking-wide">University</div>
                    <div className={`${isMobile ? 'text-xs' : 'text-sm'}`}>
                        {university_name || 'Your University'}
                    </div>
                </div>

                <div className={`grid grid-cols-2 ${isMobile ? 'gap-2' : 'gap-4'}`}>
                    <div className={`bg-white/10 ${isMobile ? 'p-2' : 'p-3'}`}>
                        <div className="text-xs uppercase tracking-wide">Phone</div>
                        <div className={`${isMobile ? 'text-xs' : 'text-sm'}`}>
                            {phone_number || '+94 XX XXX XXXX'}
                        </div>
                    </div>
                    <div className={`bg-white/10 ${isMobile ? 'p-2' : 'p-3'}`}>
                        <div className="text-xs uppercase tracking-wide">Food</div>
                        <div className={`${isMobile ? 'text-xs' : 'text-sm'}`}>
                            {food_preference || 'Not selected'}
                        </div>
                    </div>
                </div>

                <div className={`bg-white/10 ${isMobile ? 'p-2' : 'p-3'}`}>
                    <div className="text-xs uppercase tracking-wide">IEEE Member ID</div>
                    <div className={`${isMobile ? 'text-xs' : 'text-sm'}`}>
                        {ieee_membership_id || 'XXXXXXXX (Optional)'}
                    </div>
                </div>

                <div className={`bg-white/10 ${isMobile ? 'p-2' : 'p-3'}`}>
                    <div className="text-xs uppercase tracking-wide">Preferred Track</div>
                    <div className={`${isMobile ? 'text-xs' : 'text-sm'}`}>
                        {preferred_track_based_session || 'Track not selected'}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div id="register" className="relative z-50 p-4 text-white min-h-screen">
            {/* Desktop View */}
            <div className="hidden lg:block px-40 flex-col gap-10">
                <div className="text-4xl mb-4">Register</div>
                <div className="max-w-3xl text-xl mb-4">
                    <div>Just fill the below fields with your details,</div>
                    <div>So we know how to contact you.</div>
                </div>
                <div className="flex items-start justify-center gap-8">
                    <div className="bg-white/5 text-white backdrop-blur-lg flex flex-col p-6 h-[700px] relative">
                        <form onSubmit={handleSubmit(onSubmit)} ref={containerFormRef} className="flex-1">
                            <div className="flex gap-6">
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
                        </form>
                        <button
                            type="submit"
                            onClick={handleSubmit(onSubmit)}
                            className="absolute right-0 -bottom-16 bg-teal-400/20 hover:bg-teal-400/40 disabled:bg-teal-400/5 disabled:cursor-not-allowed transition-colors duration-200 p-3 text-lg w-40 flex items-center justify-center"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            ) : (
                                "Register"
                            )}
                        </button>
                        {submitMessage.type && (
                            <div className={`absolute bottom-0 translate-x-1/2 p-4 mb-6 ${submitMessage.type === 'success' ? 'bg-teal-500/20' : 'bg-red-500/20'}`}>
                                {submitMessage.message}
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="h-[700px] w-full flex">
                            <Passport />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden h-screen flex flex-col">
                <div className="h-2/5 flex flex-col px-2">
                    <div className="text-2xl mb-2">Register</div>
                    <div className="text-sm mb-4 opacity-80">
                        Step {currentStep + 1} of {totalSteps}
                    </div>
                    
                    {/* progress bar */}
                    <div className="w-full bg-white/10 h-1 mb-4">
                        <div 
                            className="h-full bg-teal-400 transition-all duration-300"
                            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                        />
                    </div>

                    <div className="flex-1 flex flex-col">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
                            {renderFormField(fields[currentStep], true)}
                        </form>
                        
                        {/* nav buttons */}
                        <div className="flex justify-between items-center mt-4 gap-4">
                            <button
                                type="button"
                                onClick={handlePrevious}
                                disabled={currentStep === 0}
                                className="bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 px-4 py-2 text-sm flex-1 max-w-24"
                            >
                                Previous
                            </button>
                            
                            {currentStep === totalSteps - 1 ? (
                                <button
                                    type="submit"
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={isSubmitting}
                                    className="bg-teal-400/20 hover:bg-teal-400/40 disabled:bg-teal-400/5 disabled:cursor-not-allowed transition-colors duration-200 px-4 py-2 text-sm flex-1 flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    ) : (
                                        "Register"
                                    )}
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="bg-teal-400/20 hover:bg-teal-400/40 transition-colors duration-200 px-4 py-2 text-sm flex-1"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="h-3/5 mt-4 w-full px-2">
                    {/* <div className="w-full max-w-md mx-auto">
                        <Passport isMobile={true} />
                    </div> */}
                    <Passport isMobile={true} />
                </div>
                {submitMessage.type && (
                    <div className={`absolute bottom-4 left-4 right-4 p-3 text-center text-sm ${submitMessage.type === 'success' ? 'bg-teal-500/20' : 'bg-red-500/20'}`}>
                        {submitMessage.message}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Register;