const SmallButton = ({photoSource, buttonText}) => {
  return (
    <button 
    disabled={true}
    className="py-2 bg-black px-5 cursor-pointer  rounded-lg text-white font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
      <img src={photoSource} />
      <span>{buttonText}</span>
    </button>
  );
};

export default SmallButton;
