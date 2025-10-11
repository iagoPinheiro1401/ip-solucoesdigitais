export default function BudgetButton({ className, children }) {
    return(
        <button className={`bg-blue-700 px-2 xl:px-10 py-1 sm:py-2 border-none rounded-sm xl:text-lg text-sm font-medium lg:font-semibold text-white max-w-44 lg:max-w-96 ${className}`}>
            {children}
        </button>
    )
}