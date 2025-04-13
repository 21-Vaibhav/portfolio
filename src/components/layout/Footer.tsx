import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaKeyboard,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "1.5rem 0",
        marginTop: "3rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          {new Date().getFullYear()} © Vaibhav G
        </span>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/21-Vaibhav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://twitter.com/21Kafkaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/2112vaibhav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/21Vaibhav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode size={20} />
          </a>
          <a
            href="https://monkeytype.com/profile/duhtony"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaKeyboard size={20} />
          </a>

        </div>

        {/* Date & Time */}
        <div
          style={{
            marginTop: "0.75rem",
            fontSize: "0.75rem",
            color: "var(--color-text-secondary)",
          }}
        >
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}{" "}
          • Partly sunny •{" "}
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

