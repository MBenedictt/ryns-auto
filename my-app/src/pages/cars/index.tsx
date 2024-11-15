import CheckboxOption from "@/components/CheckBoxOption";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from 'react';
import { Car } from "@/interfaces/carTypes";
import CarCard from "@/components/CarCard";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/components/Footer";

const carModels = [
    { id: 'model1', label: 'SUV' },
    { id: 'model2', label: 'MPV' },
    { id: 'model3', label: 'Sedan' },
    { id: 'model4', label: 'Electric' },
];

const carMakes = [
    { id: 'make1', label: 'Toyota' },
    { id: 'make2', label: 'Honda' },
    { id: 'make3', label: 'Mitsubishi' },
    { id: 'make4', label: 'Nissan' },
    { id: 'make5', label: 'Suzuki' },
    { id: 'make6', label: 'BMW' },
    { id: 'make7', label: 'Mercedes' },
    { id: 'make8', label: 'Hyundai' },
    { id: 'make9', label: 'KIA' }
];

const carYears = [
    { id: 'year1', label: '2020 - 2024' },
    { id: 'year2', label: '2015 - 2019' },
    { id: 'year3', label: '2010 - 2014' },
    { id: 'year4', label: 'Below 2009' }
];

const carPrices = [
    { id: 'price1', label: 'Above Rp. 1 Billion' },
    { id: 'price2', label: 'Rp. 900 Million - Rp. 500 Million' },
    { id: 'price3', label: 'Rp. 400 Million - Rp. 200 Million' },
    { id: 'price4', label: 'Below Rp. 100 Million' }
];

export default function Cars() {
    const [cars, setCars] = useState<Car[]>([]);
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // State to track selected filters
    const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
    const [selectedModels, setSelectedModels] = useState<string[]>([]);
    const [selectedYears, setSelectedYears] = useState<string[]>([]);
    const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

    useEffect(() => {
        fetch('json/cars.json')
            .then((response) => response.json())
            .then((data: Car[]) => {
                setCars(data);
                setFilteredCars(data);
            })
            .catch((error) => console.error('Error fetching car data:', error));
    }, []);

    // Update filtered cars whenever filter selections change
    useEffect(() => {
        filterCars();
    }, [selectedMakes, selectedModels, selectedYears, selectedPrices]);

    const handleCheckboxChange = (category: string, value: string) => {
        // Update the selected filters based on the category
        const updateSelected = (selectedArray: string[], value: string) => {
            return selectedArray.includes(value)
                ? selectedArray.filter((item) => item !== value)
                : [...selectedArray, value];
        };

        if (category === 'make') {
            setSelectedMakes(updateSelected(selectedMakes, value));
        } else if (category === 'model') {
            setSelectedModels(updateSelected(selectedModels, value));
        } else if (category === 'year') {
            setSelectedYears(updateSelected(selectedYears, value));
        } else if (category === 'price') {
            setSelectedPrices(updateSelected(selectedPrices, value));
        }
    };

    const filterCars = () => {
        let filtered = cars;

        // Filter by make
        if (selectedMakes.length > 0) {
            filtered = filtered.filter((car) => selectedMakes.includes(car.make));
        }

        // Filter by model
        if (selectedModels.length > 0) {
            filtered = filtered.filter((car) => selectedModels.includes(car.model));
        }

        // Filter by year (using ranges for simplicity)
        if (selectedYears.length > 0) {
            filtered = filtered.filter((car) => {
                return selectedYears.some((year) => {
                    const carYear = parseInt(car.year); // Convert year to number for comparison
                    if (year === 'year1') return carYear >= 2020 && carYear <= 2024;
                    if (year === 'year2') return carYear >= 2015 && carYear <= 2019;
                    if (year === 'year3') return carYear >= 2010 && carYear <= 2014;
                    if (year === 'year4') return carYear < 2010;
                    return false;
                });
            });
        }

        // Filter by price range
        if (selectedPrices.length > 0) {
            filtered = filtered.filter((car) => {
                return selectedPrices.some((price) => {
                    const carPrice = Number(car.price); // Convert price to number for comparison
                    if (price === 'price1') return carPrice > 1000000000;
                    if (price === 'price2') return carPrice >= 500000000 && carPrice <= 900000000;
                    if (price === 'price3') return carPrice >= 200000000 && carPrice <= 400000000;
                    if (price === 'price4') return carPrice < 100000000;
                    return false;
                });
            });
        }

        setFilteredCars(filtered);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCars = filteredCars.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

    return (
        <div>
            <Navbar />
            <div className="w-full mt-[80px] p-5">
                <h1 className="font-medium text-lg mb-5">Home &rarr; Cars</h1>
                <div className="w-full flex gap-5">
                    <div className="w-3/12 border rounded-lg p-5 h-fit max-md:hidden">
                        <h1 className="font-bold text-xl pb-4 border-b border-neutral-300">Filters</h1>
                        <div>
                            <h1 className="text-md py-3">Models</h1>
                            <div className="grid grid-cols-2 gap-3 max-[991px]:grid-cols-1">
                                {carModels.map((model) => (
                                    <CheckboxOption
                                        key={model.id}
                                        id={model.id}
                                        label={model.label}
                                        onChange={() => handleCheckboxChange('model', model.label)}
                                    />
                                ))}
                            </div>
                            <h1 className="text-md py-3">Makes</h1>
                            <div className="grid grid-cols-2 gap-3 max-[991px]:grid-cols-1">
                                {carMakes.map((make) => (
                                    <CheckboxOption
                                        key={make.id}
                                        id={make.id}
                                        label={make.label}
                                        onChange={() => handleCheckboxChange('make', make.label)}
                                    />
                                ))}
                            </div>
                            <h1 className="text-md py-3">Years</h1>
                            <div className="grid grid-cols-1 gap-3">
                                {carYears.map((year) => (
                                    <CheckboxOption
                                        key={year.id}
                                        id={year.id}
                                        label={year.label}
                                        onChange={() => handleCheckboxChange('year', year.id)}
                                    />
                                ))}
                            </div>
                            <h1 className="text-md py-3">Prices</h1>
                            <div className="grid grid-cols-1 gap-3">
                                {carPrices.map((price) => (
                                    <CheckboxOption
                                        key={price.id}
                                        id={price.id}
                                        label={price.label}
                                        onChange={() => handleCheckboxChange('price', price.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-9/12 max-md:w-full">
                        <h1 className="font-bold text-4xl pb-5">Cars for sale</h1>
                        <button className="bg-neutral-100 hover:bg-neutral-300 border-2 border-slate-300 py-2 px-5 font-semibold text-md rounded">
                            <FontAwesomeIcon icon={faFilter} /> Filter
                        </button>
                        <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-[991px]:grid-cols-1 mt-5">
                            {currentCars.map((car) => (
                                <CarCard
                                    key={car.id}
                                    imageSrc={car.image}
                                    title={car.name}
                                    description={car.desc}
                                    km={car.km}
                                    fuel={car.fuel}
                                    transmission={car.transmission}
                                    price={car.price}
                                    year={car.year}
                                    href="/"
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-5">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}