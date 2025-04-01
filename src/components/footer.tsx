export default function Footer() {
  let date = new Date();
  const ans = date.getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {/* &copy; Copyright {ans} Koloina. tout droit réservé . */}
        &copy; Copyright {ans} Koloina. tout droit réservé.
      </small>
      <p className="text-xs">
        <span className="font-semibold">A propos de ce site:</span> construit
        avec React & Next.js, TypeScript, Tailwind CSS
      </p>
    </footer>
  );
}
