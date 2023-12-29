const ColorPicker = ({selectedColor, onColorChange}) => {
  return (
    <div className="w-full px-9">
      <label
        htmlFor="color-picker"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Color
      </label>
      <div className="border px-4 py-2 rounded-lg bg-white hover:bg-gray-200 text-center">
        <input
          type="color"
          id="color-picker"
          className="w-full cursor-pointer outline-none focus:border-gray-200 focus:outline-none"
          defaultValue={selectedColor}
          onChange={(e) => onColorChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
