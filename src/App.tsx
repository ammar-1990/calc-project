import { useReducer } from "react";
import {
  INITIA_STATE,
  myReducer,
  INITIAL_TABLE,
  secondReducer,
} from "./reducer/myReducer";
function App() {
  const [state, dispatch] = useReducer(myReducer, INITIA_STATE);
  const [secondState, secondDispatch] = useReducer(
    secondReducer,
    INITIAL_TABLE
  );
  console.log(secondState);

  return (
    <div className=" overflow-y-scroll h-screen snap-y snap-mandatory bg-neutral-200">
      <div className="h-screen  flex justify-center p-3 flex-col snap-start snap-always">
        <div className="p-4 font-bold text-xl text-center">
          TOTAL{" "}
          {state.myState.reduce(
            (total, el) =>
              total +
              (+el.first + +el.second - +el.bad - +el.remain) * el.price,
            0
          )}
        </div>
        <div className="w-[90%] overflow-scroll mx-auto  myScroll">
          <table className=" sm:w-[800px]  border-separate border-spacing-[1px] mx-auto">
            <thead className="bg-slate-800 text-white sticky top-0">
              <tr className="capitalize">
                <td className="p-3">наименование</td>
                <td className="p-3">принято</td>
                <td className="p-3">приход</td>
                <td className="p-3">брак</td>
                <td className="p-3">остаток</td>
                <td className="p-3">продано</td>
                <td className="p-3">цена</td>
                <td className="p-3">сумма</td>
              </tr>
            </thead>
            <tbody>
              {state.myState.map((el, i) => (
                <tr key={i}>
                  <td
                    className={`td ${
                      (+el.first + +el.second - +el.bad - +el.remain) *
                        el.price <
                      0
                        ? "bg-red-200"
                        : (+el.first + +el.second - +el.bad - +el.remain) *
                            el.price >
                          0
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    {el.name}
                  </td>
                  <td
                    className={`td ${
                      (+el.first + +el.second - +el.bad - +el.remain) *
                        el.price <
                      0
                        ? "bg-red-200"
                        : (+el.first + +el.second - +el.bad - +el.remain) *
                            el.price >
                          0
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    <input
                      min={0}
                      className="p-2 bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md"
                      value={el.first}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_INPUT",
                          payload: {
                            index: i,
                            value: e.target.value,
                            name: "first",
                          },
                        })
                      }
                      type="number"
                    />
                  </td>
                  <td
                    className={`td ${
                      (+el.first + +el.second - +el.bad - +el.remain) *
                        el.price <
                      0
                        ? "bg-red-200"
                        : (+el.first + +el.second - +el.bad - +el.remain) *
                            el.price >
                          0
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    <input
                      min={0}
                      className="p-2 bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md"
                      value={el.second}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_INPUT",
                          payload: {
                            index: i,
                            value: e.target.value,
                            name: "second",
                          },
                        })
                      }
                      type="number"
                    />
                  </td>
                  <td
                    className={`td ${
                      (+el.first + +el.second - +el.bad - +el.remain) *
                        el.price <
                      0
                        ? "bg-red-200"
                        : (+el.first + +el.second - +el.bad - +el.remain) *
                            el.price >
                          0
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    <input
                      min={0}
                      className="p-2 bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md"
                      value={el.bad}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_INPUT",
                          payload: {
                            index: i,
                            value: e.target.value,
                            name: "bad",
                          },
                        })
                      }
                      type="number"
                    />
                  </td>
                  <td
                    className={`td ${
                      (+el.first + +el.second - +el.bad - +el.remain) *
                        el.price <
                      0
                        ? "bg-red-200"
                        : (+el.first + +el.second - +el.bad - +el.remain) *
                            el.price >
                          0
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    <input
                      min={0}
                      className="p-2 bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md"
                      value={el.remain}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_INPUT",
                          payload: {
                            index: i,
                            value: e.target.value,
                            name: "remain",
                          },
                        })
                      }
                      type="number"
                    />
                  </td>
                  <td
                    className={`td ${
                      (+el.first + +el.second - +el.bad - +el.remain) *
                        el.price <
                      0
                        ? "bg-red-200"
                        : (+el.first + +el.second - +el.bad - +el.remain) *
                            el.price >
                          0
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    {+el.first + +el.second - +el.bad - +el.remain}
                  </td>
                  <td
                    className={`td ${
                      (+el.first + +el.second - +el.bad - +el.remain) *
                        el.price <
                      0
                        ? "bg-red-200"
                        : (+el.first + +el.second - +el.bad - +el.remain) *
                            el.price >
                          0
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    {el.price}
                  </td>
                  <td
                    className={`td ${
                      (+el.first + +el.second - +el.bad - +el.remain) *
                        el.price <
                      0
                        ? "bg-red-200"
                        : (+el.first + +el.second - +el.bad - +el.remain) *
                            el.price >
                          0
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    {(+el.first + +el.second - +el.bad - +el.remain) * el.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center snap-mandatory snap-always snap-start">
        <div className="w-[350px] flex flex-col gap-2">
          <input
            type="number"
            value={secondState.given}
            name="given"
            onChange={(e) =>
              secondDispatch({
                type: "CHANGE_VALUE",
                payload: { value: e.target.value, name: e.target.name },
              })
            }
            placeholder="Сдано"
            className="input"
          />
          <input
            type="number"
            value={secondState.bn}
            name="bn"
            onChange={(e) =>
              secondDispatch({
                type: "CHANGE_VALUE",
                payload: { value: e.target.value, name: e.target.name },
              })
            }
            placeholder="б/н"
            className="input"
          />
          <input
            type="number"
            value={secondState.deliver}
            name="deliver"
            onChange={(e) =>
              secondDispatch({
                type: "CHANGE_VALUE",
                payload: { value: e.target.value, name: e.target.name },
              })
            }
            placeholder="Доставка"
            className="input"
          />
          <input
            type="number"
            value={secondState.bad}
            name="bad"
            onChange={(e) =>
              secondDispatch({
                type: "CHANGE_VALUE",
                payload: { value: e.target.value, name: e.target.name },
              })
            }
            placeholder="Расход"
            className="input"
          />
          <input
            type="number"
            value={secondState.cassa_2}
            name="cassa_2"
            onChange={(e) =>
              secondDispatch({
                type: "CHANGE_VALUE",
                payload: { value: e.target.value, name: e.target.name },
              })
            }
            placeholder="касса 2"
            className="input"
          />
          <input
            type="number"
            value={secondState.cassa_1}
            name="cassa_1"
            onChange={(e) =>
              secondDispatch({
                type: "CHANGE_VALUE",
                payload: { value: e.target.value, name: e.target.name },
              })
            }
            placeholder="касса 1"
            className="input"
          />
          <input
            type="number"
            value={secondState.result}
            name="result"
            onChange={(e) =>
              secondDispatch({
                type: "CHANGE_VALUE",
                payload: { value: e.target.value, name: e.target.name },
              })
            }
            placeholder="выручка"
            className="input"
          />
          <div
            className={`p-3 text-center ${
              +secondState.given +
                +secondState.bn +
                +secondState.deliver +
                +secondState.bad +
                +secondState.cassa_2 -
                +secondState.cassa_1 -
                +secondState.result >
              0
                ? "bg-green-200"
                : +secondState.given +
                    +secondState.bn +
                    +secondState.deliver +
                    +secondState.bad +
                    +secondState.cassa_2 -
                    +secondState.cassa_1 -
                    +secondState.result <
                  0
                ? "bg-red-200"
                : "bg-white"
            }`}
          >
            TOTAL:{" "}
            {+secondState.given +
              +secondState.bn +
              +secondState.deliver +
              +secondState.bad +
              +secondState.cassa_2 -
              +secondState.cassa_1 -
              +secondState.result}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
