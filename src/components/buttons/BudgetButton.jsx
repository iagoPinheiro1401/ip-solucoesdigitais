export default function BudgetButton({ className, children }) {
  return (
    <a
      href="https://wa.me/88981745976?text=Olá,%20gostaria%20de%20ter%20uma%20consultoria%20grátis"
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-blue-700 px-10 xl:px-10 py-2 sm:py-2 border-none rounded-xl xl:text-lg text-sm font-medium lg:font-semibold text-white lg:max-w-96 inline-flex items-center justify-center text-center ${className}`}
    >
      {children}
    </a>
  );
}
