import { useState } from "react";
import "./Tabs.scss";
import { useLanguage } from "../LanguageContext/LanguageContext";
import translations from "../../data/translations.json";
import TabButtons from "./TabButtons/TabButtons";
import TabContent from "./TabContent/TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const { language } = useLanguage();
  const texts = translations[language];

  const handleSelectChange = (tabIndex, itemIndex, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [`${tabIndex}-${itemIndex}`]: value,
    }));
  };

  return (
    <div className="tab">
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent
        activeTab={activeTab}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        handleSelectChange={handleSelectChange}
        texts={texts}
      />
    </div>
  );
};

export default Tabs;
