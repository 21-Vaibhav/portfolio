import { ReactNode } from "react";

interface ToolIconProps {
  name: string;
  icon: ReactNode;
}

const ToolIcon = ({ name, icon }: ToolIconProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: "var(--color-surface)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--color-border)",
        }}
      >
        {icon}
      </div>
      <span
        style={{
          marginTop: "var(--space-2)",
          fontSize: "0.875rem",
        }}
      >
        {name}
      </span>
    </div>
  );
};

export default ToolIcon;
