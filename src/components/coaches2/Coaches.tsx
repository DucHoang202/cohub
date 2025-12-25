import { useState, useRef, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Coaches: React.FC = () => {
    const dropDown = (<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.3395 6.02113C5.21898 6.02113 5.10681 6.00189 5.00298 5.96343C4.89913 5.92498 4.80041 5.85895 4.70683 5.76535L0.212605 1.27113C0.0741379 1.13268 0.00330482 0.958638 0.000104817 0.749028C-0.00311218 0.539428 0.0677218 0.362188 0.212605 0.217325C0.357474 0.072441 0.533104 0 0.739504 0C0.945904 0 1.12153 0.072441 1.2664 0.217325L5.3395 4.2904L9.41264 0.217325C9.55104 0.078858 9.72504 0.008025 9.93474 0.004825C10.1443 0.001608 10.3215 0.072441 10.4664 0.217325C10.6112 0.362188 10.6837 0.537828 10.6837 0.744228C10.6837 0.950628 10.6112 1.12626 10.4664 1.27113L5.97218 5.76535C5.87859 5.85895 5.77988 5.92498 5.67603 5.96343C5.57219 6.00189 5.46002 6.02113 5.3395 6.02113Z" fill="#4B5563" />
    </svg>);
    // const magnifier = (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M7.66659 13.9987C11.1644 13.9987 13.9999 11.1632 13.9999 7.66536C13.9999 4.16756 11.1644 1.33203 7.66659 1.33203C4.16878 1.33203 1.33325 4.16756 1.33325 7.66536C1.33325 11.1632 4.16878 13.9987 7.66659 13.9987Z" stroke="#2C2D2F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
    //     <path d="M14.6666 14.6654L13.3333 13.332" stroke="#2C2D2F" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
    // </svg>);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);

    const language = [
        "Tiếng Anh",
        "Tiếng Trung",
        "Tiếng Hàn",
    ]
    const sport = [
        "Pickleball",
        "Badminton",
        "Tennis",
        "Basketball",
        "Volleyball",
        "Table Tennis",
        "Badminton",
        "Tennis",
        "Basketball",
        "Volleyball",
        "Table Tennis",
        "Badminton",
        "Tennis",
        "Basketball",
        "Volleyball",
        "Table Tennis",
    ]
    const rating = [
        "5",
        "4",
        "3",
        "2",
        "1",
    ]
    const location = [
        "Hà Nội",
        "Hồ Chí Minh",
        "Đà Nẵng",
        "Nha Trang",
        "Hải Phòng",
        "Hạ Long",
    ]
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open4, setOpen4] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const dropdownRef1 = useRef<HTMLDivElement | null>(null);
    const dropdownRef2 = useRef<HTMLDivElement | null>(null);
    const dropdownRef4 = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
            if (dropdownRef1.current && !dropdownRef1.current.contains(e.target as Node)) {
                setOpen1(false);
            }
            if (dropdownRef2.current && !dropdownRef2.current.contains(e.target as Node)) {
                setOpen2(false);
            }
            if (dropdownRef4.current && !dropdownRef4.current.contains(e.target as Node)) {
                setOpen4(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const [searchLanguage, setSearchLanguage] = useState("Tất cả");
    const [searchSport, setSearchSport] = useState("Tất cả");
    const [searchRating, setSearchRating] = useState("Tất cả");
    const [searchLocation, setSearchLocation] = useState("Tất cả");
    const [searchPrice, setSearchPrice] = useState("Tất cả");
    const [searchType, setSearchType] = useState("Tất cả");
    const [searchName, setSearchName] = useState("");

    const coachesList = [
        {
            "name": "Nguyễn Văn A",
            "image": "/images/Testimonial.png",
            "sport": "Pickleball",
            "rating": "3.49",
            "ratingCount": "182",
            "students": "10",
            "description": "Senior UX designer at a leading design agency. I help designers improve their craft and advance their careers in design.",
            "price": "100000",
            "type": "Tất cả",
            "location": "Hà Nội",
            "language": "Tiếng Anh",
        },
        {
            "name": "Nguyễn Thị B",
            "image": "/images/feature.png",
            "sport": "Pickleball",
            "rating": "4.48",
            "ratingCount": "182",
            "students": "10",
            "description": "Senior UX designer at a leading design agency. I help designers improve their craft and advance their careers in design.",
            "price": "100000",
            "type": "Tất cả",
            "location": "Hồ Chí Minh",
            "language": "Tiếng Trung",
        }
    ]
    const filteredCoaches = coachesList.filter((coach: any) => {
        if (searchLanguage !== "Tất cả") {
            return coach.language === searchLanguage;
        }
        if (searchSport !== "Tất cả") {
            return coach.sport === searchSport;
        }
        if (searchRating !== "Tất cả") {
            return coach.rating === searchRating;
        }
        if (searchLocation !== "Tất cả") {
            return coach.location === searchLocation;
        }
        if (searchPrice !== "Tất cả") {
            return coach.price === searchPrice;
        }
        if (searchType !== "Tất cả") {
            return coach.type === searchType;
        }
        if (searchName !== "") {
            return coach.name.toLowerCase().includes(searchName.toLowerCase());
        }
        return true;
    })
    return (
        <div className="coaches2">
            <div className="coaches-list">
                <div className="coaches-left">
                    <div className="coaches-left__header">
                        <div className="left">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1665 3.41667V5.25C17.1665 5.91667 16.7498 6.75 16.3332 7.16667L12.7498 10.3333C12.2498 10.75 11.9165 11.5833 11.9165 12.25V15.8333C11.9165 16.3333 11.5832 17 11.1665 17.25L9.99982 18C8.91649 18.6667 7.41649 17.9167 7.41649 16.5833V12.1667C7.41649 11.5833 7.08316 10.8333 6.74982 10.4167L6.35816 10.0083C6.09982 9.73333 6.04982 9.31667 6.25816 8.99167L10.5248 2.14167C10.6748 1.9 10.9415 1.75 11.2332 1.75H15.4998C16.4165 1.75 17.1665 2.5 17.1665 3.41667Z" fill="#292D32" />
                                <path d="M8.62492 3.025L5.66659 7.76667C5.38325 8.225 4.73325 8.29167 4.35825 7.9L3.58325 7.08333C3.16659 6.66667 2.83325 5.91667 2.83325 5.41667V3.5C2.83325 2.5 3.58325 1.75 4.49992 1.75H7.91658C8.56659 1.75 8.96659 2.46667 8.62492 3.025Z" fill="#292D32" />
                            </svg>
                            Bộ lọc
                        </div>
                        <div className="right" onClick={() => {
                            setSearchLanguage("Tất cả");
                            setSearchSport("Tất cả");
                            setSearchRating("Tất cả");
                            setSearchLocation("Tất cả");
                            setSearchPrice("Tất cả");
                            setSearchType("Tất cả");
                        }}>
                            Xóa lọc
                        </div>
                    </div>
                    <div className="coaches-left__item">
                        <div className="title">
                            Bộ môn
                        </div>
                        <div className="coaches-left__dropdown" ref={dropdownRef} onClick={() => setOpen(!open)}>
                            {searchSport}                            {dropDown}
                            {open && (
                                <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
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
                            )}
                        </div>
                    </div>
                    <div className="coaches-left__item">
                        <div className="title">Địa điểm</div>
                        <div className="coaches-left__search" ref={dropdownRef4}>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.66659 13.9987C11.1644 13.9987 13.9999 11.1632 13.9999 7.66536C13.9999 4.16756 11.1644 1.33203 7.66659 1.33203C4.16878 1.33203 1.33325 4.16756 1.33325 7.66536C1.33325 11.1632 4.16878 13.9987 7.66659 13.9987Z"
                                    stroke="#2C2D2F"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.6666 14.6654L13.3333 13.332"
                                    stroke="#2C2D2F"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                value={searchLocation}
                                onFocus={() => setOpen4(true)}
                                onChange={(e) => setSearchLocation(e.target.value)}
                            />

                            {open4 && (
                                <div
                                    className="dropdown-menu"
                                    onMouseDown={(e) => e.preventDefault()} // tránh blur input
                                >
                                    {location
                                        .filter((item) =>
                                            item.toLowerCase().includes(searchLocation.toLowerCase())
                                        )
                                        .map((item) => (
                                            <div
                                                key={item}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setSearchLocation(item);
                                                    setOpen4(false);
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>

                        <div className="coaches-left__flex-gap-10">
                            <div className={`coaches-left__button ${searchLocation === "Hà Nội" ? "black" : ""}`} onClick={() => setSearchLocation("Hà Nội")}>
                                Hà Nội
                            </div>
                            <div className={`coaches-left__button ${searchLocation === "Hồ Chí Minh" ? "black" : ""}`} onClick={() => setSearchLocation("Hồ Chí Minh")}>
                                Hồ Chí Minh
                            </div>
                            <div className={`coaches-left__button ${searchLocation === "Đà Nẵng" ? "black" : ""}`} onClick={() => setSearchLocation("Đà Nẵng")}>
                                Đà Nẵng
                            </div>
                            <div className={`coaches-left__button ${searchLocation === "Nha Trang" ? "black" : ""}`} onClick={() => setSearchLocation("Nha Trang")}>
                                Nha Trang
                            </div>
                            <div className={`coaches-left__button ${searchLocation === "Hải Phòng" ? "black" : ""}`} onClick={() => setSearchLocation("Hải Phòng")}>
                                Hải Phòng
                            </div>
                            <div className={`coaches-left__button ${searchLocation === "Hạ Long" ? "black" : ""}`} onClick={() => setSearchLocation("Hạ Long")}>
                                Hạ Long
                            </div>

                        </div>
                    </div>
                    <div className="coaches-left__item">
                        <div className="title">Chi phí</div>
                        <Slider
                            range
                            min={0}
                            max={5000000}
                            defaultValue={[0, 5000000]}
                            onChange={(value) => {
                                setPriceRange(value as [number, number]);
                            }}
                        />

                        <div className="coaches-left__price">
                            <div className="left">{priceRange[0].toLocaleString("vi-VN")}đ</div>
                            <div className="right">{priceRange[1].toLocaleString("vi-VN")}đ</div>
                        </div>
                    </div>
                    <div className="coaches-left__item">
                        <div className="title">
                            Đánh giá
                        </div>
                        <div className="coaches-left__dropdown" onClick={() => setOpen1(!open1)} ref={dropdownRef1}>
                            {searchRating}
                            {dropDown}
                            {open1 && (
                                <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                    {rating.map((item) => (
                                        <div
                                            key={item}
                                            className="dropdown-item"
                                            onClick={() => {
                                                setSearchRating(item);
                                                setOpen1(false);
                                            }}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="coaches-left__item">
                        <div className="title">Hình thức học</div>
                        <div className="coaches-left__radio">
                            <input type="radio" onClick={() => setSearchType("Tất cả")} name="type" /><span>Tất cả</span>

                        </div>
                        <div className="coaches-left__radio">
                            <input type="radio" onClick={() => setSearchType("Huấn luyện 1:1")} name="type" /><span>Huấn luyện 1:1</span>

                        </div>
                        <div className="coaches-left__radio">
                            <input type="radio" onClick={() => setSearchType("Học ghép lớp")} name="type" /><span>Học ghép lớp</span>

                        </div>
                        <div className="coaches-left__radio">
                            <input type="radio" onClick={() => setSearchType("Học theo nhóm riêng")} name="type" /><span>Học theo nhóm riêng</span>

                        </div>
                    </div>
                    <div className="coaches-left__item" >
                        <div className="title">
                            Ngôn ngữ
                        </div>

                        <div className="coaches-left__dropdown" onClick={() => setOpen2(!open2)} ref={dropdownRef2}>
                            {searchLanguage} {dropDown}

                            {open2 && (
                                <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                                    {language.map((item) => (
                                        <div
                                            key={item}
                                            className="dropdown-item"
                                            onClick={() => {
                                                setSearchLanguage(item);
                                                setOpen2(false);
                                            }}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="coaches-left__flex-gap-10">
                            <div className={`coaches-left__button ${searchLanguage === "Tiếng Anh" ? "black" : ""}`} onClick={() => setSearchLanguage("Tiếng Anh")}>
                                Tiếng Anh
                            </div>
                            <div className={`coaches-left__button ${searchLanguage === "Tiếng Trung" ? "black" : ""}`} onClick={() => setSearchLanguage("Tiếng Trung")}>
                                Tiếng Trung
                            </div>
                            <div className={`coaches-left__button ${searchLanguage === "Tiếng Hàn" ? "black" : ""}`} onClick={() => setSearchLanguage("Tiếng Hàn")}>
                                Tiếng Hàn
                            </div>

                        </div>
                    </div>
                </div>
                <div className="coaches-right">
                    <div className="coaches-right__header">
                        <div className="title">Danh sách huấn luyện viên ({filteredCoaches.length})</div>
                        <div className="item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.58329 17.5013C13.9555 17.5013 17.5 13.9569 17.5 9.58464C17.5 5.21238 13.9555 1.66797 9.58329 1.66797C5.21104 1.66797 1.66663 5.21238 1.66663 9.58464C1.66663 13.9569 5.21104 17.5013 9.58329 17.5013Z" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.3333 18.3346L16.6666 16.668" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <input type="text" placeholder="Tìm kiếm" onChange={(e) => setSearchName(e.target.value)} />
                        </div>
                        <div className="item">
                            Sắp xếp mặc định {dropDown}
                        </div>
                    </div>
                    {filteredCoaches.map((coach: any, index: number) => (
                        <div key={index} className="coaches-right__card">
                            <img src={coach.image} alt="" className="coaches-right__card--image" />
                            <div className="coaches-right__card--container">
                                <div className="content">
                                    <div className="top">
                                        <div className="title">{coach.name}<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.56 10.7425L20.2 9.1625C19.94 8.8625 19.73 8.3025 19.73 7.9025V6.2025C19.73 5.1425 18.86 4.2725 17.8 4.2725H16.1C15.71 4.2725 15.14 4.0625 14.84 3.8025L13.26 2.4425C12.57 1.8525 11.44 1.8525 10.74 2.4425L9.17 3.8125C8.87 4.0625 8.3 4.2725 7.91 4.2725H6.18C5.12 4.2725 4.25 5.1425 4.25 6.2025V7.9125C4.25 8.3025 4.04 8.8625 3.79 9.1625L2.44 10.7525C1.86 11.4425 1.86 12.5625 2.44 13.2525L3.79 14.8425C4.04 15.1425 4.25 15.7025 4.25 16.0925V17.8025C4.25 18.8625 5.12 19.7325 6.18 19.7325H7.91C8.3 19.7325 8.87 19.9425 9.17 20.2025L10.75 21.5625C11.44 22.1525 12.57 22.1525 13.27 21.5625L14.85 20.2025C15.15 19.9425 15.71 19.7325 16.11 19.7325H17.81C18.87 19.7325 19.74 18.8625 19.74 17.8025V16.1025C19.74 15.7125 19.95 15.1425 20.21 14.8425L21.57 13.2625C22.15 12.5725 22.15 11.4325 21.56 10.7425ZM16.16 10.1125L11.33 14.9425C11.19 15.0825 11 15.1625 10.8 15.1625C10.6 15.1625 10.41 15.0825 10.27 14.9425L7.85 12.5225C7.56 12.2325 7.56 11.7525 7.85 11.4625C8.14 11.1725 8.62 11.1725 8.91 11.4625L10.8 13.3525L15.1 9.0525C15.39 8.7625 15.87 8.7625 16.16 9.0525C16.45 9.3425 16.45 9.8225 16.16 10.1125Z" fill="#2EB16F" />
                                        </svg>
                                        </div>
                                        <div className="right">
                                            <div className="feat orange">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.15339 2.33781L10.3267 4.68448C10.4867 5.01115 10.9134 5.32448 11.2734 5.38448L13.4001 5.73781C14.7601 5.96448 15.0801 6.95115 14.1001 7.92448L12.4467 9.57781C12.1667 9.85781 12.0134 10.3978 12.1001 10.7845L12.5734 12.8311C12.9467 14.4511 12.0867 15.0778 10.6534 14.2311L8.66006 13.0511C8.30006 12.8378 7.70673 12.8378 7.34006 13.0511L5.34673 14.2311C3.92006 15.0778 3.05339 14.4445 3.42673 12.8311L3.90006 10.7845C3.98673 10.3978 3.83339 9.85781 3.55339 9.57781L1.90006 7.92448C0.926728 6.95115 1.24006 5.96448 2.60006 5.73781L4.72673 5.38448C5.08006 5.32448 5.50673 5.01115 5.66673 4.68448L6.84006 2.33781C7.48006 1.06448 8.52006 1.06448 9.15339 2.33781Z" fill="#FF6422" />
                                                </svg>
                                                Top Rated</div>
                                            <div className="feat blue"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99988 9.9987C10.4852 9.9987 12.4999 8.0586 12.4999 5.66536C12.4999 3.27213 10.4852 1.33203 7.99988 1.33203C5.5146 1.33203 3.49988 3.27213 3.49988 5.66536C3.49988 8.0586 5.5146 9.9987 7.99988 9.9987Z" fill="#3A6BFF" />
                                                <path d="M10.5265 10.4074C10.7465 10.294 10.9999 10.4607 10.9999 10.7074V13.9407C10.9999 14.5407 10.5799 14.834 10.0599 14.5874L8.27321 13.7407C8.11988 13.674 7.87988 13.674 7.72654 13.7407L5.93988 14.5874C5.41988 14.8274 4.99988 14.534 4.99988 13.934L5.01321 10.7074C5.01321 10.4607 5.27321 10.3007 5.48654 10.4074C6.23988 10.7874 7.09321 11.0007 7.99988 11.0007C8.90654 11.0007 9.76654 10.7874 10.5265 10.4074Z" fill="#3A6BFF" />
                                            </svg>
                                                Professional Coach</div>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <div className="item">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_194_51730)">
                                                    <path d="M7.69297 13.2191L3.8026 15.5652C3.65773 15.6499 3.51255 15.6854 3.36705 15.672C3.22153 15.6585 3.0898 15.6095 2.97185 15.5249C2.85391 15.4403 2.7629 15.3297 2.6988 15.1931C2.63468 15.0566 2.62442 14.9057 2.66802 14.7403L3.7007 10.323L0.266098 7.34992C0.137898 7.23839 0.0561724 7.10923 0.0209224 6.96245C-0.0143276 6.81565 -0.00503575 6.67302 0.0487976 6.53457C0.102648 6.39611 0.180214 6.28297 0.281498 6.19515C0.382781 6.10733 0.521239 6.04996 0.696873 6.02305L5.22955 5.6269L6.98915 1.45575C7.05325 1.30063 7.15036 1.18589 7.28047 1.11152C7.41061 1.03717 7.54811 1 7.69297 1C7.83784 1 7.97534 1.03717 8.10547 1.11152C8.23559 1.18589 8.3327 1.30063 8.3968 1.45575L10.1564 5.6269L14.6891 6.02305C14.8647 6.04996 15.0032 6.10733 15.1044 6.19515C15.2057 6.28297 15.2833 6.39611 15.3371 6.53457C15.391 6.67302 15.4003 6.81565 15.365 6.96245C15.3298 7.10923 15.248 7.23839 15.1198 7.34992L11.6852 10.323L12.7179 14.7403C12.7615 14.9057 12.7513 15.0566 12.6871 15.1931C12.623 15.3297 12.532 15.4403 12.4141 15.5249C12.2961 15.6095 12.1644 15.6585 12.0189 15.672C11.8734 15.6854 11.7282 15.6499 11.5833 15.5652L7.69297 13.2191Z" fill="#F4B43F" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_194_51730">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>{coach.rating}</span>
                                            <span className="normal">({coach.ratingCount})</span>
                                        </div>
                                        <div className="item">
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.443 12.1667V6.41667L9.94303 10.5L0.776367 5.5L9.94303 0.5L19.1097 5.5V12.1667H17.443ZM9.94303 15.5L4.1097 12.3333V8.16667L9.94303 11.3333L15.7764 8.16667V12.3333L9.94303 15.5Z" fill="#F4B43F" />
                                            </svg>
                                            <span>{coach.students}</span>
                                        </div>
                                        <div className="item">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.7466 5.63463C13.0466 2.55464 10.3599 1.16797 7.99994 1.16797C7.99994 1.16797 7.99994 1.16797 7.99327 1.16797C5.63994 1.16797 2.94661 2.54797 2.24661 5.62797C1.46661 9.06797 3.57328 11.9813 5.47994 13.8146C6.18661 14.4946 7.09328 14.8346 7.99994 14.8346C8.90661 14.8346 9.81328 14.4946 10.5133 13.8146C12.4199 11.9813 14.5266 9.07463 13.7466 5.63463ZM7.99994 8.97464C6.83994 8.97464 5.89994 8.03464 5.89994 6.87464C5.89994 5.71464 6.83994 4.77464 7.99994 4.77464C9.15994 4.77464 10.0999 5.71464 10.0999 6.87464C10.0999 8.03464 9.15994 8.97464 7.99994 8.97464Z" fill="#F4B43F" />
                                            </svg>
                                            <span>{coach.location}</span>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        {coach.description}
                                    </div>
                                </div>
                                <div className="price">
                                    <div className="left">
                                        <div className="title">Chỉ từ</div>
                                        <div className="bottom "><span className="bottom green">{coach.price.toLocaleString("vi-VN")}</span>₫ /giờ</div>
                                    </div>
                                    <div className="right">
                                        <div className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M3 9.00151V6.33151C3 3.01651 5.3475 1.65901 8.22 3.31651L10.5375 4.65151L12.855 5.98651C15.7275 7.64401 15.7275 10.359 12.855 12.0165L10.5375 13.3515L8.22 14.6865C5.3475 16.344 3 14.9865 3 11.6715V9.00151Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>Giới thiệu</div>
                                        <div className="btn green">
                                            Đặt lịch
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="find-more__container">
                <div className="find-more__banner">
                    <div className="title">Nếu bạn đã sẵn sàng bứt phá, <br></br><span className='green'>hãy bắt đầu ngay thôi</span></div>
                    <div className="button"> Tìm kiếm huấn luyện viên</div>
                </div>
            </div>
        </div>
    );
}
export default Coaches;