export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-edge-subtle bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <p className="text-sm text-foreground-muted">
          © {currentYear} Christophe. Tous droits réservés.
        </p>

        <div className="flex items-center gap-4">
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link pb-0.5 text-sm text-foreground-alt transition-colors hover:text-foreground"
          >
            GitHub
          </a> */}
          <a
            href="https://www.linkedin.com/in/christophe-milliere-893a0520/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link pb-0.5 text-sm text-foreground-alt transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
