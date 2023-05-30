import { useState } from "react";

function SMSearchBar(props) {

    const { label, onSearch, searchList } = props;
    const [selected, setSelected] = useState("");

    let SearchVal = (e) => {
        onSearch(selected, e)
    }
    return (
        <>

            <div>
                <div>
                    <input className='searchBar'
                        placeholder={label ?? "Search..."}
                        onChange={(e) => SearchVal(e.target.value)} />
                </div>

                <div>
                    <select
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        <option value="">select</option>

                        {searchList.map((x, i) => (
                            <option key={i} value={x.key}>
                                {x.displayName}
                            </option>
                        )
                        )}
                    </select>

                </div>

            </div>
        </>




    )
}

export default SMSearchBar;