import React from "react";
import { useFormik } from "formik";
import { Input, Button } from "./common";
import { useState } from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

function Registerform() {
    const [currentStep, setcurrentStep] = useState<number>(1);

    const handlePrev = () => {
        setcurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const handleNext = () => {
        formik.validateForm(formik.values).then((errors) => {
            if (Object.keys(errors).length === 0) {
                setcurrentStep((prevStep) => Math.max(prevStep + 1, 3));
            }
        });
    };

    const Step1Validation = Yup.object().shape({
        fullname: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        dateOfBirth: Yup.date().max(new Date()).required("Required"),
    });

    const Step2Validation = Yup.object().shape({
        streetAddress: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        zipCode: Yup.number()
            .min(5, "Zip code must be at least 5 number")
            .required("Required"),
    });

    const Step3Validation = Yup.object().shape({
        username: Yup.string()
            .min(6, "Username must be at least contain 6 characters")
            .required("Required"),
        password: Yup.string()
            .min(8, "Password must be at least contain 8 characters ")
            .minUppercase(
                1,
                "Password must contain at least 1 uppercase letter"
            )
            .minNumbers(1, "Password must contain at least 1 number")
            .required("Required"),
    });

    const getPartialSchema = (step: number) => {
        switch (step) {
            case 1:
                return Step1Validation;
            case 2:
                return Step2Validation;
            case 3:
                return Step3Validation;
            default:
                return Step1Validation;
        }
    };

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            dateOfBirth: "",
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
            username: "",
            password: "",
        },
        validationSchema: getPartialSchema(currentStep),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            {currentStep === 1 && (
                <div className="flex flex-col">
                    <>
                        <Input
                            label="Fullname"
                            id="fullname"
                            name="fullname"
                            type="text"
                            placeholder="Enter your fullname"
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            touched={formik.touched.fullname || false}
                            error={formik.errors.fullname}
                        />
                        <Input
                            label="Email"
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            touched={formik.touched.email || false}
                            error={formik.errors.email}
                        />
                        <Input
                            label="Date of Birth"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            placeholder="Enter your Date of Birth"
                            value={formik.values.dateOfBirth}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            touched={formik.touched.dateOfBirth || false}
                            error={formik.errors.dateOfBirth}
                        />
                    </>
                </div>
            )}
            <div className="flex flex-col">
                {currentStep === 2 && (
                    <>
                        <Input
                            label="Street Address"
                            id="streetAddress"
                            name="streetAddress"
                            type="text"
                            placeholder="Enter your address"
                            value={formik.values.streetAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            touched={formik.touched.streetAddress || false}
                            error={formik.errors.streetAddress}
                        />
                        <Input
                            label="City"
                            id="city"
                            name="city"
                            type="text"
                            placeholder="Enter your city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            touched={formik.touched.city || false}
                            error={formik.errors.city}
                        />
                        <Input
                            label="State"
                            id="state"
                            name="state"
                            type="text"
                            placeholder="Enter your state"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            touched={formik.touched.state || false}
                            error={formik.errors.state}
                        />
                        <Input
                            label="Zip Code"
                            id="zipCode"
                            name="zipCode"
                            type="number"
                            placeholder="Enter your zipCode"
                            value={formik.values.zipCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            touched={formik.touched.zipCode || false}
                            error={formik.errors.zipCode}
                        />
                    </>
                )}
            </div>
            <div className="flex flex-col">
                {currentStep === 3 && (
                    <>
                        <Input
                            label="Username"
                            id="username"
                            name="username"
                            type="string"
                            placeholder="Enter your username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            touched={formik.touched.username || false}
                            error={formik.errors.username}
                        />
                        <Input
                            label="Password"
                            id="password"
                            name="password"
                            type="string"
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            touched={formik.touched.password || false}
                            error={formik.errors.password}
                        />
                    </>
                )}
            </div>
            <div className="flex justify-center gap-2">
                {currentStep > 1 && (
                    <Button
                        type="button"
                        label="Previous"
                        onClick={handlePrev}
                    />
                )}

                {currentStep < 3 && (
                    <Button type="button" label="Next" onClick={handleNext} />
                )}
                {currentStep === 3 && <Button type="submit" label="Submit" />}
            </div>
        </form>
    );
}

export default Registerform;
