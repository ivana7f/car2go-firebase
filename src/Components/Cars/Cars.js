import React, { useContext, useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import CarsList from "./CarsList/CarsList";
import Search from "./Search/Search";
import cloneDeep from "lodash/cloneDeep";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import NotFound from "../NotFound/NotFound";
import ValuesContext from "../../store/values-context";

function Cars() {
  const Ctx = useContext(ValuesContext);

  const {
    data: cars,
    isLoading,
    error,
  } = useFetch(
    "https://car2go-985b5-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
  );

  const [filteredCars, setFilteredCars] = useState(cars);
  const [isFiltered, setIsFiltered] = useState(false);

  const [currentPage, setCurrenPage] = useState(1);
  const [carsPerPage] = useState(5);

  useEffect(() => {
    if (Ctx.carBrand !== "") {
      let filteredArray = cloneDeep(cars);
      filteredArray = filteredArray.filter(
        (car) => car[1].brand === Ctx.carBrand
      );

      setFilteredCars(filteredArray);
      setIsFiltered(true);
    }
  }, [cars]);

  // when search button is clicked
  function onFilter(filterData) {
    // deep clone of cars array
    let filteredArray = cloneDeep(cars);

    if (filterData.car !== "") {
      filteredArray = filteredArray.filter(
        (car) => car[1].brand === filterData.car
      );
    }
    if (filterData.minValue !== "") {
      filteredArray = filteredArray.filter(
        (car) => car[1].price >= filterData.minValue
      );
    }
    if (filterData.maxValue !== "") {
      filteredArray = filteredArray.filter(
        (car) => car[1].price <= filterData.maxValue
      );
    }
    if (filterData.sort === "lowest") {
      filteredArray = filteredArray.sort(
        (car1, car2) => car1[1].price - car2[1].price
      );
    }
    if (filterData.sort === "highest") {
      filteredArray = filteredArray.sort(
        (car1, car2) => car2[1].price - car1[1].price
      );
    }

    setFilteredCars(filteredArray);
    setIsFiltered(true);
    setCurrenPage(1);
  }

  // paginationn
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const currentFilteredCars = filteredCars.slice(
    indexOfFirstCar,
    indexOfLastCar
  );

  function paginate(number) {
    setCurrenPage(number);
  }

  return (
    <div>
      <Search onFilter={onFilter} />
      {error && <NotFound error={error} />}
      {isLoading && <LoadingSpinner />}
      {!error && !isLoading && !isFiltered && <CarsList cars={currentCars} />}
      {!error && !isLoading && isFiltered && (
        <CarsList cars={currentFilteredCars} />
      )}
      {!error && !isLoading && (
        <Pagination
          carsPerPage={carsPerPage}
          totalCars={isFiltered ? filteredCars.length : cars.length}
          paginate={paginate}
        />
      )}
    </div>
  );
}

export default Cars;
