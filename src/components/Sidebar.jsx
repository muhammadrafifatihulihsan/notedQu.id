import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, FolderOpen, FileText } from 'lucide-react';
import { formatRelativeTime, truncateText } from '../lib/utils';

const Sidebar = ({
    notes,
    folders,
    selectedNoteId,
    onSelectNote,
    onCreateNote,
    searchQuery,
    onSearchChange,
    selectedFolder,
    onSelectFolder,
    onDeleteNote
}) => {
    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-80 h-screen bg-white border-r border-ios-gray-200 flex flex-col"
        >
            {/* Header */}
            <div className="p-4 border-b border-ios-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-semibold text-ios-gray-900">
                        noted<span className="text-ios-blue">Qu.id</span>
                    </h1>
                    <button
                        onClick={onCreateNote}
                        className="p-2 rounded-full bg-ios-blue text-white hover:bg-opacity-90 transition-all active:scale-95"
                        aria-label="Create new note"
                    >
                        <Plus size={20} />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ios-gray-500" />
                    <input
                        type="text"
                        placeholder="Cari catatan..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-ios-gray-100 rounded-ios text-sm focus:bg-white focus:ring-2 focus:ring-ios-blue transition-all"
                    />
                </div>
            </div>

            {/* Folders */}
            {folders && folders.length > 0 && (
                <div className="px-4 py-3 border-b border-ios-gray-200">
                    <h3 className="text-xs font-semibold text-ios-gray-600 uppercase mb-2">Folder</h3>
                    <div className="space-y-1">
                        <button
                            onClick={() => onSelectFolder(null)}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${selectedFolder === null
                                ? 'bg-ios-blue bg-opacity-10 text-ios-blue'
                                : 'text-ios-gray-700 hover:bg-ios-gray-100'
                                }`}
                        >
                            <FileText size={16} />
                            <span>Semua Catatan</span>
                            <span className="ml-auto text-xs text-ios-gray-500">{notes.length}</span>
                        </button>
                        {folders.map((folder) => (
                            <button
                                key={folder.id}
                                onClick={() => onSelectFolder(folder.id)}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${selectedFolder === folder.id
                                    ? 'bg-ios-blue bg-opacity-10 text-ios-blue'
                                    : 'text-ios-gray-700 hover:bg-ios-gray-100'
                                    }`}
                            >
                                <FolderOpen size={16} style={{ color: folder.color }} />
                                <span>{folder.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Notes List */}
            <div className="flex-1 overflow-y-auto">
                {notes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4">
                        <FileText size={48} className="text-ios-gray-300 mb-3" />
                        <p className="text-ios-gray-500 text-sm">
                            {searchQuery ? 'Tidak ada catatan ditemukan' : 'Belum ada catatan'}
                        </p>
                        {!searchQuery && (
                            <p className="text-ios-gray-400 text-xs mt-1">
                                Klik tombol + untuk membuat catatan baru
                            </p>
                        )}
                    </div>
                ) : (
                    <div className="p-2 space-y-1">
                        {notes.map((note, index) => (
                            <motion.div
                                key={note.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.03, duration: 0.2 }}
                                className="group relative"
                            >
                                <button
                                    onClick={() => onSelectNote(note.id)}
                                    className={`w-full p-3 rounded-lg text-left transition-all ${selectedNoteId === note.id
                                        ? 'bg-ios-blue bg-opacity-10 border-2 border-ios-blue'
                                        : 'bg-white hover:bg-ios-gray-50 border-2 border-transparent'
                                        }`}
                                >
                                    <h3 className="font-medium text-ios-gray-900 mb-1 line-clamp-1 pr-8">
                                        {note.title || 'Untitled'}
                                    </h3>
                                    <p className="text-xs text-ios-gray-600 mb-2 line-clamp-2">
                                        {truncateText(note.content, 80)}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-ios-gray-500">
                                            {formatRelativeTime(note.updatedAt)}
                                        </span>
                                        {note.paperStyle && (
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-ios-gray-100 text-ios-gray-600">
                                                {note.paperStyle}
                                            </span>
                                        )}
                                    </div>
                                </button>

                                {/* Delete Button */}
                                {onDeleteNote && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (window.confirm('Yakin ingin menghapus catatan ini?')) {
                                                onDeleteNote(note.id);
                                            }
                                        }}
                                        className="absolute top-3 right-3 p-1.5 bg-ios-red text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-opacity-90 active:scale-95"
                                        title="Hapus catatan"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z" />
                                        </svg>
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Sidebar;
