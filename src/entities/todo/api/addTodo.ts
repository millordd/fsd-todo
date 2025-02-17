import { instance, queryClient } from "shared/utils";
import { useMutation } from "@tanstack/react-query";
import { IAddTodoPayload, ITodo, ITodosResponse } from "../model/types";


 const addTodo = async (addPayload:IAddTodoPayload): Promise<ITodo> => {
    try {
      const response = await instance.post("todos/add", addPayload);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const useAddTodo = () => {
  return useMutation(
    {
      mutationFn:(data:IAddTodoPayload)=>addTodo(data),
      onSuccess: (newTodo: ITodo) => {
        queryClient.setQueryData(['todos'], (oldData: ITodosResponse | undefined) => {
          if (!oldData) return { todos: [newTodo], total: 1, skip: 0, limit: 15 };
          return { ...oldData, todos: [newTodo, ...oldData.todos] };
        });
      },
    }
  );
};



  
  