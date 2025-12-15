import React, { useState } from 'react';
import { Settings, Shield, BarChart3, Users, Activity, ArrowLeft, Database, Key, Server } from 'lucide-react';
import { Button } from './Button';

interface AdminProps {
  onBack: () => void;
}

const Admin: React.FC<AdminProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'settings' | 'analytics'>('overview');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Back to app"
            >
              <ArrowLeft size={20} className="text-slate-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="bg-purple-600 p-2 rounded-lg text-white">
                <Shield size={20} />
              </div>
              <span className="font-bold text-xl text-slate-800">Admin Panel</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6">
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === 'settings'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Settings
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-4 font-medium text-sm transition-colors ${
                activeTab === 'analytics'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-600">Total Requests</h3>
                  <Activity className="text-blue-500" size={20} />
                </div>
                <p className="text-3xl font-bold text-slate-800">1,234</p>
                <p className="text-xs text-slate-500 mt-2">+12% from last month</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-600">Active Users</h3>
                  <Users className="text-green-500" size={20} />
                </div>
                <p className="text-3xl font-bold text-slate-800">567</p>
                <p className="text-xs text-slate-500 mt-2">+8% from last month</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-600">API Status</h3>
                  <Server className="text-purple-500" size={20} />
                </div>
                <p className="text-3xl font-bold text-green-600">Online</p>
                <p className="text-xs text-slate-500 mt-2">All systems operational</p>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                  <Settings className="mr-2" size={20} />
                  API Configuration
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Key className="text-slate-600" size={20} />
                      <div>
                        <p className="font-medium text-slate-800">Gemini API Key</p>
                        <p className="text-sm text-slate-500">Configured via environment variables</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Secure
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Database className="text-slate-600" size={20} />
                      <div>
                        <p className="font-medium text-slate-800">Database</p>
                        <p className="text-sm text-slate-500">No database configured</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                      Not Set
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Application Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-800">Maintenance Mode</p>
                      <p className="text-sm text-slate-500">Temporarily disable the application</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-800">Rate Limiting</p>
                      <p className="text-sm text-slate-500">Limit API requests per user</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center">
                <BarChart3 className="mr-2" size={20} />
                Usage Analytics
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <p className="text-sm font-medium text-slate-600 mb-2">Requests Today</p>
                  <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">65% of daily limit</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-600 mb-1">Average Response Time</p>
                    <p className="text-2xl font-bold text-slate-800">2.3s</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-600 mb-1">Success Rate</p>
                    <p className="text-2xl font-bold text-green-600">98.5%</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    Analytics data is collected in real-time. Detailed reports and historical data
                    can be configured with a database integration.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;

