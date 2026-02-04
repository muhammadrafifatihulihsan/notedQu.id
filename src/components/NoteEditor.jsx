import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Type, Grid3x3, MinusSquare, ChevronDown } from 'lucide-react';
import { formatDate, formatTime, getWordCount, getCharCount, debounce } from '../lib/utils';

const PaperBackground = ({ style }) => {
    if (style === 'lined') {
        return <div className="absolute inset-0 paper-lined pointer-events-none" />;
    }
    if (style === 'grid') {
        return <div className="absolute inset-0 paper-grid pointer-events-none" />;
    }
    return null;
};

const NoteEditor = ({ note, onUpdate, onClose }) => {
    const [title, setTitle] = useState(note?.title || '');
    const [content, setContent] = useState(note?.content || '');
    const [paperStyle, setPaperStyle] = useState(note?.paperStyle || 'lined');
    const [showStyleMenu, setShowStyleMenu] = useState(false);

    // Only sync state when note ID changes (switching between notes)
    // NOT when note content changes (which happens on auto-save)
    useEffect(() => {
        if (note) {
            setTitle(note.title || '');
            setContent(note.content || '');
            setPaperStyle(note.paperStyle || 'lined');
        }
    }, [note?.id]); // Only re-run when switching to a different note

    // Auto-save with debounce
    useEffect(() => {
        if (!note) return;

        const timeoutId = setTimeout(() => {
            onUpdate(note.id, { title, content, paperStyle });
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [title, content, paperStyle]); // Removed note and onUpdate from deps

    if (!note) {
        return (
            <div className="flex-1 flex items-center justify-center bg-ios-gray-50">
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-ios-blue to-ios-purple opacity-10" />
                    <h2 className="text-2xl font-semibold text-ios-gray-900 mb-2">
                        Selamat datang di noted<span className="text-ios-blue">Qu.id</span>
                    </h2>
                    <p className="text-ios-gray-600">
                        Pilih catatan atau buat yang baru untuk mulai menulis
                    </p>
                </div>
            </div>
        );
    }

    const wordCount = getWordCount(content);
    const charCount = getCharCount(content);

    const paperStyles = [
        { id: 'lined', name: 'Lined', icon: Type },
        { id: 'grid', name: 'Grid', icon: Grid3x3 },
        { id: 'blank', name: 'Blank', icon: MinusSquare },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col bg-ios-gray-50"
        >
            {/* Toolbar */}
            <div className="bg-white border-b border-ios-gray-200 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <button
                            onClick={() => setShowStyleMenu(!showStyleMenu)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ios-gray-100 hover:bg-ios-gray-200 transition-all text-sm"
                        >
                            {paperStyles.find(s => s.id === paperStyle)?.icon &&
                                React.createElement(paperStyles.find(s => s.id === paperStyle).icon, { size: 16 })
                            }
                            <span>{paperStyles.find(s => s.id === paperStyle)?.name}</span>
                            <ChevronDown size={14} />
                        </button>

                        {showStyleMenu && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-ios-lg border border-ios-gray-200 overflow-hidden z-10"
                            >
                                {paperStyles.map((style) => (
                                    <button
                                        key={style.id}
                                        onClick={() => {
                                            setPaperStyle(style.id);
                                            setShowStyleMenu(false);
                                        }}
                                        className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-ios-gray-50 transition-all ${paperStyle === style.id ? 'bg-ios-blue bg-opacity-10 text-ios-blue' : ''
                                            }`}
                                    >
                                        <style.icon size={16} />
                                        <span className="text-sm">{style.name}</span>
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    <div className="text-xs text-ios-gray-500">
                        {wordCount} kata · {charCount} karakter
                    </div>
                </div>

                <div className="text-xs text-ios-gray-500">
                    {formatDate(note.updatedAt)} · {formatTime(note.updatedAt)}
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={`relative bg-paper-cream rounded-ios-lg shadow-paper p-8 min-h-[600px] ${paperStyle === 'blank' ? 'paper-blank' : ''
                            }`}
                    >
                        {/* Paper Background */}
                        <PaperBackground style={paperStyle} />

                        {/* Content */}
                        <div className="relative z-10">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Judul catatan..."
                                className="w-full text-3xl font-semibold bg-transparent border-none focus:outline-none text-ios-gray-900 placeholder-ios-gray-400 mb-6"
                            />

                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Mulai menulis..."
                                className="w-full h-96 text-base bg-transparent border-none focus:outline-none text-ios-gray-800 placeholder-ios-gray-400 resize-none leading-8"
                                style={{
                                    lineHeight: paperStyle === 'lined' ? '32px' : '1.75',
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default NoteEditor;
