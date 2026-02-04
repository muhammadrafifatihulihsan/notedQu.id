import React, { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import NoteEditor from './components/NoteEditor';
import Profile from './components/Profile';
import FloatingActionButton from './components/FloatingActionButton';
import {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
    getAllFolders,
    searchNotes,
    getNotesByFolder,
    getSetting,
    setSetting
} from './lib/db';

function App() {
    // User state
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // App state
    const [currentView, setCurrentView] = useState('home'); // 'home', 'notes', 'profile'
    const [notes, setNotes] = useState([]);
    const [folders, setFolders] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFolder, setSelectedFolder] = useState(null);

    // Load user data on mount
    useEffect(() => {
        loadUserData();
    }, []);

    // Load notes when view changes to notes
    useEffect(() => {
        if (currentView === 'notes' && user) {
            loadData();
        }
    }, [currentView, user]);

    // Filter notes based on search and folder
    useEffect(() => {
        if (currentView === 'notes') {
            loadFilteredNotes();
        }
    }, [searchQuery, selectedFolder, currentView]);

    const loadUserData = async () => {
        try {
            const userData = await getSetting('user');
            setUser(userData);
        } catch (error) {
            console.error('Error loading user:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOnboardingComplete = async (userData) => {
        await setSetting('user', userData);
        setUser(userData);
        setCurrentView('home');
    };

    const handleUpdateUser = async (updatedUser) => {
        await setSetting('user', updatedUser);
        setUser(updatedUser);
    };

    const loadData = async () => {
        try {
            const [notesData, foldersData] = await Promise.all([
                getAllNotes(),
                getAllFolders()
            ]);
            setNotes(notesData);
            setFolders(foldersData);

            // Auto-select first note if available
            if (notesData.length > 0 && !selectedNoteId) {
                setSelectedNoteId(notesData[0].id);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    const loadFilteredNotes = async () => {
        try {
            let filteredNotes = [];

            if (searchQuery) {
                filteredNotes = await searchNotes(searchQuery);
            } else if (selectedFolder !== null) {
                filteredNotes = await getNotesByFolder(selectedFolder);
            } else {
                filteredNotes = await getAllNotes();
            }

            setNotes(filteredNotes);
        } catch (error) {
            console.error('Error filtering notes:', error);
        }
    };

    const handleCreateNote = async () => {
        try {
            const newNote = await createNote({
                title: 'Untitled',
                content: '',
                paperStyle: 'lined',
                folderId: selectedFolder,
            });

            setNotes([newNote, ...notes]);
            setSelectedNoteId(newNote.id);
            setCurrentView('notes');
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };

    const handleUpdateNote = async (id, updates) => {
        try {
            const updated = await updateNote(id, updates);
            if (updated) {
                setNotes(notes.map(note => note.id === id ? updated : note));
            }
        } catch (error) {
            console.error('Error updating note:', error);
        }
    };

    const handleDeleteNote = async (id) => {
        try {
            await deleteNote(id);
            setNotes(notes.filter(note => note.id !== id));

            // Select another note if the deleted one was selected
            if (selectedNoteId === id) {
                const remainingNotes = notes.filter(note => note.id !== id);
                setSelectedNoteId(remainingNotes.length > 0 ? remainingNotes[0].id : null);
            }
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    const handleNavigate = (view, action) => {
        setCurrentView(view);
        if (action === 'new') {
            handleCreateNote();
        }
    };

    const selectedNote = notes.find(note => note.id === selectedNoteId);

    // Loading state
    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-ios-gray-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-ios-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-ios-gray-600">Memuat...</p>
                </div>
            </div>
        );
    }

    // Onboarding flow
    if (!user) {
        return <Onboarding onComplete={handleOnboardingComplete} />;
    }

    // Home view
    if (currentView === 'home') {
        return (
            <Home
                user={user}
                notesCount={notes.length}
                onNavigate={handleNavigate}
            />
        );
    }

    // Profile view
    if (currentView === 'profile') {
        return (
            <Profile
                user={user}
                onUpdate={handleUpdateUser}
                onBack={() => setCurrentView('home')}
            />
        );
    }

    // Notes view
    return (
        <div className="flex h-screen overflow-hidden bg-ios-gray-50">
            {/* Sidebar */}
            <Sidebar
                notes={notes}
                folders={folders}
                selectedNoteId={selectedNoteId}
                onSelectNote={setSelectedNoteId}
                onCreateNote={handleCreateNote}
                onDeleteNote={handleDeleteNote}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedFolder={selectedFolder}
                onSelectFolder={setSelectedFolder}
            />

            {/* Main Editor */}
            <NoteEditor
                note={selectedNote}
                onUpdate={handleUpdateNote}
                onClose={() => setSelectedNoteId(null)}
            />

            {/* Floating Action Button (mobile) */}
            <div className="md:hidden">
                <FloatingActionButton onClick={handleCreateNote} />
            </div>

            {/* Back to Home Button */}
            <button
                onClick={() => setCurrentView('home')}
                className="fixed top-4 right-4 px-4 py-2 bg-white rounded-lg shadow-ios hover:shadow-ios-lg transition-all flex items-center gap-2 text-sm font-medium text-ios-gray-700 hover:text-ios-blue"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path d="M9 22V12h6v10" />
                </svg>
                Home
            </button>
        </div>
    );
}

export default App;
