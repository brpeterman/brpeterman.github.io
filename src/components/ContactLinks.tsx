import "./ContactLinks.css";

export default function ContactLinks() {
  return (
    <div className="contact-links">
      <a href="https://www.github.com/brpeterman" target="_blank" title="GitHub">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.7.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.28 9.28 0 0 1 2.5-.34c.85 0 1.71.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.57.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/brpeterman" target="_blank" title="LinkedIn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4"/>
          <line x1="7" y1="8" x2="7" y2="16"/>
          <line x1="7" y1="16" x2="7" y2="16"/>
          <circle cx="7" cy="6" r="1"/>
          <line x1="11" y1="12" x2="11" y2="16"/>
          <path d="M11 12c0-1.1.9-2 2-2s2 .9 2 2v4"/>
        </svg>
      </a>
      <a href="https://cara.app/brpeterman" target="_blank" title="Cara">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10"/>
          <path d="M15 9a4 4 0 1 0 0 6"/>
        </svg>
      </a>
      <a href="mailto:brpeterman@gmail.com?subject=Let&apos;s chat!" title="Email">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      </a>
    </div>
  );
}
