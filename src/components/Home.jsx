import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Edit, User, BookOpen, Clock } from 'lucide-react';
import { getRandomQuote } from '../lib/quotes';
import { format } from 'date-fns';
import { id as indonesianLocale } from 'date-fns/locale';

const Home = ({ user, notesCount, onNavigate }) => {
    const [quote] = useState(getRandomQuote());
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update clock every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return format(date, 'HH:mm:ss', { locale: indonesianLocale });
    };

    const formatDate = (date) => {
        return format(date, 'EEEE, dd MMMM yyyy', { locale: indonesianLocale });
    };

    const greeting = () => {
        const hour = currentTime.getHours();
        if (hour < 12) return 'Selamat Pagi';
        if (hour < 15) return 'Selamat Siang';
        if (hour < 18) return 'Selamat Sore';
        return 'Selamat Malam';
    };

    return (
        <div className="min-h-screen bg-ios-gray-50">
            {/* Header with Clock */}
            <div className="bg-white border-b border-ios-gray-200 px-6 py-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-ios-blue rounded-full flex items-center justify-center">
                            <BookOpen size={24} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-ios-gray-900">
                                noted<span className="text-ios-blue">Qu.id</span>
                            </h1>
                            <p className="text-xs text-ios-gray-500">Your Premium Notes</p>
                        </div>
                    </div>

                    {/* Live Clock */}
                    <div className="text-right">
                        <div className="flex items-center gap-2 text-2xl font-semibold text-ios-gray-900">
                            <Clock size={20} className="text-ios-blue" />
                            {formatTime(currentTime)}
                        </div>
                        <p className="text-xs text-ios-gray-600">{formatDate(currentTime)}</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                {/* Welcome Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-ios-lg p-8 shadow-ios border border-ios-gray-100"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-ios-gray-900 mb-2">
                                {greeting()}, {user.name}! 👋
                            </h2>
                            <p className="text-ios-gray-600">
                                Siap untuk menulis catatan hari ini?
                            </p>
                        </div>
                        <div className="bg-ios-blue bg-opacity-10 rounded-lg px-4 py-2">
                            <div className="text-sm text-ios-gray-600">Total Catatan</div>
                            <div className="text-2xl font-bold text-ios-blue">{notesCount}</div>
                        </div>
                    </div>
                </motion.div>

                {/* Quote of the Day */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-ios-lg p-6 shadow-ios"
                >
                    <div className="flex items-start gap-4">
                        <div className="text-4xl text-ios-blue">"</div>
                        <div className="flex-1">
                            <p className="text-lg text-ios-gray-800 italic mb-3">
                                {quote.quote}
                            </p>
                            <p className="text-sm text-ios-gray-600">
                                — <strong>{quote.author}</strong>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate('notes', 'new')}
                        className="bg-white rounded-ios-lg p-6 shadow-ios hover:shadow-ios-lg transition-all text-left group"
                    >
                        <div className="w-12 h-12 bg-ios-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all">
                            <Edit size={24} className="text-ios-blue" />
                        </div>
                        <h3 className="text-lg font-semibold text-ios-gray-900 mb-1">
                            Catatan Baru
                        </h3>
                        <p className="text-sm text-ios-gray-600">
                            Mulai menulis ide baru Anda
                        </p>
                    </motion.button>

                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate('notes')}
                        className="bg-white rounded-ios-lg p-6 shadow-ios hover:shadow-ios-lg transition-all text-left group"
                    >
                        <div className="w-12 h-12 bg-ios-green bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all">
                            <FileText size={24} className="text-ios-green" />
                        </div>
                        <h3 className="text-lg font-semibold text-ios-gray-900 mb-1">
                            Lihat Semua Catatan
                        </h3>
                        <p className="text-sm text-ios-gray-600">
                            Akses {notesCount} catatan Anda
                        </p>
                    </motion.button>

                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate('profile')}
                        className="bg-white rounded-ios-lg p-6 shadow-ios hover:shadow-ios-lg transition-all text-left group"
                    >
                        <div className="w-12 h-12 bg-ios-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all">
                            <User size={24} className="text-ios-purple" />
                        </div>
                        <h3 className="text-lg font-semibold text-ios-gray-900 mb-1">
                            Profil Saya
                        </h3>
                        <p className="text-sm text-ios-gray-600">
                            Edit biodata dan preferensi
                        </p>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Home;
