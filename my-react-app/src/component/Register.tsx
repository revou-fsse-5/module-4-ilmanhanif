import React, { useState } from "react";
import Registerform from "./RegisterForm";

const Register: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <Registerform />
            </div>
        </div>
    );
};

export default Register;
