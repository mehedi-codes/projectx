const FontSizeSelector = ({selectedFontSize, onFontSizeChange}) => {
  const fontSizes = [
    {value: "12px"},
    {value: "14px"},
    {value: "16px"},
    {value: "18px"},
    {value: "20px"},
    {value: "24px"},
    {value: "28px"},
    {value: "32px"},
    {value: "36px"},
    {value: "40px"},
    {value: "48px"},
    {value: "56px"},
    {value: "64px"},
    {value: "72px"},
  ];
  return (
    <div className="w-full px-9">
      <label
        htmlFor="font-size"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Font Size
      </label>
      <select
        id="font-size"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg cursor-pointer hover:bg-gray-200 block w-full px-4 py-3 outline-none focus:border-gray-200 focus:outline-none"
        value={selectedFontSize}
        onChange={(e) => onFontSizeChange(e.target.value)}
      >
        {fontSizes?.map((size) => (
          <option key={size?.value} value={size?.value}>
            {size?.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSizeSelector;
