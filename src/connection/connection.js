import axios from "axios"

const serverBaseUrl = "http://localhost:5000/api/todo"

//HTTP ERROR
function respondCodeAxios(statusCode) {
    try {
        if (statusCode === 401 || statusCode === 403 || statusCode === 404) {
            window.location.href = "/"
        }
    } catch (error) {
        window.location.href = "/"
    }
}

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
            console.log(responseJson.data)
            return responseJson.data;
        })
        .catch(error => {
            console.log("error",error)
            // if (error?.response.status === 401 || error?.response.status === 403 || error?.response.status === 404) {
            //     respondCodeAxios(error?.response.status)
            // }
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
                console.log("addTodo responseJson.data",responseJson.data)
                return responseJson.data;
            })
            .catch(error => {
                console.log("error addTodo",error)
                // if (error?.response.status === 401 || error?.response.status === 403) {
                //     respondCodeAxios(error?.response.status)
                // }
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
            if (error.response.status === 401 || error.response.status === 403) {
                respondCodeAxios(error.response.status)
            }
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
            // if (error?.response.status === 401 || error?.response.status === 403) {
            //     respondCodeAxios(error?.response.status)
            // }
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
            if (error?.response.status === 401 || error?.response.status === 403) {
                respondCodeAxios(error?.response.status)
            }
        })
}