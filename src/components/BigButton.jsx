const BigButton = ({handleAddText, length}) => {
  return (
    <div onClick={handleAddText} className="w-full px-9">
      <button
        type="button"
        disabled={length >= 20}
        className="py-2 w-full bg-black px-5 cursor-pointer  rounded-lg text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add text
      </button>
    </div>
  );
};

export default BigButton;
