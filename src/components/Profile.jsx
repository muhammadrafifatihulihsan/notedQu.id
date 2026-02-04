import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, ArrowLeft, Save, Upload, X } from 'lucide-react';
import { format } from 'date-fns';
import { id as indonesianLocale } from 'date-fns/locale';

const Profile = ({ user, onUpdate, onBack }) => {
    const [name, setName] = useState(user.name);
    const [birthDate, setBirthDate] = useState(user.birthDate);
    const [bio, setBio] = useState(user.bio || '');
    const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto || null);
    const [saved, setSaved] = useState(false);
    const fileInputRef = useRef(null);

    const handleSave = () => {
        onUpdate({
            ...user,
            name,
            birthDate,
            bio,
            profilePhoto,
        });
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('Ukuran foto maksimal 2MB');
                return;
            }

            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('File harus berupa gambar');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemovePhoto = () => {
        setProfilePhoto(null);
    };

    const calculateAge = () => {
        if (!birthDate) return null;
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    const age = calculateAge();

    return (
        <div className="min-h-screen bg-ios-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-ios-gray-200 px-6 py-4">
                <div className="max-w-3xl mx-auto flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-ios-gray-100 rounded-lg transition-all"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-ios-gray-900">Profil</h1>
                        <p className="text-sm text-ios-gray-600">Kelola informasi pribadi Anda</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto p-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-ios-lg shadow-ios p-8"
                >
                    {/* Avatar */}
                    <div className="text-center mb-8">
                        <div className="relative inline-block">
                            {profilePhoto ? (
                                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-ios-gray-100 group">
                                    <img
                                        src={profilePhoto}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={handleRemovePhoto}
                                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X size={24} className="text-white" />
                                    </button>
                                </div>
                            ) : (
                                <div className="w-24 h-24 rounded-full bg-ios-gray-100 flex items-center justify-center">
                                    {/* Clean 2D Avatar Icon */}
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Head */}
                                        <circle cx="24" cy="16" r="8" fill="#007AFF" opacity="0.2" />
                                        <circle cx="24" cy="16" r="8" stroke="#007AFF" strokeWidth="2" />
                                        {/* Body */}
                                        <path d="M10 42 Q10 32 24 32 Q38 32 38 42" fill="#007AFF" opacity="0.2" />
                                        <path d="M10 42 Q10 32 24 32 Q38 32 38 42" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            )}

                            {/* Upload Button */}
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 w-8 h-8 bg-ios-blue text-white rounded-full flex items-center justify-center shadow-ios hover:bg-opacity-90 transition-all"
                                title="Upload foto"
                            >
                                <Upload size={14} />
                            </button>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="hidden"
                            />
                        </div>

                        <h2 className="text-2xl font-bold text-ios-gray-900 mt-4">{name}</h2>
                        {age && (
                            <p className="text-ios-gray-600">{age} tahun</p>
                        )}
                        <p className="text-xs text-ios-gray-500 mt-1">
                            {profilePhoto ? 'Klik foto untuk menghapus' : 'Klik icon untuk upload foto'}
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-ios-gray-700 mb-2">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 bg-ios-gray-50 border border-ios-gray-200 rounded-lg focus:ring-2 focus:ring-ios-blue focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Birth Date */}
                        <div>
                            <label className="block text-sm font-medium text-ios-gray-700 mb-2">
                                Tanggal Lahir
                            </label>
                            <input
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                className="w-full px-4 py-3 bg-ios-gray-50 border border-ios-gray-200 rounded-lg focus:ring-2 focus:ring-ios-blue focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="block text-sm font-medium text-ios-gray-700 mb-2">
                                Bio (Opsional)
                            </label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                placeholder="Ceritakan sedikit tentang diri Anda..."
                                rows={4}
                                className="w-full px-4 py-3 bg-ios-gray-50 border border-ios-gray-200 rounded-lg focus:ring-2 focus:ring-ios-blue focus:border-transparent transition-all resize-none"
                            />
                        </div>

                        {/* Account Info */}
                        <div className="bg-ios-gray-50 rounded-lg p-4 space-y-2">
                            <h3 className="text-sm font-semibold text-ios-gray-700 mb-2">
                                Informasi Akun
                            </h3>
                            <div className="flex justify-between text-sm">
                                <span className="text-ios-gray-600">Bergabung sejak:</span>
                                <span className="font-medium text-ios-gray-900">
                                    {format(new Date(user.createdAt), 'dd MMM yyyy', { locale: indonesianLocale })}
                                </span>
                            </div>
                        </div>

                        {/* Save Button */}
                        <button
                            onClick={handleSave}
                            className="w-full bg-ios-blue text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                        >
                            <Save size={20} />
                            {saved ? 'Tersimpan!' : 'Simpan Perubahan'}
                        </button>

                        {saved && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-ios-green bg-opacity-10 border border-ios-green text-ios-green px-4 py-3 rounded-lg text-sm text-center"
                            >
                                Profil berhasil diperbarui! ✓
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
