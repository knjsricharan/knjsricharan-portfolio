const Footer = () => {
  return (
    <footer className="w-full text-left mt-20">
      <div className="w-full max-w-[1100px] mx-auto px-8">
        <div 
          className="py-8 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          style={{ borderColor: 'var(--rule)' }}
        >
          <div 
            className="font-mono uppercase tracking-widest"
            style={{ fontSize: '11px', color: 'var(--ink-3)' }}
          >
            &copy; {new Date().getFullYear()} Charan Kurada.
          </div>
          
          <div 
            className="font-mono uppercase tracking-widest flex gap-6"
            style={{ fontSize: '11px', color: 'var(--ink-3)' }}
          >
            <a 
              href="https://github.com/knjsricharan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-colors hover:text-[var(--ink)]"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/sri-charan-kurada-605638297" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-colors hover:text-[var(--ink)]"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:sricharan812006@gmail.com" 
              className="transition-colors hover:text-[var(--ink)]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
