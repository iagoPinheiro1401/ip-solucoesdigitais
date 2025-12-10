export default function BudgetButton({ className, children }) {
    return(
        <button className={`bg-blue-700 px-10 xl:px-10 py-2 sm:py-2 border-none rounded-xl xl:text-lg text-sm font-medium lg:font-semibold text-white lg:max-w-96 ${className}`}>
            {children}
        </button>
    )
}