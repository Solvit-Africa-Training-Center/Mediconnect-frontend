// Base interfaces for common UI components
export interface InputInterface {
    name?: string;
    type?: string;    
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    required?: boolean; 
}

// Search and Filter types
export interface SearchParams {
    query?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}