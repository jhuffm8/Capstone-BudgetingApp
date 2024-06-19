import { dashboard, expenses, transactions, trend } from "./Icons"
import { Link } from "react-router-dom"

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/viewTransaction"
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard"
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard"
    },

]