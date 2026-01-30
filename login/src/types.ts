/**
 * Type Definitions for Login and SignUp UI Components
 */

export interface FormData {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}

export interface SignUpFormData {
  email: string;
  phoneNumber: string;
  password: string;
  agreeToTerms: boolean;
}

export interface LoginFormProps {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

export interface SignUpFormProps {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

export interface SocialButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export interface SocialProvider {
  id: 'google' | 'apple' | 'facebook';
  name: string;
  color?: string;
}

export const SOCIAL_PROVIDERS: Record<string, SocialProvider> = {
  google: {
    id: 'google',
    name: 'Google',
    color: '#4285F4',
  },
  apple: {
    id: 'apple',
    name: 'Apple',
  },
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    color: '#1877F2',
  },
};

/**
 * Color Constants
 */
export const COLORS = {
  primary: '#2DD4BF',
  primaryHover: '#26b8a5',
  background: '#EAEBF3',
  darkBlue: '#0A0E2E',
  darkBlue2: '#0B104A',
  pink: '#FFB6C1',
  cyan: '#0891B2',
  tealLight: '#2DD4BF',
  tealDark: '#006970',
} as const;

/**
 * Form validation rules
 */
export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  password: {
    minLength: 8,
    message: 'Password must be at least 8 characters',
  },
} as const;
