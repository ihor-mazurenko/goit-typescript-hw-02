import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa";



export default function SearchBar({ onSearch }) {
    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target
        const topic = form.elements.topic.value.trim()
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