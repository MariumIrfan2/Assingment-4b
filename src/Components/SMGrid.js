import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useEffect, useState } from "react";
import SMSearchBar from "./SMSearchBar";

function SMGrid(props) {
  const { datasource, title, cols } = props;

  

 
  return (
    <>
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
        {/* <SMSearchBar
                        searchList={cols.filter((x) => x.searchable)}
                        onSearch={(key, inputval) => {
                            console.log(key,inputval);

                            let arr = datasource.filter((x) => x[key].includes(inputval));
                            console.log(arr);
                            setFilteredData([...arr])
                        }}
                    /> */}
       
        </div>
        {datasource && Array.isArray(datasource) && (
          <table className="table table-striped">
            <thead>
              <tr>
                {cols && Array.isArray(cols) && cols.length > 0
                  ? cols.map((x, i) => <th key={i}>{x.displayName}</th>)
                  : null}
              </tr>
            </thead>
            <tbody>
              {datasource.map((x, i) => (
                <tr key={i}>
                  {cols.map((e, ind) => (
                    <td key={ind}>
                      {x[e.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
export default SMGrid;