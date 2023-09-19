import "./Button.css";
import Button from "react-bootstrap/Button";

export const GhostButton = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} className="sea-ghost-btn" variant="primary">
      {children}
    </Button>
  );
};

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} className="sea-primary-btn" variant="primary">
      {children}
    </Button>
  );
};
