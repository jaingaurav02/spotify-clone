function Playlist() {
    const playlist = [1, 2, 3, 4, 5, 6, 7];
    return (
        <nav className="mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-10">
            <ul>
                {playlist.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="#" className="cursor-default text-sm text-link hover:text-white flex h-8 items-center">
                                My Playlist #{item}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Playlist;