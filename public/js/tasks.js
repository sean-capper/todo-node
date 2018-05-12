$(document).ready(() => {
    $('.deleteTask').on('click', deleteTask);
    $('.toggleTask').on('click', toggleTask);
});

// remove the task from the backend database
function deleteTask() {
    let c = confirm('Are you sure you want to delete this task?');
    if(c) {
        $.ajax({
            type: 'DELETE',
            url: `/delete/${$(this).data('id')}`
        }).done(() => {
            window.location.replace('/');
        });
        window.location.replace('/');
    } else {
        return false;
    }
}

// change the way the task is displayed on the frontend and update the status in the db
function toggleTask(e) {
    e.preventDefault();
    // the task isn't active, make it active
    if($(this).closest('.task').prop('classList').contains('task-finished')) {
        $(this).closest('.task').removeClass('task-finished');
        $(this).closest('.task').addClass('task-active');
        $(this).text('Finished');

        $.ajax({
            type: 'POST',
            url: '/update/',
            data: {
                uid: $(this).data('id'),
                active: true
            }
        }).done(() => {
            window.location.replace('/');
        });
        window.location.replace('/');
    }
    // that task is finished
    else if($(this).closest('.task').prop('classList').contains('task-active')) {
        $(this).closest('.task').removeClass('task-active');
        $(this).closest('.task').addClass('task-finished');
        $(this).text('Not Finished?');

        $.ajax({
            type: 'POST',
            url: '/update/',
            data: {
                uid: $(this).data('id'),
                active: false
            }
        }).done(() => {
            window.location.replace('/');
        });
        window.location.replace('/');
    }
}