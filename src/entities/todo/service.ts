import { instance, queryClient } from "shared/utils";
import { IAddTodoPayload, ITodo, ITodosResponse } from "./types";
import { useQuery,keepPreviousData, useMutation } from "@tanstack/react-query";



const fetchTodos = async (skip:number,limit:number): Promise<ITodosResponse> => {
    try {
      const response = await instance.get("todos", { params: { skip, limit } });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
 const addTodo = async (addPayload:IAddTodoPayload): Promise<ITodo> => {
    try {
      const response = await instance.post("todos/add", addPayload);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const useGetTodos = (skip:number,limit:number) => {
    return useQuery({
      queryKey: ['todos',skip,limit],
      queryFn:()=> fetchTodos(skip,limit),
      placeholderData:keepPreviousData
       
    });
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



  
  