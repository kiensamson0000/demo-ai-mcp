import React, { useRef, useState } from "react";
import "../assets/styles/settings.css";
import { FaCamera } from "react-icons/fa";

interface SettingsFormData {
  siteName: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  copyright: string;
  logo: File | null;
}

const Settings: React.FC = () => {
  const [formData, setFormData] = useState<SettingsFormData>({
    siteName: "Bright Web",
    seoTitle: "Bright web is a hybrid dashboard",
    seoDescription: "Bright web is a hybrid dashboard",
    seoKeywords: "CEO",
    copyright: "All rights Reserved@brightweb",
    logo: null,
  });

  const [logoPreview, setLogoPreview] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        logo: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleUploadLogo = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="px-8 py-6">
      <h1 className="text-[#202224] text-3xl font-bold mb-8">
        General Settings
      </h1>

      <div className="bg-white rounded-xl border border-[#B9B9B9] shadow-[6px_6px_54px_0px_rgba(0,0,0,0.03)] px-40 py-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-3">
            <div
              className="rounded-full bg-[#ECECEE] w-20 h-20 relative"
              onClick={handleUploadLogo}
            >
              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="Logo preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <FaCamera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-2xl" />
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              id="logo-upload"
              name="logo"
              accept="image/*"
              onChange={handleLogoChange}
              className="hidden-input"
            />
            <label
              htmlFor="logo-upload"
              className="font-bold text-[#4379EE] text-sm"
            >
              Upload Logo
            </label>
          </div>

          <div className="grid grid-cols-2 gap-14">
            <div className="flex flex-col gap-y-8">
              <div className="form-group">
                <label htmlFor="siteName">Site Name</label>
                <input
                  type="text"
                  id="siteName"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleInputChange}
                  placeholder="Enter site name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="seoTitle">SEO Title</label>
                <input
                  type="text"
                  id="seoTitle"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleInputChange}
                  placeholder="Enter SEO title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="seoKeywords">SEO Keywords</label>
                <input
                  type="text"
                  id="seoKeywords"
                  name="seoKeywords"
                  value={formData.seoKeywords}
                  onChange={handleInputChange}
                  placeholder="Enter SEO keywords"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="form-group">
                <label htmlFor="copyright">Copyright</label>
                <input
                  type="text"
                  id="copyright"
                  name="copyright"
                  value={formData.copyright}
                  onChange={handleInputChange}
                  placeholder="Enter copyright text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="seoDescription">SEO Description</label>
                <textarea
                  id="seoDescription"
                  name="seoDescription"
                  value={formData.seoDescription}
                  onChange={handleInputChange}
                  placeholder="Enter SEO description"
                  rows={4}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-40 bg-[#4379EE] text-white font-bold py-3 px-6 rounded-md hover:-translate-y-[2px] hover:shadow-[0_4px_8px_rgba(67,121,238,0.2)] hover:bg-[#3668d8] transition duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Settings;
