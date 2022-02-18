import {
    Link
} from "react-router-dom";
import { GiMeal } from 'react-icons/gi';

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Create Meal', href: '/createmeal' },
    { name: 'My Meals   ', href: '/mymeals' },
    { name: 'Week View', href: '/weekview' },
    { name: 'Edit Plan', href: '/editplan' },
]

export const Header = () => {
    return (
        <header className="bg-pink-400">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-pink-500 lg:border-none">
                    <div className="flex items-center">
                        <Link to="/" className="flex">
                            <span className="sr-only">Workflow</span>
                            <GiMeal className="h-10 w-auto ml-2" color="white" />
                        </Link>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <Link key={link.name} to={link.href} className="text-base font-medium text-white hover:text-pink-50">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <Link
                            to="#"
                            className="inline-block bg-pink-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                        >
                            Sign in
                        </Link>
                        <Link
                            to="#"
                            className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-pink-600 hover:bg-pink-50"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <Link key={link.name} to={link.href} className="text-base font-medium text-white hover:text-pink-50">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}
