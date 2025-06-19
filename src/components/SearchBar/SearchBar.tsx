import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa";
import { FormEvent } from 'react';

interface Props {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }:Props) {
    const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget
        const topic = (form.elements.namedItem('topic') as HTMLInputElement).value.trim()
        if (!topic) {
            toast.error("Please enter search term!")
            return
        }
        onSearch(topic)
        form.reset()
    }

    return (
        <header className={css.container}>
            <form onSubmit={handelSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="topic"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className={css.searchBtn}>
                    <FaSearch />
                </button>
            </form>
            <Toaster
                containerStyle={{
                    position: 'relative',
                }} />
        </header>
    )
}