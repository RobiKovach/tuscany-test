import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../../../data/products.json";
import SearchButton from "../SearchButton/SearchButton";

const TabContent = ({
  activeTab,
  selectedOptions,
  setSelectedOptions,
  handleSelectChange,
  texts,
}) => {
  const availableTimes = products[0]?.availableTimes || [];
  const navigate = useNavigate();

  // 🔄 Очищати вибрані поля при зміні активного табу
  useEffect(() => {
    setSelectedOptions({});
  }, [activeTab, setSelectedOptions]);

  const handleSearch = () => {
    const params = new URLSearchParams();

    Object.entries(selectedOptions).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });

    if (activeTab === 1) {
      params.append("private", "true");
      if (selectedOptions["0-3"]) {
        params.append("type", selectedOptions["0-3"]);
      }
      if (selectedOptions["0-2"]) {
        params.append("tour", selectedOptions["0-2"]);
      }
      if (selectedOptions["0-1"]) {
        params.append("time", selectedOptions["0-1"]);
      }
    } else {
      if (selectedOptions["0-4"]) {
        params.append("transportation", selectedOptions["0-4"]);
      }
      if (selectedOptions["0-3"]) {
        params.append("tour", selectedOptions["0-3"]);
      }
      if (selectedOptions["0-2"]) {
        params.append("time", selectedOptions["0-2"]);
      }
    }

    navigate(`/search-results?${params.toString()}`);
  };

  const createTabItems = (isPrivate) => {
    const items = [
      {
        title: (
          <>
            <img
              className="tab__item-icon"
              src={`${process.env.PUBLIC_URL}/img/icon-date.svg`}
              alt="Icon"
            />
            <span className="tab__item-title">{texts.Date}</span>
          </>
        ),
        type: "date",
        placeholder: texts.select_date,
      },
      {
        title: (
          <>
            <img
              className="tab__item-icon"
              src={`${process.env.PUBLIC_URL}/img/icon-time.svg`}
              alt="Icon"
            />
            <span className="tab__item-title">{texts.Time}</span>
          </>
        ),
        options:
          availableTimes.length > 0
            ? availableTimes
            : [texts.no_times_available],
        placeholder: texts.select_time,
      },
      {
        title: (
          <>
            <img
              className="tab__item-icon"
              src={`${process.env.PUBLIC_URL}/img/icon-tour.svg`}
              alt="Icon"
            />
            <span className="tab__item-title">{texts.Tour}</span>
          </>
        ),
        options: products.map((product) => {
          const englishName = product.name;
          const translatedName =
            texts.tour_names[englishName.replace(/\s+/g, "_").toLowerCase()] ||
            englishName;
          return translatedName;
        }),
        placeholder: texts.ChooseOption,
      },
    ];

    if (!isPrivate) {
      items.unshift({
        title: (
          <>
            <img
              className="tab__item-icon"
              src={`${process.env.PUBLIC_URL}/img/public-people.svg`}
              alt="Icon"
            />
            <span className="tab__item-title">{texts.NumberOfPeople}</span>
          </>
        ),
        options: ["1", "2", "3", "4", "5", "6", texts.More],
        placeholder: texts.ChooseOption,
      });

      items.push({
        title: (
          <>
            <img
              className="tab__item-icon"
              src={`${process.env.PUBLIC_URL}/img/icon-car.svg`}
              alt="Icon"
            />
            <span className="tab__item-title">{texts.Transportation}</span>
          </>
        ),
        options: [
          texts.MinivanAndBus,
          texts.TransfersNCC,
          texts.LuxuryExperience,
        ],
        placeholder: texts.ChooseOption,
      });
    } else {
      items.push({
        title: (
          <>
            <img
              className="tab__item-icon"
              src={`${process.env.PUBLIC_URL}/img/icon-type.svg`}
              alt="Icon"
            />
            <span className="tab__item-title">{texts.Types}</span>
          </>
        ),
        options: [texts.Bikes, texts.Tourism, texts.AllInclusive],
        placeholder: texts.ChooseOption,
      });
    }

    return items;
  };

  return (
    <div className="tab__content">
      <div className="tab__content-box">
        {createTabItems(activeTab === 1).map((tab, index) => (
          <div key={index} className="tab__item item-tab">
            <div className="item-tab__info">
              <div className="item-tab__title">{tab.title}</div>
              <div className="item-tab__select">
                {tab.type === "date" ? (
                  <input
                    type="date"
                    value={selectedOptions[`0-${index}`] || ""}
                    onChange={(e) =>
                      handleSelectChange(0, index, e.target.value)
                    }
                    placeholder={tab.placeholder} // 📌 Додаємо підказку до інпуту
                  />
                ) : (
                  <select
                    value={selectedOptions[`0-${index}`] || ""}
                    onChange={(e) =>
                      handleSelectChange(0, index, e.target.value)
                    }
                  >
                    {/* 🟢 Підказка (перший елемент списку) */}
                    <option value="">{tab.placeholder}</option>

                    {tab.options.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <SearchButton onSearch={handleSearch} texts={texts} />
    </div>
  );
};

export default TabContent;
