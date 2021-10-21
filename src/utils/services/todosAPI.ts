import { ITodo } from "../../redux/actionTypes/todosActionTypes";
import { createURL, withAuth } from "../api";

export const getTodos = () => withAuth.get<ITodo[]>(createURL("/todos"))