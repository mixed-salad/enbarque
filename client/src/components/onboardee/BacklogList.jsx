import React from 'react';
import BacklogTask from './BacklogTask';
import { editProcess } from './../../services/onboarding';

import './BacklogList.scss';

function BacklogList({ process, onUpdate }) {
  const backlogList = process.unscheduledTasks;
  console.log(backlogList);

  const handleDeleteTask = async (processId, taskId) => {
    const newList = backlogList.filter(
      (backlog) => backlog._id !== taskId
    );
    const data = {
      unscheduledTasks: [...newList]
    };
    const newProcess = await editProcess(processId, data);
    console.log(newProcess);
    onUpdate(newProcess);
  };
  return (
    <ul className="backlog-list">
      {!!backlogList.length &&
        backlogList.map((task) => (
          <li key={task._id} className="backlog-list__item">
            <BacklogTask
              task={task}
              onDelete={() => handleDeleteTask(process._id, task._id)}
            />
          </li>
        ))}
    </ul>
  );
}

export default BacklogList;
