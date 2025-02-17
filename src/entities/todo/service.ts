import { instance } from "shared/utils";
import { ITodosResponse } from "./types";
import { useQuery,keepPreviousData } from "@tanstack/react-query";

const fetchTodos = async (skip:number,limit:number): Promise<ITodosResponse> => {
    try {
      const response = await instance.get("todos", { params: { skip, limit } });
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
  
  