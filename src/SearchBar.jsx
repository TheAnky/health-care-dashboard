import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [selectedCountrieson, setSelectedCountries] = useState(countries);

  const countryChange = () => {
    let selectedCountries = [];
    if (searchInput.length > 0) {
      selectedCountries = countries.filter((country) => {
        // return (
        //   country.name.match(searchInput) ||
        //   country.continent.match(searchInput)
        // );

        return (
          country.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          country.continent.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
    } else if (searchInput.length == 0) {
      selectedCountries = countries;
    }
    console.log("selected Countries", selectedCountries);

    setSelectedCountries(selectedCountries);
  };

  useEffect(() => {
    countryChange();
  }, [searchInput]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log("search input", e.target.value, searchInput);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <tr>
          <th>Country</th>
          <th>Continent</th>
        </tr>

        {selectedCountrieson.map((country) => {
          return (
            <tr>
              <td>{country.name}</td>
              <td>{country.continent}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default SearchBar;
