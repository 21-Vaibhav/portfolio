import * as RadixAvatar from "@radix-ui/react-avatar";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Avatar = ({ src, alt, size = "md" }: AvatarProps) => {
  const sizeMap = {
    sm: "40px",
    md: "64px",
    lg: "96px",
    xl: "128px",
  };

  const fontSize = {
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
  };

  return (
    <RadixAvatar.Root
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        overflow: "hidden",
        borderRadius: "100%",
        backgroundColor: "var(--color-surface)",
        width: sizeMap[size],
        height: sizeMap[size],
      }}
    >
      <RadixAvatar.Image
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "inherit",
        }}
      />
      <RadixAvatar.Fallback
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--color-surface)",
          color: "var(--color-text)",
          fontSize: fontSize[size],
          lineHeight: 1,
        }}
      >
        {alt.charAt(0).toUpperCase()}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export default Avatar;
