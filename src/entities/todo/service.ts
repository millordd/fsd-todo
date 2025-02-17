import { instance } from "shared/utils";
import { ITodosResponse } from "./types";
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async (): Promise<ITodosResponse> => {
    try {
      const response = await instance.get('todos');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const useGetTodos = () => {
    return useQuery({
      queryKey: ['todos'],
      queryFn: fetchTodos
    });
  };
  
  