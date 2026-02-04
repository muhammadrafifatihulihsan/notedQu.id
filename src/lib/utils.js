import { format, formatDistanceToNow } from 'date-fns';
import { id as indonesianLocale } from 'date-fns/locale';

// Format date for display
export const formatDate = (date) => {
    if (!date) return '';
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, 'dd MMM yyyy', { locale: indonesianLocale });
};

// Format time for display
export const formatTime = (date) => {
    if (!date) return '';
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, 'HH:mm');
};

// Format relative time (e.g., "2 jam yang lalu")
export const formatRelativeTime = (date) => {
    if (!date) return '';
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return formatDistanceToNow(dateObj, { addSuffix: true, locale: indonesianLocale });
};

// Truncate text
export const truncateText = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
};

// Extract first line as title
export const extractTitle = (content) => {
    if (!content) return 'Untitled';
    const firstLine = content.split('\n')[0].trim();
    return firstLine || 'Untitled';
};

// Generate random pastel color
export const generatePastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
};

// Debounce function
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Get word count
export const getWordCount = (text) => {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

// Get character count
export const getCharCount = (text) => {
    if (!text) return 0;
    return text.length;
};

// Class names helper
export const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};
