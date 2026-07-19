import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer">
      <p className="footer-text">
        Crafted with
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="footer-heart" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
          2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
          C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 
          22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        for{" "}JIITians
      </p>
      <div className="footer-github-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Github className="icon-dim" />
        <select 
          onChange={(e) => {
            if (e.target.value) window.open(e.target.value, '_blank', 'noopener,noreferrer');
            e.target.value = ''; // reset after selection
          }}
          style={{
            background: 'transparent',
            color: 'inherit',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '2px 4px',
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
          defaultValue=""
        >
          <option value="" disabled>GitHub Repos</option>
          <option value="https://github.com/SaatvikChauhan/JIIT-Shelf">Original</option>
          <option value="https://github.com/mahitmass">ECE Sem 3</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
