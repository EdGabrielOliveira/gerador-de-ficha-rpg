import React from "react";

interface AttributeInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  description?: string;
}

const AttributeInput: React.FC<AttributeInputProps> = ({ label, value, onChange, min = 1, max = 3, description }) => {
  return (
    <div className="bg-amber-950 p-3 rounded-md">
      <div className="flex flex-col sm:flex-row sm:items-center mb-2">
        <label className="w-full sm:w-20 font-medium text-amber-300 mb-1 sm:mb-0">{label}</label>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => onChange(Math.max(min, value - 1))}
            className="px-3 py-1 bg-amber-700 hover:bg-amber-600 rounded-l-md text-white"
            disabled={value <= min}
          >
            -
          </button>
          <div className="w-10 text-center py-1 bg-amber-800 border-t border-b border-amber-600 text-white font-bold">
            {value}
          </div>
          <button
            type="button"
            onClick={() => onChange(Math.min(max, value + 1))}
            className="px-3 py-1 bg-amber-700 hover:bg-amber-600 rounded-r-md text-white"
            disabled={value >= max}
          >
            +
          </button>

          <div className="ml-3 flex items-center">
            <div className="flex">
              {Array.from({ length: max }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 mx-0.5 rounded-full ${i < value ? "bg-green-500" : "bg-amber-700"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {description && <p className="text-xs text-amber-400 mt-1 sm:pl-20">{description}</p>}
    </div>
  );
};

export default AttributeInput;
