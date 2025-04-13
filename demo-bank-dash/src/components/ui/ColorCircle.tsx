import React from "react";

interface ColorCircleProps {
  color: string;
}

/**
 * ColorCircle Component
 *
 * Renders a circular color swatch with the specified color
 * Used in the product table to display available color options
 *
 * @param {string} color - Hex color code or valid CSS color value
 */
const ColorCircle: React.FC<ColorCircleProps> = ({ color }) => {
  return (
    <div
      className="color-circle"
      style={{ backgroundColor: color }}
      aria-label={`Color: ${color}`} // Accessibility enhancement
    />
  );
};

export default ColorCircle;
