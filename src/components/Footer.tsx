export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="section-container text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Sajal Swapnil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
