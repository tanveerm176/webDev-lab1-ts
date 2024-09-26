import React from "react";
import Event from "./Event";

const Calendar: React.FC = () => {
  return (
    <div className="Calendar">
      <table>
        {/* Table Header with Days of the Week */}
        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>

        {/* Table body with times and event slots for each day */}
        <tbody>
          <tr>
            <td className="time">9AM</td>
            <td></td>
            <Event event="Fancy Dinner" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10AM</td>
            <td></td>
            <td></td>
            <Event event='Subway 🚊' color ='pink'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11AM</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Subway 🚊' color ='pink'/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12AM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2PM</td>
            <td></td>
            <Event event='Subway 🚊' color ='pink'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3PM</td>
            <td></td>
            <Event event='Subway 🚊' color ='pink'/>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Subway 🚊' color ='pink'/>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
