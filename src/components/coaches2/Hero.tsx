import { useState } from "react";
const Hero: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const [searchSport, setSearchSport] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [searchGender, setSearchGender] = useState("");
    const [searchLanguage, setSearchLanguage] = useState("");
    const sport = ["All", "Pickleball", "Yoga", "Gym & Fitness", "Tennis", "Golf", "Football", "Basketball"];
    const location = ["All", "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
    const gender = ["All", "Male", "Female", "Other"];
    const language = ["All", "English", "Spanish", "French", "German", "Italian", "Portuguese", "Russian", "Chinese", "Japanese", "Korean"];
    const data = (<svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
        <path d="M5.65579 6.51057C5.53527 6.51057 5.4231 6.49133 5.31927 6.45287C5.21542 6.41442 5.1167 6.34839 5.02312 6.25479L0.528889 1.76057C0.390422 1.62212 0.319589 1.44808 0.316389 1.23847C0.313172 1.02887 0.384006 0.851629 0.528889 0.706766C0.673758 0.561882 0.849388 0.489441 1.05579 0.489441C1.26219 0.489441 1.43782 0.561882 1.58269 0.706766L5.65579 4.77984L9.72893 0.706766C9.86733 0.568299 10.0413 0.497466 10.251 0.494266C10.4606 0.491049 10.6378 0.561882 10.7827 0.706766C10.9275 0.851629 11 1.02727 11 1.23367C11 1.44007 10.9275 1.6157 10.7827 1.76057L6.28847 6.25479C6.19488 6.34839 6.09617 6.41442 5.99232 6.45287C5.88848 6.49133 5.77631 6.51057 5.65579 6.51057Z" fill="white" fill-opacity="0.3" />
    </svg>);

    return (
        <section className="feature-hero">
            <div className="feature-hero__container">
                <div className="feature-hero__content coaches">
                    <div className="feature-hero__title">
                        {searchSport}                    </div>
                    <div className="feature-hero__buttons coaches">
                        <div className="left">
                            <div className="search-bar" onClick={() => setOpen(!open)}> <div className="text">
                                {searchSport || "Fitness & Gym"}                             </div>
                                <div className="dropdownIcon">
                                    {data}
                                </div>
                                {open && (
                                    <div className="dropdown-menu">
                                        {sport.map((item) => (
                                            <div
                                                key={item}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setSearchSport(item);
                                                    setOpen(false);
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}</div>
                            <div className="search-bar" onClick={() => setOpen2(!open2)}> <div className="text">
                                {searchLocation || "Khu vực"}                             </div>
                                <div className="dropdownIcon">
                                    {data}
                                </div>
                                {open2 && (
                                    <div className="dropdown-menu">
                                        {location.map((item) => (
                                            <div
                                                key={item}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setSearchLocation(item);
                                                    setOpen2(false);
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}</div>
                            <div className="search-bar" onClick={() => setOpen3(!open3)}> <div className="text">
                                {searchGender || "Giới tính"}                             </div>
                                <div className="dropdownIcon">
                                    {data}
                                </div>
                                {open3 && (
                                    <div className="dropdown-menu">
                                        {gender.map((item) => (
                                            <div
                                                key={item}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setSearchGender(item);
                                                    setOpen3(false);
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}</div>
                            <div className="search-bar" onClick={() => setOpen4(!open4)}> <div className="text">
                                {searchLanguage || "Ngôn ngữ"}                             </div>
                                <div className="dropdownIcon">
                                    {data}
                                </div>
                                {open4 && (
                                    <div className="dropdown-menu">
                                        {language.map((item) => (
                                            <div
                                                key={item}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setSearchLanguage(item);
                                                    setOpen4(false);
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}</div>

                        </div>
                        <div className="search-bar"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;