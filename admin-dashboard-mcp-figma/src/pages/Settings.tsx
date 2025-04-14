import React, { useState } from "react";
import "../assets/styles/settings.css";

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

  return (
    <div className="settings-page">
      <h1 className="settings-title">General Settings</h1>

      <div className="settings-form-container">
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="logo-upload-section">
            <h3>Upload Logo</h3>
            <div className="logo-upload-area">
              {logoPreview ? (
                <div className="logo-preview">
                  <img src={logoPreview} alt="Logo preview" />
                </div>
              ) : (
                <div className="logo-placeholder">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="#4880FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#4880FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="#4880FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    Drag and drop your logo here or{" "}
                    <label htmlFor="logo-upload" className="browse-link">
                      browse
                    </label>
                  </p>
                </div>
              )}
              <input
                type="file"
                id="logo-upload"
                name="logo"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden-input"
              />
            </div>
          </div>

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

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
