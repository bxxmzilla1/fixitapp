import React, { useState } from 'react';
import { Mail, Lock, LogIn, UserPlus, AlertCircle, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './Button';

interface AuthProps {
  onAuthSuccess?: () => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = isSignUp
        ? await signUp(email, password)
        : await signIn(email, password);

      if (error) {
        setError(error.message);
      } else {
        if (onAuthSuccess) {
          onAuthSuccess();
        }
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <LogIn className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-slate-500 text-sm">
              {isSignUp
                ? 'Sign up to start using FixIt AI'
                : 'Sign in to continue to FixIt AI'}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center text-red-700">
              <AlertCircle className="mr-3 flex-shrink-0" size={20} />
              <span className="flex-1 text-sm">{error}</span>
              <button
                onClick={() => setError(null)}
                className="ml-2 p-1 hover:bg-red-100 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
              {isSignUp && (
                <p className="mt-1 text-xs text-slate-500">Password must be at least 6 characters</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading || !email || !password}
              fullWidth
              icon={isSignUp ? <UserPlus size={20} /> : <LogIn size={20} />}
            >
              {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>

          {/* Toggle Sign Up/Sign In */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError(null);
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

