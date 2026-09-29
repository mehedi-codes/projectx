import {useState} from "react";
import Canvas from "./Canvas";
import FontFamilySelector from "./FontFamilySelector";
import FontSizeSelector from "./FontSizeSelector";
import ColorPicker from "./ColorPicker";
import SmallButton from "./SmallButton";
import BigButton from "./BigButton";

const Container = () => {
  const [textElements, setTextElements] = useState([]);
  const [selectedTextElement, setSelectedTextElement] = useState({
    id: null,
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#000000",
  });

  const handleAddText = () => {
    setTextElements((prevTextElements) => [
      ...prevTextElements,
      {
        id: prevTextElements.length,
        text: "New Text",
        fontFamily: "Roboto",
        fontSize: "16px",
        color: "#000000",
      },
    ]);
  };

  const handleTextClick = (id) => {
    const selectedElement = textElements.find((el) => el.id === id);
    console.log("selectedElement", id);
    setSelectedTextElement(selectedElement);
  };

  const handleFontFamilyChange = (fontFamily) => {
    console.log("fontFamily", fontFamily);
    updateSelectedElement({fontFamily});
  };

  const handleFontSizeChange = (fontSize) => {
    console.log("fontSize", fontSize);
    updateSelectedElement({fontSize});
  };

  const handleColorChange = (color) => {
    console.log("color", color);
    updateSelectedElement({color});
  };

  const updateSelectedElement = (changes) => {
    setSelectedTextElement((prev) => ({...prev, ...changes}));
    setTextElements((prevTextElements) =>
      prevTextElements.map((el) =>
        el.id === selectedTextElement.id ? {...el, ...changes} : el
      )
    );
  };

  return (
    <section className="min-h-[calc(100dvh-175px)] m-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <Canvas textElements={textElements} onTextClick={handleTextClick} />
        <div className="bg-gray-50 border-2 border-gray-200 lg:w-1/4 flex flex-col items-center p-5 justify-between rounded-lg gap-8">
          <FontFamilySelector
            selectedFontFamily={selectedTextElement.fontFamily}
            onFontFamilyChange={handleFontFamilyChange}
          />
          <FontSizeSelector
            selectedFontSize={selectedTextElement.fontSize}
            onFontSizeChange={handleFontSizeChange}
          />
          <ColorPicker
            selectedColor={selectedTextElement.color}
            onColorChange={handleColorChange}
          />
          <BigButton handleAddText={handleAddText} length={textElements.length} />
          <div className="w-full px-9 flex justify-center gap-4">
            <SmallButton photoSource={"/arrow-undo.svg"} buttonText={"Undo"} />
            <SmallButton photoSource={"/arrow-redo.svg"} buttonText={"Redo"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
