import { NextPage } from "next";
import CalendarButton from "../components/buttons/calendarButton";


const Calendar: NextPage = () => {
    const iframeStyle = {
        borderWidth: 0
    }
    return (
        <>
            <header>
                <title>OSAI Calendar</title>
            </header>
            <main>
                <div className="flex flex-col my-5 text-center items-center">
                    <h1 className="text-xl my-2">
                        Meetings, events, socials. All in one place.
                    </h1>
                    <p className="mb-2">
                        Add the Open-Source at Illinois Calendar and stay updated with the latest events.
                    </p>
                    <CalendarButton />
                </div>
                <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=America%2FChicago&title&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&showDate=1&mode=MONTH&src=a3M4ZWt0czBtaHFjdjNnZGhoOTltNWtqZWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5" style={iframeStyle} width="800" height="600" scrolling="no"></iframe>
                </div>
            </main>
        </>
    )
}

export default Calendar;

