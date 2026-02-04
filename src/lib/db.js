import { openDB } from 'idb';

const DB_NAME = 'notedQu';
const DB_VERSION = 1;

// Initialize Database
export const initDB = async () => {
    return await openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            // Notes Store
            if (!db.objectStoreNames.contains('notes')) {
                const notesStore = db.createObjectStore('notes', {
                    keyPath: 'id',
                    autoIncrement: true,
                });
                notesStore.createIndex('createdAt', 'createdAt');
                notesStore.createIndex('updatedAt', 'updatedAt');
                notesStore.createIndex('folderId', 'folderId');
            }

            // Folders Store
            if (!db.objectStoreNames.contains('folders')) {
                db.createObjectStore('folders', {
                    keyPath: 'id',
                    autoIncrement: true,
                });
            }

            // Settings Store
            if (!db.objectStoreNames.contains('settings')) {
                db.createObjectStore('settings', {
                    keyPath: 'key',
                });
            }
        },
    });
};

// Notes Operations
export const createNote = async (note) => {
    const db = await initDB();
    const newNote = {
        title: note.title || 'Untitled',
        content: note.content || '',
        folderId: note.folderId || null,
        paperStyle: note.paperStyle || 'lined', // lined, grid, blank
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    const id = await db.add('notes', newNote);
    return { ...newNote, id };
};

export const getAllNotes = async () => {
    const db = await initDB();
    const notes = await db.getAllFromIndex('notes', 'updatedAt');
    return notes.reverse(); // Most recent first
};

export const getNoteById = async (id) => {
    const db = await initDB();
    return await db.get('notes', id);
};

export const updateNote = async (id, updates) => {
    const db = await initDB();
    const note = await db.get('notes', id);
    if (!note) return null;

    const updatedNote = {
        ...note,
        ...updates,
        updatedAt: new Date().toISOString(),
    };

    await db.put('notes', updatedNote);
    return updatedNote;
};

export const deleteNote = async (id) => {
    const db = await initDB();
    await db.delete('notes', id);
};

export const getNotesByFolder = async (folderId) => {
    const db = await initDB();
    const allNotes = await db.getAllFromIndex('notes', 'folderId');
    return allNotes.filter(note => note.folderId === folderId);
};

// Folders Operations
export const createFolder = async (name, color) => {
    const db = await initDB();
    const folder = {
        name,
        color: color || '#007AFF',
        createdAt: new Date().toISOString(),
    };
    const id = await db.add('folders', folder);
    return { ...folder, id };
};

export const getAllFolders = async () => {
    const db = await initDB();
    return await db.getAll('folders');
};

export const updateFolder = async (id, updates) => {
    const db = await initDB();
    const folder = await db.get('folders', id);
    if (!folder) return null;

    const updatedFolder = { ...folder, ...updates };
    await db.put('folders', updatedFolder);
    return updatedFolder;
};

export const deleteFolder = async (id) => {
    const db = await initDB();
    // Delete all notes in this folder
    const notes = await getNotesByFolder(id);
    for (const note of notes) {
        await deleteNote(note.id);
    }
    await db.delete('folders', id);
};

// Settings Operations
export const getSetting = async (key) => {
    const db = await initDB();
    const setting = await db.get('settings', key);
    return setting?.value;
};

export const setSetting = async (key, value) => {
    const db = await initDB();
    await db.put('settings', { key, value });
};

// Search
export const searchNotes = async (query) => {
    const db = await initDB();
    const allNotes = await db.getAll('notes');
    const lowerQuery = query.toLowerCase();

    return allNotes.filter(note =>
        note.title.toLowerCase().includes(lowerQuery) ||
        note.content.toLowerCase().includes(lowerQuery)
    );
};
