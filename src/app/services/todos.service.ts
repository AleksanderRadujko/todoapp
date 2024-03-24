import { Injectable } from "@angular/core";
import { TODOS } from "../model/mock-data";
import { Todo } from "../model/todo.model";

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    async getTodos() {
        await sleep(2000);
        return TODOS;
    }

    async addTodo(todo: Partial<Todo>) {
        await sleep(2000);
        return {
            id: Math.random().toString(),
            ...todo
        } as Todo;
    }

    async deleteTodo(id: string) {
        await sleep(1000);
    }

    async updateTodo(id: string, completed: boolean) {
        await sleep(500);
    }
}

// this function is used to simulate backend call
async function sleep(ms: number) {
    return new Promise(resolve => 
        setTimeout(resolve, ms));
}