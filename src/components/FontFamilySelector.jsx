const FontFamilySelector = ({selectedFontFamily, onFontFamilyChange}) => {
  const fonts = [
    {fontFamily: "Roboto"},
    {fontFamily: "Poppins"},
    {fontFamily: "Open Sans"},
    {fontFamily: "Comfortaa"},
    {fontFamily: "Ubuntu"},
  ];

  return (
    <div className="w-full px-9">
      <label
        htmlFor="fonts"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Font Family
      </label>
      <select
        id="fonts"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg cursor-pointer hover:bg-gray-200 block w-full p-2.5 outline-none focus:border-gray-200 focus:outline-none"
        value={selectedFontFamily}
        onChange={(e) => onFontFamilyChange(e.target.value)}
      >
        {fonts?.map((font, idx) => (
          <option key={idx} value={font?.fontFamily}>
            {font?.fontFamily}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontFamilySelector;
