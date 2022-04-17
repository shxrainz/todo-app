import axios from "axios"

//const serverBaseUrl = "http://localhost:5000/api/todo"
const serverBaseUrl = "https://msyahreen-todo-app-backend.herokuapp.com/api/todo"

//GET
export function getTodos() {

    return axios
        .get(
            serverBaseUrl + "/todoList",
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            },
            5000, "timeout"
        )
        .then(responseJson => {
            return responseJson.data;
        })
        .catch(error => {
            console.log("error",error)
        });
}

//POST
export function addTodo(body) {

        return axios
            .post(
                serverBaseUrl + "/addTodo", body,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                },
            )
            .then(responseJson => {
                return responseJson.data;
            })
            .catch(error => {
                console.log("error addTodo",error)
            });
    

}

//PUT
export function updateTodoItem(id, body) {

    return axios
        .put(
            serverBaseUrl + "/item/" + id, body,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            },
            5000,
            "timeout"
        )
        .then(responseJson => {
            return responseJson.data;
        })
        .catch(error => {
            console.log("error updateTodoItem",error)
        });
}

//PUT
export function updateTodoItemCompleted(id) {

    return axios
        .put(
            serverBaseUrl + "/item/completed/" + id,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            },
            5000,
            "timeout"
        )
        .then(responseJson => {
            return responseJson.data;
        })
        .catch(error => {
            console.log("error updateTodoItemCompleted",error)
        });
}

//DELETE
export function deleteTodoItem(id) {

    return axios
        .delete(
            serverBaseUrl + '/item/' + id,
            {
                headers: {

                }
            }
        )
        .then(responseJson => {
            return responseJson
        })
        .catch(error => {
            console.log("error deleteTodoItem",error)
        })
}