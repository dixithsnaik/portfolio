import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Download, X } from 'lucide-react';

const Resume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      const url = URL.createObjectURL(file);
      setResumeUrl(url);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleRemove = () => {
    if (resumeUrl) {
      URL.revokeObjectURL(resumeUrl);
    }
    setResumeFile(null);
    setResumeUrl(null);
  };

  const handleDownload = () => {
    if (resumeUrl) {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = resumeFile?.name || 'resume.pdf';
      link.click();
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">Resume</h2>
          <p className="text-zinc-400 text-lg">
            Upload and view your resume, or download it to share with potential employers.
          </p>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="border-2 border-dashed border-zinc-800 rounded-xl p-12 text-center hover:border-zinc-700 transition-colors">
            {!resumeFile ? (
              <div>
                <Upload className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <FileText size={18} />
                  <span>Upload Resume (PDF)</span>
                </label>
                <input
                  id="resume-upload"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <p className="text-sm text-zinc-500 mt-4">PDF files only, max 10MB</p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <FileText className="w-12 h-12 text-blue-400" />
                  <div className="text-left">
                    <p className="font-semibold text-white">{resumeFile.name}</p>
                    <p className="text-sm text-zinc-400">
                      {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    onClick={handleRemove}
                    className="ml-auto p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <X size={20} className="text-zinc-400" />
                  </button>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                  <label
                    htmlFor="resume-upload"
                    className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <Upload size={18} />
                    <span>Replace</span>
                  </label>
                  <input
                    id="resume-upload"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Preview Section */}
        {resumeUrl && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30"
          >
            <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
              <h3 className="font-semibold text-white">Resume Preview</h3>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Open in new tab
              </a>
            </div>
            <div className="h-[800px] overflow-auto">
              <iframe
                src={resumeUrl}
                className="w-full h-full border-0"
                title="Resume Preview"
              />
            </div>
          </motion.div>
        )}

        {/* Default Resume Link */}
        {!resumeFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl"
          >
            <h3 className="font-semibold text-white mb-2">View Default Resume</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Upload your resume PDF to view and manage it here. You can also download it anytime.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Resume;

