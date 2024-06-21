"use client";
import React from 'react';
import { ValidationError, useForm } from "@formspree/react"
import { Input } from 'components/Input';

export const FormspreeForm = ({formId}) => {

    const [state, handleSubmit] = useForm(formId);
    if (state.succeeded) {
        return (
            <div className='max-w-5xl mx-auto my-5'>
                 <p>Thanks for joining!</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-5xl mx-auto my-5'>
            <label htmlFor="email">
                Email Address
            </label>
            <Input
                id="email"
                type="email" 
                name="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Your Message
            </label>
            <Input
                id="message"
                name="message"
                type="textarea"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button className='btn' type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    )
}