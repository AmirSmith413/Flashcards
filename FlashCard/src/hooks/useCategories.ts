import useData from "./useData";

interface Category{
  difficulty: string
  category: string
  id:number
}

const useCategories = () => useData()

export default useCategories