// src/app/upload/page.tsx
'use client';

import React, { useState, ChangeEvent, DragEvent } from 'react';
import { UploadCloud, FileText, Tag, Image as ImageIcon } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>, dragging: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(dragging);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      // You can add file type validation here
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., upload to Firebase Storage, save metadata to Firestore)
    console.log('Uploading photo...');
  };

  return (
    <div className="bg-[#161618] min-h-screen p-4 sm:p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-white mb-8">Upload Your Moment</h1>
        
        <form onSubmit={handleSubmit} className="bg-[#1e1e21] p-8 rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Image Upload and Preview */}
          <div 
            className={`relative flex flex-col items-center justify-center w-full h-96 lg:h-full border-2 border-dashed rounded-lg transition-colors ${isDragging ? 'border-yellow-400 bg-[#2a2a2e]' : 'border-gray-700'}`}
            onDragEnter={(e) => handleDrag(e, true)}
            onDragLeave={(e) => handleDrag(e, false)}
            onDragOver={(e) => handleDrag(e, true)}
            onDrop={handleDrop}
          >
            {preview ? (
              <>
                <img src={preview} alt="Preview" className="w-full h-full object-contain rounded-lg" />
                <button 
                  type="button"
                  onClick={() => setPreview(null)}
                  className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1.5 hover:bg-red-500 transition-colors"
                >
                  &times;
                </button>
              </>
            ) : (
              <div className="text-center text-gray-400">
                <UploadCloud size={64} className="mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-white">Drag & Drop your photo here</h2>
                <p className="mt-2">or</p>
                <label htmlFor="file-upload" className="mt-2 inline-block cursor-pointer bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                  Browse Files
                </label>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
              </div>
            )}
          </div>

          {/* Right Column: Photo Details */}
          <div className="flex flex-col space-y-6">
            <div>
              <label htmlFor="title" className="block text-lg font-semibold text-white mb-2">Title</label>
              <Input id="title" name="title" type="text" placeholder="e.g., Sunset over the Rockies" icon={<ImageIcon size={18} />} required />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-lg font-semibold text-white mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                className="w-full bg-[#2a2a2e] border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Tell us a little about your photo..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="tags" className="block text-lg font-semibold text-white mb-2">Tags</label>
              <Input id="tags" name="tags" type="text" placeholder="e.g., mountains, nature, sunset" icon={<Tag size={18} />} />
              <p className="text-xs text-gray-500 mt-2">Separate tags with commas.</p>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full py-3 text-lg">
                Upload Photo
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
