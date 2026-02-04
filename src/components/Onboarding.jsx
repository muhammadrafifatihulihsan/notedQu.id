import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Calendar } from 'lucide-react';

const Onboarding = ({ onComplete }) => {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError('Nama tidak boleh kosong');
            return;
        }

        if (!birthDate) {
            setError('Tanggal lahir harus diisi');
            return;
        }

        const userData = {
            name: name.trim(),
            birthDate,
            createdAt: new Date().toISOString(),
        };

        onComplete(userData);
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-md w-full"
            >
                {/* Logo/Icon - Clean and Simple */}
                <div className="text-center mb-10">
                    {/* Simple 2D Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 relative">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Paper/Note Icon - Clean 2D */}
                            <rect x="16" y="12" width="48" height="56" rx="6" fill="#F2F2F7" />
                            <rect x="16" y="12" width="48" height="56" rx="6" stroke="#007AFF" strokeWidth="2" />

                            {/* Lines representing text */}
                            <line x1="24" y1="24" x2="56" y2="24" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                            <line x1="24" y1="32" x2="52" y2="32" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                            <line x1="24" y1="40" x2="48" y2="40" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

                            {/* Q symbol in center */}
                            <circle cx="40" cy="50" r="8" stroke="#007AFF" strokeWidth="2.5" fill="none" />
                            <path d="M45 50 Q47 50 47 52" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-semibold text-ios-gray-900 mb-3 tracking-tight">
                        noted<span className="text-ios-blue">Qu.id</span>
                    </h1>
                    <p className="text-ios-gray-600 text-base">
                        Catat, Simpan, Ingat
                    </p>
                </div>

                {/* Form - Minimal and Clean */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-ios-gray-700 mb-2">
                            Nama
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setError('');
                            }}
                            placeholder="Siapa nama Anda?"
                            className="w-full px-4 py-3.5 bg-ios-gray-50 border border-ios-gray-200 rounded-xl focus:ring-2 focus:ring-ios-blue focus:border-ios-blue focus:bg-white transition-all text-base"
                            autoFocus
                        />
                    </div>

                    {/* Birth Date Input */}
                    <div>
                        <label className="block text-sm font-medium text-ios-gray-700 mb-2">
                            Tanggal Lahir
                        </label>
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => {
                                setBirthDate(e.target.value);
                                setError('');
                            }}
                            className="w-full px-4 py-3.5 bg-ios-gray-50 border border-ios-gray-200 rounded-xl focus:ring-2 focus:ring-ios-blue focus:border-ios-blue focus:bg-white transition-all text-base"
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-ios-red bg-opacity-5 border border-ios-red border-opacity-20 text-ios-red px-4 py-3 rounded-xl text-sm"
                        >
                            {error}
                        </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-ios-blue text-white py-3.5 rounded-xl font-medium hover:bg-opacity-90 transition-all active:scale-[0.99] shadow-sm text-base"
                    >
                        Mulai
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-xs text-ios-gray-400 mt-8">
                    Data Anda tersimpan lokal di perangkat
                </p>
            </motion.div>
        </div>
    );
};

export default Onboarding;
