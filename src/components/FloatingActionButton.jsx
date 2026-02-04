import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const FloatingActionButton = ({ onClick }) => {
    return (
        <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="fixed bottom-8 right-8 w-14 h-14 bg-ios-blue text-white rounded-full shadow-ios-lg hover:shadow-xl transition-all flex items-center justify-center z-50"
            aria-label="Create new note"
        >
            <Plus size={24} strokeWidth={2.5} />
        </motion.button>
    );
};

export default FloatingActionButton;
