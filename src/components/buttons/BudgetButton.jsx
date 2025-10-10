export default function BudgetButton({ className }) {
    return(
        <button className={`bg-blue-700 px-2 py-1 border-none rounded-sm text-sm font-medium text-white ${className}`}>
            Solicitar orçamento grátis
        </button>
    )
}