import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'motion/react';
import { Shield, Mail, LogOut, Loader2, Calendar, User, Search } from 'lucide-react';
import { toast } from 'sonner';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export function AdminPanel() {
  const [session, setSession] = useState<any>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Login State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchInquiries();
    } else {
      setLoading(false);
    }
  }, [session]);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error: any) {
      console.error('Error fetching inquiries:', error.message);
      toast.error('Failed to load inquiries');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      toast.success('Successfully logged in');
    } catch (error: any) {
      console.error('Login error:', error.message);
      toast.error('Invalid credentials');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Logged out successfully');
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-brand selection:text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10 flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-brand/20 flex items-center justify-center mb-4 border border-brand/30">
                <Shield className="w-8 h-8 text-brand" />
              </div>
              <h1 className="text-2xl font-display font-bold">Admin Login</h1>
              <p className="text-gray-400 mt-2 text-center text-sm">
                Restricted access. Only authorized personnel may login.
              </p>
            </div>

            <form onSubmit={handleLogin} className="relative z-10 flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all placeholder:text-gray-600"
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all placeholder:text-gray-600"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoggingIn}
                className="mt-4 w-full bg-brand text-white font-medium py-3 rounded-xl hover:bg-brand/90 transition-colors flex items-center justify-center disabled:opacity-70"
              >
                {isLoggingIn ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In'}
              </button>
              
              <a href="/" className="text-center text-sm text-gray-500 hover:text-white mt-4 transition-colors">
                &larr; Back to Portfolio
              </a>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 selection:bg-brand selection:text-white">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-display font-bold flex items-center gap-3">
              <Shield className="w-8 h-8 text-brand" />
              Admin Dashboard
            </h1>
            <p className="text-gray-400 mt-2">Manage your inquiries and messages.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="px-4 py-2 border border-white/10 rounded-xl text-sm hover:bg-white/5 transition-colors">
              View Site
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm transition-colors text-red-400 hover:text-red-300"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-brand animate-spin" />
          </div>
        ) : inquiries.length === 0 ? (
          <div className="text-center py-24 bg-white/[0.02] border border-white/10 rounded-3xl">
            <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No Inquiries Yet</h3>
            <p className="text-gray-400">When someone contacts you, their message will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {inquiries.map((inquiry, i) => (
              <motion.div
                key={inquiry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-brand/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">{inquiry.name}</div>
                        <a href={`mailto:${inquiry.email}`} className="text-sm text-brand hover:underline mt-1 block">
                          {inquiry.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-500 shrink-0" />
                      <div className="text-sm text-gray-400">
                        {new Date(inquiry.created_at).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-medium text-white mb-4 pb-4 border-b border-white/5">
                      {inquiry.subject}
                    </h3>
                    <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                      {inquiry.message}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
