import { useState } from 'react';

import useCalendarComponent from '../../../lib';
import Calendar from '../Calendar';
import StateInfo from '../StateInfo';

export function Multiple() {
  const [value, setValue] = useState([new Date()]);
  const calendarControl = useCalendarComponent({
    selectType: 'multiple',
    value,
    onChange: setValue,
  });
  const { selectedDates } = calendarControl;

  return (
    <div>
      <Calendar calendarControl={calendarControl} />
      <StateInfo value={value} selectedDates={selectedDates} />
    </div>
  );
}
