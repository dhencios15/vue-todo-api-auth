import Api from './Api'

export default {
  getAllTask() {
    return Api().get('task')
  },
  getTask(taskId) {
    return Api().get(`task/${taskId}`)
  },
  addTask(description) {
    return Api().post('task', { description })
  },
  updateTask(task) {
    return Api().put(`task/${task._id}`, task.info)
  },
  deleteTask(taskId) {
    return Api().delete(`task/${taskId}`)
  }
}
