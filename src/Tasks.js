import React, { useState } from 'react'
import uuid from 'uuid/v4';

let i = 0;

function Tasks() {
    const [taskText, setTaskText] = useState('')

    let tasks, setTasks, completedTasks, setCompletedTasks;

    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    if (i % 2 == 0) {
        ([tasks, setTasks] = useState([]));
        ([completedTasks, setCompletedTasks] = useState([]));
    } else {
        let [foo, setFoo] = useState([])
        let [bar, setBar] = useState([])
        tasks = foo
        setTasks = setFoo
        completedTasks = bar
        setCompletedTasks = setBar
        // ([completedTasks, setCompletedTasks] = useState([]));
        // ([tasks, setTasks] = useState([]));
    }
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    i++


    const updateTaskText = event => {
        setTaskText(event.target.value)
    }

    const addTask = () => {
        setTasks([...tasks, { taskText, id: uuid() }])
    }

    // Double arrow syntax means it returns a function
    const completeTask = completedTask => () => {
        setCompletedTasks([...completedTasks, completedTask])
        setTasks(tasks.filter(task => task.id !== completedTask.id))
    }

    const deleteTask = task => () => {
        setCompletedTasks(completedTasks.filter(t => t.id !== task.id))
    }

    console.log('tasks', tasks)
    console.log('completedTasks', completedTasks)

    return (
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='task-list'>
                {
                    tasks.map(task => {
                        const { id, taskText } = task

                        return (
                            <div key={id} onClick={completeTask(task)}>
                                {taskText}
                            </div>
                        );
                    })
                }
            </div>
            <div className='completed-list'>
                {
                    completedTasks.map(task => {
                        const { id, taskText } = task;

                        return (
                            <div key={id}>
                                {taskText}{' '}
                                <span onClick={deleteTask(task)} className='delete-task'>x</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tasks