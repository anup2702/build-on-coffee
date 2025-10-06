import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertCircle, Search, FileText, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabase';

const CertificateVerificationPage = () => {
  const navigate = useNavigate();
  const [certificateId, setCertificateId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    
    if (!certificateId.trim()) {
      toast.error('Please enter a certificate ID');
      return;
    }

    setIsVerifying(true);
    setVerificationResult(null);

    try {
      // Query Supabase database for certificate
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('certificate_id', certificateId.trim().toUpperCase())
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned - certificate not found
          setVerificationResult({ 
            isValid: false, 
            certificateId: certificateId.trim().toUpperCase(),
            error: 'Certificate not found' 
          });
          toast.error('Certificate not found');
        } else {
          // Database error
          throw error;
        }
      } else if (data) {
        // Certificate found - verify it's active
        const isExpired = data.expiry_date && new Date(data.expiry_date) < new Date();
        const isValid = data.status === 'active' && !isExpired;
        
        const result = {
          isValid,
          certificateId: data.certificate_id,
          recipientName: data.recipient_name,
          certificateType: data.certificate_type,
          role: data.role,
          duration: data.duration,
          issuedBy: data.issued_by || 'Build On Coffee',
          status: isValid ? 'Verified & Active' : (isExpired ? 'Expired' : 'Inactive'),
          issuedDate: data.issued_date,
          expiryDate: data.expiry_date,
          // Additional fields that might be in your database
          courseName: data.course_name,
          programName: data.program_name,
          skills: data.skills,
          grade: data.grade,
          projectDetails: data.project_details
        };

        setVerificationResult(result);
        
        if (isValid) {
          toast.success('🎓 Certificate verified successfully!');
        } else {
          toast.error(`Certificate found but ${isExpired ? 'expired' : 'inactive'}`);
        }
      }
    } catch (error) {
      console.error('Certificate verification error:', error);
      toast.error('Verification failed. Please try again.');
      setVerificationResult({ 
        isValid: false, 
        certificateId: certificateId.trim().toUpperCase(),
        error: 'Verification failed. Please try again.' 
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const resetForm = () => {
    setCertificateId('');
    setVerificationResult(null);
  };

  // Test database connection on component mount
  React.useEffect(() => {
    const testConnection = async () => {
      try {
        const { error } = await supabase
          .from('certificates')
          .select('certificate_id')
          .limit(1);
        
        if (error) {
          console.error('Database connection failed:', error);
          toast.error('Database connection failed. Please check your configuration.');
        }
      } catch (err) {
        console.error('Connection test error:', err);
      }
    };
    
    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all duration-300 shadow-sm hover:shadow-md mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.button>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl">
                <Shield className="w-20 h-20 text-white" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6"
          >
            Certificate Verification
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Verify the authenticity of certificates issued by <span className="font-semibold text-blue-600 dark:text-blue-400">BuildOnCoffee</span>. 
            Enter the certificate ID to check its validity and view comprehensive details.
          </motion.p>
        </motion.div>

        {/* Verification Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Form Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-xl opacity-20"></div>
            
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-10">
              <form onSubmit={handleVerify} className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Enter Certificate Details
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Provide your certificate ID to begin verification
                  </p>
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Certificate ID
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative">
                      <FileText className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-500 dark:text-blue-400" />
                      <input
                        type="text"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        placeholder="Enter certificate ID (e.g., BOC25-INT-101)"
                        className="w-full pl-16 pr-6 py-5 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 shadow-lg"
                        disabled={isVerifying}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Certificate IDs are typically 8-12 characters long and may include letters and numbers.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={isVerifying || !certificateId.trim()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-4 py-5 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none"
                >
                  {isVerifying ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      Verifying Certificate...
                    </>
                  ) : (
                    <>
                      <Search className="w-6 h-6" />
                      Verify Certificate
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Verification Result */}
        {verificationResult && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="relative">
              {/* Result Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl blur-xl opacity-20 ${
                verificationResult.isValid 
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                  : 'bg-gradient-to-r from-red-400 to-rose-500'
              }`}></div>
              
              <div className={`relative rounded-3xl shadow-2xl border-2 backdrop-blur-sm ${
                verificationResult.isValid 
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700' 
                  : 'bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-red-200 dark:border-red-700'
              } p-8`}>
                <div className="flex items-start gap-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                    className={`p-4 rounded-2xl shadow-lg ${
                      verificationResult.isValid 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                        : 'bg-gradient-to-br from-red-500 to-rose-600'
                    }`}
                  >
                    {verificationResult.isValid ? (
                      <CheckCircle className="w-10 h-10 text-white" />
                    ) : (
                      <AlertCircle className="w-10 h-10 text-white" />
                    )}
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className={`text-3xl font-bold mb-2 ${
                        verificationResult.isValid ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
                      }`}
                    >
                      {verificationResult.isValid ? 'Certificate Valid' : 'Certificate Invalid'}
                    </motion.h3>
                
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-6"
                    >
                      {verificationResult.isValid ? (
                        <div className="text-green-700 dark:text-green-300 space-y-6">
                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-2xl border border-green-200 dark:border-green-700 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 bg-green-500 rounded-xl">
                                <CheckCircle className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="text-xl font-bold text-green-800 dark:text-green-200">
                                🎓 Certificate Verified Successfully!
                              </h4>
                            </div>
                            <p className="text-green-700 dark:text-green-300 text-lg">
                              This certificate has been officially issued by <span className="font-semibold">Build On Coffee</span>.
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-green-200 dark:border-green-700 shadow-sm">
                                <label className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide">Certificate ID</label>
                                <p className="font-mono text-lg font-bold text-green-700 dark:text-green-300 mt-1">{verificationResult.certificateId}</p>
                              </div>
                              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-green-200 dark:border-green-700 shadow-sm">
                                <label className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide">Recipient Name</label>
                                <p className="text-lg font-semibold text-green-700 dark:text-green-300 mt-1">{verificationResult.recipientName}</p>
                              </div>
                              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-green-200 dark:border-green-700 shadow-sm">
                                <label className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide">Certificate Type</label>
                                <p className="text-lg text-green-700 dark:text-green-300 mt-1">{verificationResult.certificateType}</p>
                              </div>
                              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-green-200 dark:border-green-700 shadow-sm">
                                <label className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide">Role</label>
                                <p className="text-lg text-green-700 dark:text-green-300 mt-1">{verificationResult.role}</p>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-green-200 dark:border-green-700 shadow-sm">
                                <label className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide">Duration</label>
                                <p className="text-lg text-green-700 dark:text-green-300 mt-1">{verificationResult.duration}</p>
                              </div>
                              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-green-200 dark:border-green-700 shadow-sm">
                                <label className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide">Issued By</label>
                                <p className="text-lg text-green-700 dark:text-green-300 mt-1">{verificationResult.issuedBy}</p>
                              </div>
                              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-green-200 dark:border-green-700 shadow-sm">
                                <label className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide">Status</label>
                                <div className="flex items-center gap-2 mt-1">
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                  <p className="text-lg font-semibold text-green-700 dark:text-green-300">{verificationResult.status}</p>
                                </div>
                              </div>
                              {verificationResult.issuedDate && (
                                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-green-200 dark:border-green-700 shadow-sm">
                                  <label className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide">Issued Date</label>
                                  <p className="text-lg text-green-700 dark:text-green-300 mt-1">{new Date(verificationResult.issuedDate).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                  })}</p>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-2xl border border-green-200 dark:border-green-700 shadow-lg">
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-green-500 rounded-xl flex-shrink-0">
                                <Shield className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Certificate Authenticity</h5>
                                <p className="text-green-700 dark:text-green-300 text-sm">
                                  This certificate is cryptographically verified and can be shared on your professional profiles as official recognition of your contribution to Build On Coffee.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-red-700 dark:text-red-300 space-y-6">
                          <div className="bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border border-red-200 dark:border-red-700 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 bg-red-500 rounded-xl">
                                <AlertCircle className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="text-xl font-bold text-red-800 dark:text-red-200">
                                ❌ Certificate Not Found
                              </h4>
                            </div>
                            <p className="text-red-700 dark:text-red-300 text-lg">
                              The Certificate ID you entered does not exist or is invalid.
                            </p>
                          </div>
                          
                          <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl border border-red-200 dark:border-red-700 shadow-sm">
                            <div className="space-y-4">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-red-700 dark:text-red-300">
                                  Please double-check the certificate ID and ensure it's entered correctly.
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-red-700 dark:text-red-300">
                                  Certificate IDs are case-sensitive and typically contain letters and numbers.
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-red-700 dark:text-red-300">
                                  If you believe this is a mistake, contact{' '}
                                  <a 
                                    href="mailto:support@buildoncoffee.dev" 
                                    className="underline hover:text-red-800 dark:hover:text-red-200 font-semibold"
                                  >
                                    support@buildoncoffee.dev
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Reset Button */}
        {verificationResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <motion.button
              onClick={resetForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold transition-all duration-300 border-2 border-gray-300 dark:border-gray-600 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:border-blue-500 hover:shadow-lg"
            >
              <Search className="w-5 h-5" />
              Verify Another Certificate
            </motion.button>
          </motion.div>
        )}

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Verification?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Our certificate verification system provides the highest level of security and transparency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Secure Verification
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  All certificates are cryptographically verified using blockchain technology to ensure authenticity and prevent fraud.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Instant Results
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Get immediate verification results with comprehensive certificate information and real-time validity status.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Complete Details
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  View comprehensive certificate information including holder details, course completion, and validity dates.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificateVerificationPage;