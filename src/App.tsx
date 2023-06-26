import { useReducer, useRef } from "react";
import {
  INITIA_STATE,
  myReducer,
  INITIAL_TABLE,
  secondReducer,
} from "./reducer/myReducer";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [state, dispatch] = useReducer(myReducer, INITIA_STATE);
  const [secondState, secondDispatch] = useReducer(
    secondReducer,
    INITIAL_TABLE
  );
  const firstRef = useRef({} as HTMLDivElement);
  const secondtRef = useRef({} as HTMLDivElement);

  const handlePDF = () => {
    const input = firstRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = pdfWidth - imgWidth * ratio;
      const imgY = 10;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Daily Task");
    });
  };
  const handleSecondPDF = () => {
    const input = secondtRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = pdfWidth - imgWidth * ratio;
      const imgY = 10;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Daily Task 2");
    });
  };

  return (
    <div className=" overflow-y-scroll h-screen  bg-neutral-200">
      <div className="min-h-screen  flex justify-center p-3 flex-col ">
        <div className="w-[90%] overflow-scroll mx-auto  myScroll">
          <div ref={firstRef} className="pb-20 w-fit flex  sm:w-full flex-col">
            <div className="p-4 font-bold text-xl text-center">
              TOTAL{" "}
              {state.myState.reduce(
                (total, el) =>
                  total + (el.drink!==true? (+el.first + +el.second - +el.bad - +el.remain) * +el.price :(+el.remain - +el.first) * el.price)
                  ,
                0
              )}
            </div>
            <table className=" sm:w-[600px]  border-separate border-spacing-[1px] mx-auto">
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
                      className={`td
                        ${
                          !el.drink
                            ? (+el.first + +el.second - +el.bad - +el.remain) *
                                el.price >
                              0
                              ? "bg-green-200"
                              : (+el.first +
                                  +el.second -
                                  +el.bad -
                                  +el.remain) *
                                  el.price <
                                0
                              ? "bg-red-200"
                              : "bg-white"
                            : (+el.remain - +el.first) * el.price > 0
                            ? "bg-green-200"
                            : (+el.remain - +el.first) * el.price < 0
                            ? "bg-red-200"
                            : "bg-white"
                        }
                        `}
                    >
                      {el.name}
                    </td>
                    <td
                      className={`td
                         ${
                           !el.drink
                             ? (+el.first + +el.second - +el.bad - +el.remain) *
                                 el.price >
                               0
                               ? "bg-green-200"
                               : (+el.first +
                                   +el.second -
                                   +el.bad -
                                   +el.remain) *
                                   el.price <
                                 0
                               ? "bg-red-200"
                               : "bg-white"
                             : (+el.remain - +el.first) * el.price > 0
                             ? "bg-green-200"
                             : (+el.remain - +el.first) * el.price < 0
                             ? "bg-red-200"
                             : "bg-white"
                         }
                         `}
                    >
                      <input
                        min={0}
                        placeholder="принято"
                        className="p-2  w-24  bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md"
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
                      className={`td
                          ${
                            !el.drink
                              ? (+el.first +
                                  +el.second -
                                  +el.bad -
                                  +el.remain) *
                                  el.price >
                                0
                                ? "bg-green-200"
                                : (+el.first +
                                    +el.second -
                                    +el.bad -
                                    +el.remain) *
                                    el.price <
                                  0
                                ? "bg-red-200"
                                : "bg-white"
                              : (+el.remain - +el.first) * el.price > 0
                              ? "bg-green-200"
                              : (+el.remain - +el.first) * el.price < 0
                              ? "bg-red-200"
                              : "bg-white"
                          }
                          `}
                    >
                      <input
                        placeholder="приход"
                        min={0}
                        className="p-2  w-24  bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md"
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
                      className={`td
                        ${
                          !el.drink
                            ? (+el.first + +el.second - +el.bad - +el.remain) *
                                el.price >
                              0
                              ? "bg-green-200"
                              : (+el.first +
                                  +el.second -
                                  +el.bad -
                                  +el.remain) *
                                  el.price <
                                0
                              ? "bg-red-200"
                              : "bg-white"
                            : (+el.remain - +el.first) * el.price > 0
                            ? "bg-green-200"
                            : (+el.remain - +el.first) * el.price < 0
                            ? "bg-red-200"
                            : "bg-white"
                        }
                        `}
                    >
                      <input
                        min={0}
                        placeholder="брак"
                        className="p-2  w-24  bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md"
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
                      className={`td
                    ${
                      !el.drink
                        ? (+el.first + +el.second - +el.bad - +el.remain) *
                            el.price >
                          0
                          ? "bg-green-200"
                          : (+el.first + +el.second - +el.bad - +el.remain) *
                              el.price <
                            0
                          ? "bg-red-200"
                          : "bg-white"
                        : (+el.remain - +el.first) * el.price > 0
                        ? "bg-green-200"
                        : (+el.remain - +el.first) * el.price < 0
                        ? "bg-red-200"
                        : "bg-white"
                    }
                    `}
                    >
                      <input
                        placeholder="остаток"
                        min={0}
                        className="p-2  w-24  bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md"
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
                      className={`td
                         ${
                           !el.drink
                             ? (+el.first + +el.second - +el.bad - +el.remain) *
                                 el.price >
                               0
                               ? "bg-green-200"
                               : (+el.first +
                                   +el.second -
                                   +el.bad -
                                   +el.remain) *
                                   el.price <
                                 0
                               ? "bg-red-200"
                               : "bg-white"
                             : (+el.remain - +el.first) * el.price > 0
                             ? "bg-green-200"
                             : (+el.remain - +el.first) * el.price < 0
                             ? "bg-red-200"
                             : "bg-white"
                         }
                         `}
                    >
                      {el.drink === true
                        ? +el.remain - +el.first
                        : +el.first + +el.second - +el.bad - +el.remain}
                    </td>
                    <td
                      className={`td
                         ${
                           !el.drink
                             ? (+el.first + +el.second - +el.bad - +el.remain) *
                                 el.price >
                               0
                               ? "bg-green-200"
                               : (+el.first +
                                   +el.second -
                                   +el.bad -
                                   +el.remain) *
                                   el.price <
                                 0
                               ? "bg-red-200"
                               : "bg-white"
                             : (+el.remain - +el.first) * el.price > 0
                             ? "bg-green-200"
                             : (+el.remain - +el.first) * el.price < 0
                             ? "bg-red-200"
                             : "bg-white"
                         }
                         `}
                    >
                      {el.price}
                    </td>
                    <td
                      className={`td
                       ${
                         !el.drink
                           ? (+el.first + +el.second - +el.bad - +el.remain) *
                               el.price >
                             0
                             ? "bg-green-200"
                             : (+el.first + +el.second - +el.bad - +el.remain) *
                                 el.price <
                               0
                             ? "bg-red-200"
                             : "bg-white"
                           : (+el.remain - +el.first) * el.price > 0
                           ? "bg-green-200"
                           : (+el.remain - +el.first) * el.price < 0
                           ? "bg-red-200"
                           : "bg-white"
                       }
                       `}
                    >
                      {!el.drink
                        ? (+el.first + +el.second - +el.bad - +el.remain) *
                          el.price
                        : (+el.remain - +el.first) * el.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button
          onClick={handlePDF}
          className="py-3 rounded-md w-[90%]  block max-w-[600px]  mt-4  mx-auto text-white bg-red-700 hover:bg-red-900 duration-300"
        >
          Download as PDF
        </button>
      </div>
      <div
        ref={secondtRef}
        className="h-screen flex items-center justify-center mt-40 "
      >
        <div className="w-[350px] flex flex-col gap-2 p-2">
          <label>Сдано</label>
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
            placeholder="0"
            className="input"
          />
          <label>б/н</label>
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
            placeholder="0"
            className="input"
          />
          <label>Доставка</label>
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
            placeholder="0"
            className="input"
          />
          <label>Расход</label>
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
            placeholder="0"
            className="input"
          />
          <label>касса 2</label>
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
            placeholder="0"
            className="input"
          />
          <label>касса 1</label>
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
            placeholder="0"
            className="input"
          />
          <label>выручка</label>
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
            placeholder="0"
            className="input"
          />
          <div
            className={`p-3 text-center rounded-md font-bold text-lg ${
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
            TOTAL{" "}
            {+secondState.given +
              +secondState.bn +
              +secondState.deliver +
              +secondState.bad +
              +secondState.cassa_2 -
              +secondState.cassa_1 -
              +secondState.result}
          </div>
          <button
            onClick={handleSecondPDF}
            className="py-3 rounded-md text-white bg-red-700 hover:bg-red-900 duration-300"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
