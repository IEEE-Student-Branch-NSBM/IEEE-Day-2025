"use client";

import { useState, useRef } from "react"
import { User } from "@/types/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import ParticlesBg from "@/components/particles-bg";
import { createUser } from "@/actions/firebase";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const fields =
    [
        {
            "id": 1,
            "field_name": "full_name",
            "type": "text",
            "optional": true
        },
        {
            "id": 2,
            "field_name": "email",
            "type": "text",
            "optional": true
        },
        {
            "id": 3,
            "field_name": "password",
            "type": "text",
            "optional": true
        },
        {
            "id": 4,
            "field_name": "phone_number",
            "type": "text",
            "optional": true
        },
        {
            "id": 5,
            "field_name": "food_preference",
            "type": "text",
            "optional": true
        },
        {
            "id": 6,
            "field_name": "gender",
            "type": "text",
            "optional": true
        },
        {
            "id": 7,
            "field_name": "nic",
            "type": "text",
            "optional": true
        },
        {
            "id": 8,
            "field_name": "university_name",
            "type": "text",
            "optional": true
        },
        {
            "id": 9,
            "field_name": "ieee_membership_id",
            "type": "text",
            "optional": true
        },
        {
            "id": 10,
            "field_name": "preferred_track_based_session",
            "type": "text",
            "optional": true
        },
        {
            "id": 11,
            "field_name": "github_profile",
            "type": "text",
            "optional": true
        },
        {
            "id": 12,
            "field_name": "linkedin_profile",
            "type": "text",
            "optional": true
        }
    ]

const Register = () => {
    const containerFormRef = useRef<HTMLFormElement>(null);
    const step1DivRef = useRef<HTMLDivElement>(null);
    const step2DivRef = useRef<HTMLDivElement>(null);

    const [currentStep, setCurrentStep] = useState<number>(1);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>()
    const onSubmit: SubmitHandler<User> = (data) => {
        console.log(data)
        createUser(data);
    }

    useGSAP(() => {
        const currentStepRef = currentStep === 1 ? step1DivRef : step2DivRef;

        if (currentStepRef.current) {
            const labels = currentStepRef.current.querySelectorAll('label');

            gsap.set(labels, { x: -50, opacity: 0 });

            gsap.to(labels, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.10
            });
        }
    }, [currentStep]);


    return (
        <div className="flex items-center justify-center h-screen">
            <ParticlesBg />
            <div className="relative bg-white/5 text-white backdrop-blur-lg z-50 p-10">
                <div className="text-4xl mb-4">Register</div>
                <div className="max-w-3xl text-xl mb-4">
                    <div>
                        Just fill the below fields with your details,
                    </div>
                    <div>
                        So we know how to contact you.
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} ref={containerFormRef}>
                    {currentStep == 1 && (
                        <div ref={step1DivRef}>
                            {fields.slice(0, 6).map((field) => (
                                <label className="text-xl flex flex-col mb-4 w-full max-w-md" key={field.id}>
                                    {field.field_name}
                                    <input
                                        key={field.id}
                                        type={field.type}
                                        {...register(field.field_name as keyof User)}
                                        required={!field.optional}
                                        className="border-1 border-white bg-transparent p-2 mt-1 text-white"
                                    />

                                </label>
                            ))}
                        </div>
                    )}
                    {currentStep == 2 && (
                        <div ref={step2DivRef}>
                            {fields.slice(6).map((field) => (
                                <label className="text-xl flex flex-col mb-4 w-full max-w-md" key={field.id}>
                                    {field.field_name}
                                    <input
                                        key={field.id}
                                        type={field.type}
                                        {...register(field.field_name as keyof User)}
                                        required={!field.optional}
                                        className="border-1 border-white bg-transparent p-2 mt-1 text-white"
                                    />
                                </label>
                            ))}
                        </div>
                    )}

                    <div className="flex justify-between gap-4 mt-6">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                className="bg-white/10 hover:bg-white/20 transition-colors duration-200 p-2 text-xl w-40"
                                onClick={() => setCurrentStep(1)}
                            >
                                Previous
                            </button>
                        )}
                        <button
                            type={currentStep === 2 ? "submit" : "button"}
                            className="bg-white/10 hover:bg-white/20 transition-colors duration-200 p-2 text-xl ml-auto w-40"
                            onClick={currentStep === 1 ? () => setCurrentStep(2) : undefined}
                        >
                            {currentStep == 1 ? "Next" : "Register"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register