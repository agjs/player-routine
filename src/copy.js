import React from 'react';

import { AccessAlarm, Mic, Notes, GroupWork, BubbleChart } from '@material-ui/icons';

export const FEATURES = [
  {
    title: 'Schedule',
    content:
      'Scheduling is the art of planning your activities so that you can achieve your goals and priorities in the time you have available. If you want to achieve greatness, you will have to schedule your practice sessions.',
    icon: <AccessAlarm />,
  },
  {
    title: 'Notes',
    content: 'Keep track of all the videos, articles and similar and easily find those again.',
    icon: <Notes />,
  },
  {
    title: 'Record',
    content:
      'Hearing how you performed during your sessions is of great importance. Compare your recordings between dates and see how much you improved.',
    icon: <Mic />,
  },
  {
    title: 'Track',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <BubbleChart />,
  },
  {
    title: 'In Pair',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <GroupWork />,
  },
];
