const Footer = ({ buttonText, onClick }) => {
  return (
    <div className="flex justify-center items-center w-full bg-black p-4">
      <button className="py-2 px-6 bg-teal rounded text-white" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Footer;
