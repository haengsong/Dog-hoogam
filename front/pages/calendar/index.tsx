import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "./index.module.scss";

import DayCheck from "../../components/calendar/cale/DayCheck";
import Todo from "../../components/calendar/Todo";
import WalkRecord from "../../components/calendar/WalkRecord";

import {
  getCalendarMemoApi,
  setMemos,
  setSelectDay
} from "../../redux/slice/calendarSlice";
import line from "../../public/icons/Line 1.svg";

const CalendarPage: NextPage = () => {
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [Tab, setTab] = useState("메모");
  function changeTab(e: any) {
    setTab(e.target.innerText);
  }
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dispatch = useDispatch();
  useEffect(() => {
    getCalendarMemoApi(month, year)
      .then((res) => {
        dispatch(setMemos(res));
        dispatch(setSelectDay({ year, month, day }));
        setIsUpdated(true);
      })
      .catch(() => console.error);
  }, []);

  let CalendarTab = null;
  if (Tab === "메모") {
    CalendarTab = <Todo isUpdated={isUpdated} />;
  } else if (Tab === "산책일지") {
    CalendarTab = <WalkRecord />;
  }
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.calendar}`}>
        <DayCheck />
      </div>
      <div className={`${styles.tab} flex justify-center`}>
        <div className="flex align-center">
          <div className={`${styles.isMemo}`} />
          <button
            type="button"
            className={`${
              Tab === "메모" ? styles.memo : styles.memo2
            } notoBold fs-20`}
            onClick={(e) => changeTab(e)}
          >
            메모
          </button>
        </div>
        <div className={`${styles.line}`}>
          <Image src={line} alt="구분선" />
        </div>
        <div className="flex align-center">
          <div className={`${styles.isWalk}`} />
          <button
            type="button"
            className={`${
              Tab === "산책일지" ? styles.record : styles.record2
            } notoBold fs-20`}
            onClick={(e) => changeTab(e)}
          >
            산책일지
          </button>
        </div>
      </div>
      {CalendarTab}
    </div>
  );
};

export default CalendarPage;
