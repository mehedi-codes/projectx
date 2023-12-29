import Draggable from "react-draggable";

const Canvas = ({textElements, onTextClick}) => {
  return (
    <div className="lg:w-3/4 bg-gray-200 rounded-lg relative flex flex-wrap gap-4 p-5">
      {textElements.map(({id, text, fontFamily, fontSize, color}) => (
        <Draggable key={id} handle=".handle" cancel=".cancel" bounds="parent">
          <div className="handle cursor-move border-4 border-gray-600 w-fit h-fit border-dashed active:border-black">
            <input
              className="py-2 cursor-text cancel focus:outline-none text-center"
              contentEditable
              onClick={() => onTextClick(id)}
              style={{fontFamily, fontSize, color}}
              value={text}
            />
              
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Canvas;
